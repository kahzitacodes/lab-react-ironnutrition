import { Col, Divider, Input } from 'antd';
import { useState } from 'react';

export function SearchFood(props) {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);

    props.searchFoods(e.target.value);
  };

  return (
    <Col span={24}>
      <Divider>Search food</Divider>
      <label>Search</label>
      <Input
        placeholder="type food"
        name="search"
        value={search}
        onChange={handleSearch}
      />
    </Col>
  );
}
