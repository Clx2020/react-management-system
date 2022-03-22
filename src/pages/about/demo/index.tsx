// Goods.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from 'antd';

export default function Demo() {
  const [count,setCount]=React.useState(0)
  const navigate = useNavigate();

  const handleClickToHome = () => {
    navigate("/");
  };
  
  function handleClickAdd() {
    setCount(count+1)
  }
  return (
    <div>
      <h2>Goods Page</h2>
      <Button type="primary"  onClick={handleClickToHome}>to about</Button>
      <h2>当前求和为:{count}</h2>
      <Button type="primary"  onClick={handleClickAdd}>点我加1</Button>
    </div>
  );
}
