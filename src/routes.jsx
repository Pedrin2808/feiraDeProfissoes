import { BrowserRouter,Routes,Route } from "react-router";
import Index from "./pages/index";
import Login from "./pages/login"
import Buscv from "./pages/buscv"
import Vincular from "./pages/vincular"
import Nossologin from "./pages/nossologin"
import Turmas from "./pages/turmas"
import Qrcode from "./pages/qrcode"

export default function Navegacao (){
        return(
            <BrowserRouter>
                <Routes>
                    <Route path= "/" element={<Index/>}/>
                    <Route path= "/login" element={<Login/>}/>
                    <Route path= "/buscar" element={<Buscv/>}/>
                    <Route path= "/vincular" element={<Vincular/>}/>
                    <Route path= "/loginoculto" element={<Nossologin/>}/>
                    <Route path= "/turmas" element={<Turmas/>}/>
                    <Route path= "/qr" element={<Qrcode/>}/>
               </Routes>
            </BrowserRouter>
        )
}