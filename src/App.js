import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Counter  from "./Counter";


 function App() {
    const navigate = useNavigate()

    function buttonNavigate() {
        navigate('./Counter')
    }

    return (
        <div>
            <button onClick={buttonNavigate}>Enter the counter app</button>
             <Routes>
                <Route path="/Counter" element={<Counter initialValue={0}/>} />
            </Routes> 
        </div>
    )
}

export default App;

