import './ProjectsList.scss'
import { NavLink } from 'react-router-dom'


const ProjectCard = ({img, title, level, desc, slug}) => {
    return(
        <div className='project-card'>
            <img alt='Project Preview' src={img}></img>

            <div className='card-body'>
                <p className='project-title'>{title}</p>

                <p className='project-desc'>{desc}</p>

                <NavLink className='read-more-btn' to={`/projects/${slug}`}>Read More</NavLink>
            </div>

        </div>
    )
}


export default ProjectCard