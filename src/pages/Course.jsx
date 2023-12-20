import {useEffect, useState} from "react";
import {GetPartners, GetPerfects} from "../connection/service/AppService";
import {APP_API} from "../connection/AppApi";
import {Link} from "react-router-dom";

export const Course = () => {
    const [perfect, setPerfect] = useState([])

    const getPerfect = async () => {
        try {
            const res = await GetPerfects()
            setPerfect(res)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getPerfect().then(r => getPerfect())
    }, [])

    return (
        <>

            {/*Header Start*/}
            <div class="container-fluid page-header" style={{marginBottom: "90px"}}>
                <div class="container">
                    <div class="d-flex flex-column justify-content-center" style={{minHeight: "300px"}}>
                        <h3 class="display-4 text-white text-uppercase">O'quvchilar</h3>
                        <div class="d-inline-flex text-white">
                            <p class="m-0 text-uppercase"><Link to={"/"} class="text-white">Bosh sahifa</Link></p>
                            <i class="fa fa-angle-double-right pt-1 px-3"/>
                            <p class="m-0 text-uppercase">O'quvchilar</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*Header End*/}

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
        </>
    )
}
