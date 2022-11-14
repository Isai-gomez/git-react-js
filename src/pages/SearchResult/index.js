import { useGifs } from '../../hooks/useGifs'
import { ListOfGif } from '../../component/ListOfGit'
export const SearchResult = ({ keyword }) => {
  const { gifs } = useGifs({ keyword })

  return (
    <>
      <ListOfGif gifs={gifs}></ListOfGif>
    </>
  )
}
