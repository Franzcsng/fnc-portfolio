import './ProjectCardLong.scss'
import ProjectTechIcon from './ProjectTechIcon.js'
import { FaGithubAlt } from "react-icons/fa6";
import { IoLink } from "react-icons/io5";



const ProjectCardLong = ({image, title, description, level, repo, live, techs}) => {

    const iconSize = 'clamp(25px, 3.1vw, 45px)'

    return(
        <div className='project-container'>

            <div  className='project-img'>
                <img alt='Project Image' src={image}></img>
            </div>
            

            <div className='project-info'>
                <p className='project-title'>{title}</p>
                <div className='description-container'>
                    <p className='description'>{description}</p>
                </div>
                
                <div className='button-container'>
                    <a href="https://github.com/yourrepo" target="_blank" rel="noopener noreferrer">Learn more</a>
                    <a href="https://github.com/yourrepo" target="_blank" rel="noopener noreferrer"><FaGithubAlt className='icon'/></a>
                    <a href="https://github.com/yourrepo" target="_blank" rel="noopener noreferrer"><IoLink className='icon'/></a>

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