import {useEffect, useState} from "react";
import {GetNews} from "../connection/service/AppService";
import {APP_API} from "../connection/AppApi";
import './caru.css'
import img from "../assets/img/carousel-1.jpg"

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
            <div id="carousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner" role="listbox">

                    <div className="carousel-item active">
                        <img className="position-relative w-100" src={img} alt=""/>
                        <div className="carousel-caption d-flex align-items-center justify-content-center">
                            <div className="p-5" style={{width: "100%", maxWidth: "900px"}}>
                                <h1 className="display-3 text-white mb-md-4">4-maktab</h1>
                                <h5 className="text-white text-uppercase mb-md-3">kitob tumanidagi eng yaxshi maktablar
                                    qatorida turuvchi maktablardan biri</h5>
                                <button className={"btn btn-primary"}>Biz haqimizda</button>
                            </div>
                        </div>
                    </div>

                    {news.map((item) => (
                        <div className="carousel-item">
                            <img className="position-relative w-100" src={APP_API.downloadPhoto + item.photoId} alt=""/>
                            <div className="carousel-caption d-flex align-items-center justify-content-center">
                                <div className="p-5" style={{width: "100%", maxWidth: "900px"}}>
                                    <h1 className="display-3 text-white mb-md-4">{item.name}</h1>
                                    <h5 className="text-white text-uppercase mb-md-3">{item.description}</h5>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

                <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"/>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"/>
                    <span className="sr-only">Next</span>
                </a>

            </div>
        </>
    )
}
