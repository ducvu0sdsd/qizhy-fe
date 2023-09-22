
import './homepage.scss'
import Introduce from './Introduce';
import Prologue from './Prologue';

function HomePage({user}) {

    return (
        <div id='homepage'>
            <Prologue />
            <Introduce  />
        </div>
    );
}

export default HomePage;