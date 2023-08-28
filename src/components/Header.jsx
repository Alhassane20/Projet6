import {Link} from 'react-router-dom'
import header from './images/header.png'
import header2 from './images/header2.png'
import header3 from './images/header3.png'
import header4 from './images/header4.png'
import './style/Header.sass'

function Header() {
    return(
        <nav>
            <div id='logo'>
                <img className='headerImage' src={header} alt="lettre K"/>
                <img className='headerImage' src={header2} alt="lettre A"/>
                <img className='headerImage' src={header3} alt="lettre S"/>
                <img className='headerImage' src={header4} alt="lettre A"/>
            </div>
            <div id='liens'>
                <Link to='/'>Accueil</Link>
                <Link to='about'>A propos</Link>
            </div>
        </nav>
    )
}

export default Header