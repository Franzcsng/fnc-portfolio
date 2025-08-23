import './Header.scss'
import { NavLink } from 'react-router-dom'
import { FiSun } from "react-icons/fi"
import { IoMdMoon } from "react-icons/io";



const Header = ({toggleMode, mode}) => {


    return (
        <div className='header'>
            <div className='logo'></div>    
            <nav>
                <ul>
                    <li><NavLink to='/'>home</NavLink></li>
                    <li><NavLink to='/about'>about</NavLink></li>
                    <li><NavLink to='/projects'>projects</NavLink></li>
                    <li><NavLink to='/resume'>resume</NavLink></li>
                    <li><NavLink to='/contact'>contact</NavLink></li>
                </ul>
            </nav>

            <div className='theme-toggle' onClick={toggleMode}>
                {mode === '' ? <IoMdMoon className='toggle-icon'/> : <FiSun className='toggle-icon'/>}
            </div>
        </div>
    )
}

export default Header