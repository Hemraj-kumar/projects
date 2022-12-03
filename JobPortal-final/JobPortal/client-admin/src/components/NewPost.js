import { useRef, useState } from 'react';

import socket from './socket';
import Buffer from './Buffer';
import './newpost.css';
//     id : 1,
//     content : "post1 content",
//     date : '09/07/2022',
//     applications_count : 0,
// }

function NewPost(){

    const [ value , setValue ] = useState('');
    const [ result, setResult ]= useState('');
    const [ buffer , setBuffer ] = useState(false);

    const companyNameRef = useRef(null);
    const contentRef = useRef(null);
    const descRef = useRef(null);
    const featuresRef = useRef(null);

    const handleSubmit = (event)=>{
        event.preventDefault();
        setBuffer(true);
        socket.emit('addPost' , {
            company_name : companyNameRef.current.value,
            content : contentRef.current.value,
            desc : descRef.current.value,
            features : featuresRef.current.value,
        },
        (resp)=>{
            setResult(resp);
            setBuffer(false);
        })
        companyNameRef.current.value=''
        contentRef.current.value=''
        descRef.current.value=''
        featuresRef.current.value=''
    }

    return (
        <div className="newPost">
            <h1>Create Post</h1>
            <form className='content'>
                Company name:<div></div>
                <input className='details' type="text" ref={companyNameRef} />
                <div></div>
                Content:<div></div>
                <textarea className='details' ref={contentRef} ></textarea>
                <div></div>
                Job Description:<div></div>
                <textarea className='details' ref={descRef}></textarea>
                <div></div>
                Features:<div></div>
                <textarea className='details' ref={featuresRef} ></textarea>
                <div></div>
                <button className='submit' onClick={handleSubmit} >submit</button>
            </form>
            {buffer?<Buffer status={true} /> : result }
        </div>
    );

}

export default NewPost;