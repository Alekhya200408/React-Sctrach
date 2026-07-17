import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const submitHandling=(e)=>{
    e.preventDefault()
    console.log("Form Submitted by",title);
    setTitle('')
  }

  return (
   <form onSubmit={(e)=>{
      submitHandling(e)
      
   }}>
    <input type="text" 
    value={title}
    onChange={(e)=>{
      // console.log(e.target.value);
      setTitle(e.target.value)
    }}
    placeholder='Enter your name'
    
    />
    <button>Submit</button>
   </form>
  )
}

export default App