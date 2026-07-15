import React from 'react'

const App = () => {

  const submitHandling=(e)=>{
    e.preventDefault()
    console.log("Form Submitted");
    
  }

  return (
   <form onSubmit={(e)=>{
      submitHandling(e)
   }}>
    <input type="text" placeholder='Enter your name' />
    <button>Submit</button>
   </form>
  )
}

export default App