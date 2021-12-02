import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<Detail />} />
                <Route path="/hello" element={<h1>hello</h1>} />
            </Routes>
        </BrowserRouter>

        )

}

export default App;
