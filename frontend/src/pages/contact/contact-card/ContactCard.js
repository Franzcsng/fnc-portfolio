
import './ContactCard.scss'
import TechIcon from '../../../components/common/tech-icon/TechIcon.js'


const ContactCard = (props) => {
    return (
        <div className='contact-card'>

            <TechIcon
                icon={props.icon}
                size='clamp(30px, 3.7vw, 60px)'
            />


            <div className='text'>
                <p className='card-title'>
                    {props.title}
                </p>

                <p className='address'>
                    {props.address}
                </p>
            </div>
            
        </div>
    )
}

export default ContactCard