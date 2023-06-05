import './App.css';
import Printstore from './printstore';
import Actions from './action';
import {useSelector} from "react-redux"

function App() {
  const count=useSelector((store)=>{return store})

  return (
    <div className="App">
 redux={count}
 
 <Printstore/>
 <Actions/>
    </div>
  );
}

export default App;
