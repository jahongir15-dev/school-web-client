import about from "../assets/img/about.jpg"

export const About = () => {

    return (
        <>

            {/*About Start*/}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <img className="img-fluid rounded mb-4 mb-lg-0" src={about} alt="404"/>
                        </div>
                        <div className="col-lg-7">
                            <div className="text-left mb-4">
                                <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: "5px"}}>About
                                    Us</h5>
                                <h1>Innovative Way To Learn</h1>
                            </div>
                            <p>Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita, ipsum dolores amet
                                voluptua duo
                                dolores et sit ipsum rebum, sadipscing et erat eirmod diam kasd labore clita est. Diam
                                sanctus
                                gubergren sit rebum clita amet, sea est sea vero sed et. Sadipscing labore tempor at sit
                                dolor clita
                                consetetur diam. Diam ut diam tempor no et, lorem dolore invidunt no nonumy stet ea
                                labore, dolor
                                justo et sit gubergren diam sed sed no ipsum. Sit tempor ut nonumy elitr dolores justo
                                aliquyam
                                ipsum stet</p>
                            <a href="" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn
                                More</a>
                        </div>
                    </div>
                </div>
            </div>
            {/*About End*/}

            {/*Registration Start*/}
            <div className="container-fluid bg-registration py-5" style={{margin: " 90px 0"}}>
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-7 mb-5 mb-lg-0">
                            <div className="mb-4">
                                <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: "5px"}}>Need Any
                                    Courses</h5>
                                <h1 className="text-white">30% Off For New Students</h1>
                            </div>
                            <p className="text-white">Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
                                dolor
                                lorem ipsum
                                ut sed eos,
                                ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea
                                ipsum est
                                dolor</p>
                            <ul className="list-inline text-white m-0">
                                <li className="py-2"><i className="fa fa-check text-primary mr-3"/>Labore eos amet
                                    dolor amet
                                    diam
                                </li>
                                <li className="py-2"><i className="fa fa-check text-primary mr-3"/>Etsea et sit dolor
                                    amet
                                    ipsum
                                </li>
                                <li className="py-2"><i className="fa fa-check text-primary mr-3"/>Diam dolor diam
                                    elitripsum
                                    vero.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/*Registration End*/}

        </>
    )
}
