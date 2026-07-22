import React, { useEffect, useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(10)

  useEffect(() => {
    console.log('useeffect is running');
    
    }, [num])
  
  return (
    <div>
      <h1>num{num}</h1>
      <h1>num{num2}</h1>
      <button onClick={()=>{
        setNum(num+1)
  
      }}
       onMouseEnter={()=>{
        
        setNum2(num2+10)
      }}>add</button>
    </div>
  )
}

export default App