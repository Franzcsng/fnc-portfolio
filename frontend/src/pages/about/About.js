import './About.scss'
import Banner from './banner/Banner.js'
import Journey from './Journey.js'
import { HiAcademicCap } from "react-icons/hi2";
import TechIcon from '../../components/common/tech-icon/TechIcon.js'

const About = () => {

    let journeys = [
        "EDUCATION",
        "EXPERIENCE",
        "PASSION",
        "CONTINOUS LEARNIN"
        ]

        const experience = [
            {
                company: 'Binary Anvil - Internship',
                date: 'February - May 2025',
                description: 'Contributed to the development of Collect Hours, an e-commerce platform specializing in antique and collectible timepieces, including vintage watches and wall clocks. Worked primarily on frontend development using the BigCommerce ecosystem, implementing user-facing features, improving interface functionality, and collaborating with the development team to deliver a seamless shopping experience. Participated in quality assurance testing, code reviews, and version control workflows using Git to ensure code quality and reliable deployments.',
                skills: [
                    'BigCommerce', 'E-Commerce Developer', 'Frontend', 'QA'
                ]
            },
            {
                company: 'OnePoint',
                date: 'October 2025- Present',
                description: 'Develop and maintain client business websites using WordPress, managing projects from initial design implementation through deployment and launch. Integrate websites with HubSpot CRM and Google Analytics to support lead generation, customer relationship management, and performance tracking. \n\n In addition to client-facing web development, I am currently leading the development of an internal Proposal Management System built with Next.js, contributing across both frontend and backend development. I am also exploring AI-powered solutions for marketing automation, including the design and implementation of intelligent agent workflows to improve operational efficiency and marketing processes within the company. \n\n This role has strengthened my experience in full-stack development, third-party system integrations, project ownership, and the practical application of AI technologies in business environments.',
                skills: [
                    'Lead Developer', 'Wordpress', 'NextJs', 'Fullstack developer', 'MySQL', 'REST API','AI Systems', 'CRM', 'EDM' 
                ]
            }
        ]

    const returnJourneys = (journeys) => {
        return journeys.map((journey, index) =>  ( 
            <Journey
                key={index}
                journey={journey}
            />
        ))
    }

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

                    {returnJourneys(journeys)}
                
                </div>
            </div>

            <div className='about-section'>
                <div className='about-header'>
                    <hr></hr>
                    <h2>EDUCATION</h2>
                    <hr></hr>
                </div>

                <div className='education-section'>
                    <div className='about-content'>
                        <div className='education-container'>
                            <p>
                                <span>SENIOR HIGH SCHOOL | 2019-2021 </span>
                                - LICEO, University of St. La Sale Bacolod. skejnfsjkefksn wejkf kjenfk  skjefkjen
                            </p>

                            <p>
                                <span>COLLEGE | 2022-2026 </span>
                                - LICEO, University of St. La Sale Bacolod. skejnfsjkefksn wejkf kjenfk  skjefkjen
                            </p>
                        </div>
                    </div>
                     <div className='about-content'>
                        <div className='education-container'>
                            <p className='affiliations'>ACHIEVEMENTS / AFFILIATIONS</p>

                            <p className='achievements-item'>
                                <span>2023-2024</span>
                                College of Engineering - 3rd Year Batch Level Representative
                            </p>

                            <p className='achievements-item'>
                                <span>2023-2024</span>
                                College of Engineering - 3rd Year Batch Level Representative
                            </p>
                        </div>
                    </div>
                </div>

                <div className='about-header'>
                        <hr></hr>
                        <h2>EXPERIENCE</h2>
                        <hr></hr>
                    </div>

                    
                <div className='experience-section'>
                    <div className='about-content'>
                        {experience.map(e => (
                            <ExperienceItem
                                company={e.company}
                                date={e.date}
                                description={e.description}
                                skills={e.skills}
                            />
                        ))}
                    </div>  
                </div>
               
            </div>
           
        </div>
    )
}

const ExperienceItem = ({
    company, date, description, skills
}) => {

    return(
            <div className='experience-container'>
                <p className='experience-item'>{company} | {date}</p>
                <p className='description'>{description}</p>
                <div className='skills-tags'>
                    {skills.map(skill => (
                        <p className='tag'>{skill}</p>
                    ))}
                </div>
            </div>
    )
}

export default About