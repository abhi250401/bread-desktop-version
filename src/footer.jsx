import './footer.css';
import sfy from './sfy.png';
import s from './Vector.png';
function footer() {
    return (
        <div className="purple">
            <div className="li">
                <p>Powered by bread</p>
                <img className="slog" src={sfy} alt="hi"></img>
                <img className="slogo" src={s} alt="logo"></img>
                <ul className="end">
                    <li>Terms</li>
                    <li>privacy</li>

                </ul>
            </div>

        </div>



    )
};
export default footer;