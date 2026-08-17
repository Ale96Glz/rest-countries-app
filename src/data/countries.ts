import data from './countries.json'
import type { Country } from '../types/country'

export const countries = data as Country[]

export function getCountryByCode(code: string) {
  return countries.find(
    (country) => country.alpha3Code.toLowerCase() === code.toLowerCase(),
  )
}
