// import World from './world'

// const root = document.getElementById('root')
// const world = new World('Hello World!???')
// world.sayHello(root)

// 03.基本の型定義
// import { primitiveSample, notExistSample, anySample, unknownSample } from './basic'

// primitiveSample()
// notExistSample()
// anySample()
// unknownSample()

//  04.関数の型定義
import { logMessage } from './function/basic'
import { isUserSignedIn, isUserSignedIn2, sumProductsPrice } from './function/params'
logMessage('Hello World!')
isUserSignedIn('abca', 'keito')
isUserSignedIn2('abc')
const sum = sumProductsPrice(100, 200, 300, 400, 500)
console.log('Function params5:', sum)
