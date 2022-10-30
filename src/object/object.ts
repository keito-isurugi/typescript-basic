export default function objectSample() {
  const a: object = {
    name: 'keito',
    age: 20,
  }
  // a.name

  // オブジェクトリテラル記法
  let country: {
    language: string
    name: string
  } = {
    language: 'Japanese',
    name: 'Japan',
  }
  console.log('Object object sample1:', country)

  country = {
    language: 'English',
    name: 'USA',
  }
  console.log('Object object sample2:', country)

  // オプショナルとリードオンリー
  const torahack: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 20,
    lastName: 'kamado',
    firstName: 'Tanjiro',
  }

  torahack.gender = 'male'
  torahack.lastName = 'tomioka'
  // torahack.firstName = 'zennitsu'
  console.log('Object object sample4:', torahack)

  const capitals: {
    [countryName: string]: string
  } = {
    Japan: 'Tokyo',
    Korea: 'Seoul',
  }
  capitals.China = 'Beijing'
  capitals.Canada = 'Ottawa'
  console.log('Object object sample4:', capitals)
}
