const WeatherForm = ({ handleCity, handleFetchData, cityName }) => {
  return (
    <div className="flex justify-center py-5 sm:text-xl">
      <form action="" onSubmit={(e) => handleFetchData(e)}>
        <input
          type="text"
          value={cityName}
          placeholder=" City name"
          className="h-12 w-32 sm:w-44 text-black rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue4"
          onChange={({ target }) => handleCity(target)}
        />

        <input
          type="submit"
          value="Search"
          className="h-12 px-2 rounded-r-lg bg-blue4 bg-opacity-75 hover:bg-blue3"
        />
      </form>
    </div>
  );
};

export default WeatherForm;
