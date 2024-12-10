import React from "react";
import { Link } from "react-router-dom";

function Home()
{
    return (
        <div>
            <h1>Welcome to my website!</h1>
            <ul>
                <li><Link to="/user/john">johnProfile</Link></li>
                <li><Link to="/user/jane">janeProfile</Link></li>
                <li><Link to="/user/azar">azarprofile</Link></li>
            </ul>
        </div>
    )
}
export default Home;