import {BrowserRouter, Routes, Route} from "react-router-dom";
import {MenuLayout} from "../layout/MenuLayout";
import {MainPage} from "../pages/MainPage";
import {About} from "../pages/About";
import {Blog} from "../pages/Blog";
import {Contact} from "../pages/Contact";
import {Course} from "../pages/Course";
import {Single} from "../pages/Single";
import {Teacher} from "../pages/Teacher";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<MenuLayout/>}>
                        <Route index element={<MainPage/>}/>
                        <Route path={"/about"} element={<About/>}/>
                        <Route path={"/blog"} element={<Blog/>}/>
                        <Route path={"/contact"} element={<Contact/>}/>
                        <Route path={"/course"} element={<Course/>}/>
                        <Route path={"/single"} element={<Single/>}/>
                        <Route path={"/teacher"} element={<Teacher/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
