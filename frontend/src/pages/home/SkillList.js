import './SkillList.scss'
import TechIcon from '../../components/common/tech-icon/TechIcon.js'
import {
    FaHtml5, 
    FaCss3Alt, 
    FaSquareJs, 
    FaReact, 
    FaNodeJs, 
    FaPhp, 
    FaFlutter,
    FaGitAlt  
} from 'react-icons/fa6'


const SkillList = () => {

    const iconSize = 'clamp(60px, 5.5vw, 90px)'
    return (
         <div className='skills-container'>

            <TechIcon
                icon={FaHtml5}
                label='HTML'
                size={iconSize}
            />
            <TechIcon
                icon={FaCss3Alt}
                label='CSS'
                size={iconSize}
            />
            <TechIcon
                icon={FaSquareJs}
                label='JAVASCRIPT'
                size={iconSize}
            />
            <TechIcon
                icon={FaReact}
                label='REACT.JS'
                size={iconSize}
            />
            <TechIcon
                icon={FaNodeJs}
                label='NODE.JS'
                size={iconSize}
            />
            <TechIcon
                icon={FaPhp}
                label='PHP'
                size={iconSize}
            />
            <TechIcon
                icon={FaFlutter}
                label='FLUTTER'
                size={iconSize}
            />
            <TechIcon
                icon={FaGitAlt}
                label='GIT'
                size={iconSize}
            />

                </div>
    )
}

export default SkillList