import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MealItem from './MealItem.jsx'
 const Meals = () => {
 const [meals,setMeals] = useState([])
 useEffect( () => {
    async  function fetchMeals(){
    try {
            const response =  await fetch('http://localhost:3000/meals')
            const meals = await response.json()
            setMeals(meals)
    } catch (error) {
        console.log(error)
    }
  }
  fetchMeals()
   },[])

  return (
    <ul id='meals'>
        {meals.map((meal) => (
            <MealItem key={meal.id} meal={meal} />
        ))}
      
    </ul>
  )
}
export default Meals
