import './navbar.css'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark " style={{ backgroundColor: "rgba(115, 82, 255, 1)" }} >
            <div className="container-fluid" >
                <a class="navbar-brand" href="#">bre.ad/jane</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav ">
                        <li class="nav-item">
                            <a class="nav-link " aria-current="page" href="#">Offerings</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Other</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Testimonials</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact Me</a>
                        </li>
                    </ul>
                    <button className="bts2">
                        Book trial
                    </button>

                </div>
            </div>
        </nav>
    )
};

export default Navbar;