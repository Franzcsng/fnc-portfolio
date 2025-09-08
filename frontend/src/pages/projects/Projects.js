import './Projects.scss'
import GridTiles from './../../components/common/grid-tiles/GridTiles.js'
import ProjectCardLong from './ProjectCardLong.js'

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

const Projects = () => {
    return(
        <div className="projects-main">

            <div className='projects-banner'>

                <div className='grid-container'>
                    <GridTiles/>
                </div>
                
                <div className='overlay'>
                    <h1>MY WORKS</h1>
                    <p>Some are for practice, some are for fun, and some for professional work! Explore my diverse set of projects</p>
                </div>
                
            </div>

            <div className='projects-section'>

                <ProjectCardLong
                    image='https://plus.unsplash.com/premium_photo-1678565999332-1cde462f7b24'
                    title='PROJECT 1'
                    level='BEGINNER'
                    description='"A web-based productivity app that helps users organize tasks, set deadlines, and track progress in real-time. Built with React, Node.js, and MongoDB, it features intuitive drag-and-drop task boards, reminders, and collaborative tools for teams.'
                    repo='#'
                    live='#'
                    techs={[
                        {icon: FaHtml5},
                        {icon: FaCss3Alt},
                        {icon: FaHtml5},
                        {icon: FaCss3Alt},
                        
                        
                    ]}
                />

                <ProjectCardLong
                    image='https://plus.unsplash.com/premium_photo-1678565999332-1cde462f7b24'
                    title='PROJECT 1'
                    level='BEGINNER'
                    description='"A web-based productivity app that helps users organize tasks, set deadlines, and track progress in real-time. Built with React, Node.js, and MongoDB, it features intuitive drag-and-drop task boards, reminders, and collaborative tools for teams.'
                    repo='#'
                    live='#'
                    techs={[
                        {icon: FaHtml5},
                        {icon: FaCss3Alt},
                        {icon: FaHtml5},
                        {icon: FaCss3Alt},
                        {icon: FaHtml5},
                        {icon: FaCss3Alt},
                        {icon: FaHtml5},
                        {icon: FaCss3Alt},
                    ]}
                />
                
            </div>

        </div>
    )
}

export default Projects