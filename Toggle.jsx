import React from "react";
import React,{useState} from "react";

function Toggle(){ 
  const [sho,setSh] = useState(true);
  return (
    <div>
   {sho && <p>I love jaipur</p>}
    <button onClick={()=>{setSh(!sho)}}>CHANGE</button>
    </div>
  )
}
export default Toggle;
