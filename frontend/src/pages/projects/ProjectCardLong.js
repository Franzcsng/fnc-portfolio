import './ProjectCardLong.scss'
import TechIcon from '../../components/common/tech-icon/TechIcon.js'
import {NavLink} from 'react-router-dom'
import { FaGithubAlt } from "react-icons/fa6";
import { IoLink } from "react-icons/io5";



const ProjectCardLong = ({image, title, description, level, repo, live, techs}) => {

    const iconSize = 'clamp(35px, 3.1vw, 45px)'

    return(
        <div className='project-container'>
            <div className='grid-child img'>
                    <img src={image}></img>
            </div>

            <div className='grid-child'>

                <div className='info-grid'>

                    <div className='info-child content'>
                        <p className='title'>{title}</p>
                        <p className='level'>LEVEL : <span>{level}</span></p>
                        <p className='desc'>{description}</p>
                    </div>

                        <div className='info-child skills'>
                        <p> TECH USED </p>
                        <div className='icons-container'>

                            {techs.map((tech, index) => {
                                return(
                                    <TechIcon 
                                        icon={tech.icon}
                                        size={iconSize}
                                    />
                                )
                            })}
                    
                        </div>
                        
                        
                    </div>
                </div>

                <div className='bottom-section'>    

                    <NavLink>
                        Learn more
                    </NavLink>

                    <div className='button-wrapper'>
                        <a href={repo}>
                            <FaGithubAlt className='icon'/> 
                            repo
                        </a>

                        <a href={live}>
                            <IoLink className='icon'/>
                            live
                        </a>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default ProjectCardLong