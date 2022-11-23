export default function promiseSample() {
  const url = 'https://api.github.com/users/keito-isurugi'

  type Profile = {
    login: string
    id: number
  }

  type FetchProfile = () => Promise<Profile | null>

  // コールバックで呼び出す非同期処理
  const fetchProfile: FetchProfile = () => {
    return new Promise((resolve, reject) => {
      return fetch(url)
        .then((res) => {
          // レスポンスのBodyをJSONで読み取った結果を返す
          res
            .json()
            .then((json: Profile) => {
              console.log('Asynchronous Promise Sample 1 : ', json)
              resolve(json)
            })
            .catch((error) => {
              console.log(error)
              reject(null)
            })
        })
        .catch((error) => {
          console.log(error)
          reject(null)
        })
    })
  }
  fetchProfile()
    .then((profile: Profile | null) => {
      if (profile) {
        console.log('Asynchronous Promise Sample 2 : ', profile)
      }
    })
    .catch((error) => {
      console.log(error)
    })
}
