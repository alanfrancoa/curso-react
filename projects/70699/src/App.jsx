import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import ItemCount from './components/ItemCount/ItemCount'
import Poke from './components/Pokedex/Poke'

function App() {

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path='/contador' element={<ItemCount/>} />
          <Route exact path='/pokedex' element={<Poke />} />
        </Routes>
      </Router>
    </div>


  )
}

export default App
