import { Redirect, Route, Switch, BrowserRouter} from "react-router-dom"
import Counter from "../Routes/CounterByReactRedux/Counter"
import Homepage from "../Routes/Homepage"
import Footer from "./Footer"
import Navigation from "./Navigation/Navigation"

const Router = () => (
    <BrowserRouter>
    <Navigation />
    <Switch>
    <Route path="/" exact={true} component={Homepage} />
    <Route path="/counter" component={Counter} />
    <Redirect from="*" to="/" />
    </Switch>
    <Footer />
    </BrowserRouter>
)

export default Router