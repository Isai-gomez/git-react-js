import { useState, useEffect } from 'react'
import { getGitsApi } from '../service/getGits'

export const useGifs = ({ keyword } = { keyword: null }) => {
  const [gifs, setGifs] = useState({ loading: false, result: [] })

  useEffect(() => {
    const dataGit = async () => {
      setGifs({ loading: true })
      const keywordToUse =
        keyword || localStorage.getItem('lastKeyWord') || 'dinosaurio'

      const gif = await getGitsApi(keywordToUse)

      setGifs({ loading: false, result: gif })
      localStorage.setItem('lastKeyWord', keyword)
    }
    dataGit()
  }, [keyword])
  return { gifs }
}
