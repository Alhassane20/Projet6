import footer from './images/footer.png'
import footer2 from './images/footer2.png'
import footer3 from './images/footer3.png'
import footer4 from './images/footer4.png'
import './style/footer.sass'
function Footer() {
    return(
        <div className="footer-container">
        <div id='logo2'>
                <img className='footerImage' src={footer} alt="lettre K"/>
                <img className='footerImage' src={footer2} alt="lettre A"/>
                <img className='footerImage' src={footer3} alt="lettre S"/>
                <img className='footerImage' src={footer4} alt="lettre A"/>
        </div>
        <p id='footerTexte'>
          © 2020 Kasa. All rights reserved  
        </p>
        </div>
    )
}

export default Footer