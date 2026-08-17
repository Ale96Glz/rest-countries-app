import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout'
import Home from './pages/home'
import CountryDetail from './pages/country-detail'
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/country/:code" element={<CountryDetail />} />
      </Route>
    </Routes>
  )
}
