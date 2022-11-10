import { Card, Col, Button } from 'antd';

export function FoodBox(props) {
  const { name, image, calories, servings } = props.food;
  return (
    <Col>
      <Card
        title={name}
        style={{ width: 230, height: 300, margin: 10, textAlign: 'left' }}
      >
        <img src={image} alt={name} height={60} />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings}</b> kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}
