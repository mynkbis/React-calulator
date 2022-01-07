import { useState, useEffect} from "react";
import { Button } from "@material-ui/core";

import "./button.css"

const equal=(e)=>{

}
const Button1=()=>   {

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
     <div className="input1">  
    <Button variant="contained" className="btn_light-grey" onClick={percent}>%</Button>
    <Button color="primary" variant="contained" className="btn_light-grey" onClick={plus}>+</Button>
    <Button variant="contained" className="btn light-grey" onClick={minus}>-</Button>
    </div>
    <div className="input1">
    <Button variant="contained" className="btn light-grey" onClick={multi}>*</Button>
    <Button variant="contained" className="btn light-grey" onClick={divide}>/</Button>
    <Button variant="contained" className="btn light-grey" onClick={equal}>=</Button>
    </div> 
    </div>
  );
}

export default Button1;
