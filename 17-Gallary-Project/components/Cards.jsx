import React from 'react'

const Cards = (props) => {
    console.log(props );
    
  return (
    <div>
            <a href={props.elem.url} target='_blank'>
            <div className='h-40 w-44 rounded-2xl bg-white'>
            <img className='h-full w-full rounded-xl overflow-hidden object-cover' src={props.elem.download_url} alt="" />
            </div>
            <h2 className='text-lg font-semibold'>{props.elem.author}</h2>
            </a>
    </div>
  )
}

export default Cards