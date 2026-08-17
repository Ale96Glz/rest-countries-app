import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { countries, getCountryByCode } from '../data/countries'

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="inline font-semibold">{label}:</dt>
      <dd className="inline font-light"> {value}</dd>
    </div>
  )
}

export default function CountryDetail() {
  const { code } = useParams()
  const country = code ? getCountryByCode(code) : undefined

  useEffect(() => {
    document.title = country
      ? `${country.name} | Where in the world?`
      : 'Country not found | Where in the world?'
  }, [country])

  if (!country) {
    return (
      <div className="flex flex-col items-start gap-8">
        <Link to="/" className="rounded-md bg-elements px-8 py-2 shadow-md">
          ← Back
        </Link>
        <p className="font-light">Country not found.</p>
      </div>
    )
  }

  const nativeName = country.nativeName || country.name
  const topLevelDomain = country.topLevelDomain?.join(', ') || 'N/A'
  const currencies = country.currencies?.map((currency) => currency.name).join(', ') || 'N/A'
  const languages = country.languages?.map((language) => language.name).join(', ') || 'N/A'
  const borderCountries = (country.borders ?? [])
    .map((borderCode) => countries.find((item) => item.alpha3Code === borderCode))
    .filter((item) => item != null)

  return (
    <div className="flex flex-col gap-16">
      <Link to="/" className="inline-flex w-fit items-center gap-2 rounded-md bg-elements px-8 py-2 shadow-md">
        <span aria-hidden="true">←</span> Back
      </Link>

      <section className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
        <div className="overflow-hidden rounded-md shadow-md">
          <img src={country.flag} alt={`Flag of ${country.name}`} className="w-full" />
        </div>

        <div className="flex flex-col gap-8 text-detail">
          <h1 className="text-2xl font-extrabold md:text-3xl">{country.name}</h1>

          <div className="grid gap-8 md:grid-cols-2">
            <dl className="flex flex-col gap-2">
              <DetailItem label="Native Name" value={nativeName} />
              <DetailItem label="Population" value={country.population.toLocaleString()} />
              <DetailItem label="Region" value={country.region} />
              <DetailItem label="Sub Region" value={country.subregion || 'N/A'} />
              <DetailItem label="Capital" value={country.capital || 'N/A'} />
            </dl>
            <dl className="flex flex-col gap-2">
              <DetailItem label="Top Level Domain" value={topLevelDomain} />
              <DetailItem label="Currencies" value={currencies} />
              <DetailItem label="Languages" value={languages} />
            </dl>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <h2 className="shrink-0 font-semibold">Border Countries:</h2>
            {borderCountries.length > 0 ? (
              <ul className="flex flex-wrap gap-3">
                {borderCountries.map((border) => (
                  <li key={border.alpha3Code}>
                    <Link
                      to={`/country/${border.alpha3Code}`}
                      className="inline-block rounded-sm bg-elements px-6 py-1 text-sm font-light shadow-md"
                    >
                      {border.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="font-light">None</p>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
