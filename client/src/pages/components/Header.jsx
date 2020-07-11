import React from 'react';
import {NavLink} from 'react-router-dom' ;

function Header(props){
  
    // List of links for when user is / isnt logged in
    const loggedInLinks = [ {link: "/log", content: "Log"}, 
                            {link: "/compare", content:"Compare"},  
                            {link:"/logout", content: "Log out"} 
                        ];
    const notLoggedInLinks = [ {link: "/register", content: "Register"},
                                {link: "/login", content: "Log in"}
                             ];
return <nav>
<div className="nav-left">
<NavLink  to='/' className="nav-logo">
    <span className="nav-logo">
    <span id="word-1">T</span>
    <span id="word-2">L</span>
    <span id="word-3">V</span>
  </span>
  </NavLink>
  
</div>
<div className="nav-right">
  {props.loggedIn ? 
    loggedInLinks.map((link, index) =>{ return <NavLink key={index} to={link.link} className="nav-link">{link.content}</NavLink>})
    : 
    notLoggedInLinks.map((link, index)=>{ return   <NavLink key={index} to={link.link} className="nav-link">{link.content}</NavLink>})
  }
</div>
</nav>

}

export default Header;