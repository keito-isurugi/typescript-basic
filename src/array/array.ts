export default function arraySample() {
  const colors: string[] = ['red', 'blue']
  colors.push('yellow')
  // colors.push(123)
  console.log('Array array Sample1:', colors)

  const even: Array<number> = [1, 2, 3]
  even.push(4)
  // even.push("hoge")
  console.log('Array array Sample2:', colors)

  const ids: (string | number)[] = ['hoge', 123]
  ids.push(111)
  ids.push('Foo')
  // ids.push(ture)
  console.log('Array array Sample3:', ids)

  // 配列の型推論
  const generateSomeArray = () => {
    const _someArray = []
    _someArray.push(123)
    _someArray.push('ABC')
    return _someArray
  }
  const someArray = generateSomeArray()
  someArray.push(456)
  // someArray.push(true)
  console.log('Array array Sample4:', someArray)

  // イミュータブルな配列
  const commands: readonly string[] = ['git add', 'git commit', 'git push']
  // commands.push("git merge")
  // commands[1] = "git fetch"
  console.log('Array array Sample5:', commands)
}
