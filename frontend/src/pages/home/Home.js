import './Home.scss'
import Banner from './banner/Banner.js'
import SkillList from './SkillList.js'
import Button from './../../components/common/button/Button.js'
import ProjectsList from './projects/ProjectsList.js'


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
                        <p>I am a passionate and driven individual with a strong interest in technology, leadership, and continuous growth. With experience in both academic and organizational settings, I enjoy taking on challenges that allow me to apply creativity, problem-solving, and collaboration. I thrive in environments where I can contribute innovative ideas, learn from others, and make a meaningful impact. Beyond my professional and academic pursuits, I value teamwork, adaptability, and a commitment to excellence in everything I do.
                        </p>
                    </div>

                    <div className='grid-child images'>
                        <img src='https://images.unsplash.com/photo-1755177510462-bf74c129428f'></img>
                    </div>
                    

                </div>
            </div>


        </div>
    )
}
export default Home

