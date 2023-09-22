

import { Link } from 'react-router-dom';
import './prologue.scss'

function Prologue() {
    return (
        <div id='prologue'  className='col-lg-7'>
            <p className='description'>EXPLORE AND DOWNLOAD TO YOUR DEVICE</p>
            <h1 className='title'>Explore works of art</h1>
            <p className='content'>You can view and download your favorite works and leave us your support on social media platforms. Start exploring right here!!!</p>
            <button className='btn-try-now'><Link className='link' to={'/wallpapers/page-1'}>Try Now</Link></button>
        </div>
    );
}

export default Prologue;