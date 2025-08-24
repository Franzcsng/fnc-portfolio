import './Button.scss'
import {NavLink} from 'react-router-dom'

const Button = ({width, bgGolor, hoverColor, borderColor, text, link}) => {
    return(
        
        <NavLink to={link}>
            <button>
                {text}
            </button>
        </NavLink>

    )
}

export default Button