import { useState } from "react";
import { useParams } from "react-router";

import socket from "./socket";
import Buffer from "./Buffer";
import './application.css';

// {
//     id : 1,
//     post_id : 1,
//     application : {
//         name : "sam"
//     }
// }


function Applications(){

    const {post_id} = useParams();

    const [ applications , setApplications ] = useState([]);
    const [ buffer , setBuffer ] = useState(true);

    socket.emit('getApplications' , {post_id : post_id} , (resp)=>{
        // console.log(resp)
        setApplications(resp)
        setBuffer(false)
    });

    socket.on(post_id+'/gotApplication' , (application)=>{
        var temp = applications;
        temp.push({...application});
        setApplications(temp);
    })

    return (
        <div className="applications">
            Applications of Job : {post_id}
            {buffer?<Buffer status={true} /> : (applications===[]?'NO applications':applications.map(
                (a)=>{
                    return <Application application={a} />
                }
            ))
        }
        </div>
    );

}


function Application(props){

    return (
        <div className="application" >
            <h3>Application id : {props.application._id}</h3>
            <h5>{props.application.name}</h5>
        </div>
    );

}

export default Applications ;
