export default async function asyncAwaitSample() {
  const url = 'https://api.github.com/users/keito-isurugi'

  type Profile = {
    login: string
    id: number
  }

  type FetchProfile = () => Promise<Profile | null>

  // コールバックで呼び出す非同期処理
  const fetchProfile: FetchProfile = async () => {
    const response = await fetch(url)
      .then((res) => res)
      .catch((error) => {
        console.log(error)
        return null
      })

    if (!response) {
      return null
    }

    const json = await response
      .json()
      .then((json: Profile) => {
        console.log('Asynchronous async/await Sample 1 : ', json)
        return json
      })
      .catch((error) => {
        console.log(error)
        return null
      })

    if (!json) {
      return null
    }

    return json
  }
  const profile = await fetchProfile()
  if (profile) {
    console.log('Asynchronous async/await Sample 2 : ', profile)
  }
}
