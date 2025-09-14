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

            <div className='about-content second'>
                <div className='about-card'>
                    
                    <TechIcon
                        icon={props.icon}
                        size='250px '
                    />

                    <div className='about-info'>
                        <p className='date'> 
                            2002-2010
                        </p>

                        <p className='location'>
                            Inside the red gate under the santol tree
                        </p>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default AboutItem