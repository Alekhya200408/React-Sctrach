import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState({user:"Alex",age:21})

  const onChange=()=>{
    // const newNum={...num}
    // newNum.user="Alekhya"
    // newNum.age=22
    // setNum(newNum)

    setNum(prev=>({...prev,user:"Alekhya",age:22}))
    // also there are some batch update for setNum calling using same method as upper part
  }

  return (
    <div>
      <div>{num.user},{num.age}</div>
      <button onClick={onChange}>Click</button>
    </div>
  )
}

export default App