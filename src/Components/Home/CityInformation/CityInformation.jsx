// Libraries
import {useHistory} from 'react-router-dom';


const CityInformation = ({name, temperature}) => {

    // Router Hooks
    const history = useHistory();

    // Go to WeatherInformation View
    const handleHistory = () => {
        history.push(`/weather/${name}`);
    };

    return (
        <>
            <h2>{name}</h2>
            <p className='py-10'>{temperature} °C</p>
            <button onClick={handleHistory}
                    className='bg-blue4 bg-opacity-50 p-1 text-xl border-2 border-white rounded-md hover:bg-blue3'
            >
                More Details
            </button>
        </>
    );
};

export default CityInformation;