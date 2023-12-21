import {Carousel} from "../component/Carousel";
import {useEffect, useState} from "react";
import {GetPartners, GetPerfects, GetProject, GetUsers} from "../connection/service/AppService";
import {APP_API} from "../connection/AppApi";
import about from "../assets/img/about.jpg"
import {Link} from "react-router-dom";

export const MainPage = () => {
    const [perfect, setPerfect] = useState([])
    const [project, setProject] = useState([])
    const [user, setUser] = useState([])
    const [partners, setPartners] = useState([])

    const getPartners = async () => {
        try {
            const res = await GetPartners()
            setPartners(res)
        } catch (err) {
            console.log()
        }
    }

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
        getPartners().then(r => getPartners())
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
                            <p>Kitob tumanidagi eng kuchli maktablardan biri bizning maktab hisoblanadi.
                                Bizning maktab ko'p yillardan beri o'z faoliyatini olib bormoqda. Maktab 1000 dan ortiq
                                o'quvchilarga sifati bilim olishiga imkoniyatlar eshigini ochmoqda. Maktabimizda 50 dan
                                ortiq malakali ustoz va murabiyylar sifatli bilim berish uchun harakat qiladi.
                                Maktabimiz sifatli bilib berishga doim harakat qiladi
                            </p>
                            <Link to={"/about"} className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Ko'proq biling </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/*About End*/}

            {/*Registration Start*/}
            <div className="container-fluid bg-registration py-5" style={{margin: " 90px 0"}} x>
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-7 mb-5 mb-lg-0">
                            <div className="mb-4">
                                <h1 className="text-primary text-uppercase mb-3" style={{letterSpacing: "5px"}}>Maktab
                                    haqida</h1>
                            </div>
                            <p className="text-white">
                                Maktabimiz 1000 dan ortiq o'quvchilarga talim berib kelgan va bundan keyin ham bilib
                                berishda davom etadi. Maktab o'quvchilarining 15% dan ortig'i oliy bilim yurtlarida
                                o'qishga kirgan</p>
                            <ul className="list-inline text-white m-0">
                                <li className="py-2"><i className="fa fa-check text-primary mr-3"/>
                                    1000 dan ortiq o'quvchilar
                                </li>
                                <li className="py-2"><i className="fa fa-check text-primary mr-3"/>
                                    50 dan ortiq malakali o'qituvchilar
                                </li>
                                <li className="py-2"><i className="fa fa-check text-primary mr-3"/>
                                    Sifatli talim tizimi
                                </li>
                            </ul>
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
                        <h1>O'qituvchilar bilan muloqot qiling</h1>
                    </div>
                    <div className="row">
                        {user.map((item) => (
                            item.roles[0].id === 1 ?
                                <></>
                                :
                                <div className="col-md-6 col-lg-3 text-center team mb-4">
                                    <div className="team-item rounded overflow-hidden mb-2">
                                        <div className="team-img position-relative">
                                            <img style={{width: "550px", aspectRatio: "3/4"}} className="img-fluid"
                                                 src={APP_API.downloadPhoto + item.photoId}
                                                 alt="404"/>
                                            <div className="team-social">
                                                <h6 className={"text-warning mr-5"}>Telefon
                                                    <h4 className={"text-white ml-5"}>{item.phoneNumber}</h4>
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="bg-secondary p-4">
                                            <h5>{item.firstName} {item.lastName}</h5>
                                            <p className="m-0">{item.roles[0].roleName}</p>
                                        </div>
                                    </div>
                                </div>
                        ))}

                    </div>
                </div>
            </div>
            {/*Team End*/}

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
                                    <img style={{width: "550px",height:"430px", aspectRatio: "3/4"}} className="img-fluid"
                                         src={APP_API.downloadPhoto + item.photoId}/>
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
                            style={{letterSpacing: "5px"}}>Ko'rgazmalar</h5>
                        <h1>O'quvchilarimiz tomonidan</h1>
                    </div>
                    <div className="row">
                        {project.map((item) => (
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="rounded overflow-hidden mb-2">
                                    <img className="img-fluid" style={{width: "350px", aspectRatio: "5/4"}}
                                         src={APP_API.downloadPhoto + item.photoId} alt="404"/>
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

            {/*Partners Start*/}
            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <div className="text-center mb-5">
                        <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: "5px"}}>Our
                            Hamkorlar</h5>
                        <h1>Bizning maktab hamkorlari</h1>
                    </div>
                    <div className="row pb-3">
                        {partners.map((item) => (
                            <div className="col-lg-4 col-md-6 mb-4">
                                <div className="rounded overflow-hidden mb-2">
                                    <img style={{width: "550px",height:"370px"}} className="img-fluid"
                                         src={APP_API.downloadPhoto + item.photoId}/>
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
            {/*Partners End*/}

            {/*Back to Top*/}
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i
                class="fa fa-angle-double-up"/></a>
        </>
    )
}
