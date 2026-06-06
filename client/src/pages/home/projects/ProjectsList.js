import './ProjectsList.scss'
import ProjectCard from './ProjectCard.js'
import {projects} from '../../../assets/projects/projects.js'

const ProjectsList = () => {

    const featuredProjects = projects.slice(0, 3);
    return(
        <div className='projects-container'>

            {featuredProjects.map(p => (
                <ProjectCard
                    img={p.featured_image}
                    title={p.title}
                    desc={p.description}
                />
            ))}

     
               
        </div>
    )
}

export default ProjectsList