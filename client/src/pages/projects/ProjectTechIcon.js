import './ProjectTechIcon.scss'

const ProjectTechIcon = ({icon: Icon, label, size}) => {
    return ( 
    <div className='project-tech-icon' style={{width: size, height: size, minWidth: size}}>
        <Icon className='icon'/>
        {label && <p>{label}</p>}
    </div>
    )
}

export default ProjectTechIcon