import './ProjectsList.scss'


const ProjectCard = ({img, title, level, desc}) => {
    return(
        <div className='project-card'>
            <img src={img}></img>
            
            <p className='project-title'>{title}</p>
            <p className='project-title'>LEVEL : <span>{level}</span></p>
            
            <p className='project-desc'>{desc}</p>

            <button> view </button>
        </div>
    )
}


export default ProjectCard