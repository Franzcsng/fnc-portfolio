import './Home.scss'
import Banner from './banner/Banner.js'
import SkillList from './SkillList.js'
import Button from './../../components/common/button/Button.js'
import ProjectsList from './projects/ProjectsList.js'
import ContactForm from '../contact/contact-form/ContactForm.js'
import CtaSection from '../../components/common/cta-section/CtaSection.js'

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

                 <SkillList/>
                
            </div>

            <div className='projects-section'>

                <div className='projects-header'>
                    <h2>MY RECENT PROJECTS</h2>
                    <Button
                    text='view more'
                    link='/projects'
                    />
                </div>
                
                <ProjectsList/>
                
            </div>

            <div className='about-section'>

                <div className='about-header'>
                    <hr></hr>
                    <h2>ABOUT ME</h2>
                    <hr></hr>
                </div>

                <div className='about-container'>
                    <div className='grid-child text'>
                        <p>
                            I am a web developer focused on building end-to-end software solutions that address real business needs. I work across frontend, backend, and system integrations such as CRMs, analytics platforms, and APIs to deliver practical and scalable applications.
                                <br></br><br></br>
                            I have experience in both academic and organizational environments, where I have developed strong problem-solving, collaboration, and leadership skills. I am comfortable working in dynamic settings that require adaptability, critical thinking, and attention to detail.
                                <br></br><br></br>
                            Currently, I am expanding my expertise in full-stack development while exploring AI-driven automation to enhance business processes and operational efficiency.
                        </p>
                    </div>

                    <div className='grid-child images'>
                        <img src='https://images.unsplash.com/photo-1755177510462-bf74c129428f'></img>
                    </div>
                    

                </div>

                <div className='button-container'>
                    <Button
                    text='Learn more about me'
                    link='/about'
                />
                </div>
                
            </div>

        <CtaSection/>


        </div>
    )
}
export default Home

