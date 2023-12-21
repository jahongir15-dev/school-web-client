import {BrowserRouter, Routes, Route} from "react-router-dom";
import {MenuLayout} from "../layout/MenuLayout";
import {MainPage} from "../pages/MainPage";
import {About} from "../pages/About";
import {Blog} from "../pages/Blog";
import {Course} from "../pages/Course";
import {Single} from "../pages/Single";
import {Teacher} from "../pages/Teacher";
import {Project} from "../pages/Project";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<MenuLayout/>}>
                        <Route index element={<MainPage/>}/>
                        <Route path={"/about"} element={<About/>}/>
                        <Route path={"/blog"} element={<Blog/>}/>
                        <Route path={"/course"} element={<Course/>}/>
                        <Route path={"/single"} element={<Single/>}/>
                        <Route path={"/teacher"} element={<Teacher/>}/>
                        <Route path={"/project"} element={<Project/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
