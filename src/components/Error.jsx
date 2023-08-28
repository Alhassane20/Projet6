import {Link} from 'react-router-dom'
import './style/Error.sass'
import imgTitle from './images/404.png'

function Error(params) {
    return(
        <div id="error">
        <img id='errorTitle' src={imgTitle} alt='error404'/>
        <p id='textError'>Oups! La page que vous demandez n'existe pas.</p>
        <Link to='/' id='linkError'>Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error