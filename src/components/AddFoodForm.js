import { Row, Col, Divider, Input } from 'antd';
import { useState } from 'react';

export function AddFoodForm(props) {
  const [form, setForm] = useState({
    name: '',
    image: '',
    calories: 0,
    servings: 0,
  });

  const handleChanges = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.addFood(form);

    setForm({
      name: '',
      image: '',
      calories: 0,
      servings: 0,
    });
  };

  return (
    <Col span={24}>
      <Divider>Add Food Entry</Divider>
      <Row justify="center">
        <Col span={12} style={{ textAlign: 'left' }}>
          <form
            onSubmit={handleSubmit}
            style={{
              margin: '10px auto',
              textAlign: 'left',
            }}
          >
            <label htmlFor="input-name">Name</label>
            <Input
              id="input-name"
              name="name"
              value={form.name}
              type="text"
              onChange={handleChanges}
            />

            <label htmlFor="input-image">Image</label>
            <Input
              id="input-image"
              placeholder="https://imgur.com/0WkdgkE.jpg"
              name="image"
              value={form.image}
              type="text"
              onChange={handleChanges}
            />

            <label htmlFor="input-calories">Calories</label>
            <Input
              id="input-calories"
              name="calories"
              value={form.calories}
              type="number"
              onChange={handleChanges}
            />

            <label htmlFor="input-servings">Servings</label>
            <Input
              id="input-servings"
              name="servings"
              value={form.servings}
              type="number"
              onChange={handleChanges}
            />
            <br />
            <br />
            <button type="submit">Create</button>
          </form>
        </Col>
      </Row>
    </Col>
  );
}
