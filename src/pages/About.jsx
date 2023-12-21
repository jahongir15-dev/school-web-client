import about from "../assets/img/about.jpg"
import {Link} from "react-router-dom";

export const About = () => {

    return (
        <>
            {/*Header Start*/}
            <div class="container-fluid page-header" style={{marginBottom: "90px"}}>
                <div class="container">
                    <div class="d-flex flex-column justify-content-center" style={{minHeight: "300px"}}>
                        <h3 class="display-4 text-white text-uppercase">Biz haqimida</h3>
                        <div class="d-inline-flex text-white">
                            <p class="m-0 text-uppercase"><Link to={"/"} class="text-white">Bosh sahifa</Link></p>
                            <i class="fa fa-angle-double-right pt-1 px-3"/>
                            <p class="m-0 text-uppercase">Biz haqimida</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*Header End*/}

            {/*About Start*/}
            <div className="container-fluid py-1">
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


        </>
    )
}
