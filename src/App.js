import Message from "./Message";
import Wellcome from "./Wellcome";
import './App.css';

function App() 
{ 
  return(
    <div>
      <Wellcome name= "John" />
      <Message message= "React is great"/>    
    </div>
  )
}
export default App;
