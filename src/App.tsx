import './App.css'
import Card from './components/card'
import data from './data/countries.json'

type Country = {
  name: string;
  population: number;
  region: string;
  capital?: string;
  flag: string;
}

const countries = data


function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen w-full bg-blue-950 text-white font-bold">
        <header className="flex w-full shrink-0 bg-blue-900 justify-between px-8 py-12">
          <h1>Where in the world?</h1>
          <button className="flex items-center gap-2">
            Dark Mode
          </button>
        </header>
        <main className="flex-1 mt-14">
          <div className="flex flex-col md:flex-row items-start md:justify-between gap-12 px-8">
            <input type="search" placeholder="Search for a country..." className="w-full md:w-2/5
             bg-blue-900 border-none outline-none px-2 py-4 rounded-md placeholder:text-white"/>
            <select name="region" id="region" className="w-1/2 md:w-1/6 bg-blue-900 border-none outline-none px-3 py-4 rounded-md"> 
              <option value="all">All Regions</option>
              <option value="africa">Africa</option>
              <option value="america">America</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </select>
          </div>

          <div id="countries" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-8 mt-12">
            {countries.map((country: Country) => (
              <Card key={country.name} name={country.name} population={country.population} region={country.region} capital={country.capital} flag={country.flag} />
            ))}
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
