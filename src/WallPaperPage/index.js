
import { Link } from 'react-router-dom';
import './wallpaper.scss'

function WallPapers({walls, index, max}) {
    return (
        <div id='wall-papers-page'>
            <div className='title col-lg-11'>QIZHY DESKTOP WALLPAPERS</div>
            <div className='list-wall-papers col-lg-11'>
                {walls.map((wall, index) => {
                    return <div key={index} className='wall-paper-item col-lg-3'>
                        <Link className='link' style={{color : 'black'}} to={`/wallpaper/${wall.title.toLowerCase().split(' ').join('-')}`}>
                            <img src={wall.image} width='100%' />
                            <div className='wall-paper-date'>{wall.createdAt}</div>
                            <div className='wall-paper-name'>{wall.title}</div>
                        </Link>
                    </div> 
                
                })} 
            </div>
            <div className='col-lg-12 number'>
                <input type='hidden' className='hid' value={index} />
                {index == 1 ? <></> : <p className='prev'><Link to={'/wallpapers/page-'+ (index-1)}>&lt;&lt; Previous Page</Link></p>}
                {index == max ? <></> : <p className='next'><Link to={'/wallpapers/page-'+ (index+1)}>Next Page &gt;&gt;</Link></p>}
            </div>
        </div>
    );
}

export default WallPapers;