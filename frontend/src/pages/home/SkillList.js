import './SkillList.scss'
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
    return (
         <div className='skills-container'>
                    
                    <div className='skill-icon'>
                        <FaHtml5 className='icon'/>
                        <p>HTML</p>
                    </div>

                    <div className='skill-icon'>
                        <FaCss3Alt className='icon'/>
                        <p>CSS</p>
                    </div>

                    <div className='skill-icon'>
                        <FaSquareJs className='icon'/>
                        <p>JAVASCRIPT</p>
                    </div>

                    <div className='skill-icon'>
                        <FaReact className='icon'/>
                        <p>REACT.JS</p>
                    </div>

                    <div className='skill-icon'>
                        <FaNodeJs className='icon'/>
                        <p>NODE.JS</p>
                    </div>

                    <div className='skill-icon'>
                        <FaPhp className='icon'/>
                        <p>PHP</p>
                    </div>

                    <div className='skill-icon'>
                        <FaFlutter className='icon'/>
                        <p>FLUTTER</p>
                    </div>

                    <div className='skill-icon'>
                        <FaGitAlt className='icon'/>
                        <p>GIT</p>
                    </div>

                </div>
    )
}

export default SkillList