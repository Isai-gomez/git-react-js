import { Git } from './Gits'
import { CircleLoader } from 'react-spinners'

export const ListOfGif = ({ gifs }) => {
  const { loading, result } = gifs
  console.log(loading)
  console.log(result)
  if (loading) {
    return (
      <div className="loading">
        <CircleLoader color="#36d7b7" />
      </div>
    )
  }

  return (
    <div className="list-gifs">
      {result.map((singleGif) => {
        return <Git {...singleGif} key={singleGif.id}></Git>
      })}
    </div>
  )
}
