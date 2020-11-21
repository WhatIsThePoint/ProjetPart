import React from 'react'
import "./Nav.css"
import {Route,BrowserRouter as Router,Switch,Link} from "react-router-dom"
import LogIn from './LogIn'
import SignUp from './SignUp'
import App from '../App'
const Nav = () => (
    <Router>
    <header className='navbar'>
        <div className='navbar__title'><h1><span>VOID</span>ER</h1></div>
        <div className='navbar__item'>
        <Link to='/LogIn'><p>LogIn</p></Link>
        </div>
        <div className='navbar__item'>
        <Link to='/SignUp'><p>SignUp</p></Link>
       </div> 
            <Switch>
            <Route  path='/SignUp' component={SignUp}></Route>
            <Route path='/LogIn' exact  component={LogIn}></Route> 
            </Switch>      
    </header>
   
    </Router>
);

export default Nav;