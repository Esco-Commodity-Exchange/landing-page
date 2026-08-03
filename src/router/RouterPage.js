import React,{Component,Fragment} from "react";
import {Switch,Route,Redirect} from "react-router-dom";
import NotFound from "../pages/NotFound"
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Forgot from "../pages/Forgot"
import CertificatesPage from "../pages/Certificate"
import Support from "../pages/Support"
import FAQ from "../pages/Faqs"
import Profile from "../pages/Profile"
import Dashboard from "../pages/Dashboard"
import Wallet from "../pages/Wallet";
import Orders from "../pages/Orders";
import Transactions from "../pages/Transactions";
import Referrals from "../pages/Referrals";
import Security from "../pages/Security";
import Send from "../pages/Send";
import Deposit from "../pages/Deposit";
import Withdrew from "../pages/Withdrew";
import HowIt from "../pages/HowIt";
import Terms from "../pages/Terms";
import Privacy from "../pages/Privacy";
import Trade from "../pages/Trade";


class RouterPage extends Component {
    constructor() {
        super();
        this.state={
            lastmarket:""
        }
    }
    componentDidMount() {
        var lastmarket = localStorage.getItem("lastmarket")
        if(lastmarket){
            this.setState({lastmarket:lastmarket})
        }
    }

    render() {
        return ( 
         <Fragment>   
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={Register}/>
                <Route exact path="/forgot" component={Forgot}/>
                <Route exact path="/certificate" component={CertificatesPage}/>
                <Route exact path="/support" component={Support}/>
                <Route exact path="/faqs" component={FAQ}/>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route exact path="/wallet" component={Wallet}/>
                <Route exact path="/order" component={Orders}/>
                <Route exact path="/transactions" component={Transactions}/>
                <Route exact path="/referrals" component={Referrals}/>
                <Route exact path="/security" component={Security}/>
                <Route exact path="/send" component={Send}/>
                <Route exact path="/deposit" component={Deposit}/>
                <Route exact path="/withdrew" component={Withdrew}/>
                <Route exact path="/how-it-works" component={HowIt}/>
                <Route exact path="/terms" component={Terms}/>
                <Route exact path="/privacy" component={Privacy}/>
                <Route exact path="/trade/:id" component={Trade}/>
                <Redirect from='/trade' to={this.state.lastmarket!==""?"/trade/"+this.state.lastmarket:"/trade/GOLD_BDT"} />

                <Route component={NotFound}/>
          </Switch>
        </Fragment>
         );
    }
}
 
export default RouterPage;