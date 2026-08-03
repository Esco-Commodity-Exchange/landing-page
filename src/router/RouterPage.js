import React,{Component,Fragment} from "react";
import {Switch,Route,Redirect} from "react-router-dom";
import NotFound from "../pages/NotFound"
import Home from "../pages/Home";
import Terms from "../pages/Terms";
import Privacy from "../pages/Privacy";


class RouterPage extends Component {


    render() {
        return ( 
         <Fragment>   
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/terms" component={Terms}/>
                <Route exact path="/privacy" component={Privacy}/>

                <Route component={NotFound}/>
          </Switch>
        </Fragment>
         );
    }
}
 
export default RouterPage;