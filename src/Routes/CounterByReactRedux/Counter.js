import { H3 } from "../../Components/DefaultStyles";
import { useSelector } from 'react-redux'
import IncButton from "./IncButton";
import DecButton from "./DecButton";
import { selectCount } from "../../Redux/Reducers";


const Counter = (props) => {
    const count = useSelector(selectCount);
    
    return (
        <div className="row">
        <div style={{display: "flex", justifyContent: "space-around"}}>
        <IncButton />
        <H3>Counter : {count}</H3>
        <DecButton />
        </div>
        </div>
    )
}



export default Counter;