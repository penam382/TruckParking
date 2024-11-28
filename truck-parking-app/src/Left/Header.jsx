import truckP from '../assets/truckP.webp';

function Header() {

    // write HTML code within return()
    
    return (
        <header>
            <h1
                style={{
                    backgroundImage: `url(${truckP})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'white', // Adjust text color for contrast
                    padding: '20px', // Add padding for spacing
                }}
            >
                Rohodelivers.com LLC
            </h1>
            <hr />
        </header>
    );
}

export default Header