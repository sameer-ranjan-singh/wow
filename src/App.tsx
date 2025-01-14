import "./App.css";
import { LandingPage } from "./pages/LandingPage";
import { Signup } from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Twitter } from "./pages/Twitter";
import { Youtube } from "./pages/Youtube";
import { NotFound } from "./pages/NotFound";
import { Main } from "./components/ui/Main";
import { Trash } from "./pages/Trash";
import Docs from "./pages/Docs";
import Links from "./pages/Links";
import Fav from "./pages/Fav";
import { DashboardLayout } from "./pages/Dashboard";

function App() { 

 return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/dashboard" element={<DashboardLayout/>}>
              <Route index element={<Main/>}/>
              <Route path="twitter" element={<Twitter/>}/>
              <Route path="videos" element={<Youtube/>}/>
              <Route path="docs" element={<Docs/>}/>
              <Route path="links" element={<Links/>}/>
              <Route path="fav" element={<Fav/>}/>
              <Route path="bin" element={<Trash/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Route>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
 )
}

export default App;
