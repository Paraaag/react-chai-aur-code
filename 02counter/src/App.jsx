import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setCounter]=useState(15)//hook
  //let counter=5;

  const addValue=()=>{
    if(counter<20)
    setCounter(counter+1);
    else
    setCounter(counter);

  }

  const removeValue=()=>
  {
    if(counter>0)
    setCounter(counter-1);
  else
  setCounter(0);
  }

  const addFive=()=>{
    // setCounter(counter+1);//
    //   setCounter(counter+1);
    //   setCounter(counter+1);
    //   setCounter(counter+1);
    //   setCounter(counter+1);//does not work



    if(counter<20){
      setCounter(prevCounter=>prevCounter+1);//takes it as a parameter 
      setCounter(prevCounter=>prevCounter+1);//works
      setCounter(prevCounter=>prevCounter+1);
      setCounter(prevCounter=>prevCounter+1);
      setCounter(prevCounter=>prevCounter+1);


    }
  }
  

  return (
    <>
      
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button 
      onClick={addValue}
      >Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
      <button onClick={addFive}> Add 5</button>
      <p>Footer{counter}</p>

    </>
  )
}

export default App
