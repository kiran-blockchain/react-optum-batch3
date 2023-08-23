import { Counter } from "./components/Counter";
import { Increment } from "./components/Increment";

const App =()=>{
  return(
    <div>
      <h1>Redux Counter Demo</h1>
      <Counter/>
      <Increment/>
    </div>
  )
}
export default App;