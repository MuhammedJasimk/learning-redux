import { CountIncriment,CountDicriment } from "../redux/count/count";
import { useDispatch,useSelector } from "react-redux";

function Counter() {
  const count = useSelector(state => state.count.value)
  const dispatch =useDispatch()
  return (
    <div className="counter">
      <h2>Counter</h2>
      <h3>The count is - {count}</h3>
      <button onClick={()=>{dispatch(CountIncriment())}}>Increase</button>
      <button onClick={()=>{dispatch(CountDicriment())}}>Decrease</button>
    </div>
  );
}

export default Counter;  
 