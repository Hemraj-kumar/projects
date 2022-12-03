import { useState } from "react";

import socket from "./socket";
import Buffer from "./Buffer";
import { useNavigate } from "react-router";
import './Posts.css'


function Posts(){
    
    const [ posts , setPosts ] = useState([]);
    const [ buffer , setBuffer ] = useState(true);

    socket.emit('getPosts' , (resp)=>{
        setPosts(resp);
        setBuffer(false)
    })

    socket.on('gotPost' , (post)=>{
        var temp = post;
        temp.push(post);
        setPosts(temp);
    })

    return (
        <div className="posts">
            <h2>Posts</h2>
            {buffer ? 
                <Buffer status={true}/> 
                : 
                posts.map((p)=>{
                    return <Post {...p} />
                })
            }
        </div>
    );
}

function Post(props){

    const navigate = useNavigate();

    return (
        // <div className="post">
        //     <h3>Job id : {props._id}</h3>
        //     <h3>{props.content}</h3>
        //     {/* <h3>Date : {props.date}</h3> */}
        //     <button onClick={()=>navigate('/newApplication/'+props._id)}>apply</button>
        // </div>
    <div className='container'>
        <div className="flipcard">
            <div className='inner'>
                <div className='front'>
                    <h3>Job id : {props._id}</h3>
                </div>
                <div className='back'>
                    <h3>{props.content}</h3>
                    <button onClick={()=>navigate('/newApplication/'+props._id)}>apply</button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Posts;