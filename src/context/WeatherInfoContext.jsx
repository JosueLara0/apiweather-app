// Libraries
import React, {createContext, useState} from "react";

// Context with the API weather info
const WeatherInfoContext = createContext();

// Provider
const WeatherInfoProvider = ({children}) => {

    // States
    const [cityInformation, setCityInformation] = useState(null);

    // Context States
    const data = {cityInformation, setCityInformation};


    return (
        <WeatherInfoContext.Provider value={data}>
            {children}
        </WeatherInfoContext.Provider>
    );
};

export {WeatherInfoProvider};
export default WeatherInfoContext;