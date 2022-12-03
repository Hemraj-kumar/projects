import { useNavigate } from 'react-router';
import { Route , Routes } from 'react-router-dom';

import Posts from './Posts';
import NewApplication from './NewApplication';
import './DashBoard.css'
import Home from './home';

//import logo from './logo.jpg'
var link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('type', 'text/css');
link.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Anton&family=Orbitron&display=swap');
document.head.appendChild(link);

function DashBoard(){

    const navigate = useNavigate();

    return (
        <div className='body'>
        <div className="dashBoard">
            {/* <div className='logo'>
                <img src={logo} alt=" "/>
            </div> */}
            <div className='buttons'>
                    <button className='view' onClick={()=>navigate(-1)}>Back</button>
                    <div className='space'></div>
                    <button className='view' onClick={()=>navigate('/jobOffers')}>View-Job-Offers</button>
                    <div className='space'></div>
                    {/* <button className='view' onClick={()=>navigate('/newApplication')}>Apply</button> */}
            </div>
            
            <Routes> 
                <Route path="/jobOffers" element={<Posts />} />
                <Route path="/newApplication/:post_id" element={<NewApplication />} />
                <Route path="/" element={<Home/>} exact />
            </Routes>
        </div>
    </div>  
    );
}

export default DashBoard ;