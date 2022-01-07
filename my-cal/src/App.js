import "./style.css";
import Button1 from "./components/Button/button"
import Input1 from "./components/Input/input"
import Clear from "./components/ClearButton/Clear";


const App=()=>   {
  return (<>
    
    <div className="container"> 
    <div className="Calc"><strong>Calculator</strong></div>
    
      <div className="wrapper">
      <div className="screen">0</div>
      <Button1/>
      <Input1/>
      <Clear/>
      </div>
     </div>
     </>
  );
}

export default App;
