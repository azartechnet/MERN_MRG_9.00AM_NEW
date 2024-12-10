import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './Home';
import User from './User';

function App(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user/:username" element={<User />} />
            </Routes>
        </Router>
        );
}
export default App;