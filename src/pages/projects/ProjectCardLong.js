import './ProjectCardLong.scss'
import ProjectTechIcon from './ProjectTechIcon.js'
import { FaGithubAlt } from "react-icons/fa6";
import { IoLink } from "react-icons/io5";
// import {Link} from 'react-router-dom'



const ProjectCardLong = ({image, title, description, slug,level, repo, live, techs}) => {

    const iconSize = 'clamp(25px, 3.1vw, 45px)'

    return(
        <div className='project-container'>

            <div  className='project-img'>
                <img alt='Project' src={image}></img>
            </div>
            

            <div className='project-info'>
                <p className='project-title'>{title}</p>
                <div className='description-container'>
                    <p className='description'>{description}</p>
                </div>
                
                <div className='button-container'>
                    {/* <Link to={`/projects/${slug}`} target="_blank" rel="noopener noreferrer">Learn more</Link> */}
                    <a href={repo} target="_blank" rel="noopener noreferrer"><FaGithubAlt className='icon'/></a>
                   {
                    live && <a href={live} target="_blank" rel="noopener noreferrer"><IoLink className='icon'/></a>
                   } 

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

        </div>
    )
}

export default ProjectCardLong