import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
function App() {
  
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer />}/>
        </Routes>
      </Router>
    </div>

    
  )
}

export default App
