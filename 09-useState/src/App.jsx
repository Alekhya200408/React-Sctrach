import React from 'react'
import { useState } from 'react';
const App = () => {
  // const [num, setNum] = useState(10)
  // const [arr, setArr] = useState([10,20,30])
  // function onChange(){
  //   setNum(num+1)
  //   setArr([50,60,70])
  // }
  const [num, setNum] = useState(0)

  function increaseNum(){
    setNum(num+1)
    console.log(num);
    
  }
  function decreaseNum(){
    setNum(num-1)
    console.log(num);
  }
  function JumpByFive(){
    setNum(num+5)
    console.log(num);
  }
  return (
    <div>
    {/* <div>Value of num {num}</div>
    <div>{arr}</div>
<button onClick={onChange}>Click here</button> */}
    <h1>{num}</h1>
    <button onClick={increaseNum}>Increase</button>
    <button onClick={decreaseNum}>Decrease</button>
    <button onClick={JumpByFive}>Jump By 5</button>
    </div>
  )
}

export default App