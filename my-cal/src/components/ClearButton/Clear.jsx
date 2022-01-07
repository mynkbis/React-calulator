import { Button } from "@material-ui/core";
import "./clear.css"
const Clear=()=>   {
  const Reset=()=>{};
  return (
    <>
     <div className="Input1">
     <Button className="btn num" onClick={Reset} variant="contained" >AC</Button>
     
    </div>
    </>
  );
}

export default Clear;
