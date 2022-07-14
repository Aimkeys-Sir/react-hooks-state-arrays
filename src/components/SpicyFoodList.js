import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [option, setFilter] = useState("All")
  const foodsFiltered = foods.filter(food => option === "All" ? true : food.cuisine === option)
  function handleAddFood() {
    setFoods(foods => [...foods, getNewRandomSpicyFood()])

  }
  function handleUpdate(id) {
    foods.find(food => food.id === id).heatLevel += 1
    setFoods(foods => [...foods])
  }
  let foodList = foodsFiltered.map((food) => (
    <li key={food.id} onClick={() => handleUpdate(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ))

  function handleFilter(e) {
    setFilter(e.target.value)
  }


  return (
    <div>
      <select name="filter" onChange={handleFilter}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
