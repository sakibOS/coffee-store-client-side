
import { useLoaderData } from 'react-router-dom'
import './App.css'
import Coffee from './components/Coffee'
import { useState } from 'react';

function App() {
  const loadedCoffees=useLoaderData();
  const[coffees,setCoffees]=useState(loadedCoffees)

  return (
    <div className='m-2 md:m-20'>
      
      <h1 className='text-6xl text-purple-600 text-center'>Hot and Cold Coffee {coffees.length}</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
      {
        coffees.map(coffee=><Coffee key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></Coffee>)
      }
      </div>
      
     
    </div>
  )
}

export default App
