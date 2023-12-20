import {Link} from "react-router-dom";

export const Footer = () => {
    return (
        <>
            <div className="container-fluid bg-dark text-white py-5 px-sm-3 px-lg-5" style={{marginTop: "90px"}}>
                <div className="row pt-5">
                    <div className="col-lg-7 col-md-12">
                        <div className="row">
                            <div className="col-md-6 mb-5">
                                <h5 className="text-primary text-uppercase mb-4" style={{letterSpacing: "5px"}}>Bu
                                    yerdan toping</h5>
                                <p><i className="fa fa-map-marker-alt mr-2"/>123 Street, New York, USA</p>
                                <p><i className="fa fa-phone-alt mr-2"/>+012 345 67890</p>
                                <p><i className="fa fa-envelope mr-2"/>info@example.com</p>
                                <div className="d-flex justify-content-start mt-4">
                                    <a className="btn btn-outline-light btn-square mr-2" href="#"><i
                                        className="fab fa-twitter"/></a>
                                    <a className="btn btn-outline-light btn-square mr-2" href="#"><i
                                        className="fab fa-facebook-f"/></a>
                                    <a className="btn btn-outline-light btn-square mr-2" href="#"><i
                                        className="fab fa-linkedin-in"/></a>
                                    <a className="btn btn-outline-light btn-square" href="#"><i
                                        className="fab fa-instagram"/></a>
                                </div>
                            </div>
                            <div className="col-md-6 mb-5">
                                <h5 className="text-primary text-uppercase mb-4" style={{letterSpacing: "5px"}}>Biznig
                                    a'zolar</h5>
                                <div className="d-flex flex-column justify-content-start">
                                    <Link to={"/teacher"} className="text-white mb-2"><i
                                        className="fa fa-angle-right mr-2"/>O'qituvchilar</Link>
                                    <Link to={"/course"} className="text-white mb-2"><i
                                        className="fa fa-angle-right mr-2"/>O'quvchilar</Link>
                                    <Link to={"/partner"} className="text-white mb-2"><i
                                        className="fa fa-angle-right mr-2"/>Hamkorlar</Link>
                                    <Link to={"/items"} className="text-white mb-2"><i
                                        className="fa fa-angle-right mr-2"/>Ko'rgazmalar</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 mb-5">
                        <h5 className="text-primary text-uppercase mb-4" style={{letterSpacing: "5px"}}>Newsletter</h5>
                        <p>Rebum labore lorem dolores kasd est, et ipsum amet et at kasd, ipsum sea tempor magna tempor.
                            Accu kasd sed ea duo ipsum. Dolor duo eirmod sea justo no lorem est diam</p>
                        <div className="w-100">
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5"
                 style={{borderColor: "rgba(256, 256, 256, .1) !important"}}>
                <div className="row">
                    <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
                        <p className="m-0 text-white">&copy; <a href="#">Domain Name</a>. All Rights Reserved. Designed
                            by <a href="">uTeam Jakhongir</a>
                        </p>
                    </div>
                    <div className="col-lg-6 text-center text-md-right">
                        <ul className="nav d-inline-flex">
                            <li className="nav-item">
                                <a className="nav-link text-white py-0" href="#">Privacy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white py-0" href="#">Terms</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white py-0" href="#">FAQs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white py-0" href="#">Help</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
