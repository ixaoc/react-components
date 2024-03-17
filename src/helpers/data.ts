export const LANGUAGES: Record<string, string> = {
  sq: 'Albanian',
  hy: 'Armenian',
  be: 'Belarusian',
  bg: 'Bulgarian',
  zh: 'Chinese',
  cs: 'Czech',
  da: 'Danish',
  en: 'English',
  fr: 'French',
  de: 'German',
  id: 'Indonesian',
  is: 'Icelandic',
  it: 'Italian',
  ja: 'Japanese',
  jv: 'Javanese',
  ko: 'Korean',
  pt: 'Portuguese',
  ro: 'Romanian',
  ru: 'Russian',
  so: 'Somali',
  es: 'Spanish',
}

export const COUNTRIES: {
  iso2: string
  label: string
  languages: string[]
}[] = [
  {
    iso2: 'ae',
    label: 'United Arab Emirates',
    languages: ['ar'],
  },
  {
    iso2: 'by',
    label: 'Belarus',
    languages: ['be', 'ru'],
  },
  {
    iso2: 'cn',
    label: 'China',
    languages: ['zh'],
  },
  {
    iso2: 'fr',
    label: 'France',
    languages: ['fr'],
  },
  {
    iso2: 'id',
    label: 'Indonesia',
    languages: ['id'],
  },
  {
    iso2: 'jp',
    label: 'Japan',
    languages: ['ja'],
  },
  {
    iso2: 'ru',
    label: 'Russia',
    languages: ['ru'],
  },
  {
    iso2: 'es',
    label: 'Spain',
    languages: ['es', 'eu', 'ca', 'gl', 'oc'],
  }
]
