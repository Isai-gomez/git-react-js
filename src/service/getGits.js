const apikey = 'qISaG0kkERWucpR11xfexYYe1wKU8Lqq'
export const getGitsApi = async (keyword = 'mexico') => {
  const api = `https://api.giphy.com/v1/stickers/search?api_key=${apikey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`
  const { data } = await fetch(api).then((data) => data.json())

  const gits = await data.map((image) => {
    const { url } = image.images.downsized_medium
    const { title, id } = image
    return { url, title, id }
  })
  return gits
}
