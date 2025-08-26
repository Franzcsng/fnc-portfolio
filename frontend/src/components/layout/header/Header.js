import './Header.scss'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiSun } from "react-icons/fi"
import { IoMdMoon } from "react-icons/io";



const Header = ({toggleMode, mode}) => {

    const [sideBar, toggleSideBar] = useState('0')

    return (
        <>
            <header>
                <div className='header-container'>
                    
                    <div className='hamburger' onMouseEnter={() => toggleSideBar('60vw')}>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                    </div>

                    <div className='logo'></div>    
                    <nav className='main-nav'>
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
                
            </header>
            <SideBar width={sideBar} toggle={toggleSideBar}/>
        </>   
    )
}

export default Header


const SideBar = (props) => {
    return(
        <nav style={{width: props.width}} className='side-bar'  onMouseLeave={() => props.toggle('0')}>

            <div className='top-head'></div>
            <ul>
                <li><NavLink to='/'>home</NavLink></li>
                    <hr></hr>
                <li><NavLink to='/about'>about</NavLink></li>
                    <hr></hr>
                <li><NavLink to='/projects'>projects</NavLink></li>
                    <hr></hr>
                <li><NavLink to='/resume'>resume</NavLink></li>
                    <hr></hr>
                <li><NavLink to='/contact'>contact</NavLink></li>
                    <hr></hr>
            </ul>
        </nav>
    )
}