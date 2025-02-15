'use client'
import { useEffect, useRef, useState } from 'react'
import Filter from '@/app/[locale]/components/Addresses/Filter'
import { useLocale } from 'next-intl'

export const clinicsLocations = [
  {
    id: 1,
    name: { uz: "№ 14 Oilaviy poliklinika", ru: "Семейная поликлиника № 14" },
    address: {
      uz: "Tashkent Almazarskaya SP-14",
      ru: "г. Ташкент Алмазарская СП-14",
    },
    graphic: { uz: "Pn - Sh 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.329423, 69.23438],
  },
  {
    id: 2,
    name: { uz: "№ 15 Oilaviy poliklinika", ru: "Семейная поликлиника № 15" },
    address: {
      uz: "Tashkent Almazarskaya SP-15",
      ru: "г. Ташкент Алмазарская СП-15",
    },
    graphic: { uz: "Pn - Sh 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.330729, 69.197235],
  },
  {
    id: 3,
    name: { uz: "№ 16 Oilaviy poliklinika", ru: "Семейная поликлиника № 16" },
    address: {
      uz: "Tashkent Almazarskaya SP-16",
      ru: "г. Ташкент Алмазарская СП-16",
    },
    graphic: { uz: "Pn - Sh 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.362064, 69.182376],
  },
  {
    id: 4,
    name: { uz: "№ 17 Oilaviy poliklinika", ru: "Семейная поликлиника № 17" },
    address: {
      uz: "Almazarskiy rayon, ul. Keles Yuli, 226",
      ru: "Алмазарский район, ул. Келес Йули, 226",
    },
    graphic: { uz: "Pn - Sh 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.343135, 69.22864],
  },
  {
    id: 5,
    name: { uz: "№ 18 Oilaviy poliklinika", ru: "Семейная поликлиника № 18" },
    address: {
      uz: "Almazarskiy rayon, ul. Mirza Galiba, 2G",
      ru: "Алмазарский район, ул. Мирзы Галиба, 2Г",
    },
    graphic: { uz: "Pn - Sh 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.348878, 69.19858],
  },
  {
    id: 6,
    name: { uz: "№ 19 Poliklinika", ru: "Поликлиника № 19" },
    address: { uz: "ul. Zarkaynar, 164", ru: "ул. Заркайнар, 164" },
    graphic: { uz: "Pn - Sh 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.338697, 69.242543],
  },
  {
    id: 7,
    name: {
      uz: "№ 21 Oilaviy poliklinika Almazarskogo rayona",
      ru: "Семейная поликлиника № 21 Алмазарского района",
    },
    address: {
      uz: "Almazarskiy rayon, ul. Keles Yuli, 169",
      ru: "Алмазарский район, ул. Келес Йули, 169",
    },
    graphic: { uz: "Pn - Sh 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.379633, 69.220096],
  },
  {
    id: 8,
    name: { uz: "№ 63 Oilaviy poliklinika", ru: "63 Семейная поликлиника" },
    address: {
      uz: "Almazarskiy rayon, massiv Beshkurgan, 2-chi kvartal, 10",
      ru: "Алмазарский район, массив Бешкурган, 2-й квартал, 10",
    },
    graphic: { uz: "Pn - Sh 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.366219, 69.199214],
  },
  {
    id: 9,
    name: {
      uz: "Markaziy Mnogoprofilnaya poliklinika Almazarskogo rayona",
      ru: "Центральная Многопрофильная поликлиника при РМО Алмазарского района",
    },
    address: { uz: " Sebzar, 19", ru: "ул. Себзар, 19" },
    graphic: { uz: "Pn - Sh 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.333912, 69.251601],
  },
  {
    id: 10,
    name: { uz: "№ 66 Oilaviy poliklinika", ru: "Семейная поликлиника № 66" },
    address: {
      uz: "Tashkent, Bektemir rayon, Yik-Ata",
      ru: "Ташкент, Бектемирский район, Йик-Ата",
    },
    graphic: { uz: "Pn - Sh 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.227775, 69.367925],
  },
  {
    id: 11,
    name: { uz: "№ 69 Oilaviy poliklinika", ru: "Семейная поликлиника № 69" },
    address: {
      uz: "Tashkent, Bektemir rayon, naselennyy punkt Kipchak",
      ru: "Ташкент, Бектемирский район, населённый пункт Кипчак",
    },
    graphic: { uz: "Pn - Sh 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.216924, 69.326129],
  },
  {
    id: 12,
    name: { uz: "Bektemir RMO", ru: "Бектемирское РМО" },
    address: {
      uz: "Bektemir rayon, massiv Suvsoz-2, 75",
      ru: "Бектемирский район, массив Сувсоз-2, 75",
    },
    graphic: { uz: "Pn - Sh 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.227597, 69.337094],
  },
  {
    id: 13,
    name: { uz: "№ 1 Oilaviy poliklinika", ru: "Семейная поликлиника № 1" },
    address: { uz: "ul. Fidokor, 6", ru: "ул. Фидокор, 6" },
    graphic: { uz: "Pn - Sh 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.298634, 69.279841],
  },
  {
    id: 14,
    name: {
      uz: "№ 2 Oilaviy poliklinika Mirabad rayon",
      ru: "Семейная поликлиника № 2 Мирабадского района",
    },
    address: {
      uz: "Mirabad rayon, massiv Koylyuk, 3-chi kvartal, 29A kabinet 2",
      ru: "Мирабадский район, массив Куйлюк, 3-й квартал, 29А кабинет 2",
    },
    graphic: { uz: "Pn - Sh 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.319765, 69.252525],
  },
  {
    id: 15,
    name: { uz: "№ 5 Oilaviy poliklinika", ru: "Семейная поликлиника № 5" },
    address: {
      uz: "Mirabad rayon, 48A Usmonov",
      ru: "Мирабадский район, 48A Усманов",
    },
    graphic: { uz: "Pn - Sh 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.316137, 69.283944],
  },
  {
    id: 16,
    name: { uz: "№ 3 Oilaviy poliklinika", ru: "Семейная поликлиника № 3" },
    address: {
      uz: "Tashkent, Yashnabad rayon, ul. Usmonov",
      ru: "Ташкент, Яшнабадский район, ул. Усманов",
    },
    graphic: { uz: "Pn - Sh 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.307445, 69.228418],
  },
  {
    id: 17,
    name: { uz: "№ 4 Oilaviy poliklinika", ru: "Семейная поликлиника № 4" },
    address: {
      uz: "Tashkent, Shaykhontohur rayon, ul. Usmonov",
      ru: "Ташкент, Шайхантахур район, ул. Усманов",
    },
    graphic: { uz: "Pn - Sh 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.276328, 69.262951],
  },
  {
    id: 18,
    name: { uz: "№ 7 Oilaviy poliklinika", ru: "Семейная поликлиника № 7" },
    address: {
      uz: "Tashkent, Chilanzar rayon, 29A",
      ru: "Ташкент, Чиланзарский район, 29А",
    },
    graphic: { uz: "Pn - Sh 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.308708, 69.268827],
  },
  {
    id: 19,
    name: { uz: "№ 8 Oilaviy poliklinika", ru: "Семейная поликлиника № 8" },
    address: {
      uz: "Tashkent, Chilanzar rayon, 54",
      ru: "Ташкент, Чиланзарский район, 54",
    },
    graphic: { uz: "Pn - Sh 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.311073, 69.284631],
  },
  {
    id: 20,
    name: { uz: "№ 9 Oilaviy poliklinika", ru: "Семейная поликлиника № 9" },
    address: {
      uz: "Tashkent, Mirabad rayon, 9A",
      ru: "Ташкент, Мирабадский район, 9А",
    },
    graphic: { uz: "Pn - Sh 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.333779, 69.242535],
  },
  {
    id: 21,
    name: { uz: "№ 10 Oilaviy poliklinika", ru: "Семейная поликлиника № 10" },
    address: {
      uz: "Tashkent, Mirabad rayon, Shaykhontohur",
      ru: "Ташкент, Мирабадский район, Шайхантахур",
    },
    graphic: { uz: "Pn - Sh 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.310049, 69.236462],
  },
  {
    id: 22,
    name: { uz: "№ 11 Oilaviy poliklinika", ru: "Семейная поликлиника № 11" },
    address: {
      uz: "Tashkent, Yunusabad rayon, 3A",
      ru: "Ташкент, Юнусабадский район, 3А",
    },
    graphic: { uz: "Pn - Sh 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.271388, 69.297135],
  },
  {
    id: 23,
    name: { uz: "РМО", ru: "РМО" },
    address: {
      uz: "Mirzo-Ulug'bek tumani, G'irot traktorsanoat massiv, 2-kvartal, 36",
      ru: "Мирзо-Улугбекский район, массив Городок Тракторостроителей, 2-й квартал, 36",
    },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.354147, 69.385808],
  },
  {
    id: 24,
    name: { uz: "№ 10 Oilaviy poliklinika", ru: "Семейная поликлиника № 10" },
    address: { uz: "Shokirarik ko'chasi, 18", ru: "ул. Шокирарык, 18" },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.216934, 69.219786],
  },
  {
    id: 25,
    name: {
      uz: "№ 11 Sergelei tumani Oilaviy poliklinikasi",
      ru: "Семейная поликлиника № 11 Сергелийского района",
    },
    address: { uz: "Chashtepa ko'chasi, 147", ru: "ул. Чаштепа, 147" },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.241163, 69.198569],
  },
  {
    id: 26,
    name: { uz: "№ 12 Poliklinika", ru: "Поликлиника № 12" },
    address: { uz: "Yangikuyluk ko'chasi, 5", ru: "ул. Янги Куйлюк, 5" },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.245685, 69.29948],
  },
  {
    id: 27,
    name: { uz: "№ 13 Oilaviy poliklinika", ru: "Семейная поликлиника № 13" },
    address: {
      uz: "Sergelei tumani, Uchuvchilar Shaharchasi massiv, 1",
      ru: "Сергелийский район, массив Учувчилар Шахарчаси, 1",
    },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.26957, 69.276808],
  },
  {
    id: 28,
    name: { uz: "№ 61 Oilaviy poliklinika", ru: "Семейная поликлиника № 61" },
    address: {
      uz: "Sergelei tumani, Sergeli-VIa massiv, 24",
      ru: "Сергелийский район, массив Сергели-VIа, 24",
    },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.2305, 69.20761],
  },
  {
    id: 29,
    name: { uz: "№ 68 Oilaviy poliklinika", ru: "Семейная поликлиника № 68" },
    address: {
      uz: "Sergelei tumani, Zakirol kurgan, Nurlihayot ko'chasi, 129",
      ru: "Сергелийский район, населённый пункт Закиров, ул. Нурлихаёт, 129",
    },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.238766, 69.273982],
  },
  {
    id: 30,
    name: { uz: "Sergelei tumani RMO", ru: "РМО Сергелийского района" },
    address: {
      uz: "Yangikhayot tumani, Yuldosh massiv, 5-kvartal, 24",
      ru: "Янгихаётский район, массив Йулдош, 5-й квартал, 24",
    },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.1976, 69.214411],
  },
  {
    id: 31,
    name: {
      uz: "№ 22 Oilaviy poliklinika Uchtepinskiy tuman",
      ru: "Семейная поликлиника № 22 Учтепинского района",
    },
    address: { uz: "Beshkayragach ko'chasi, 233", ru: "ул. Бешкайрагач, 233" },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.315911, 69.16521],
  },
  {
    id: 32,
    name: { uz: "№ 23 Oilaviy poliklinika", ru: "Семейная поликлиника № 23" },
    address: {
      uz: "Yusuf Sakkoki ko'chasi, 4A",
      ru: "5-й пр. Юсуфа Саккоки, 4А",
    },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.300602, 69.177783],
  },
  {
    id: 33,
    name: { uz: "№ 24 Oilaviy poliklinika", ru: "Семейная поликлиника № 24" },
    address: {
      uz: "Uchtepa tumani, Chilonzar massiv, 12-kvartal, 57",
      ru: "Учтепинский район, массив Чиланзар, 12-й квартал, 57",
    },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.279077, 69.18512],
  },
  {
    id: 34,
    name: { uz: "№ 25 Oilaviy poliklinika", ru: "Семейная поликлиника № 25" },
    address: {
      uz: "Uchtepa tumani, Chilonzar massiv, 14-kvartal, 4",
      ru: "Учтепинский район, массив Чиланзар, 14-й квартал, 4",
    },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.292184, 69.190904],
  },
  {
    id: 35,
    name: {
      uz: "№ 26 Oilaviy poliklinika Uchtepinskiy tuman",
      ru: "Семейная поликлиника № 26 Учтепинского района",
    },
    address: { uz: "Mergancha ko'chasi, 14A", ru: "ул. Мерганча, 14А" },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.31201, 69.189851],
  },
  {
    id: 36,
    name: { uz: "№ 62 Oilaviy poliklinika", ru: "62 Семейная поликлиника" },
    address: {
      uz: "Uchtepa tumani, Chilonzar massiv, 31-kvartal, 50A",
      ru: "Учтепинский район, массив Чиланзар, 31-й квартал, 50А",
    },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.26665, 69.150637],
  },
  {
    id: 37,
    name: { uz: "№ 33 Oilaviy poliklinika", ru: "Семейная поликлиника № 33" },
    address: {
      uz: "Chilonzar tumani, Kichik halqa yo'li, 7",
      ru: "Чиланзарский район, Малая кольцевая дорога, 7",
    },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.270325, 69.211812],
  },
  {
    id: 38,
    name: { uz: "Poliklinika № 34", ru: "Поликпиника 34" },
    address: {
      uz: "Chilonzar tumani, Chilonzar massiv, 2-kvartal, 2B",
      ru: "Чиланзарский район, массив Чиланзар, 2-й квартал, 2Б",
    },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.28014, 69.222764],
  },
  {
    id: 39,
    name: { uz: "№ 35 Oilaviy poliklinika", ru: "Семейная поликлиника № 35" },
    address: {
      uz: "Chilonzar tumani, Chilonzar massiv, kvartal 20D, 4A",
      ru: "Чиланзарский район, массив Чиланзар, квартал 20Д, 4А",
    },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.270601, 69.176124],
  },
  {
    id: 40,
    name: { uz: "№ 36 Oilaviy poliklinika", ru: "Семейная поликлиника № 36" },
    address: { uz: "Muqimiy ko'chasi, 142", ru: "ул. Мукими, 142" },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.293641, 69.222536],
  },
  {
    id: 41,
    name: {
      uz: "№ 36 Oilaviy poliklinika filiali",
      ru: "Семейная поликлиника № 36 филиал",
    },
    address: { uz: "Arpapa ko'chasi, 12A", ru: "ул. Арпапая, 12А" },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.307106, 69.24905],
  },
  {
    id: 42,
    name: {
      uz: "№ 37 Oilaviy poliklinika Chilonzar tumani",
      ru: "Семейная поликлиника № 37 Чиланзарского района",
    },
    address: {
      uz: "Chilonzar tumani, 1-pr. Katartal, 1",
      ru: "Чиланзарский район, 1-й пр. Катартал, 1",
    },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.294208, 69.211386],
  },
  {
    id: 43,
    name: {
      uz: "№ 39 Oilaviy poliklinika Chilonzar tumani",
      ru: "Семейная поликлиника № 39 Чиланзарского района",
    },
    address: {
      uz: "Chilonzar tumani, Nakkashlik massiv, 7A",
      ru: "Чиланзарский район, массив Наккашлык, 7А",
    },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.270514, 69.2065],
  },
  {
    id: 44,
    name: {
      uz: "Chilonzar tumani Markaziy ko'p tarmoqli poliklinika",
      ru: "Районная центральная многопрофильная поликлиника Чиланзарского района",
    },
    address: {
      uz: "Chilonzar tumani, Bunyodkor prospekti, 7A",
      ru: "Чиланзарский район, просп. Бунёдкор, 7А",
    },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.286424, 69.215705],
  },
  {
    id: 45,
    name: { uz: "№ 40 Oilaviy poliklinika", ru: "Семейная поликлиника № 40" },
    address: {
      uz: "Shayxontohur tumani, Ibn Sino-1 massiv, 13A",
      ru: "Шайхантахурский район, массив Ибн Сина-1, 13А",
    },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.335596, 69.168358],
  },
  {
    id: 46,
    name: {
      uz: "№ 41 Oilaviy poliklinika Shayxontohur tumani",
      ru: "Семейная поликлиника № 41 Шайхантахурского района",
    },
    address: { uz: "1-chi Ipaki ko'chasi, 60", ru: "1-я ул. Ипакчи, 60" },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.329001, 69.190613],
  },
  {
    id: 47,
    name: {
      uz: "№ 42 Oilaviy poliklinika Shayxontohur tumani",
      ru: "Семейная поликлиника № 42 Шайхантахурского района",
    },
    address: { uz: "Taqtapul ko'chasi, 14A", ru: "ул. Тахтапуль, 14A" },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.339151, 69.262096],
  },
  {
    id: 48,
    name: { uz: "№ 43 Oilaviy poliklinika", ru: "Семейная поликлиника № 43" },
    address: { uz: "Chukurkuprik ko'chasi, 73", ru: "ул. Чукуркуприк, 73" },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.306472, 69.198249],
  },
  {
    id: 49,
    name: { uz: "№ 44 Oilaviy poliklinika", ru: "Семейная поликлиника № 44" },
    address: {
      uz: "Shayxontohur tumani, Bog'kucha massiv, 13A",
      ru: "Шайхантахурский район, массив Богкуча, 13А",
    },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.326443, 69.217869],
  },
  {
    id: 50,
    name: { uz: "№ 45 Oilaviy poliklinika", ru: "Семейная поликлиника № 45" },
    address: { uz: "Xuvaydo ko'chasi, 45A", ru: "ул. Хувайдо, 45А" },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.339902, 69.199441],
  },
  {
    id: 51,
    name: { uz: "№ 46 Oilaviy poliklinika", ru: "Семейная поликлиника № 46" },
    address: {
      uz: "Samarqand Darvoza ko'chasi, 198",
      ru: "ул. Самарканд Дарвоза, 198",
    },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.307851, 69.217951],
  },
  {
    id: 52,
    name: {
      uz: "№ 47 Oilaviy poliklinika Shayxontohur tumani",
      ru: "Семейная поликлиника № 47",
    },
    address: {
      uz: "Toshkent, Shayxontohur tumani, Mahalliy Sayidlar Chakar",
      ru: "Ташкент, Шайхантахурский район, махаллинский сход граждан Чакар",
    },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.318865, 69.24017],
  },
  {
    id: 53,
    name: { uz: "№ 48 Oilaviy poliklinika", ru: "Семейная поликлиника № 48" },
    address: { uz: "Abay ko'chasi, 5A", ru: "ул. Абая, 5А" },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.323341, 69.25408],
  },
  {
    id: 54,
    name: { uz: "Shayxontohur RMTMO", ru: "Шайхантахурское РТМО" },
    address: {
      uz: "Kukcha Darvoza ko'chasi, 305",
      ru: "ул. Кукча Дарвоза, 305",
    },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.321657, 69.215442],
  },
  {
    id: 55,
    name: {
      uz: "№ 49 Oilaviy poliklinika Yunusobod tumani",
      ru: "Семейная поликлиника № 49 Юнусабадского района",
    },
    address: { uz: "Chinabad ko'chasi, 88", ru: "ул. Чинабад, 88" },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.354153, 69.305698],
  },
  {
    id: 56,
    name: { uz: "№ 50 Oilaviy poliklinika", ru: "Семейная поликлиника № 50" },
    address: {
      uz: "Yunusobod tumani, Minor massiv, 120",
      ru: "Юнусабадский район, массив Минор, 120",
    },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.329799, 69.282066],
  },
  {
    id: 57,
    name: { uz: "№ 51 Oilaviy poliklinika", ru: "Семейная поликлиника № 51" },
    address: {
      uz: "Yunusobod tumani, Amir Temur prospekti, 117B",
      ru: "Юнусабадский район, просп. Амира Темура, 117Б",
    },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.353244, 69.286085],
  },
  {
    id: 58,
    name: { uz: "№ 52 Oilaviy poliklinika", ru: "Семейная поликлиника № 52" },
    address: {
      uz: "Yunusobod tumani, Yunusobod massiv, 7-qavat, 28A",
      ru: "Юнусабадский район, массив Юнусабад, 7-й квартал, 28А",
    },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.370556, 69.272427],
  },
  {
    id: 59,
    name: { uz: "№ 53 Oilaviy poliklinika", ru: "Семейная поликлиника № 53" },
    address: {
      uz: "Yunusobod tumani, Kashgar massiv, 24A",
      ru: "Юнусабадский район, массив Кашгар, 24A",
    },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.320969, 69.276078],
  },
  {
    id: 60,
    name: { uz: "№ 54 Oilaviy poliklinika", ru: "Семейная поликлиника № 54" },
    address: {
      uz: "Yunusobod tumani, 6-pr. Yangishahar, 9",
      ru: "Юнусабадский район, 6-й пр. Янгишахар, 9",
    },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.360191, 69.29606],
  },
  {
    id: 61,
    name: { uz: "№ 55 Oilaviy poliklinika", ru: "Семейная поликлиника № 55" },
    address: {
      uz: "Yunusobod tumani, Yunusobod massiv, 17-kvartal, 22A",
      ru: "Юнусабадский район, массив Юнусабад, 17-й квартал, 22А",
    },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.367351, 69.311065],
  },
  {
    id: 62,
    name: { uz: "№ 56 Oilaviy poliklinika", ru: "Семейная поликлиника № 56" },
    address: { uz: "Bogishamol ko'chasi, 112B", ru: "ул. Богишамол, 112Б" },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.339148, 69.295377],
  },
  {
    id: 63,
    name: { uz: "Poliklinika 64", ru: "Поликлиника 64" },
    address: {
      uz: "Toshkent, Yunusobod tumani, Hasanboy mahallasi",
      ru: "Ташкент, Юнусабадский район, махалля Хасанбой",
    },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.384938, 69.259235],
  },
  {
    id: 64,
    name: {
      uz: "Markaziy Ko'p Profilli Poliklinika",
      ru: "Центральная Многопрофильная поликлиника при РМО Юнусабадского района",
    },
    address: { uz: "Yunusata ko'chasi, 2", ru: "ул. Юнусата, 2" },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.370901, 69.311496],
  },
  {
    id: 65,
    name: { uz: "№ 57 Oilaviy poliklinika", ru: "Семейная поликлиника № 57" },
    address: { uz: "Babur ko'chasi, 16", ru: "ул. Бабура, 16" },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.293545, 69.250346],
  },
  {
    id: 66,
    name: {
      uz: "№ 58 Oilaviy poliklinika Yakkasaroy tumani",
      ru: "Семейная поликлиника № 58 Яккасарайского района",
    },
    address: {
      uz: "Yakkasaroy tumani, Abdulla Qahhar ko'chasi, 44",
      ru: "Яккасарайский район, ул. Абдуллы Каххара, 44",
    },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.277267, 69.262511],
  },
  {
    id: 67,
    name: { uz: "№ 59 Oilaviy poliklinika", ru: "Семейная поликлиника № 59" },
    address: {
      uz: "Shota Rustaveli ko'chasi, 75A",
      ru: "ул. Шота Руставели, 75А",
    },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.2709, 69.237954],
  },
  {
    id: 68,
    name: {
      uz: "№ 60 Oilaviy poliklinika Yakkasaroy tumani",
      ru: "Семейная поликлиника № 60 Яккасарайского района",
    },
    address: {
      uz: "Shota Rustaveli ko'chasi, 32",
      ru: "ул. Шота Руставели, 32",
    },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.2914, 69.25934],
  },
  {
    id: 69,
    name: {
      uz: "RMO Markaziy Ko'p Profilli Poliklinika Yakkasaroy tumani",
      ru: "РМО Центральная многопрофильная поликлиника Яккасарайского района",
    },
    address: {
      uz: "Shota Rustaveli ko'chasi, 84",
      ru: "ул. Шота Руставели, 84",
    },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.276655, 69.242565],
  },
  {
    id: 70,
    name: { uz: "65-Oilaviy poliklinikasi", ru: "65-Oilaviy poliklinika" },
    address: {
      uz: "Yangihayot tumani, Yangi Chashtepa massiv, 65",
      ru: "Янгихаётский район, массив Янги Чаштепа, 65",
    },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.233614, 69.19297],
  },
  {
    id: 71,
    name: { uz: "№ 66 Poliklinika", ru: "Поликлиника № 66" },
    address: {
      uz: "Toshkent, Yangihayot tumani, Marhamat mahallasi",
      ru: "Ташкент, Янгихаётский район, махалля Мархамат",
    },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.213622, 69.201417],
  },
  {
    id: 72,
    name: { uz: "№ 27 Poliklinika", ru: "Поликлиника № 27" },
    address: { uz: "Jarqurg'an ko'chasi, 37", ru: "ул. Джаркурган, 37" },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.269812, 69.323514],
  },
  {
    id: 73,
    name: {
      uz: "№ 28 Oilaviy poliklinika Yashnabad tumani",
      ru: "Семейная поликлиника № 28 Яшнабадского района",
    },
    address: { uz: "Shoxsanam ko'chasi, 2", ru: "ул. Шохсанам, 2" },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.268457, 69.36453],
  },
  {
    id: 74,
    name: { uz: "№ 29 Poliklinika", ru: "Поликлиника № 29" },
    address: { uz: "Farg'ona Yuli, 1", ru: "Фергана Йули, 1" },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.241673, 69.330557],
  },
  {
    id: 75,
    name: { uz: "№ 30 Oilaviy poliklinika", ru: "Семейная поликлиника № 30" },
    address: { uz: "4-pr. Birlashgan, 8", ru: "4-й пр. Бирлашган, 8" },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.292171, 69.35091],
  },
  {
    id: 76,
    name: { uz: "№ 31 Oilaviy poliklinika", ru: "Семейная поликлиника № 31" },
    address: {
      uz: "Yashnobod tumani, Tuzel massiv, 1-kvartal, 40A",
      ru: "Яшнободский район, массив Тузель, 1-й квартал, 40А",
    },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.2968, 69.361865],
  },
  {
    id: 77,
    name: { uz: "№ 32 Oilaviy poliklinika", ru: "Семейная поликлиника № 32" },
    address: { uz: "Osh ko'chasi, 26", ru: "ул. Ош, 26" },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.287888, 69.316706],
  },
  {
    id: 78,
    name: {
      uz: "67-Son Oilaviy poliklinikasi",
      ru: "67-Сон Оилавий поликлиника",
    },
    address: { uz: "Sokin ko'chasi, 196", ru: "ул. Сокин, 196" },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.282402, 69.369948],
  },
  {
    id: 79,
    name: { uz: "RMO Yashnobod tumani", ru: "РМО Яшнабадского района" },
    address: { uz: "Mahctumquli ko'chasi, 2", ru: "ул. Махтумкули, 2" },
    graphic: { uz: "Dush - Shanba 8:00 - 12:00", ru: "Пн - сб 8:00 - 12:00" },
    tel: "1156",
    coords: [41.305546, 69.305131],
  },
];


