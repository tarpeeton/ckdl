import { client } from '@/sanity/lib/client'
import ServiceBanner from '@/app/[locale]/components/Services/ServiceBanner'
import ServiceList from '@/app/[locale]/components/Services/ServiceList'

export default async function ServicePage({ params }) {
  const { locale } = params

  // Fetch services with their category info
  const services = await client.fetch(
    `*[_type == "service"]{
      name,
      slug,
      category->{
        _id,
        name
      }
    }`
  )

  // Fetch only categories that have at least one service
  const categories = await client.fetch(
    `*[_type == "serviceCategory" && count(*[_type == "service" && references(^._id)]) > 0]{
      _id,
      name
    }`
  )

  return (
    <div>
      <ServiceBanner locale={locale} />
      <ServiceList
        services={services}
        categories={categories}
        locale={locale}
      />
    </div>
  )
}
