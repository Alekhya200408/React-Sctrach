import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from '../components/Cards'
const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getdata = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)

    setUserData(response.data)
    console.log(response.data);
  }

  useEffect(function(){
    getdata()
  },[index])

  let printuserdata = <h2 className='text-gray-400 text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h2>

  if (userData.length > 0) {
    printuserdata = userData.map((elem, idx) => {
      return <div key={idx}>
        <Cards elem={elem}/>
      </div>
    })
  }
  return (
    <div className='bg-black overflow-auto min-h-screen text-white'>
      {/* <button
        onClick={getdata}
        className='bg-green-300 text-2xl m-5 px-2 py-2 rounded-xl active:scale-95'>
        Get Data
      </button> */}
      {/* <h1 className='flex fixed text-white text-4xl font-semibold'>{index}</h1> */}
      <div className='flex flex-wrap px-8.5 gap-3'>
        {printuserdata}
      </div>
      <div className='fixed bottom-0 left-0  w-full bg-black py-5 flex justify-center gap-6 '>
        <button 
        style={{opacity:index==1?0.5:1}}
        className='bg-amber-300 rounded-xl active:scale-x-95 mt-2 cursor-pointer  text-black p-4  '
        onClick={()=>{
          if (index>1) {
            setIndex(index-1)
            setUserData([])
          }
        }}
        >
          Prev
        </button>
        <div className='py-5'> Page {index}</div>
        <button 
        className='bg-amber-300 rounded-xl active:scale-x-95 mt-2 cursor-pointer  text-black p-4  '
        onClick={()=>{
          setIndex(index+1)
          setUserData([])
        }}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App