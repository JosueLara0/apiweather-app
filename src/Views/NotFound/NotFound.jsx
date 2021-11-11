// Libraries
import {Link} from 'react-router-dom';


const NotFound = () => {
    return (
        <div className="text-white flex flex-col items-center justify-center">
            <h2 className="text-8xl">Error: 404</h2>
            <p className="text-5xl py-5">Not Found</p>
            <button className="bg-blue4 bg-opacity-50 p-1 text-xl border-2 border-white rounded hover:bg-blue3">
                <Link to={`/`}>Go Home</Link>
            </button>
        </div>
    );
};

export default NotFound;