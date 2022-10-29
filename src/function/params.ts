import { logMessage } from './basic'
export const isUserSignedIn = (userId: string, username?: string): boolean => {
  if (userId === 'abc') {
    console.log('Function params sample 1: User is signed in! is ', username)
    return true
  } else {
    console.log('Function params sample 2: User is not signed in....')
    return false
  }
}

export const isUserSignedIn2 = (userId: string, username = 'NO NAME'): boolean => {
  if (userId === 'abc') {
    console.log('Function params sample 3: User is signed in! is ', username)
    return true
  } else {
    console.log('Function params sample 4: User is not signed in....')
    return false
  }
}

// レストパラメーターを持つ関数
export const sumProductsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal: number, productsPrice: number) => {
    return prevTotal + productsPrice
  }, 0)
}

// 呼び出しシグネチャ
type LogMessage = (message: string) => void
export const logMessage6: LogMessage = (message) => {
  console.log('Function basic sample6:', message)
}

type FullLogMessage = {
  (message: string): void
}
export const logMessage7: FullLogMessage = (message) => {
  console.log('Function basic sample7:', message)
}
