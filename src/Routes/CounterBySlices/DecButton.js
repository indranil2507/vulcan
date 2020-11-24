import { connect } from 'react-redux'
import {decrement} from "../../Redux/Actions.js"

const DecButton = (props) => {

    return (
        <button onClick={props.decrement} style={{width: "40px", height: "40px"}}>-</button>
    )
}

const mapDispatchToProps = { decrement }

export default connect(null, mapDispatchToProps)(DecButton)