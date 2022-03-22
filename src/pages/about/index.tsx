import React from "react";
import { Link,Outlet} from "react-router-dom";

function About() {
  return (
    <div className="Ab">
      <h2>About</h2>
      <div>
        <button><Link to="demo">Demo</Link></button>====

        <button><Link to="sum">计算</Link></button>
      </div>
      <div>
       <Outlet/>
    </div>
    </div>
    
  );
}
export default About;