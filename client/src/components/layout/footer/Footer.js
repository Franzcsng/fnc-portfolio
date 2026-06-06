import './Footer.scss'
import { FaLinkedin} from "react-icons/fa";
import {icons} from '../../icons.js'

const GitIcon = icons.github


const Footer = () => {
    return(
        <div className='footer'>
            
            <div className='footer-content'>

                <div className='footer-section'>
                    <h2>FNC.dev</h2>
                    <hr></hr>
                    <p>Web development</p>
                </div>
                
                <div className='footer-section'>
                    <h2>Connect with me</h2>
                    <a href='mailto:franzcsng23@gmail.com' target="_blank" rel="noopener noreferrer">franzcsng23@gmail.com</a>
                    <a href='tel:+639285200815' target="_blank" rel="noopener noreferrer">+63 928 520 0815</a>
                </div>

                <div className='footer-section'>
                    <h2>My Links</h2>
                    <div className='links'>
                        <a href='https://linkedin.com/in/francis-causing-895463367' target="_blank" rel="noopener noreferrer"><FaLinkedin className='icon'/></a>
                        <a href='https://github.com/Franzcsng' target="_blank" rel="noopener noreferrer"><GitIcon className='icon'/></a>
                        

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer