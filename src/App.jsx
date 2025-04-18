import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [followers, setCount] = useState(2330)
  const[value,valueset] = useState(true);


  function followe()
  {
    setCount(followers+1)


    valueset(!value)

    if(!value){
      setCount(followers-1)
      
    }
  }
console.log(value);
  return (
    <>
    <h1> user display</h1>
   <div className='card'>
    <div className='card-contenre'>
    <div className='card-img'>
      <img src='https://png.pngtree.com/png-clipart/20230824/original/pngtree-boy-avatar-in-round-web-button-isolated-on-white-picture-image_8377276.png'/>
     
    </div>
    <div className='card-content'>
      <h3>vipul chudhary</h3>
       <p>4018 sachs trili</p>
      <button onClick={followe}>{value ? "follow":"unfollow"}</button>
     
     <div className='tow'>
      <div className='con-1'>
      <h5>posts </h5> 
      <p>500</p>
      </div>

     <div className='con-2'>
     <h4>followers</h4>
     <p>{followers} </p>
     </div>
     </div>
    </div>
    </div>
   </div>
   </>
  )
}

export default App
