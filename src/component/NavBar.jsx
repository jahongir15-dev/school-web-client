import {Link} from "react-router-dom";

export const NavBar = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row border-top px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <Link to={"#navbar-vertical"}
                              className="d-flex align-items-center justify-content-between bg-secondary w-100 text-decoration-none"
                              data-toggle="collapse" style={{height: "67px", padding: "0 30px"}}>
                            <h5 className="text-primary m-0"><i className="fa fa-book-open mr-2"/>Maktab</h5>
                        </Link>

                    </div>
                    <div className="col-lg-9">
                        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                            <Link to={""} className="text-decoration-none d-block d-lg-none">
                                <h1 className="m-0"><span className="text-primary">4</span>-maktab</h1>
                            </Link>
                            <button type="button" className="navbar-toggler" data-toggle="collapse"
                                    data-target="#navbarCollapse">
                                <span className="navbar-toggler-icon"/>
                            </button>
                            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div className="navbar-nav py-0">
                                    <Link to={"/"} className="nav-item nav-link active">Bosh sahifa </Link>
                                    <Link to={"/about"} className="nav-item nav-link">Biz haqimizda</Link>
                                    <Link to={"/teacher"} className="nav-item nav-link">O'qituvchilar</Link>
                                    <div className="nav-item dropdown">
                                        <Link to={"#"} className="nav-link dropdown-toggle"
                                              data-toggle="dropdown">Bo'lim</Link>
                                        <div className="dropdown-menu rounded-0 m-0">
                                            <Link to={"/course"} className="nav-item nav-link">O'quvchilar</Link>
                                            <Link to={"/blog"} className="dropdown-item">Blog List</Link>
                                            <Link to={"/single"} className="dropdown-item">Blog Detail</Link>
                                        </div>
                                    </div>
                                    <Link to={"/contact"} className="nav-item nav-link">Bog'lanish</Link>
                                </div>
                                <Link to={""} className="btn btn-primary py-2 px-4 ml-auto d-none d-lg-block">Log
                                    in</Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        </>
    )
}
