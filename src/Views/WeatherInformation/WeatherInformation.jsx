// Libraries
import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';

// Context
import WeatherInfoContext from '../../context/WeatherInfoContext';


const WeatherInformation = () => {

    // Router Hooks
    const history = useHistory();

    // Context States
    const {cityInformation} = useContext(WeatherInfoContext);

    // Return to Home View
    const handleHistory = () => {
        history.goBack();
    };

    return (
        <>
            {cityInformation ? (
                <div className="flex flex-col justify-center items-center overflow-auto w-9/12 md:w-5/12 h-5/6
                       text-3xl text-white bg-blue3 bg-opacity-50 border-2 border-white rounded"
                >
                    <h2>{cityInformation.name}</h2>
                    <p className="py-5">{cityInformation.main.temp} °C</p>
                    <img src={`https://openweathermap.org/img/w/${cityInformation.weather[0].icon}.png`}
                         alt="City Weather App"
                         className="h-20"
                    />
                    <p className="py-4">Weather: {cityInformation.weather[0].description}</p>
                    <p>Wind speed: {cityInformation.wind.speed} m/s</p>
                    <p className="py-4">Humidity: {cityInformation.main.humidity} %</p>
                    <button
                        onClick={handleHistory}
                        className="bg-blue4 bg-opacity-50 p-1 text-xl border-2 border-white rounded-md hover:bg-blue3"
                    >
                        Go back
                    </button>
                </div>
            ) : history.push('/')}
        </>
    );
};

export default WeatherInformation;
