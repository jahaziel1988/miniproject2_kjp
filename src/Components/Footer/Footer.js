import './Footer.css';
import discord from '../../img/icons8-discord.svg';
import youtube from '../../img/icons8-youtube.svg';
import facebook from '../../img/icons8-facebook.svg';

const Footer = () => {
    return(
        <div className='footer'>
            <footer className='container-fluid'>
                <ul className='m-0 p-0'>
                    <li>
                        <a href='https://discord.gg/2RyvhZa4'><img src={discord} alt="discord logo"></img>
                        <p className='m-0 footer-text'>Discord</p></a>
                    </li>
                    <li>
                        <a href='https://www.youtube.com/@nba2klebrowncity2klc61'><img src={youtube} alt="youtube logo"></img>
                        <p className='m-0 footer-text'>Youtube</p></a>
                    </li>
                    <li>
                        <a href='https://www.facebook.com/NBA2KLebrownCity2KLC'><img src={facebook} alt="facebbok logo"></img>
                        <p className='m-0 footer-text'>Facebook</p></a>
                    </li>
                </ul>
            </footer>
        </div>  
    )
}

export default Footer;
