import './photos.css';
import rect1 from './Rectangle 239 (1).png'
import rect2 from './Rectangle 241 (1).png'
import rect3 from './Rectangle 243.png'
function photos() {
    return (
        <div className="black">
            <p className="bro"> BROWSE ALL MY OFFERINGS</p>
            <img className="rect" src={rect1} height="250px" ></img>
            <img className="rect2" src={rect2} height="250px" ></img>
            <img className="rect3" src={rect3} height="250px" ></img>
        </div >
    )
};
export default photos;