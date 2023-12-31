import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {GetPartners} from "../connection/service/AppService";
import {APP_API} from "../connection/AppApi";

export const Blog = () => {
    const [partners, setPartners] = useState([])

    const getPartners = async () => {
        try {
            const res = await GetPartners()
            setPartners(res)
        } catch (err) {
            console.log()
        }
    }

    useEffect(() => {
        getPartners().then(r => getPartners())
    }, [])

    return (
        <>
            {/*Header Start*/}
            <div class="container-fluid page-header" style={{marginBottom: "90px"}}>
                <div class="container">
                    <div class="d-flex flex-column justify-content-center" style={{minHeight: "300px"}}>
                        <h3 class="display-4 text-white text-uppercase">Hamkorlar</h3>
                        <div class="d-inline-flex text-white">
                            <p class="m-0 text-uppercase"><Link to={"/"} class="text-white">Bosh sahifa</Link></p>
                            <i class="fa fa-angle-double-right pt-1 px-3"/>
                            <p class="m-0 text-uppercase">Hamkorlar</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*Header End*/}

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
            {/*Partners End*/}

        </>
    )
}
