// Libraries
import React, { useState, useContext, useEffect } from "react";

// Context
import WeatherInfoContext from "../../context/WeatherInfoContext";

// Components
import WeatherForm from "../../Components/Home/Form/WeatherForm";
import CityInformation from "../../Components/Home/CityInformation/CityInformation";
import Loader from "../../Components/Custom/Loader/Loader";

const Home = () => {
  // States
  const [cityName, setCityName] = useState("");
  const [coords, setCoords] = useState(null);
  const [loader, setLoader] = useState(false);

  const [error, setError] = useState(false);

  // Context States
  const { cityInformation, setCityInformation } =
    useContext(WeatherInfoContext);

  // Get the city coordinates from the browser of the user
  useEffect(() => {
    setCityInformation(null);

    navigator.geolocation.getCurrentPosition(function (position) {
      setLoader(true);
      setCoords(position.coords);
    });
  }, [setCityInformation]);

  // Call the Weather API with the user coordinates
  useEffect(() => {
    if (coords) {
      (async () => {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
        );
        const result = await response.json();
        setCityInformation(result);
        setLoader(false);
      })();
    }
  }, [coords, setCityInformation]);

  // Call the Weather API with the user inputs
  const handleFetchData = async (e) => {
    e.preventDefault();
    setCityInformation(null);
    setError(false);
    setLoader(true);

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    );
    const result = await response.json();

    if (result.message) {
      setError(result.message);
    } else {
      setCityInformation(result);
    }
    setCityName("");
    setLoader(false);
  };

  // Control the city name used for the Weather API search
  const handleCity = ({ value }) => {
    setCityName(value);
  };

  return (
    <>
      <div
        className="w-9/12 md:w-5/12 h-5/6 overflow-auto text-white bg-blue3 bg-opacity-50
          border-2 border-white rounded-xl"
      >
        <div className="h-1/3">
          <h2 className="text-center text-3xl sm:text-4xl pt-5">
            City Weather App
          </h2>

          <WeatherForm
            handleCity={handleCity}
            cityName={cityName}
            handleFetchData={handleFetchData}
          />
        </div>

        <div className="flex flex-col justify-center items-center h-2/3 text-3xl">
          {loader && <Loader />}

          {cityInformation && (
            <CityInformation
              name={cityInformation.name}
              temperature={cityInformation.main.temp}
            />
          )}

          {error && <p className="text-center">{error}</p>}
        </div>
      </div>
    </>
  );
};

export default Home;
