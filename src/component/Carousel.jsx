import {useEffect, useState} from "react";
import {GetNews} from "../connection/service/AppService";
import {APP_API} from "../connection/AppApi";

export const Carousel = () => {
    const [news, setNews] = useState([])

    const GetNew = async () => {
        try {
            const res = await GetNews()
            setNews(res)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        GetNew().then(r => GetNew())
    }, [])

    return (
        <>
            <div className="container-fluid p-0 pb-5 mb-5">
                <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#header-carousel" data-slide-to="0" className="active"/>
                        <li data-target="#header-carousel" data-slide-to="1"/>
                        <li data-target="#header-carousel" data-slide-to="2"/>
                    </ol>
                    <div className="carousel-inner">
                        {news.map((item) => (
                            <div>
                                <div className="carousel-item active" style={{minHeight: "300px"}}>
                                    <img className="position-relative w-100" src={APP_API.downloadPhoto + item.photoId}
                                         style={{minHeight: "300px", objectFit: "cover"}} alt={"404"}/>
                                    <div className="carousel-caption d-flex align-items-center justify-content-center">
                                        <div className="p-5" style={{width: "100%", maxWidth: "900px"}}>
                                            <h5 className="text-white text-uppercase mb-md-3">Maktabimizdagi yangiliklar</h5>
                                            <h1 className="display-3 text-white mb-md-4">Best Education From Your
                                                Home</h1>
                                            <a href=""
                                               className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn
                                                More</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item " style={{minHeight: "300px"}}>
                                    <img className="position-relative w-100" src={APP_API.downloadPhoto + item.photoId}
                                         style={{minHeight: "300px", objectFit: "cover"}} alt={"404"}/>
                                    <div className="carousel-caption d-flex align-items-center justify-content-center">
                                        <div className="p-5" style={{width: "100%", maxWidth: "900px"}}>
                                            <h5 className="text-white text-uppercase mb-md-3">Best Online Courses</h5>
                                            <h1 className="display-3 text-white mb-md-4">Best Education From Your
                                                Home</h1>
                                            <a href=""
                                               className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn
                                                More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
