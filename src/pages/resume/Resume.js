import './Resume.scss'
import displayImage from '../../assets/images/display_img.png'
import Button from '../../components/common/button/Button'
import { icons } from '../../components/icons'

const LinkedinIcon = icons.linkedin
const GithubIcon = icons.github
const EmailIcon = icons.email
const LocationIcon = icons.location
const PhoneIcon = icons.phone

const Resume = () =>{
    return(
        <div className='resume-main'>


            <div className='banner'>
                <div className='banner-container'>

                    <div className='profile-container'>
                        <div className='image-container'>
                            <img alt="Profile" src={displayImage}></img>
                        </div>

                        <div className='details'>
                            <h1>RESUME</h1>
                            <p>FRANCIS NORMAN A. CAUSING</p>
                            <p className='info'><LocationIcon className='icon'/>Philippines</p>
                            <a href='tel:+639285200815'className='info'><PhoneIcon className='icon'/>+63 928 5200 815</a>
                            <a href='mailto:franzcsng23@gmail.com'className='info'><EmailIcon className='icon'/>franzcsng23@gmail.com</a>
                            <a href='https://linkedin.com/in/francis-causing-895463367' target="_blank" rel="noopener noreferrer"className='info'><LinkedinIcon className='icon'/>LinkedIn</a>
                            <a href='https://github.com/Franzcsng' target="_blank" rel="noopener noreferrer"className='info'><GithubIcon className='icon'/>Github | Franzcsng</a>
                        </div>

                    </div>

                    <div className='button-container'>
                        <Button
                            text='DOWNLOAD PDF'
                        />

                    </div>
                </div>
            </div>

            <div className='resume-section'>
                <div className='resume-container'>
                    <h2>PROFESSIONAL OVERVIEW</h2>
                    <p className='body'>
                        Lead Developer with experience building and maintaining scalable web
                        applications using modern technologies such as Next.js, Prisma ORM,
                        and MySQL. Strong background in full-stack development, with
                        additional experience in WordPress and e-commerce platforms. Proven
                        ability to lead development efforts, optimize workflows, and deliver
                        high-quality solutions in collaborative environments.
                    </p>

                </div>

                <div className='resume-container'>
                    
                    <div className='container-child'>
                        <div className='experience-block'>
                             <h2>PROFESSIONAL EXPERIENCE</h2>

                             <div className='experience-item'>
                                <p className='role'>Lead Developer - OnePoint</p>
                                <p className='date'>October 2025 - Present</p>

                                <ul>
                                    <li>Lead the development of modern web applications using Next.js and Prisma ORM</li>

                                    <li>Design and manage database structures using MySQL</li>

                                    <li>Develop and maintain scalable and maintainable codebases</li>

                                    <li>Collaborate with cross-functional teams to deliver production-ready features</li>

                                    <li>Optimize performance and improve application architecture</li>

                                    <li>Contribute to technical decisions and development standards</li>

                                    <li>Explore and prototype AI-driven automation workflows for a marketing agency initiative</li>

                                    <li>Collaborate on the design of AI agent-based systems for marketing operations</li>
                                </ul>
                             </div>

                             <div className='experience-item'>
                                <p className='role'>E-Commerce Developer Intern - Binary Anvil</p>
                                <p className='date'>February 2025 - May 2025</p>

                                <ul>
                                    <li>Developed and maintained a responsive e-commerce platform using BigCommerce</li>
                                    <li>Implemented cross-device compatibility and performance optimizations to enhance user experience</li>
                                    <li>Collaborated with team members using GitHub workflows for version control and code management</li>
                                </ul>
                             </div>
                        </div>
                            
                        <div className='technical-block'>
                             <h2>TECHNICAL SKILLS</h2>

                             <ul>
                                <li><span>Languages & Frameworks:</span> JavaScript, Next.js, React, Node.js, PHP
                                    
                                </li>

                                <li><span>Backend & Database:</span>  Prisma ORM, MySQL
                                    
                                </li>

                                <li><span>Frontend:</span>  SCSS, HTML, CSS

                                </li>

                                <li><span>CMS / Platforms:</span> WordPress, BigCommerce
                                </li>

                                <li><span>Tools:</span> Git, GitHub
                                </li>
                             </ul>
                        </div>
                    </div>
                </div>

                <div className='resume-container'>
                    <h2>EDUCATION</h2>
                    <p className='body'>
                       Bachelor of Science in Information Technology
                        University of St. La Salle
                        Bacolod City, Philippines
                        2021 – 2025
                        <br></br>
                        <span>
                        Cum Laude, 
                        Consistent Dean’s Lister
                        </span>

                    </p>

                </div>

     
                
            </div>
        </div>
    )
}

export default Resume