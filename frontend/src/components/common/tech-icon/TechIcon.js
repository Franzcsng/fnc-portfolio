import './TechIcon.scss'

const TechIcon = ({icon: Icon, label, size}) => {
    return ( 
    <div className='tech-icon' style={{width: size, height: size}}>
        <Icon className='icon'/>
        {label && <p>{label}</p>}
    </div>
    )
}

export default TechIcon