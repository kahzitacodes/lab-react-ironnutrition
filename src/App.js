import './App.css';
import { Divider, Row } from 'antd';
import { useState } from 'react';
import foodsDataJSON from './data/foods.json';
import { FoodBox } from './components/FoodBox';
import { AddFoodForm } from './components/AddFoodForm';
import { SearchFood } from './components/SearchFood';

function App() {
  const [foods, setFood] = useState(foodsDataJSON);
  const [foodsData, setFoodsData] = useState(foodsDataJSON);

  const addNewFood = (newFood) => {
    const updatedList = [newFood, ...foods];
    const updateListData = [newFood, ...foodsData];

    setFood(updatedList);
    setFoodsData(updateListData);
  };

  const searchFoodList = (str) => {
    let filteredFoods;

    if (str === '') {
      filteredFoods = foodsData;
    } else {
      filteredFoods = foodsData.filter((element) => {
        return element.name.toLowerCase().includes(str);
      });

      setFood(filteredFoods);
    }
  };

  return (
    <div className="App">
      <Row style={{ width: '100%', margin: '0 auto' }}>
        <SearchFood searchFoods={searchFoodList} />
      </Row>
      <Row style={{ width: '100%', margin: '0 auto' }}>
        <AddFoodForm addFood={addNewFood} />
      </Row>
      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'left' }}>
        {foods.map((food) => {
          return <FoodBox key={food.name} food={food} />;
        })}
      </Row>
    </div>
  );
}

export default App;
