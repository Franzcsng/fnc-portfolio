import './ProjectsList.scss'


const ProjectCard = ({img, title, level, desc}) => {
    return(
        <div className='project-card'>
            <img alt='Project Preview' src={img}></img>
            
            <div className='card-body'>
                <p className='project-title'>{title}</p>
                
                <p className='project-desc'>{desc}</p>

                {/* <button> Learn more </button> */}
            </div>
            
        </div>
    )
}


export default ProjectCard