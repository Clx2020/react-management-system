import { Button } from 'antd'
import React from 'react'

export default function Sum() {
let [sum,setSum]=React.useState(1)

function handleClickToSum(){
    setSum(++sum+(++sum))
}
  return (
    <div>
        <div>i++的计算顺序初始值:{sum}</div>
        <Button type="primary"  onClick={handleClickToSum}>to sum</Button>
    </div>
  )
}
