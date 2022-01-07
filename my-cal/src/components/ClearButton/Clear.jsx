import { Button } from "@material-ui/core";

const Clear=()=>   {
  const Reset=()=>{};
  return (
    <>
     <div className="input1">
     <Button className="btn num" onClick={Reset} variant="contained" >AC</Button>
     
    </div>
    </>
  );
}

export default Clear;
