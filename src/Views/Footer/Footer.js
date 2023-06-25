import './Footer.css'
import discord from '../../img/icons8-discord.svg'
import youtube from '../../img/icons8-youtube.svg'
import facebook from '../../img/icons8-facebook.svg'
const Footer = () => {
    return(
        <div>
            <footer className='footer container-fluid py-3'>
                <ul className='m-0 p-0'>
                    <li>
                        <a href='/'><img src={discord}></img></a>
                    </li>
                    <li>
                        <a href='/'><img src={youtube}></img></a>
                    </li>
                    <li>
                        <a href='/'><img src={facebook}></img></a>
                    </li>
                </ul>
            </footer>
        </div>  
    )
}

export default Footer;