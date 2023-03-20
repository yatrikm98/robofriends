import React from 'react'
import Card from './Card'
const CardList=(props)=>{

    return (
        <React.Fragment>
    {props.robots.map((value,index)=>{
        return <Card 
        id={value.id}
        key={index} 
        name={value.name}
        email={value.email}/>
      
      })}
      </React.Fragment>
    )
}

export default CardList;