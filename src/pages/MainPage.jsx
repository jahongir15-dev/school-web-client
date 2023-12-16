import {Carousel} from "../component/Carousel";
import {useEffect, useState} from "react";
import {GetPerfects, GetProject, GetUsers} from "../connection/service/AppService";
import {APP_API} from "../connection/AppApi";
import about from "../assets/img/about.jpg"

export const MainPage = () => {
    const [perfect, setPerfect] = useState([])
    const [project, setProject] = useState([])
    const [user, setUser] = useState([])

    const getTeacher = async () => {
        try {
            const res = await GetUsers()
            setUser(res)
            console.log(res)
        } catch (err) {
            console.log(err)
        }
    }

    const getPerfect = async () => {
        try {
            const res = await GetPerfects()
            setPerfect(res)
        } catch (err) {
            console.log(err)
        }
    }

    const getProject = async () => {
        try {
            const res = await GetProject()
            setProject(res)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getPerfect().then(r => getPerfect())
        getProject().then(r => getProject())
        getTeacher().then(r => getTeacher())
    }, [])

    return (
        <>
            <Carousel/>

            {/*About Start*/}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <img className="img-fluid rounded mb-4 mb-lg-0" src={about} alt="404"/>
                        </div>
                        <div className="col-lg-7">
                            <div className="text-left mb-4">
                                <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: "5px"}}>Biz
                                    haqimizda</h5>
                                <h1>Biz bilan oson o'rganing</h1>
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


            {/*Courses Start*/}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: "5px"}}>Faxrimiz</h5>
                        <h1>Namunali o'quvchilar</h1>
                    </div>
                    <div className="row">
                        {perfect.map((item) => (
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="rounded overflow-hidden mb-2">
                                    <img className="img-fluid" src={APP_API.downloadPhoto + item.photoId} alt="404"/>
                                    <div className="bg-secondary p-4">
                                        <div className="d-flex justify-content-between mb-3">
                                            <h6 className="m-0"><i
                                                className="fa fa-users text-primary mr-2"/>{item.className}</h6>
                                        </div>
                                        <h5 className="h5">{item.firstName} {item.lastName} </h5>
                                        <div className="border-top mt-4 pt-4">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="m-0"><i
                                                    className="fa fa-star text-primary mr-2"/>{item.bio}
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/*Courses End*/}

            {/*Courses Start*/}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h5 className="text-primary text-uppercase mb-3"
                            style={{letterSpacing: "5px"}}>O'quvchilarimiz</h5>
                        <h1>Amaliy ishlari</h1>
                    </div>
                    <div className="row">
                        {project.map((item) => (
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="rounded overflow-hidden mb-2">
                                    <img className="img-fluid" src={APP_API.downloadPhoto + item.photoId} alt="404"/>
                                    <div className="bg-secondary p-4">
                                        <h2 className="h5">{item.name}</h2>
                                        <div className="border-top mt-4 pt-4">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="m-0">
                                                    {item.description}
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/*Courses End*/}

            {/*Registration Start*/}
            <div className="container-fluid bg-registration py-5" style={{margin: " 90px 0"}}>
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-7 mb-5 mb-lg-0">
                            <div className="mb-4">
                                <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: "5px"}}>Need
                                    Any
                                    Courses</h5>
                                <h1 className="text-white">30% Off For New Students</h1>
                            </div>
                            <p className="text-white">Invidunt lorem justo sanctus clita. Erat lorem labore ea,
                                justo
                                dolor
                                lorem ipsum
                                ut sed eos,
                                ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam
                                sea
                                ipsum est
                                dolor</p>
                            <ul className="list-inline text-white m-0">
                                <li className="py-2"><i className="fa fa-check text-primary mr-3"/>Labore eos amet
                                    dolor amet
                                    diam
                                </li>
                                <li className="py-2"><i className="fa fa-check text-primary mr-3"/>Etsea et sit
                                    dolor
                                    amet
                                    ipsum
                                </li>
                                <li className="py-2"><i className="fa fa-check text-primary mr-3"/>Diam dolor diam
                                    elitripsum
                                    vero.
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-5">
                            <div className="card border-0">
                                <div className="card-header bg-light text-center p-4">
                                    <h1 className="m-0">Sign Up Now</h1>
                                </div>
                                <div className="card-body rounded-bottom bg-primary p-5">
                                    <form>
                                        <div className="form-group">
                                            <input type="text" className="form-control border-0 p-4"
                                                   placeholder="Your name"
                                                   required="required"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control border-0 p-4"
                                                   placeholder="Your email"
                                                   required="required"/>
                                        </div>
                                        <div className="form-group">
                                            <select className="custom-select border-0 px-4"
                                                    style={{height: "47px"}}>
                                                <option selected>Select a course</option>
                                                <option value="1">Course 1</option>
                                                <option value="2">Course 1</option>
                                                <option value="3">Course 1</option>
                                            </select>
                                        </div>
                                        <div>
                                            <button className="btn btn-dark btn-block border-0 py-3"
                                                    type="submit">Sign
                                                Up
                                                Now
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Registration End*/}

            {/*Team Start*/}
            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <div className="text-center mb-5">
                        <h5 className="text-primary text-uppercase mb-3"
                            style={{letterSpacing: "5px"}}>O'qituvchilar</h5>
                        <h1>Meet Our Teachers</h1>
                    </div>
                    <div className="row">
                        {user.map((item) => (
                            item.roles[0].id === 2 ?
                                <div className="col-md-6 col-lg-3 text-center team mb-4">
                                    <div className="team-item rounded overflow-hidden mb-2">
                                        <div className="team-img position-relative">
                                            <img className="img-fluid" src={APP_API.downloadPhoto + item.photoId}
                                                 alt="404"/>
                                            <div className="team-social">
                                                <a className="btn btn-outline-light btn-square mx-1" href="#"><i
                                                    className="fab fa-twitter"/></a>
                                                <a className="btn btn-outline-light btn-square mx-1" href="#"><i
                                                    className="fab fa-facebook-f"/></a>
                                                <a className="btn btn-outline-light btn-square mx-1" href="#"><i
                                                    className="fab fa-linkedin-in"/></a>
                                            </div>
                                        </div>
                                        <div className="bg-secondary p-4">
                                            <h5>{item.firstName} {item.lastName}</h5>
                                            <p className="m-0">Web Designer</p>
                                        </div>
                                    </div>
                                </div>
                                :
                                <></>
                        ))}

                    </div>
                </div>
            </div>
            {/*Team End*/}

            {/*Testimonial Start*/}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h5 className="text-primary text-uppercase mb-3"
                            style={{letterSpacing: "5px"}}>Testimonial</h5>
                        <h1>What Say Our Students</h1>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="owl-carousel testimonial-carousel">
                                <div className="text-center">
                                    <i className="fa fa-3x fa-quote-left text-primary mb-4"/>
                                    <h4 className="font-weight-normal mb-4">Dolor eirmod diam stet kasd sed. Aliqu
                                        rebum
                                        est
                                        eos. Rebum
                                        elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet
                                        amet
                                        eirmod eos
                                        labore diam</h4>
                                    <img className="img-fluid mx-auto mb-3" src="img/testimonial-1.jpg" alt="404"/>
                                    <h5 className="m-0">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                                <div className="text-center">
                                    <i className="fa fa-3x fa-quote-left text-primary mb-4"/>
                                    <h4 className="font-weight-normal mb-4">Dolor eirmod diam stet kasd sed. Aliqu
                                        rebum
                                        est
                                        eos. Rebum
                                        elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet
                                        amet
                                        eirmod eos
                                        labore diam</h4>
                                    <img className="img-fluid mx-auto mb-3" src="img/testimonial-2.jpg" alt="404"/>
                                    <h5 className="m-0">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                                <div className="text-center">
                                    <i className="fa fa-3x fa-quote-left text-primary mb-4"/>
                                    <h4 className="font-weight-normal mb-4">Dolor eirmod diam stet kasd sed. Aliqu
                                        rebum
                                        est
                                        eos. Rebum
                                        elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet
                                        amet
                                        eirmod eos
                                        labore diam</h4>
                                    <img className="img-fluid mx-auto mb-3" src="img/testimonial-3.jpg" alt="404"/>
                                    <h5 className="m-0">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Testimonial End*/}

            {/*Blog Start*/}
            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <div className="text-center mb-5">
                        <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: "5px"}}>Our
                            Blog</h5>
                        <h1>Latest From Our Blog</h1>
                    </div>
                    <div className="row pb-3">
                        <div className="col-lg-4 mb-4">
                            <div className="blog-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src="img/blog-1.jpg" alt="404"/>
                                <a className="blog-overlay text-decoration-none" href="">
                                    <h5 className="text-white mb-3">Lorem elitr magna stet eirmod labore amet labore
                                        clita at ut
                                        clita</h5>
                                    <p className="text-primary m-0">Jan 01, 2050</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="blog-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src="img/blog-2.jpg" alt="404"/>
                                <a className="blog-overlay text-decoration-none" href="">
                                    <h5 className="text-white mb-3">Lorem elitr magna stet eirmod labore amet labore
                                        clita at ut
                                        clita</h5>
                                    <p className="text-primary m-0">Jan 01, 2050</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="blog-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src="img/blog-3.jpg" alt="404"/>
                                <a className="blog-overlay text-decoration-none" href="">
                                    <h5 className="text-white mb-3">Lorem elitr magna stet eirmod labore amet labore
                                        clita at ut
                                        clita</h5>
                                    <p className="text-primary m-0">Jan 01, 2050</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Blog End*/}

            {/*Back to Top*/}
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i
                class="fa fa-angle-double-up"/></a>

        </>
    )
}
