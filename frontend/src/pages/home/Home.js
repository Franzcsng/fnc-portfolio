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
        </div>
    )
}
export default Home

