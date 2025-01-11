import { useRef } from 'react';
import React from 'react'

export default function AddCard({addCard}) {
    const refInput=useRef(null);
    return (
    <>
      <input ref={refInput} type='text' placeholder='inpyt title' />
     <button className='bg-green-200 hover:bg-green-700' onClick={() => {
        const value = refInput.current.value; 
        addCard(value); 
}}>Add Card</button>
    </>
  )
}
