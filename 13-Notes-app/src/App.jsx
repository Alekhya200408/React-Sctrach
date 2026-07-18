import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  
  const [task, setTask] = useState([])

  const submitHandler=(e)=>{
    e.preventDefault()
    // console.log(title);
    // console.log(details);
    const copyTask=[...task]
    copyTask.push({title,details})
    setTask(copyTask)
    // console.log(copyTask);
    setTitle('')
    setDetails('')
  }
  const deletetask=(idx)=>{
    // console.log('Task deleted');
    const copytask=[...task]
    // console.log(idx);
    copytask.splice(idx,1)
    setTask(copytask)
    
  }
   
  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}action="" className='flex flex-col lg:w-1/2 items-start gap-5 p-10'>
        <h1 className='text-3xl font-bold'>Add notes</h1>
        
        {/* First Input */}
            <input type="text" placeholder='Enter Notes here' className='px-5 py-2 w-full border-2 rounded-2xl outline-none'
            value={title}
            onChange={(e)=>{
              setTitle(e.target.value)
              
            }}
            />

        {/* Explained Input */}
            <textarea type="text" placeholder='Enter details here' className='px-5 py-2 w-full h-30 border-2 rounded-2xl outline-none hide-scrollbar'
            value={details}
            onChange={(e)=>{
             setDetails(e.target.value)
            }}
            />

            <button className='bg-white active:scale-90  text-black rounded-2xl px-5 py-2 outline-none cursor-pointer'>Add note</button>
        
      </form>
        <div className=' p-5 lg:border-l-2  lg:w-2/3 '>
        <h1 className='text-3xl font-bold'>Recent Notes</h1>
          <div className='flex flex-wrap m-5 gap-4 h-full overflow-auto'>
           {task.map(function (elem,idx) {
            return <div key={idx}  className=" flex flex-col items-start relative bg-cover bg-[url('https://imgs.search.brave.com/4i-kuqeolpCBtB8uUaTXrKz8PNO1Gnlxvli4io6f8Rs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzcv/MTUyLzY5NC9zbWFs/bC9zdGlja3ktbm90/ZS1wYXBlci1iYWNr/Z3JvdW5kLWZyZWUt/cG5nLnBuZw')]   text-black h-62 w-42 rounded-2xl p-5">
              <div className='overflow-y-auto hide-scrollbar '>
                <h2 className='p-3 font-bold text-2xl'>{elem.title}</h2>
              <p className='p-3  break-all leading-tight font-medium text-gray-500'>{elem.details}</p>
              </div>
              <button onClick={()=>{
                deletetask(idx)
              }} className='mt-5 bg-red-300 w-full rounded-4xl active:scale-95 cursor-pointer outline-none'>Delete </button>
            </div>
           })} 
          </div>
        </div>
    </div>
  )
}

export default App