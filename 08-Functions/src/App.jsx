import React from 'react'

const App = () => {

function onClick(val){
  console.log(val);
  
}

  return (
    <div className='text-white'>
      <button onClick={function (elem) {
        onClick(elem.timeStamp)
      }}>Click here</button>
    </div>
  )
}

export default App