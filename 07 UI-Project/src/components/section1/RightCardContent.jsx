import React from 'react'
import {MoveRight} from 'lucide-react'
const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full  p-10 flex flex-col justify-between'>
          <h1 className='bg-white rounded-full h-10 w-10 flex justify-center items-center text-2xl font-bold'>{props.id+1}</h1> 
          <div>
            <p className='text-shadow-2xs text-white mb-10 leading-relaxed text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam unde molestias, deserunt cum natus deleniti.</p>
            <div className=' flex justify-between '>
              <button className='bg-blue-500 text-white font-semibold px-8 py-3 rounded-full text-lg'>{props.tag}</button>
              <button className='bg-blue-500 text-white font-semibold px-3 py-3 rounded-full text-lg'><MoveRight /></button>
            </div>
          </div>
        </div>
  )
}

export default RightCardContent