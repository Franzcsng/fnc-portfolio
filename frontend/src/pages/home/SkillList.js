import './SkillList.scss'
import TechIcon from '../../components/common/tech-icon/TechIcon.js'
import { icons } from "../../components/icons";

const HtmlIcon = icons.html;
const CssIcon = icons.css
const JavascriptIcon = icons.js
const ReactIcon = icons.react
const NodeIcon = icons.node
const PhpIcon = icons.php
const FlutterIcon = icons.flutter
const GitIcon = icons.git


const SkillList = () => {

    const iconSize = 'clamp(60px, 5.5vw, 90px)'
    return (
         <div className='skills-container'>

            <TechIcon
                icon={HtmlIcon}
                label='HTML'
                size={iconSize}
            />
            <TechIcon
                icon={CssIcon}
                label='CSS'
                size={iconSize}
            />
            <TechIcon
                icon={JavascriptIcon}
                label='JAVASCRIPT'
                size={iconSize}
            />
            <TechIcon
                icon={ReactIcon}
                label='REACT.JS'
                size={iconSize}
            />
            <TechIcon
                icon={NodeIcon}
                label='NODE.JS'
                size={iconSize}
            />
            <TechIcon
                icon={PhpIcon}
                label='PHP'
                size={iconSize}
            />
            <TechIcon
                icon={FlutterIcon}
                label='FLUTTER'
                size={iconSize}
            />
            <TechIcon
                icon={GitIcon}
                label='GIT'
                size={iconSize}
            />

                </div>
    )
}

export default SkillList