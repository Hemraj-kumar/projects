import { useState } from 'react';
import { Link } from 'react-router-dom';

import socket from './socket';
import Buffer from './Buffer';
import './dpost.css';

function Posts(){

    const [ posts , setPosts ] = useState([]);
    const [ buffer , setBuffer ] = useState(true);
    
    socket.emit('getPosts' , (resp)=>{
        setBuffer(false)
        setPosts(resp); 
    })

    socket.on('gotPost' , (post)=>{
        var temp = [...posts]
        temp.push(post);
        setPosts(temp);
    })

    return(
        <div className="posts" >

            <h1>Posts</h1>
            {
                buffer?<Buffer status={true}/>:posts.map((p)=>{return <Post post={p} />})
            }
        </div>
    );

}



function Post(props){

    const [ post , setPost ] = useState(props.post);

    socket.on(post._id+'/applicationCountChanged' , (obj)=>{
        setPost({...obj});
    })

    return(
    <div className='container'>
        <div className="flipcard">
            <div className='inner'>
                <div className='front'>
                    <h3>Job id : {post._id}</h3>
                </div>
                <div className='back'>
                    <h3>{post.content}</h3>
                    <h5>Applications count : {post.applications_count}</h5>
                    <Link  to={'/applications/'+post._id}>View-Applications</Link>
                </div>
            </div>
        </div>
    </div>
    );
    
}



export default Posts;
