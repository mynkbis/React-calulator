import { Button } from "@material-ui/core";
        const inputnum=(e)=>{

    }
    const Input1=()=>   {
    return (<>
      <div className="input1">
      <Button className="btn num" variant="contained" onClick={inputnum}>9</Button>
      <Button className="btn num" variant="contained" onClick={inputnum}>8</Button>
      <Button className="btn num" variant="contained" onClick={inputnum}>7</Button>
      </div>
      <div className="input1">
      <Button className="btn num" variant="contained" onClick={inputnum}>6</Button>
      <Button className="btn num" variant="contained" onClick={inputnum}>5</Button>
      <Button className="btn num" variant="contained" onClick={inputnum}>4</Button>
      </div>
      <div className="input1">
      <Button className="btn num" variant="contained" onClick={inputnum}>3</Button>
      <Button className="btn num" variant="contained" onClick={inputnum}>2</Button>
      <Button className="btn num" variant="contained" onClick={inputnum}>1</Button>
      </div>
      <div className="input1">
            <Button className="btn num" variant="contained" onClick={inputnum}>0</Button>
     </div>
   
    </>
    );
    }

    export default Input1;
