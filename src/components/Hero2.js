import React from "react"
import heroImg from "../images/hero-img.png"

 //import React{Component} from "react" bunu da yaparak doğrudan component gelir

export default class Hero2 extends React.Component{
    render(){ // class içinde render edilmeden content yazılmaz
        
        const {name}=this.props;

        console.log(this.props)
        return(
            <section className="hero">
            <img src={heroImg} alt="hero-image" className="hero-img"/>
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-text" >Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>

        </section>

        )
    }
}