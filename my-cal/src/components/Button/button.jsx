import { useState, useEffect} from "react";




const equal=(e)=>{

}
const Button=()=>   {

  // const [prestate,setPrestate]=useState("");
  // const [currentState, setCurrentState]=useState("");
  // const[input, setInput]=useState("0");
  // const [total, setTotal]=useState("");

  const multi=()=>{};
  const divide=()=>{};
  const percent=()=>{};
  const plus=()=>{};
  const minus=()=>{};
 
  return (
    <div>    
    <div className="btn light-grey" onClick={percent}>%</div> 
    <div className="btn light-grey" onClick={plus}>+</div> 
    <div className="btn light-grey" onClick={minus}>-</div> 
    <div className="btn light-grey" onClick={multi}>*</div> 
    <div className="btn light-grey" onClick={divide}>/</div> 
    <div className="btn light-grey" onClick={equal}>=</div> 
  
  </div>
  );
}

export default Button;
