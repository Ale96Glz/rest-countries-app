import { useEffect, useState } from 'react'
import Card from '../components/card'
import { countries } from '../data/countries'

const focusRing = 'outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground'

export default function Home() {
  const [search, setSearch] = useState('')
  const [region, setRegion] = useState('all')

  useEffect(() => {
    document.title = 'Where in the world?'
  }, [])

  const query = search.trim().toLowerCase()

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.toLowerCase().includes(query)
    const selectedRegion = region === 'america' ? 'americas' : region
    const matchesRegion = region === 'all' || country.region.toLowerCase() === selectedRegion
    return matchesSearch && matchesRegion
  })

  return (
    <>
      <h1 className="sr-only">Countries of the world</h1>
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-12">
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search for a country..."
          aria-label="Search for a country"
          className={`w-full rounded-md border-none bg-elements px-6 py-4 text-foreground shadow-md placeholder:text-input md:max-w-md ${focusRing}`}
        />
        <div className="relative w-full max-w-[15.5rem] shrink-0 md:w-60">
          <select
            name="region"
            id="region"
            value={region}
            onChange={(event) => setRegion(event.target.value)}
            aria-label="Filter by region"
            className={`w-full cursor-pointer appearance-none rounded-md border-none bg-elements py-4 pl-6 pr-14 text-foreground shadow-md ${focusRing}`}
          >
            <option value="all">All Regions</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="pointer-events-none absolute top-1/2 right-5 size-4 -translate-y-1/2"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>

      <div id="countries" className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country) => (
            <Card
              key={country.alpha3Code}
              code={country.alpha3Code}
              name={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
              flag={country.flag}
            />
          ))
        ) : (
          <p className="col-span-full text-center font-light">No countries found.</p>
        )}
      </div>
    </>
  )
}