export default function Map() {
  const YANDEX_API_KEY = process.env.NEXT_PUBLIC_YANDEX_API_KEY
  const [clinics, setClinics] = useState([])
  const [userLocation, setUserLocation] = useState(null)
  const [isSearchButtonVisible, setIsSearchButtonVisible] = useState(true)
  const [activeClinic, setActiveClinic] = useState(null)
  const mapRef = useRef(null)
  const scrollToMap = useRef(null)
  const ymapsRef = useRef(null)
  const userPlacemarkRef = useRef(null)
  const routeRef = useRef(null)
  const clinicsPlacemarksRef = useRef([])
  const locale = useLocale()

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
        initMap([41.311158, 69.279737])
      })
      .catch(error => {
        console.error('Ошибка загрузки Яндекс Карт:', error)
      })
  }, [])

  const initMap = center => {
    const ymaps = ymapsRef.current
    if (!ymaps) return

    if (!mapRef.current) {
      mapRef.current = new ymaps.Map('map', {
        center: center,
        zoom: 17,
        controls: ['zoomControl']
      })

      // Add initial user marker (optional, e.g., for the center)
      const userIcon = {
        iconLayout: 'default#image',
        iconImageHref: '/images/maps/geolocation.png',
        iconImageSize: [50, 50],
        iconImageOffset: [-25, -27]
      }
      const userPlacemark = new ymaps.Placemark(center, {}, userIcon)
      mapRef.current.geoObjects.add(userPlacemark)
      userPlacemarkRef.current = userPlacemark

      // Display all clinics on the map initially
      clinicsLocations.forEach(clinic => {
        const clinicIconLayout = ymaps.templateLayoutFactory.createClass(`
          <svg width="40" height="40" viewBox="0 0 44 57" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            iconOffset: [-20, -57]
          }
        )

        mapRef.current.geoObjects.add(placemark)
        clinicsPlacemarksRef.current.push(placemark)

        placemark.events.add('click', () => {
          buildRoute(center, clinic.coords, clinic.id)
        })
      })
    } else {
      mapRef.current.setCenter(center, 13)
    }
  }

  const handleSearchClinics = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords
        const userCoords = [latitude, longitude]
        setUserLocation(userCoords)
        updateMapToUserLocation(userCoords)
        searchNearbyClinics(userCoords)
        setIsSearchButtonVisible(false)
      })
    } else {
      alert('Геолокация не поддерживается вашим браузером.')
    }
  }

  const updateMapToUserLocation = location => {
    const ymaps = ymapsRef.current
    if (!ymaps || !mapRef.current) return

    mapRef.current.setCenter(location, 14)
    if (userPlacemarkRef.current) {
      userPlacemarkRef.current.geometry.setCoordinates(location)
    } else {
      const userIcon = {
        iconLayout: 'default#image',
        iconImageHref: '/images/maps/geolocation.png',
        iconImageSize: [50, 50],
        iconImageOffset: [-25, -27]
      }
      const newPlacemark = new ymaps.Placemark(location, {}, userIcon)
      mapRef.current.geoObjects.add(newPlacemark)
      userPlacemarkRef.current = newPlacemark
    }
  }

  const searchNearbyClinics = userCoords => {
    const radius = 3 // Radius in km
    const nearbyClinics = clinicsLocations.filter(clinic => {
      const distance = getDistanceFromLatLonInKm(
        userCoords[0],
        userCoords[1],
        clinic.coords[0],
        clinic.coords[1]
      )
      return distance <= radius
    })

    setClinics(nearbyClinics)
    // Highlight the nearby clinics on the map
    nearbyClinics.forEach(clinic => {
      const placemark = clinicsPlacemarksRef.current.find(
        p => p.geometry.getCoordinates().toString() === clinic.coords.toString()
      )
      if (placemark) {
        placemark.options.set('preset', 'islands#redIcon')
      }
    })
  }

  const buildRoute = (start, end, clinicId) => {
    const ymaps = ymapsRef.current
    if (!ymaps || !mapRef.current) return

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
    const R = 6371 // Radius of the Earth in km
    const dLat = deg2rad(lat2 - lat1)
    const dLon = deg2rad(lon2 - lon1)
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return R * c
  }

  const deg2rad = deg => deg * (Math.PI / 180)

  const handleLocationClick = (id, coords) => {
    if (scrollToMap.current) {
      scrollToMap.current.scrollIntoView({ behavior: 'smooth' })
    }

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
    <div className='w-full relative'>
      <div className='absolute h-[500px] z-10 max-xl:w-full max-xl:h-[450px]'>
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
      </div>
      <div id='map' ref={scrollToMap} className='w-full z-0 h-[500px]'></div>
      <Filter
        sortedClinics={clinics}
        activeClinic={activeClinic}
        onLocationClick={handleLocationClick}
        clinicsLocations={clinicsLocations}
      />
    </div>
  )
}
