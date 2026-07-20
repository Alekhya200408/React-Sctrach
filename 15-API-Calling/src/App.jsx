import React, { useState } from 'react'
import axios from 'axios'
const App = () => {
  const [data, setData] = useState([])

   const addData=async()=>{
    // const response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // const data=await response.json()
    // console.log(response);
    // console.log(data);
    
    const response=await axios.get('https://jsonplaceholder.typicode.com/todos')

    // console.log(response.data);
    setData(response.data)
    
    
  }
  return (
    <div>
      <button onClick={addData}>Add data</button>
      <div>
        {data.map(function (elem,idx) {
          return <h1>Hello,{elem.title},{idx}</h1>
        })}
      </div>
    </div>
  )
}

export default App