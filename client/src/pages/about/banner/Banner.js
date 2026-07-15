import './Banner.scss'
import GridTiles from '../../../components/common/grid-tiles/GridTiles.js'
import { NavLink } from 'react-router-dom'
import { icons } from "../../../components/icons.js";
import displayImage from '../../../assets/images/siomai_francis.webp'
const GithubIcon = icons.github
const LinkedinIcon = icons.linkedin



const Banner = () => {
    return(
        <div className='about-banner'>
            
            <div className='banner-content'>

                <h1> SO, WHO AM I? </h1>
                <hr></hr>
                <p> 
                    Full-stack developer building end-to-end software solutions with a focus on clean systems, integrations, and real-world impact.
                </p>
                <div className='tags-banner'>
                    <p>Full-stack Developer</p>
                    <p>Aspiring AI Automation Engineer</p>
                    <p>Siomai Lover</p>
                </div>
                <div className='links-banner'>
                    <NavLink to='/contact'> Contact Me</NavLink>
                    <NavLink to='/resume'> Resume</NavLink>
                    <a href='https://github.com/Franzcsng' target="_blank" rel="noopener noreferrer"><GithubIcon className='icon'/></a>
                    <a href='https://linkedin.com/in/francis-causing-895463367' target="_blank" rel="noopener noreferrer"><LinkedinIcon className='icon'/></a>
                </div>

            </div>

            <GridTiles displayImage={displayImage}/>
            
            <div>

            
            </div>
        </div>
    )
}


export default Banner