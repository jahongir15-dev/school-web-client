import {Link} from "react-router-dom";
import {APP_API} from "../connection/AppApi";
import {useEffect, useState} from "react";
import {GetProject} from "../connection/service/AppService";

export const Project = () => {
    const [project, setProject] = useState([])



    const getProject = async () => {
        try {
            const res = await GetProject()
            setProject(res)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getProject().then(r => getProject())
    }, [])
    return (
        <>
            {/*Header Start*/}
            <div class="container-fluid page-header" style={{marginBottom: "90px"}}>
                <div class="container">
                    <div class="d-flex flex-column justify-content-center" style={{minHeight: "300px"}}>
                        <h3 class="display-4 text-white text-uppercase">Amaliy ishlar</h3>
                        <div class="d-inline-flex text-white">
                            <p class="m-0 text-uppercase"><Link to={"/"} class="text-white">Bosh sahifa</Link></p>
                            <i class="fa fa-angle-double-right pt-1 px-3"/>
                            <p class="m-0 text-uppercase">Amaliy ishlar</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*Header End*/}


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
        </>
    )
}
