export type Currency = {
  code?: string
  name: string
  symbol?: string
}

export type Language = {
  iso639_1?: string
  iso639_2?: string
  name: string
  nativeName?: string
}

export type Country = {
  name: string
  nativeName?: string
  population: number
  region: string
  subregion?: string
  capital?: string
  topLevelDomain?: string[]
  currencies?: Currency[]
  languages?: Language[]
  borders?: string[]
  flag: string
  flags?: {
    svg: string
    png: string
  }
  alpha3Code: string
}
