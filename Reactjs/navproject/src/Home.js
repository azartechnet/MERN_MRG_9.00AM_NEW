import React from "react";
import { useNavigate } from "react-router-dom";

function Home()
{
    const navigate=useNavigate();
    const goToAbout=()=>{
        navigate("/about")
    }
    const goToContact=()=>{
        navigate("/contact")
        }
        return (
            <div>
                <h1>Welcome to Home Page</h1>
                <button onClick={goToAbout}>Go to About</button>
                <button onClick={goToContact}>Go to Contact</button>
            </div>
        )
}
export default Home;