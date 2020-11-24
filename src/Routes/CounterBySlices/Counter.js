import store from "../../Redux/store"
import {increment, decrement} from "../../Redux/Actions"
import { H3 } from "../../Components/DefaultStyles";
import { connect } from 'react-redux'
import IncButton from "./IncButton";
import DecButton from "./DecButton";


const Counter = (props) => {
    // console.log(props)
    return (
        <div className="row">
        <div style={{display: "flex", justifyContent: "space-around"}}>
        <IncButton />
        <H3>Counter : {props.counter}</H3>
        <DecButton />
        </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    counter : state.count
})

export default connect(mapStateToProps)(Counter);