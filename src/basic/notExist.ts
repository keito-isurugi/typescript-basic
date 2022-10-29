export default function notExistSample() {
  const name = 'keito'
  // name = 123
  console.log('notExist sample 1', typeof name, name)

  if (name) {
    console.log('notExist sample 1', 'my name is ' + name)
  } else {
    console.log('notExist sample 1', 'my name is,,,,' + name)
  }

  const age = undefined
  console.log('notExist sample 1', typeof age, age)
  if (age) {
    console.log('notExist sample 1', 'my age is ' + age)
  } else {
    console.log('notExist sample 1', 'my age is,,,,' + age)
  }
}
