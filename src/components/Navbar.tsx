/* eslint-disable */
import "bootstrap/dist/css/bootstrap.min.css";
// import Carousel from "./form/carousel";
const Navbar = () => {
    return (
        <>
        <div className="navbar-container">
        <header className="navbar">
                <div className="main-container">
                    <div className="logo-image">
                    <img className="logo-health"
                    src="https://pbs.twimg.com/profile_images/1608776903925661697/8No2rvlx_400x400.jpg"
                    />
                    </div>

                    <div className="main-navbar">
                        <div className="navbar-upper">
                            <ul className="navbar-upper">
                                <li className="nav-item-upper">
                                    <a className="nav-link-upper" href="#">Transplant Facilities Available |</a>
                                </li>
                                <li className="nav-item-upper">
                                    <a className="nav-link-upper" href="#">Executive Health Schemes |</a>
                                </li>
                                <li className="nav-item-upper">
                                    <a className="nav-link-upper" href="#">Photo Gallery |</a>
                                </li>
                                <li className="nav-item-upper">
                                    <a className="nav-link-upper" href="#">Downloads |</a>
                                </li>
                                <li className="nav-item-upper">
                                    <a className="nav-link-upper" href="#">Contact Us |</a>
                                </li>
                                <li className="nav-item-upper">
                                    <a className="nav-link-upper" href="#">Patient Stories |</a>
                                </li>
                                <li className="nav-item-upper">
                                    <a className="nav-link-upper" href="#">Stents Pricing</a>
                                </li>
                            </ul>
                        </div>
                        <div className="navbar-middle">
                        <ul className="navbar-middle">
                    <li className="nav-item-middle">
                        <a className="nav-link-middle" href="/PatientApplication">Patient Application </a>
                    </li>
                    <li className="nav-item-middle">
                        <a className="nav-link-middle" href="/aboutus">About Us</a>
                    </li>
                    <li className="nav-item-middle">
                        <a className="nav-link-middle" href="/OrganisationDetail">Organisation Detail</a>
                    </li>
                    <li className="nav-item-middle">
                        <a className="nav-link-middle" href="#">Feedback/Suggestions</a>
                    </li>
                    <li className="nav-item-middle">
                        <a className="nav-link-middle" href="#">BPL Portal</a>
                    </li>
                    <li className="nav-item-middle">
                        <a className="nav-link-middle" href="/signin">Register</a>
                    </li>
                </ul>
                        </div>
                    </div>
                </div>
                </header>
            
                </div>
                </>
    )
}

export default Navbar