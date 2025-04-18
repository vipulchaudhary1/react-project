import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='card'>
    <div className='card-contenre'>
    <div className='card-img'>
      <img src='https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-173524.jpg?t=st=1744091181~exp=1744094781~hmac=2e84d89c208c168b5a23b93db5f219001c7cb2de089ce9a0ae37196e9e2b112f&w=740'/>
     
    </div>
    <div className='card-content'>
      <h3>vipul chudhary</h3>
    </div>
    </div>
   </div>
  )
}

export default App