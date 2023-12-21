import {APP_API} from "../connection/AppApi";
import {useEffect, useState} from "react";
import {GetUsers} from "../connection/service/AppService";
import {Link} from "react-router-dom";

export const Teacher = () => {
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


    useEffect(() => {
        getTeacher().then(r => getTeacher())
    }, [])


    return (
        <>
            {/*Header Start*/}
            <div class="container-fluid page-header" style={{marginBottom: "90px"}}>
                <div class="container">
                    <div class="d-flex flex-column justify-content-center" style={{minHeight: "300px"}}>
                        <h3 class="display-4 text-white text-uppercase">O'qituvchilar</h3>
                        <div class="d-inline-flex text-white">
                            <p class="m-0 text-uppercase"><Link to={"/"} class="text-white">Bosh sahifa</Link></p>
                            <i class="fa fa-angle-double-right pt-1 px-3"/>
                            <p class="m-0 text-uppercase">Courses</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*Header End*/}

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
        </>
    )
}
