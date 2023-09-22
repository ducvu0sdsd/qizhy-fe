
import './introduce.scss'
import Whale from './whale.gif'

function Introduce() {
    return (
        <div className='col-lg-12 introduce'>
            <div className='content col-lg-3'>
                <div className='how-about'><i className="fa-solid fa-fire"></i> HOW ABOUT A CHAT</div>
                <p className='intro'>Have a <span style={{color:'#d85889'}}>BIG IDEA</span> in mind? Let's discuss what we can achieve. To create works of art.</p>
            </div>
            <div className='col-lg-6 whale'>
                <img src={Whale}  width='100%' />
            </div>
        </div>
    );
}

export default Introduce;