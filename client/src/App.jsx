import { PencilLine, Search } from 'lucide-react';
import './App.css'
import { Link } from 'react-router-dom';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="main-heading">Welcome to Roamio</h1>
      <h2 className="main-heading">You are here to</h2>
      <div className="button-container">
      <Link to="/addplaces" type="button"  className="btn btn-primary equal-button" > <PencilLine /> Give a place</Link> 
      <h1></h1>
      <Link to="/getstate" type="button"   className="btn btn-primary equal-button"> <Search />  Search a place</Link>
      </div>
    </>
  )
}

export default App
