import { useState ,useRef} from 'react';

import React from 'react';
import CardImg from "../assets/IMG_0429.jpg";
// import '../index.css'
export default function Card({title,width,children,deleteCard}) {
  // let clicks=0;
  const titleref=useRef(null);
  const [clicks,setClicks]=useState(0);
  function handleclick(){
    setClicks(clicks+1);
    // console.log("click");
    // clicks++;
  }
  function deleteTitle(){
    const p=titleref.current;
    p.remove();
  }
  // const {title,width}=props;
  if(children){
  return (
    <div className="inline-block border-4 border-red-300">
        {children}
    </div>
)}
  return (
      <div className="inline-block border-4 border-red-300">
        {/* <img src={CardImg} alt="card" width={props.width? props.width: 100} height="150" /> */}
        
        {/* <img src={CardImg} alt="card" width={props.width || 100} height="150" />

        <p>{props.title}</p> */}
         <img src={CardImg} alt="card" width={width || 100} height="150" />
          <p ref={titleref}>{title}</p>
          {/* <p ref={titleref}>hlo</p> */}
         <button className='inline-block border-4 border-red-3000' onClick={handleclick}>
            click:{clicks}
         </button>
         <button className='inline-block border-4 border-green-3000' onClick={deleteTitle} >
            Delete title
         </button>
         <button className='inline-block border-4 border-blue-3000' onClick={deleteCard(title)} >
            Delete Card
         </button>
      </div>
  )
}
