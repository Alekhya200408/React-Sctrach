import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user="Alekhya" age={21} img="https://images.unsplash.com/photo-1782796474844-92cc237e9550?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"/>
      <Card user="Nikita" age={21} img="https://images.unsplash.com/photo-1781853330027-bbabc95d3577?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM5fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"/>
    </div>
  )
}

export default App