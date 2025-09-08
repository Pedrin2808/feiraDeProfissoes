import {Link} from 'react-router'
import './qrcode.scss';

export default function qr(){

    return(
        
<div className='qr-container'>
    <div className='qr-card'>
        <div >
        <img  src = "/src/assets/images/feiradep.png"></img>
    </div>
    <div>
        <img src = "/src/assets/images/qrcode.png" height = "380px"></img>
    </div>
</div>
</div>
    )
}




