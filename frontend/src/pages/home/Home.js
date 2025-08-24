import './Home.scss'
import Banner from './banner/Banner.js'
import {FaHtml5, FaCss3Alt, FaSquareJs, FaReact, FaNodeJs, FaPhp, FaFlutter } from 'react-icons/fa6'

const Home = () =>{
    return (
        <div className='home-main'>

            <Banner/>

            <div className='skills-section'>

                <div className='skills-header'>
                    <hr></hr>
                    <h2>MY SKILLS</h2>
                    <hr></hr>
                </div>
                
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

                </div>
                
            </div>
        </div>
    )
}
export default Home

