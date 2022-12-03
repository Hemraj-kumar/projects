import { Route , Routes , useNavigate } from 'react-router-dom';

import NewPost from './NewPost';
import Posts from './Posts';
import Applications from './Applicatons';
import './dashboard.css';
var link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('type', 'text/css');
link.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Anton&family=Orbitron&display=swap');
document.head.appendChild(link);

function DashBoard(){

    const navigate = useNavigate();
    

    return(
            <div className="dashBoard">
                <div className='buttons'>
                        <button className='view' onClick={()=>navigate(-1)}>Back</button>
                        <div className='empty'></div>
                        {/* <Link to="/newPost" >create-post</Link> */}
                        <button className='view' onClick={()=>navigate('/newPost')}>Create-Post</button>
                        <div className='empty'></div>
                        {/* <Link to="/posts" >view-posts</Link> */}
                        <button className='view' onClick={()=>navigate('/posts')}>View-Posts</button>
                </div>
                <Routes>
                    <Route path="/newPost" element={<NewPost/>} />
                    <Route path="/posts" element={<Posts/>} />
                    <Route path="/applications/:post_id" element={<Applications /> } />
                </Routes>
            </div>

    );

}

export default DashBoard ;