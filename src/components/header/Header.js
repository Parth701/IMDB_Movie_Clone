import React from "react"
import "./Header.css"
import {Link} from "react-router-dom"


const Header =()=>{
    return(
        <div className="header">
            <div className="haederleft">
                <Link to="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"/> </Link>
                {/*         In React code,
                 <span> is an HTML element that is often used as an inline container for text or other elements. 
                 It does not add any semantic meaning to the content it wraps but can be useful for styling 
                 or targeting specific parts of the text. */}
                <Link to="/movies/popular"   style={{textDecoration: "none"}}> <span> Popular   </span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}> <span> Top Rated </span></Link>
                <Link to="/movies/upcoming"  style={{textDecoration: "none"}}> <span> Upcoming  </span></Link>
            </div>
        </div>
    )
}

export default Header