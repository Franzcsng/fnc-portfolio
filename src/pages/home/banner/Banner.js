import './Banner.scss'
import GridTiles from '../../../components/common/grid-tiles/GridTiles.js'
// import Button from './../../../components/common/button/Button.js'
import displayImage from '../../../assets/images/display_img.png'
import { NavLink } from 'react-router-dom'
import { icons } from "../../../components/icons";

// const HtmlIcon = icons.html;
const GithubIcon = icons.github
const LinkedinIcon = icons.linkedin

const Banner = () => {

    
    return(
        <div className='banner-main'>
            
            <div className='banner-content'>
                <h1>HELLO, I'M <span>FRANCIS</span></h1>
                <p>Web developer specializing in end-to-end systems, integrations, and workflow automation. Focused on building scalable products that connect business needs with practical engineering solutions.</p>
                <div className='links-banner'>
                    <NavLink to='/contact'> Contact Me</NavLink>
                    <NavLink to='/resume'> Resume</NavLink>
                    <a href='https://github.com/Franzcsng' target="_blank" rel="noopener noreferrer"><GithubIcon className='icon'/></a>
                    <a href='https://linkedin.com/in/francis-causing-895463367' target="_blank" rel="noopener noreferrer"><LinkedinIcon className='icon'/></a>
                </div>

            </div>
            <GridTiles displayImage={displayImage}/>

            
        </div>
    )
}
export default Banner