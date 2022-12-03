
function Buffer(props){
    return(
        <div className="buffer">
            <h4>{props.status?
             <div className="centered">
                <div className="blob-1"></div>
                 <div className="blob-2"></div>
            </div>
            :
            'not buffering'
            }</h4>
           
        </div>
    );
}

export default Buffer;