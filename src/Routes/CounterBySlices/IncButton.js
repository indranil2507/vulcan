import { connect } from 'react-redux'
import {increment} from "../../Redux/Actions.js"

const IncButton = (props) => {

    return (
        <button onClick={props.increment} style={{width: "40px", height: "40px"}}>+</button>
    )
}
const mapDispatchToProps = {increment}
export default connect(null, mapDispatchToProps)(IncButton)