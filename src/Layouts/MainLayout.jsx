// Assets
import backgroundImage from '../assets/backgroundImage.jpg';


const MainLayout = ({children}) => {
    return (
        <div className="flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat"
             style={{backgroundImage: `url(${backgroundImage})`}}>
            {children}
        </div>
    );
};

export default MainLayout;