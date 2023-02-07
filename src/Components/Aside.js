import {useSelector,useDispatch} from 'react-redux'
import randomColor from 'randomcolor'
import { changeColor } from "../redux/color/colorSlice";

function Aside() {


  const color =useSelector(state =>state.color.value)
  const dispatch = useDispatch()

  const changeClr =() =>{
    dispatch(changeColor({
      color:randomColor()
    }))
  }

   return (
    <div className="aside">
      <h2 style={{color}}> Aside</h2>
      <button onClick={changeClr}>Change Color</button>
    </div>
  );
}

export default Aside;
