import { useState, useEffect} from "react";




const equal=(e)=>{

}
const Button=()=>   {

  // const [prestate,setPrestate]=useState("");
  // const [currentState, setCurrentState]=useState("");
  // const[input, setInput]=useState("0");
  // const [total, setTotal]=useState("");

  const multi=()=>{
    console.log("multi")
  };
  const divide=()=>{console.log("div")};
  const percent=()=>{console.log("per")};
  const plus=()=>{console.log("plus")};
  const minus=()=>{ console.log("minu");};
 
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
