import React from 'react'

const SearchBox=(props)=>{
return (
    <div className="pa2" >
    <input 
    type='text'
     placeholder='Enter Robots Here' 
     className='bg-lightest-blue pa3'
     onChange={props.searchChange}
     />
    </div>
)
}

export default SearchBox;