import React from 'react'
import {useState} from 'react'

const getData = async() => {
    try{
        const response = await fetch("localhost:5000/meals")
        const data = await response.json();
        console.log(data)
    }catch(error){
        console.log(error)
    }
}

function MealList() {
    const [data, setData] = useState()

  return (
    <div>
      
    </div>
  )
}

export default MealList
