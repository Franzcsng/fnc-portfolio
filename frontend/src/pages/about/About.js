import './About.scss'
import Banner from './banner/Banner.js'
import Journey from './Journey.js'
import { HiAcademicCap } from "react-icons/hi2";

const About = () => {
    return (
        <div className='about-main'>

            <Banner/>

            <div className='journey-section'>

                <div className='section-header'>
                    <hr></hr>
                    <h2>MY JOURNEY</h2>
                    <hr></hr>
                </div>

                <div className='journey-list'>

                    <Journey
                        journey='THE BEGINNING'
                    />

                    <Journey
                        journey='LEARNING'
                    />

                    <Journey
                        journey='EXPERIENCE'
                    />

                    <Journey
                        journey='PASSION'
                    />

                    <Journey
                        journey="WHAT'S NEXT"
                    />

                </div>
            </div>

            <div className='about-section'>

                <div className='about-grid'>

                    <div className='about-content'>

                        <p className='head'>
                            THE BEGINNING
                        </p>

                        <hr></hr>

                        <p className='body'>
                             Hi, I’m Francis Norman Causing, a passionate Full Stack Developer and student leader currently pursuing my degree in the College of Engineering and Computing Studies. I enjoy creating solutions that combine functionality with clean, user-friendly design, whether it’s a mobile app, web system, or an IoT-powered project.
                            My journey in tech started with curiosity about how applications work, which led me to dive into programming and eventually build projects like Komyuter, a real-time arrival tracker for modern jeepney commuters.
                        </p>

                    </div>

                    <div className='about-content second'>
                        
                    </div>

                </div>

                <div className='about-grid'>

                    <div className='about-content'>

                        <p className='head'>
                            THE BEGINNING
                        </p>

                        <hr></hr>

                        <p className='body'>
                             Hi, I’m Francis Norman Causing, a passionate Full Stack Developer and student leader currently pursuing my degree in the College of Engineering and Computing Studies. I enjoy creating solutions that combine functionality with clean, user-friendly design, whether it’s a mobile app, web system, or an IoT-powered project.
                            My journey in tech started with curiosity about how applications work, which led me to dive into programming and eventually build projects like Komyuter, a real-time arrival tracker for modern jeepney commuters.
                        </p>

                    </div>
                    
                    <div className='about-content second reverse'>
                        
                    </div>

                </div>

                <div className='about-grid'>

                    <div className='about-content'>

                        <p className='head'>
                            THE BEGINNING
                        </p>

                        <hr></hr>

                        <p className='body'>
                             Hi, I’m Francis Norman Causing, a passionate Full Stack Developer and student leader currently pursuing my degree in the College of Engineering and Computing Studies. I enjoy creating solutions that combine functionality with clean, user-friendly design, whether it’s a mobile app, web system, or an IoT-powered project.
                            My journey in tech started with curiosity about how applications work, which led me to dive into programming and eventually build projects like Komyuter, a real-time arrival tracker for modern jeepney commuters.
                        </p>

                    </div>
                    
                    <div className='about-content'>
                        
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default About