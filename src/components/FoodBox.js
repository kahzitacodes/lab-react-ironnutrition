import { Card, Col, Button } from 'antd';

export function FoodBox(props) {
  const { food, deleteAction } = props;
  return (
    <Col xs={12} sm={8} md={6} lg={6} xl={4}>
      <Card title={food.name} style={{ height: 300, textAlign: 'left' }}>
        <img src={food.image} alt={food.name} height={60} />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {food.calories * food.servings}</b> kcal
        </p>
        <Button type="primary" onClick={() => deleteAction(food.name)}>
          Delete
        </Button>
      </Card>
    </Col>
  );
}
