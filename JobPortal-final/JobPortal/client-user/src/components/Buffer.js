
import './buffer.css'
function Buffer(props){
    return (
        <div className="buffer">
            <h4>{props.status?
            <div class="middle">
            <div class="bar bar1"></div>
            <div class="bar bar2"></div>
            <div class="bar bar3"></div>
            <div class="bar bar4"></div>
            <div class="bar bar5"></div>
            <div class="bar bar6"></div>
            <div class="bar bar7"></div>
            <div class="bar bar8"></div>
          </div>
            :'not buffering'}</h4>
        </div>
    )
}

export default Buffer;