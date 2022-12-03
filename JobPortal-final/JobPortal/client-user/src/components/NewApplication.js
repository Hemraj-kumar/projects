import { useState , useRef } from "react";
import { useParams } from "react-router";

import socket from "./socket";
import Buffer from "./Buffer";
import './NewApplication.css'

function NewApplication(){

    const params = useParams();
    const post_id = params.post_id;

    const [ result , setResult ] = useState('');
    const [ buffer , setBuffer ] = useState(false);

    const nameRef = useRef(null);
    const qualificationRef = useRef(null);
    const phnoRef = useRef(null);
    const dobRef = useRef(null);
    const addressRef = useRef(null);
    const universityRef = useRef(null);
    const skillsRef = useRef(null);
    const experienceRef = useRef(null);
    const achievementsRef = useRef(null);
    const mailRef = useRef(null);
    const linkedinRef = useRef(null);

    const handleSubmit = (event)=>{
        event.preventDefault();
        socket.emit('addApplication' , {
            post_id : post_id,
            name : nameRef.current.value,
            qualification : qualificationRef.current.value,
            phno : phnoRef.current.value,
            dob : dobRef.current.value,
            address : addressRef.current.value,
            university : universityRef.current.value,
            skills : skillsRef.current.value,
            experience : experienceRef.current.value,
            achievements : achievementsRef.current.value,
            mail : mailRef.current.value,
            linkedin : linkedinRef.current.value
        } , (resp)=>{
            setResult(resp)
            setBuffer(false)
            nameRef.current.value=''
            qualificationRef.current.value=''
            phnoRef.current.value=''
            dobRef.current.value=''
            addressRef.current.value=''
            universityRef.current.value=''
            skillsRef.current.value=''
            experienceRef.current.value=''
            achievementsRef.current.value=''
            mailRef.current.value=''
            linkedinRef.current.value=''
        })
    }

    return (
        <div className="newApplication">
            <div className="title">FLASH</div>
            <form className="form">
                Name : <div></div>
                <input ref={nameRef} type="text" /><div></div>
                Qualification : <div></div>
                <input ref={qualificationRef} type="text" /><div></div>
                Phone No. : <div></div>
                <input ref={phnoRef} type="number" /><div></div>
                Date of birth (YYYY-MM-DD) : <div></div>
                <input ref={dobRef} type="Date" /><div></div>
                Address : <div></div>
                <textarea ref={addressRef} type="text" ></textarea><div></div>
                University : <div></div>
                <input ref={universityRef} type="text" /><div></div>
                Skills : <div></div>
                <textarea ref={skillsRef} type="text" ></textarea><div></div>
                Experience : <div></div>
                <input ref={experienceRef} type="text" /><div></div>
                Achievements : <div></div>
                <textarea ref={achievementsRef} type="text" ></textarea><div></div>
                Mail : <div></div>
                <input ref={mailRef} type="email" /><div></div>
                Linkedin profile :<div></div> 
                <input ref={linkedinRef} type="text" /><div></div>
                <div></div>
                <button onClick={ handleSubmit }>submit</button>
            </form>
            <br/>{buffer?
                        <Buffer status={true}/>
                        :
                        result
                }
        </div>
    );

}

export default NewApplication ;