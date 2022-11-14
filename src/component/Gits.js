import { Link } from 'wouter'
export const Git = ({ title, id, url }) => {
  return (
    <Link to={`/gif/${id}`} className="contaier-git">
      <h5>{title}</h5>
      <img alt={title} src={url} key={id} />
    </Link>
  )
}
