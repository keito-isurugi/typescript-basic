interface Bread {
  calories: number
}

interface Bread {
  type: string
}

const francePan: Bread = {
  calories: 300,
  type: 'katai',
}

// 型エイリアスで表現
type MaboDofu = {
  calories: number
  spcyLevel: number
}
type Rice = {
  calories: number
  gram: number
}
// 交差型(union)
type MaboDon = MaboDofu & Rice

const MaboDon: MaboDon = {
  calories: 500,
  spcyLevel: 10,
  gram: 180,
}

// Interfaceの拡張
interface Book {
  page: number
  title: string
}

interface Magazine extends Book {
  cycle: 'daily' | 'weekly' | 'monthly' | 'yearly'
}

const jump: Magazine = {
  cycle: 'weekly',
  page: 300,
  title: 'jump',
}

type BookType = {
  page: number
  title: string
}
interface HandBook extends BookType {
  theme: 'trip'
}
const cotirip: HandBook = {
  theme: 'trip',
  page: 300,
  title: 'cotorip',
}

// INterfaceでclassに型を定義できる
class Comic implements Book {
  page: number
  title: string

  constructor(page: number, title: string, private publichYear: string) {
    this.page = page
    this.title = title
  }

  getPuvlishYear() {
    return this.title + 'が発売されたのは' + this.publichYear + '年です。'
  }
}

const popularComic = new Comic(200, 'kimetsunoyaiba', '2018')
console.log(popularComic.getPuvlishYear)
