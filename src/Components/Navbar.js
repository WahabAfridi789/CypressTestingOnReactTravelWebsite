import { Component } from "react";
import "./Navbarstyle.css";
import{Menuitems} from "./Menuitems";
import {Link} from "react-router-dom";

class Navbar extends Component{
    state = { clicked: false}
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarItems">
              <h1 className="navbar-logo">Trippy</h1>  
              <div className="menu-icons" onClick={this.handleClick}>
                <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                
              </div>
              <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                {Menuitems.map((item, index) =>{
                    return(
                <li key={index}>
                    <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>{item.title}</Link>
                </li>

                    )
                })}
                {/* 
                <a id="btn" href="/login">Login</a>
                <a style={{border:"2px solid Black", paddingLeft:15, paddingRight:15, fontFamily:"Times New Roman", fontWeight:"bold", color:"black"}} href="/login">Login</a>
                <button
                 exact path="/login">Login</button>
                  */}
              </ul>

            </nav>
        )
    }
}
export default Navbar;