import './ProjectCardLong.scss'
import ProjectTechIcon from './ProjectTechIcon.js'
import {NavLink} from 'react-router-dom'
import { FaGithubAlt } from "react-icons/fa6";
import { IoLink } from "react-icons/io5";



const ProjectCardLong = ({image, title, description, level, repo, live, techs}) => {

    const iconSize = 'clamp(25px, 3.1vw, 45px)'

    return(
        <div className='project-container'>

            <div  className='project-img'>
                <img src={image}></img>
            </div>
            

            <div className='project-info'>
                <p className='project-title'>{title}</p>
                <div className='description-container'>
                    <p className='description'>{description}</p>
                </div>
                
                <div className='button-container'>
                    <a>Learn more</a>
                    <a><FaGithubAlt className='icon'/></a>
                    <a><IoLink className='icon'/></a>

                </div>
            </div>

            <div className='project-tech'>
                <p className='tech-used'>
                    TECH STACK
                </p>
                <div className='tech-container'>
                    {techs.map((tech, index) => {
                        return(
                            <ProjectTechIcon 
                                icon={tech.icon}
                                size={iconSize}
                                label={tech.label}
                            />
                        )
                    })}
                </div>
            </div>
            {/* <div className='grid-child'>

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
            </div> */}

        </div>
    )
}

export default ProjectCardLong