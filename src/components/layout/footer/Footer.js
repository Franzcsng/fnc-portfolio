import './Footer.scss'
import { SiGmail } from "react-icons/si";
import { FaLinkedin, FaInstagram  } from "react-icons/fa";

const Footer = () => {
    return(
        <div className='footer'>
            
            <div className='footer-content'>

                <div className='footer-section'>
                    <h2>FNC.dev</h2>
                    <hr></hr>
                    <p>Web design and development</p>
                </div>
                
                <div className='footer-section'>
                    <h2>Connect with me</h2>
                    <p>franzcsng23@gmail.com</p>
                    <p>+63 928 520 0815</p>
                </div>

                <div className='footer-section'>
                    <h2>My Links</h2>
                    <div className='links'>
                        <SiGmail className='icon'/>
                        <FaLinkedin className='icon'/>
                        <FaInstagram className='icon'/>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer