import './App.css'
import Card from './components/card'
import data from './data/countries.json'
import { useEffect, useState } from 'react'

type Country = {
  name: string;
  population: number;
  region: string;
  capital?: string;
  flag: string;
}

const countries = data

function getInitialDark() {
  const saved = localStorage.getItem('theme')
  if (saved === 'dark') return true
  if (saved === 'light') return false
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function App() {
  const [search, setSearch] = useState('')
  const [region, setRegion] = useState('all')
  const [dark, setDark] = useState(getInitialDark)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  const query = search.trim().toLowerCase()

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.toLowerCase().includes(query)
    const selectedRegion = region === 'america' ? 'americas' : region
    const matchesRegion = region === 'all' || country.region.toLowerCase() === selectedRegion
    return matchesSearch && matchesRegion
  })

  return (
    <>
      <div className="flex min-h-screen w-full flex-col bg-background text-foreground font-bold">
        <header className="flex w-full shrink-0 justify-between bg-elements px-8 py-12 shadow-md">
          <h1>Where in the world?</h1>
          <button
            type="button"
            onClick={() => setDark((current) => !current)}
            className="flex cursor-pointer items-center gap-2"
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {dark ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M12 19.5V21M4.22 4.22l1.06 1.06M18.72 18.72l1.06 1.06M3 12h1.5M19.5 12H21M4.22 19.78l1.06-1.06M18.72 5.28l1.06-1.06M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 14.3A8.5 8.5 0 1 1 9.7 3 7 7 0 0 0 21 14.3Z" />
              </svg>
            )}
            {dark ? 'Light Mode' : 'Dark Mode'}
          </button>
        </header>
        <main className="mt-14 flex-1">
          <div className="flex flex-col items-start gap-12 px-8 md:flex-row md:justify-between">
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search for a country..."
              className="w-full rounded-md border-none bg-elements px-6 py-4 text-foreground shadow-md outline-none placeholder:text-input md:w-2/5"
            />
            <select
              name="region"
              id="region"
              value={region}
              onChange={(event) => setRegion(event.target.value)}
              className="w-1/2 rounded-md border-none bg-elements px-6 py-4 text-foreground shadow-md outline-none md:w-1/6"
            >
              <option value="all">All Regions</option>
              <option value="africa">Africa</option>
              <option value="america">America</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </select>
          </div>

          <div id="countries" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-8 mt-12">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country: Country) => (
                <Card key={country.name} name={country.name} population={country.population} region={country.region} capital={country.capital} flag={country.flag} />
              ))
            ) : (
              <p className="col-span-full text-center font-light">No countries found.</p>
            )}
          </div>
        </main>
        <footer className="flex w-full shrink-0 justify-center px-8 py-12 text-center">
          <p>&copy; 2026 Rest Countries. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}

export default App
