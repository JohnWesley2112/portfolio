import React, { useState } from "react";
import "../CSSComponents/Trial.css"

function Trial() {

  const [Active, InActive] = useState(true);
  const toggle = () => {
    InActive(Active? false : true);
  }
  return (
    <div className="boux" onClick={toggle} >
      <h1 className={`${Active ? "view colored" :"hide"}`}>Viewing</h1>
    </div>
  );
}

export default Trial;
