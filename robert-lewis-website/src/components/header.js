import React, {useState} from "react"
import "./Header.css"


const Header = () => {
    const navs = {home:false,about:false,projects:false,contact:false}
    const [navButtonHover,setNavButtonHover] = useState(navs)

    const mouseEnter = (e) => {
        setNavButtonHover({...navButtonHover,[e.target.id]:true})
    }

    const mouseLeave = (e) => {
        setNavButtonHover({...navButtonHover,[e.target.id]:false})
    }
    
    return(
        <header>
            <img className="logo" src={require("./web-logo.png")}/>
            <nav className="nav-header">
                <a id="home" className={navButtonHover.home ? "hovered" : ""} 
                onMouseOver={mouseEnter} onMouseOut={mouseLeave} href="">Home</a>
                <a id="about" className={navButtonHover.about ? "hovered" : ""} 
                onMouseOver={mouseEnter} onMouseOut={mouseLeave} href="">About</a>
                <a id="projects" className={navButtonHover.projects ? "hovered" : ""} 
                onMouseOver={mouseEnter} onMouseOut={mouseLeave} href="">Projects!</a>
                <a id="contact" className={navButtonHover.contact ? "hovered" : ""} 
                onMouseOver={mouseEnter} onMouseOut={mouseLeave} href="">Contact</a>
            </nav>
        </header>
    )
}

export default Header