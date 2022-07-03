import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom'
import icon from '../../assets/icon.svg'
import './App.css'
import New from './pages/New'

const Hello = () => {
  console.log(electron)

  return (
    <div>
      <div className='Hello'>
        <img width='200px' alt='icon' src={icon} />
      </div>
      <h1>MySQL Datafix creator</h1>
      <div className='Hello'>
        <button type='button'>
          <Link to='/new'>
            <span role='img' aria-label='books'>
              📚
            </span>
            New
          </Link>
        </button>
        <button type='button' onClick={handleOpen}>
          <span role='img' aria-label='books'>
            🙏
          </span>
          Import
        </button>
      </div>
    </div>
  )
}

export default function App () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Hello />} />
        <Route path='/new' element={<New />} />
      </Routes>
    </Router>
  )
}
