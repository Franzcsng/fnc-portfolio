import './AboutItem.scss'
import TechIcon from '../../components/common/tech-icon/TechIcon.js'


const AboutItem = (props) => {
    return(
        <div className='about-grid'>

            <div className='about-content'>

                <p className='head'>
                    {props.section}
                </p>

                <hr></hr>

                <p className='body'>
                    {props.description}
                </p>

            </div>

            <div className={`about-content second ${props.reverse}`}>
                <div className='about-card'>
                    
                    <TechIcon
                        icon={props.icon}
                        size='clamp(120px, 18vw, 250px)'
                    />

                    <div className={`about-info ${props.rev}`}>

                        <p className='year'> 
                            {props.year}
                        </p>

                        <p className='text'>
                            {props.text}
                        </p>

                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default AboutItem