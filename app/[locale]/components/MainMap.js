'use client'
import { useEffect, useRef, useState } from 'react'
import AddressItem from '@/app/[locale]/components/Addresses/AddressItem'
import arrowRightRed from '@/public/svg/arrow-right.svg'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { useLocale } from 'next-intl'
import { clinicsLocations } from './Addresses/Map'

export default function Map() {
  const YANDEX_API_KEY = process.env.NEXT_PUBLIC_YANDEX_API_KEY
  const locale = useLocale()
  const [userLocation, setUserLocation] = useState(null)
  const [isSearchButtonVisible, setIsSearchButtonVisible] = useState(true)
  const [activeClinic, setActiveClinic] = useState(null)
  const [isMap, setIsMap] = useState(true)
  const mapRef = useRef(null)
  const ymapsRef = useRef(null)
  const userPlacemarkRef = useRef(null)
  const routeRef = useRef(null)
  const clinicsPlacemarksRef = useRef([])

  

  useEffect(() => {
    const loadYMaps = () => {
      return new Promise((resolve, reject) => {
        if (typeof window === 'undefined') return
        if (window.ymaps) {
          resolve(window.ymaps)
        } else {
          const script = document.createElement('script')
          script.src = `https://api-maps.yandex.ru/2.1/?apikey=${YANDEX_API_KEY}&lang=ru_RU`
          script.onload = () => {
            window.ymaps.ready(() => {
              ymapsRef.current = window.ymaps
              resolve(window.ymaps)
            })
          }
          script.onerror = reject
          document.head.appendChild(script)
        }
      })
    }

    loadYMaps()
      .then(ymaps => {
        ymapsRef.current = ymaps
        initMap([41.311081, 69.279737]) // Координаты памятника Амира Темура
      })
      .catch(error => {
        console.error('Ошибка загрузки Яндекс Карт:', error)
      })

    // Очистка карты при размонтировании компонента
    return () => {
      if (mapRef.current) {
        mapRef.current.destroy()
        mapRef.current = null
      }
    }
  }, [isMap])

  const initMap = center => {
    const ymaps = ymapsRef.current
    if (!ymaps) return

    if (!mapRef.current) {
      mapRef.current = new ymaps.Map('map', {
        center: center,
        zoom: 17,
        controls: ['zoomControl']
      })

      // Add user location marker (initial geolocation icon)
      const iconContent = {
        iconLayout: 'default#image',
        iconImageHref: '/images/maps/geolocation.png',
        iconImageSize: [50, 50],
        iconImageOffset: [-25, -27]
      }

      const centerPlacemark = new ymaps.Placemark(center, {}, iconContent)
      mapRef.current.geoObjects.add(centerPlacemark)

      // Add all clinics' placemarks initially
      clinicsLocations.forEach(clinic => {
        const clinicIconLayout = ymaps.templateLayoutFactory.createClass(`
                <svg width="35" height="35" viewBox="0 0 44 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.1226 56.0115C23.2785 56.0115 43.9327 34.1321 43.9327 22.1897C43.9327 10.2473 34.1679 0.56604 22.1226 0.56604C10.0772 0.56604 0.3125 10.2473 0.3125 22.1897C0.3125 34.1321 20.9667 56.0115 22.1226 56.0115ZM22.1226 33.0052C28.2296 33.0052 33.1804 28.0967 33.1804 22.0418C33.1804 15.987 28.2296 11.0786 22.1226 11.0786C16.0156 11.0786 11.0649 15.987 11.0649 22.0418C11.0649 28.0967 16.0156 33.0052 22.1226 33.0052Z" fill="#FB6A68"/>
                </svg>
            `)

        const placemark = new ymaps.Placemark(
          clinic.coords,
          {
            hintContent: clinic.name,
            balloonContent: `<b>${clinic.name}</b><br>${clinic.address}<br>${clinic.graphic}`
          },
          {
            iconLayout: clinicIconLayout,
            iconShape: {
              type: 'Circle',
              coordinates: [0, 0],
              radius: 40
            },
            iconOffset: [-20, -57]
          }
        )
        mapRef.current.geoObjects.add(placemark)
      })
    } else {
      mapRef.current.setCenter(center, 13)
    }
  }

  const handleSearchClinics = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords
          const userCoords = [latitude, longitude]
          setUserLocation(userCoords)
          updateMapToUserLocation(userCoords)
          searchNearbyClinics(userCoords)
          setIsSearchButtonVisible(false)
        },
        error => {
          alert('Не удалось получить геолокацию: ' + error.message)
        }
      )
    } else {
      alert('Геолокация не поддерживается вашим браузером.')
    }
  }

  const updateMapToUserLocation = location => {
    const ymaps = ymapsRef.current
    if (!ymaps || !mapRef.current) return

    // Удаляем предыдущий маркер пользователя, если он есть
    console.log('USerPlaceMark', userPlacemarkRef)
    if (userPlacemarkRef.current) {
      mapRef.current.geoObjects.remove(userPlacemarkRef.current)
    }

    const iconContent = {
      iconLayout: 'default#image',
      iconImageHref: '/images/maps/geolocation.png',
      iconImageSize: [50, 50],
      iconImageOffset: [-25, -27]
    }

    const userPlacemark = new ymaps.Placemark(location, {}, iconContent)
    mapRef.current.geoObjects.add(userPlacemark)
    userPlacemarkRef.current = userPlacemark
    mapRef.current.setCenter(location, 14)
  }

  const searchNearbyClinics = userCoords => {
    const radius = 3 // Радиус в километрах
    const nearbyClinics = clinicsLocations.filter(clinic => {
      const distance = getDistanceFromLatLonInKm(
        userCoords[0],
        userCoords[1],
        clinic.coords[0],
        clinic.coords[1]
      )
      return distance <= radius
    })

    displayClinicsOnMap(nearbyClinics)

    if (nearbyClinics.length > 0) {
      // Adjust the map to show all nearby clinics
      const bounds = ymapsRef.current
        .geoQuery(nearbyClinics.map(clinic => clinic.coords))
        .getBounds()
      mapRef.current.setBounds(bounds, { checkZoomRange: true })
    }
  }

  const displayClinicsOnMap = clinics => {
    const ymaps = ymapsRef.current
    if (!ymaps || !mapRef.current) return

    // Avvalgi metkalarni o'chirish
    clinicsPlacemarksRef.current.forEach(placemark => {
      mapRef.current.geoObjects.remove(placemark)
    })
    clinicsPlacemarksRef.current = []

    // Ko'p metkalarni bir vaqtda qo'shish
    const placemarks = clinics.map(clinic => {
      const clinicIconLayout = ymaps.templateLayoutFactory.createClass(`
            <svg width="44" height="57" viewBox="0 0 44 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.1226 56.0115C23.2785 56.0115 43.9327 34.1321 43.9327 22.1897C43.9327 10.2473 34.1679 0.56604 22.1226 0.56604C10.0772 0.56604 0.3125 10.2473 0.3125 22.1897C0.3125 34.1321 20.9667 56.0115 22.1226 56.0115ZM22.1226 33.0052C28.2296 33.0052 33.1804 28.0967 33.1804 22.0418C33.1804 15.987 28.2296 11.0786 22.1226 11.0786C16.0156 11.0786 11.0649 15.987 11.0649 22.0418C11.0649 28.0967 16.0156 33.0052 22.1226 33.0052Z" fill="#FB6A68"/>
            </svg>
        `)

      const placemark = new ymaps.Placemark(
        clinic.coords,
        {
          hintContent: clinic.name,
          balloonContent: `<b>${clinic.name}</b><br>${clinic.address}<br>${clinic.graphic}`
        },
        {
          iconLayout: clinicIconLayout,
          iconShape: {
            type: 'Circle',
            coordinates: [0, 0],
            radius: 40
          },
          iconOffset: [-20, -57]
        }
      )

      // Har bir metkani bitta klik eventiga qo'shamiz
      placemark.events.add('click', () => {
        buildRoute(userLocation, clinic.coords, clinic.id)
      })

      return placemark
    })

    // Bir vaqtning o'zida barcha metkalarni qo'shamiz
    placemarks.forEach(placemark => {
      mapRef.current.geoObjects.add(placemark)
    })

    clinicsPlacemarksRef.current = placemarks
  }

  const buildRoute = (start, end, clinicId) => {
    const ymaps = ymapsRef.current
    if (!ymaps || !mapRef.current) return

    // Удаляем предыдущий маршрут, если он есть
    if (routeRef.current) {
      mapRef.current.geoObjects.remove(routeRef.current)
    }

    ymaps.route([start, end]).then(
      route => {
        route.getPaths().options.set({
          strokeColor: 'red',
          opacity: 0.7,
          strokeWidth: 4
        })
        mapRef.current.geoObjects.add(route)
        routeRef.current = route
        setActiveClinic(clinicId)
      },
      error => {
        console.error('Не удалось построить маршрут:', error)
      }
    )
  }

  const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    const R = 6371
    const dLat = deg2rad(lat2 - lat1)
    const dLon = deg2rad(lon2 - lon1)
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) ** 2
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return R * c
  }

  const deg2rad = deg => {
    return deg * (Math.PI / 180)
  }

  const handleLocationClick = (id, coords) => {
    // Set the state to show the map view
    setIsMap(true)

    // Ensure the map centers on the clicked location after the view changes
    setTimeout(() => {
      if (mapRef.current) {
        mapRef.current.setCenter(coords, 14, { duration: 300 })

        // Open the balloon for the clicked location
        mapRef.current.geoObjects.each(geoObject => {
          const placemarkCoords = geoObject.geometry.getCoordinates()
          if (placemarkCoords.toString() === coords.toString()) {
            geoObject.balloon.open()
          }
        })
      }
    }, 100) // Small delay to ensure the map is rendered before changing the center

    // Update the active clinic
    setActiveClinic(id)
  }

  return (
    <div className='w-full relative mt-24'>
      <div className='w-full max-w-[1440px] relative mx-auto flex flex-col gap-8'>
        <h1 className='text-3xl font-semibold'>
          {locale === 'ru' ? 'Карта пунктов' : 'Punktlar xaritasi'}
        </h1>
        {/* Остальной JSX код */}
        <div className='relative w-full flex max-lg:flex-col-reverse gap-5'>
          <div className='flex flex-col gap-4 max-lg:hidden overflow-y-scroll h-[725px] w-1/3'>
            {clinicsLocations.length === 0
              ? clinicsLocations.map(clinic => (
                  <AddressItem
                    key={clinic.id}
                    title={clinic.name}
                    address={clinic.address}
                    graphic={[clinic.graphic]}
                    tel={clinic.tel}
                    url='/'
                    className={clinic.id === activeClinic ? 'bg-red-100' : ''}
                    onClick={() =>
                      handleLocationClick(clinic.id, clinic.coords)
                    }
                  />
                ))
              : clinicsLocations.map(clinic => (
                  <AddressItem
                    key={clinic.id}
                    title={clinic.name}
                    address={clinic.address}
                    graphic={[clinic.graphic]}
                    tel={clinic.tel}
                    url='/'
                    className={clinic.id === activeClinic ? 'bg-red-100' : ''}
                    onClick={() =>
                      handleLocationClick(clinic.id, clinic.coords)
                    }
                  />
                ))}
          </div>
          <div
            className={`relative w-2/3 max-lg:w-full max-lg:h-[450px] ${
              isMap ? '' : 'hidden'
            }`}
          >
            {isSearchButtonVisible && (
              <button
                onClick={handleSearchClinics}
                className='rounded-full px-4 py-3 bg-red-400 w-[320px] text-white shadow-md shadow-red-400 absolute top-4 left-4 z-10'
              >
                {locale === 'ru'
                  ? 'Поиск ближайшей поликлиники'
                  : 'Yaqin tibbiyot muassasasini topish'}
              </button>
            )}
            <div className='w-full h-full absolute top-0 left-0 z-0 rounded-xl'>
              <div id='map' className='w-full h-full rounded-xl'></div>
            </div>
          </div>
          {!isMap && (
            <div className='w-full grid grid-cols-1 mdx:grid-cols-2 gap-4'>
              {clinicsLocations.length === 0
                ? clinicsLocations
                    .slice(0, 6)
                    .map(clinic => (
                      <AddressItem
                        key={clinic.id}
                        title={clinic.name}
                        address={clinic.address}
                        graphic={[clinic.graphic]}
                        onClick={() =>
                          handleLocationClick(clinic.id, clinic.coords)
                        }
                        tel={clinic.tel}
                        url='/'
                        className={
                          clinic.id === activeClinic ? 'bg-red-100' : ''
                        }
                      />
                    ))
                : clinicsLocations
                    .slice(0, 6)
                    .map(clinic => (
                      <AddressItem
                        key={clinic.id}
                        title={clinic.name}
                        address={clinic.address}
                        graphic={[clinic.graphic]}
                        onClick={() =>
                          handleLocationClick(clinic.id, clinic.coords)
                        }
                        tel={clinic.tel}
                        url='/'
                        className={
                          clinic.id === activeClinic ? 'bg-red-100' : ''
                        }
                      />
                    ))}
            </div>
          )}
        </div>
        <Link href={'/addresses'} className='w-full flex justify-center'>
          <div className='py-3 px-6 font-semibold border-red-400 text-red-400 border rounded-full flex items-center cursor-pointer gap-2'>
            {locale === 'ru' ? 'Посмотреть все' : 'Barchasini ko‘rish'}

            <Image
              src={arrowRightRed}
              width={100}
              height={100}
              alt='Arrow right red'
              className='w-6 h-6'
            />
          </div>
        </Link>
      </div>
    </div>
  )
}
