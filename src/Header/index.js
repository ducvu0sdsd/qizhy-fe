
import { Link } from 'react-router-dom';
import './header.scss'
import Qizhy from './qizhy.png'

function Header() {

    return (
        <div id="header" className='col-lg-12'>
            <div>
                <Link className='logo' to={'/'}><img src={Qizhy} height='70%' /></Link>
            </div>
            <div id='list-menu'>
                <div className='menu-item'><Link className='link' to={'/'}>Home</Link></div>
                <div className='menu-item'><Link className='link' style={{display : 'flex', alignItems: 'center'}} to={'/wallpapers/page-1'}>Live WallPapers <i className='bx bxs-down-arrow'></i></Link></div>
            </div>
        </div>
    );
}

export default Header;