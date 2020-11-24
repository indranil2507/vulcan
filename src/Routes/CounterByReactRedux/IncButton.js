
import { useDispatch } from 'react-redux'
import {increment} from "../../Redux/Reducers"

const IncButton = () => {
    const dispatch = useDispatch();
    return (
        <button onClick={() => dispatch(increment())} style={{width: "40px", height: "40px"}}>+</button>
    )
}

export default IncButton