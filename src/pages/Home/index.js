import { useState } from 'react'
import { Link, useLocation } from 'wouter'
import { useGifs } from '../../hooks/useGifs'
import { ListOfGif } from '../../component/ListOfGit'

const POPULAR_GIF = ['Matrix', 'Chile', 'Colombia', 'Mexico', 'Ecuador']
export const Home = () => {
  const [keyword, setKeyword] = useState('')
  const [, pushLocation] = useLocation()
  const { gifs } = useGifs()

  const handleSumit = (evt) => {
    evt.preventDefault()
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = (evt) => {
    setKeyword(evt.target.value)
  }
  return (
    <>
      <h3>Los gifs mas populares</h3>
      <form className="grid" onSubmit={handleSumit}>
        {
          <input
            placeholder="search Gif..."
            onChange={handleChange}
            type="text"
            value={keyword}
          />
        }

        <button type="submit">Search</button>
      </form>
      <h3>Ultima busqueda de gifs</h3>
      <ListOfGif gifs={gifs}></ListOfGif>
      <ul>
        {POPULAR_GIF.map((word) => (
          <li key={word}>
            <Link to={`/search/${word}`}>{word}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
