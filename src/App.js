import './App.css'
import { SearchResult } from './pages/SearchResult'
import { Detailt } from './pages/Detailt'
import { Home } from './pages/Home'
import { Link, Route } from 'wouter'

function App() {
  return (
    <div className="wrappers">
      <Link to="/" className="home">
        Home
      </Link>
      <Route path="/" component={Home} />
      <Route path="/search/:keyword">
        {({ keyword }) => <SearchResult keyword={keyword} />}
      </Route>
      <Route path="/gif/:id">{({ id }) => <Detailt id={id} />}</Route>
    </div>
  )
}

export default App
