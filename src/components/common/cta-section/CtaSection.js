import './CtaSection.scss'
import { NavLink } from 'react-router-dom'
const CtaSection = () => {
    return(
        <div className='cta-section'>
            <div className='cta-container'>
                <h2>Let’s Build Something</h2>
                <p>
                    I’m always open to new opportunities, collaborations, or interesting ideas. Feel free to reach out.
                </p>

                <NavLink to='/contact'> Contact Me</NavLink>
            </div>
        </div>
    )
}

export default CtaSection