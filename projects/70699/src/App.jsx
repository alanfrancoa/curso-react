import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import CheckOut from './components/CheckOut/CheckOut'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartScreen from './components/CartScreen/CartScreen'

function App() {

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path='/productos/:categoryId' element={<ItemListContainer/>}/>
          <Route exact path='/detail/:itemId' element={<ItemDetailContainer/>}/>
          <Route exact path='/check' element={<CheckOut />} />
          <Route exact path='/cart' element={<CartScreen />} />
        </Routes>
      </Router>
    </div>


  )
}

export default App
