import './App.css';
import { Layout, Divider, Row, Button, Empty, Col } from 'antd';
import { useState } from 'react';
import foodsDataJSON from './data/foods.json';
import { FoodBox } from './components/FoodBox';
import { AddFoodForm } from './components/AddFoodForm';
import { SearchFood } from './components/SearchFood';

const { Header, Content } = Layout;

function App() {
  const [foods, setFood] = useState(foodsDataJSON);
  const [foodsData, setFoodsData] = useState(foodsDataJSON);
  const [visibility, setVisibility] = useState('hide');
  const [buttonLabel, setButtonLabel] = useState('Add new food');
  const [emptyState, setEmptyState] = useState(false);

  const addNewFood = (newFood) => {
    const updatedList = [newFood, ...foods];
    const updateListData = [newFood, ...foodsData];

    setFood(updatedList);
    setFoodsData(updateListData);
  };

  const toggleVisibility = () => {
    if (visibility === 'hide') {
      setVisibility('show');
      setButtonLabel('Hide form');
    } else if (visibility === 'show') {
      setVisibility('hide');
      setButtonLabel('Add new food');
    }
  };

  const deleteFood = (foodName) => {
    const filterFoods = foods.filter((food) => {
      return food.name !== foodName;
    });

    setFood(filterFoods);
    setFoodsData(filterFoods);
    checkEmpty();
  };

  const searchFoodList = (str) => {
    let filteredFoods;

    if (str === '') {
      filteredFoods = foodsData;
      setFood(foodsData);
    } else {
      filteredFoods = foodsData.filter((element) => {
        return element.name.toLowerCase().includes(str);
      });
    }
    checkEmpty();
    setFood(filteredFoods);
  };

  let checkEmpty = () => {
    console.log(foods.length);
    if (foods.length <= 1) {
      setEmptyState(true);
    } else {
      setEmptyState(false);
    }
  };

  return (
    <div className="App">
      <Layout>
        <Header className="header">
          <h1>Lab React ironnutrition</h1>
        </Header>
        <Content
          className="site-layout-background"
          style={{ padding: '24px 50px 24px' }}
        >
          <Row
            className={visibility}
            justify="center"
            style={{ width: '100%' }}
          >
            <AddFoodForm addFood={addNewFood} />
          </Row>
          <Row justify="center" style={{ width: '100%' }}>
            <Button type="primary" onClick={toggleVisibility}>
              {buttonLabel}
            </Button>
          </Row>
          <Row span={4} justify="center">
            <SearchFood searchFoods={searchFoodList} />
          </Row>
          <Divider>Food List</Divider>

          <Row gutter={[24, 24]}>
            {emptyState ? (
              <Col className={``} span={24}>
                <Empty
                  className="site-empty"
                  description={
                    <span>Ops! There is no more content to show</span>
                  }
                />
              </Col>
            ) : null}
            {foods.map((food) => {
              return (
                <FoodBox
                  deleteAction={deleteFood}
                  key={food.name}
                  food={food}
                />
              );
            })}
          </Row>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
