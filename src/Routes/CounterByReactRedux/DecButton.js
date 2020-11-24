import { useDispatch } from 'react-redux';
import {decrement} from "../../Redux/Reducers"
const DecButton = () => {
    const dispatch = useDispatch();
    return (
        <button onClick={() => dispatch(decrement())} style={{width: "40px", height: "40px"}}>-</button>
    )
}


export default DecButton