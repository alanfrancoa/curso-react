import { useState } from "react"
const ItemCount = () => {
    const [counter, setCounter] = useState(0)

    const restar = () =>{
        if (counter > 0){
            setCounter(counter - 1)
        }
        
    }
    const sumar = () =>{
        setCounter(counter + 1)
    }
  return (
    <div>
        <button className="btn btn-danger m-2" onClick={restar}>Restar</button>
        <span>{counter}</span>
        <button className="btn btn-success m-2" onClick={sumar}>Sumar</button>
    </div>
  )
}

export default ItemCount