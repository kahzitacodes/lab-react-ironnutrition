import { Card, Col, Button } from 'antd';

export function FoodBox(props) {
  const { name, image, calories, servings } = props.food;
  return (
    <Col xs={12} sm={8} md={6} lg={6} xl={6} xxl={4}>
      <Card title={name} style={{ textAlign: 'left' }}>
        <img alt={name} src={image} height={60} />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings}</b> kcal
        </p>
        <Button type="primary" onClick={() => props.deleteAction(name)}>
          Delete
        </Button>
      </Card>
    </Col>
  );
}
