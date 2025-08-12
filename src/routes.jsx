import { BrowserRouter,Routes,Route } from "react-router";
import Index from "./pages";


export default function Navegacao (){
        return(
            <BrowserRouter>
                <Routes>
                    <Route path= "/" element={<Index/>}/>
               </Routes>
            </BrowserRouter>
        )
}