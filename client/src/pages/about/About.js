import './About.scss'
import Banner from './banner/Banner.js'
import Journey from './Journey.js'
import CtaSection from '../../components/common/cta-section/CtaSection.js'

const About = () => {

    let journeys = [
        "education",
        "experience",
        "passion",
        "learning"
        ]

        const experience = [
            {
                company: 'Binary Anvil - Internship',
                date: 'February - May 2025',
                description: 'Contributed to the development of Collect Hours, an e-commerce platform specializing in antique and collectible timepieces, including vintage watches and wall clocks. Worked primarily on frontend development using the BigCommerce ecosystem, implementing user-facing features, improving interface functionality, and collaborating with the development team to deliver a seamless shopping experience. Participated in quality assurance testing, code reviews, and version control workflows using Git to ensure code quality and reliable deployments.',
                skills: [
                    'BigCommerce', 'E-Commerce Developer', 'Frontend', 'QA', 'Github'
                ]
            },
            {
                company: 'OnePoint',
                date: 'October 2025- Present',
                description: 'Develop and maintain client business websites using WordPress, managing projects from initial design implementation through deployment and launch. Integrate websites with HubSpot CRM and Google Analytics to support lead generation, customer relationship management, and performance tracking. \n\n In addition to client-facing web development, I am currently leading the development of an internal Proposal Management System built with Next.js, contributing across both frontend and backend development. I am also exploring AI-powered solutions for marketing automation, including the design and implementation of intelligent agent workflows to improve operational efficiency and marketing processes within the company. \n\n This role has strengthened my experience in full-stack development, third-party system integrations, project ownership, and the practical application of AI technologies in business environments.',
                skills: [
                    'Lead Developer', 'Wordpress', 'NextJs', 'Fullstack developer', 'MySQL', 'Github','REST API','AI Systems', 'CRM', 'EDM' 
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
                

                <ChildSection id='education'>

                    <div className='about-header'>
                        <hr></hr>
                        <h2>EDUCATION</h2>
                        <hr></hr>
                    </div>

                    <div className='about-content education-content'>
                        <div className='education-container'>
                            <p className='affiliations'>ACADEMIC YEARS</p>
                            <p>
                                <span>GRADESCHOOL | 2010-2015 </span>
                                - University of St. La Sale Bacolod - Integrated School
                            </p>
                            <p>
                                <span>JUNIOR HIGHSCHOOL | 2015-2019 </span>
                                - University of St. La Sale Bacolod - Integrated School
                            </p>
                            <p>
                                <span>SENIOR HIGH SCHOOL | 2019-2021 </span>
                                - LICEO, University of St. La Sale Bacolod.
                            </p>

                            <p>
                                <span>COLLEGE | 2022-2026 </span>
                                - University of St. La Sale Bacolod.
                            </p>
                        </div>
                    </div>
                     <div className="about-content">
                        <div className="education-container">
                            <p className="affiliations">ACHIEVEMENTS / AFFILIATIONS</p>

                            <p className="achievements-item">
                            <span>2023–2024</span>
                            3rd Year Batch Representative, College of Engineering | Represented the 3rd year batch in academic and organizational matters, assisting in coordination between students and faculty.
                            </p>

                            <p className="achievements-item">
                            <span>2024–2025</span>
                            College Governor, College of Engineering | Served as part of the student governing body, contributing to leadership decisions and student initiatives within the college.
                            </p>

                            <p className="achievements-item">
                            <span>2022–2025</span>
                            Consistent Dean’s Lister | Recognized for sustained academic excellence throughout the program.
                            </p>

                            <p className="achievements-item">
                            <span>2025</span>
                                Bachelor of Science in Information Technology — Graduated Cum Laude | Graduated with honors, reflecting strong academic performance and dedication to the program.
                            </p>
                        </div>
                    </div>
                </ChildSection>

                

                    
                <ChildSection id='experience'>

                    <div className='about-header'>
                        <hr></hr>
                        <h2>EXPERIENCE</h2>
                        <hr></hr>
                    </div>

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
                </ChildSection>

                <ChildSection id='passion'> 
                    <div className='about-header'>
                        <hr></hr>
                        <h2>PASSION</h2>
                        <hr></hr>
                    </div>

                    <div className="passion-container">
                        <p className="description">
                            Web developer focused on building end-to-end systems that solve real business problems.
                            Experienced in full-stack development, integrating third-party services like CRMs, analytics, and APIs into production applications.
                            Currently exploring AI-driven automation to improve business workflows and marketing systems.
                            I focus on building practical, scalable solutions through hands-on development.
                        </p>

                        <div className="passion-item-container">
                            <p className="passion-item">System Design</p>
                            <p className="passion-item">Full-stack Development</p>
                            <p className="passion-item">API Integrations</p>
                            <p className="passion-item">AI Automation</p>
                        </div>
                    </div>
                </ChildSection>

                <ChildSection id='learning'> 
                    <div className='about-header'>
                        <hr></hr>
                        <h2>LEARNING</h2>
                        <hr></hr>
                    </div>
                    
                    
                    <div className='learning-container'>
                        <p className='quote'>"Where there is no struggle, there is no strength." - Oprah Winfrey <br/> <span>Learning Philosophy</span></p>

                        <p className="description">
                           My journey never ends with continuous learning. I grow through building, solving real problems, and working through complexity directly. I believe consistent hands-on experience is what leads to meaningful technical progress. </p>
                    </div>
                </ChildSection>
            
            </div>
                
            <CtaSection/>
        </div>
    )
}


const ChildSection = ({id='', children}) =>{
    return (
        <div className='child-section' id={id}>
            {children}
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