import './App.css'
import ItemCount from './components/ItemCount/ItemCount'
import ItemListComponent from './components/ItemListComponent/ItemListComponent'
import Poke from './components/Pokedex/Poke'
function App() {
  const losSimpsons= [
    {
      id: 1,
      nombre: 'Homero',
      description: 'Padre de la familia.'
    },
    {
      id: 2,
      nombre: 'Marge',
      description: 'Madre de la familia.'
    },
    {
      id: 3,
      nombre: 'Bart',
      description: 'Estudiante'
    },
    {
      id: 4,
      nombre: 'Lisa',
      description: 'Saxofonista'
    },
    {
      id: 5,
      nombre: 'Maggie',
      description: 'Bebé'
    },
    {
      id: 6,
      nombre: 'Ayudante de Santa',
      description: 'Perro de carrera'
    },
    {
      id: 7,
      nombre: 'Bola de pelos',
      description: 'Gatito'
    } 

  ]
  console.log(losSimpsons)
  return (
    <div>
      <h1>Hola Mundo!</h1>
      <ItemListComponent losSimpsons={losSimpsons}/>
      <Poke />
    </div>

    
  )
}

export default App
