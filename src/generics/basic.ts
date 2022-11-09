export default function genericsBasicSmaple() {
  // ジェネリック型を使わない場合
  const stringReduce = (array: string[], initialValue: string): string => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log('Gnererics basic sample 1:', stringReduce(['May', 'the', 'force'], ''))
  const numberReduce = (array: number[], initialValue: number): number => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log('Gnererics basic sample 2:', numberReduce([1, 2, 3, 4], 100))

  type Reduce = {
    (array: string[], initialValue: string): string
    (array: number[], initialValue: number): number
  }

  type GenericReduce<T> = {
    (array: T[], initalValue: T): T
  }

  const genericStringReduce: GenericReduce<string> = (array, initialValue) => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log('Gnererics basic sample 3:', genericStringReduce(['Make', 'typescript', 'greate'], ''))

  const genericsNumberReduce: GenericReduce<number> = (array, initialValue) => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log('Gnererics basic sample 4:', genericsNumberReduce([1, 2, 3, 4], 100))

  // いろいろなジェネリック型の定義方法
  // 完全な呼び出しシグネチャ(個々のシグネチャにジェネリック型を割り当てる)
  type GenericReduce2 = {
    <T>(array: T[], initialValue: T): T
    <U>(array: U[], initialValue: U): U
  }

  // 呼び出しシグネチャの省略記法
  type GeenericReduce3<T> = (array: T[], initialValue: T) => T
  type GeenericReduce4<U> = (array: U[], initialValue: U) => U
}
