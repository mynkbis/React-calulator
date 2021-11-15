import "./style.css";
import Button from "./components/Button/button"
import Input1 from "./components/Input/input"
import Clear from "./components/ClearButton/Clear";


const App=()=>   {
  return (
    <div className="container">
      <div className="wrapper">
      <div className="screen">{Input1}</div>
      <Button/>
      <Input1/>
      <Clear/>
       
     </div>
     </div>
  );
}

export default App;
