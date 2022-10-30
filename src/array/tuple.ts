export default function tupleSmaple() {
  // 一般的なタプルの型定義
  const response: [number, string] = [200, 'OK']
  // response = [400, "Bad Request", "Email parameter is missing"]
  // response = ["400", "Bad Request", "Email parameter is missing"]
  console.log('Array tuple Sample1:', response)

  // 可変長引数を使ったタプル
  const girlfriends: [string, ...string[]] = ['kana', 'miku', 'keiko']
  console.log('Array tuple Sample2:', girlfriends)
}
