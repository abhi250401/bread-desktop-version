import image from './profile.png';
import sfy from './sfy.png';
import s from './Vector.png';
import location from './location.png';
import msg from './message.png';
import yt from './yt.png';
import './main.css'
function main() {
    return (
        <div className="component">
            <div className="component2">
                <div className="upper">
                    <img className="profilephoto" src={image} alt="profile" align="left"></img>



                    <button className="bts">
                        Yoga
                    </button>
                    <button className="bts">
                        Fitness
                    </button>
                    <br></br>
                    <button className="bts bts1">
                        Wellness
                    </button>



                    <button type="button" class="btn1 ">Book Trial </button>
                    <button type="button" class="btn2 ">Contact Me</button>

                </div>
                <div className="des">
                    <p className="name">Jane Doe</p>

                </div>
                <div>
                    <p className="des2"> Hi, I am Jane Doe, your next door fitness instructor with just one goal - Make people fit and healthy.Loren ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
                </div>
                <div className="l">
                    <img className="slog" src={sfy} alt="hi"></img>
                    <img className="slogo" src={s} alt="logo"></img>
                </div>
                <hr></hr>
                <div className="lang">
                    <p> <img src={location} alt="location"></img>
                        Lives In
                        <button >New delhi</button></p>
                    <p>
                        <img src={msg} alt="msg" ></img>
                        Speakes in <button>
                            English
                        </button><button>Hindi</button><button>Punjabi</button>
                    </p>

                </div>

                <div className="des2">
                    <p className="info">
                        Check out my video about 30 min yoga for beginners
                        <a className="link" href="#">Contact me</a>
                    </p>
                    <img src={yt} className="video" alt="video"></img>
                </div>


            </div> <form className="formend">
                <div class="form-group">


                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                </div>


                <button type="submit" class="bt btn-primary">Subscribe</button>
            </form>

        </div>
    )
};
export default main;