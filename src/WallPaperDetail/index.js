
import { Link } from 'react-router-dom';
import './wallpaperdetail.scss'
import YouTube from 'react-youtube';

function WallPaperDetail({wall, walls}) {

    const opts = {
        width: '100%',
        height : '540px'
    };
    
    const filterWalls = () => {
        let arr= []
        walls.forEach(item => {
            if (arr.length <= 10) {
                if (item.title != wall.title) {
                    arr.push(item)
                }
            } else {
                return;
            }
        })
        return arr;
    }
    const wallpapers = filterWalls()

    return (
        <div className='col-lg-12 wall-paper-detail'>
            <div className='wrapper col-lg-12'>
                <div className='wrapper-left col-lg-8'>
                    <YouTube className='col-lg-12' videoId={wall.video} opts={opts}  />
                    <div className='title col-lg-12'>
                        <span>{wall.title}</span>
                        <span className='date'>{wall.createdAt}</span>
                    </div>
                    <div className='downloads'>
                        <div>
                            <span>Download Free With Ads: </span>
                            {wall.URLHD != '' ? <a target='_blank' href={wall.URLHD}><button style={{cursor:'pointer'}}>HD</button></a> : <></>}
                            {wall.URL2K != '' ? <a target='_blank' href={wall.URL2K}><button style={{cursor:'pointer'}}>2K</button></a> : <></>}
                            {wall.URL4K != '' ? <a target='_blank' href={wall.URL4K}><button style={{cursor:'pointer'}}>4K</button></a> : <></>}
                        </div>
                    </div>
                </div>
                <div className='wrapper-right col-lg-4'>
                    {wallpapers.map((item, index) => {
                        if (item.title != wall.title) {
                            return <div key={index} className='wall-paper-other col-lg-6'>
                            <Link className='link' style={{color : 'black'}} to={`/wallpaper/${item.title.toLowerCase().split(' ').join('-')}`}>
                                <img src={item.image} width='100%'></img>
                                <p>{item.title}</p>
                            </Link>
                        </div>
                        }
                    })}
                    <Link className='link' style={{color : 'black'}} to={'/wallpapers/page-1'}><span className='more'>MORE WALLPAPERS >></span></Link>
                </div>
            </div>
        </div>
    );
}

export default WallPaperDetail;