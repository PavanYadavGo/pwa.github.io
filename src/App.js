import React, { useState } from "react";

import { fecthWeather } from "./api/fetchWeather";
import './App.css';

const App = () => {
    const [query, setQuery] = useState('');

    const search = async (e) => {
        if(e.key === 'Enter'){
            const data = await fecthWeather(query)

            console.log(data);
        }
    }

    return(
        <div className="main-container">
            <input 
                type="text"
                className="search"
                placeholder="Search Countries Weather"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={search}
            />
        </div>
    );
}

export default App;