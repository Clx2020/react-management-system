import React from 'react';
import './index.css';
function Home() {
  const [isshow,setShow]=React.useState(true)
  function clickDisplay(){
    setShow(!isshow)
    
  }
  return (
    <div className='All'>
    <div className="A">
      <div className='a'>2</div>
      <div className='b'>3</div>
      <div className='c'>4</div>
    </div>
    <div className='B' style={{display:isshow?'block':'none'}}>
      <button onClick={clickDisplay} >1</button>
    </div>
    </div>
  );
}
export default Home;