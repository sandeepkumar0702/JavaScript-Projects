import React from 'react'
import Card from './Card.jsx'
export default function CardList({names,deleteCard}) {
  return (
    <div>
      {
        names.map((p)=>{
          return(
            <Card  key={p} title={p} deleteCard={deleteCard} ></Card>
          )
        })
      }
    </div>
  )
}
