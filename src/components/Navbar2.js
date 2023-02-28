
// Burada asıl mesele class içinde de componenet kurulabileceğini ifade etmektir.
//pek tercih edilmez ama bunu da görmüş ol
import React from "react"
import logo from "../images/airbnb.png"

 //import React{Component} from "react" bunu da yaparak doğrudan component gelir

export default class Navbar2 extends React.Component{
    render(){ // class içinde render edilmeden content yazılmaz
        return(
            <nav className="nav">
                <img src={logo} className="nav-logo" alt="airbnb-logo" />
            </nav>

        )
    }
}