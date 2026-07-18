import React from 'react'

const App = () => {
  // localStorage.clear()
  // sessionStorage.clear()

  // for set Iteam in local storage
  // localStorage.setItem('user','Alekhya')

  // const user=localStorage.getItem('user')
  // console.log(user);

// for remove item 
  // localStorage.removeItem('user')

  // for store arrays
  const user={
    username:"Alekhya",
    age:21,
    place:"Habra"
  }
  console.log(user);
  localStorage.setItem('user',JSON.stringify(user)) //we should store data in string form 
  //if we need to convert them in previous form so we use JSON.parse()
  
  
  return (
    <div>App</div>
  )
}

export default App