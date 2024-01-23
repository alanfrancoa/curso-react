import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import CheckOut from './components/CheckOut/CheckOut'

function App() {

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path='/productos/:categoryId' element={<ItemListContainer/>}/>
          <Route exact path='/check' element={<CheckOut />} />
        </Routes>
      </Router>
    </div>


  )
}

export default App
