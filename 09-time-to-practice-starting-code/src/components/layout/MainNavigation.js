import React from "react";
import classes from './MainNavigation.module.css';
import { Link } from "react-router-dom";

const MainNavigation=()=>{
    return(
        <header className={classes.header}>
            <div className={classes.logo}><Link to="/" className={classes.logoName}Quote Project></Link></div>
            <nav className={classes.nav}>
                <ul>
                    <li><Link to="/quotes">All Quotes</Link></li>
                    <li><Link to="/new-quote">Add a Quote</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;