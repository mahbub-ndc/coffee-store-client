import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import Card from './Components/Card'

function App() {
  const coffees = useLoaderData();
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl'>Total Items: {coffees.length}</h1>
      <div className='grid grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <Card key={coffee._id} coffee={coffee}></Card>)
        }
      </div>
    </>
  )
}

export default App
