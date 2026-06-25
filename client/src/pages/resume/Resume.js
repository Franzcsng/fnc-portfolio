import './Resume.scss'
import displayImage from '../../assets/images/display_img.png'
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
                        <a href='/Causing_Resume.pdf' target="_blank" rel="noopener noreferrer">DOWNLOAD PDF </a>

                    </div>
                </div>
            </div>

            <div className='resume-section'>
                <div className='resume-container'>
                    <h2>PROFESSIONAL OVERVIEW</h2>
                    <p className='body'>
                        Full-Stack Developer with experience designing and building business applications, workflow automation systems, and LLM-integrated
                        software. Skilled in Next.js, React, Node.js, TypeScript, Prisma ORM, MySQL, and PostgreSQL. Hands-on experience with AI agent
                        development using LangChain and LangGraph, prompt engineering, and no-code automation with n8n. Focused on building maintainable,
                        scalable full-stack systems that solve real operational challenges.

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
                                    <li>Architected and built a centralized proposal management platform from the ground up using Next.js, Prisma ORM, and MySQL, replacing
                                    manual proposal workflows, reducing turnaround time by ~40% through a centralized Next.js + MySQL platform.</li>

                                    <li>Designed the system's database architecture, backend services, API layer, and application workflows to support proposal generation,
                                    approvals, version control, and document management.
                                    </li>

                                    <li>Developed production-ready full-stack features and optimized application performance, maintainability, and reliability</li>

                                    <li>Developed RESTful APIs and backend integrations enabling data synchronization between internal systems and third-party services.
                                    </li>

                                </ul>
                             </div>

                             <div className='experience-item'>
                                <p className='role'>E-Commerce Developer Intern - Binary Anvil</p>
                                <p className='date'>February 2025 - May 2025</p>

                                <ul>
                                    <li>Built and launched a responsive BigCommerce storefront with custom theme components and optimized page performance across mobile
                                    and desktop devices.
                                    e</li>
                                    <li>Ensured cross-browser and cross-device compatibility through systematic testing and performance profiling.
                                    </li>
                                    <li>Collaborated with the development team using GitHub for version control, pull request reviews, and branch management.
                                    </li>
                                </ul>
                             </div>
                        </div>
                            
                        <div className='technical-block'>
                             <h2>TECHNICAL SKILLS</h2>

                             <ul>
                                <li><span>Languages & Frameworks:</span> JavaScript, TypeScript, Next.js, Node.Js, PHP, SQL

                                    
                                </li>

                                <li><span>Backend & Database:</span>  Prisma ORM, MySQL, REST APIs, PostgreSQL
                                  
                                </li>

                                <li><span>Frontend:</span> SCSS, HTML, CSS, Tailwind CSS, React


                                </li>

                                <li><span>AI & Automation:</span>  LLM Integration, OpenAPIs, N8N, Claude Code, LangChain, LangGraph
                                </li>

                                <li><span>CMS / Platforms:</span> WordPress, BigCommerce
                                </li>

                                <li><span>Tools:</span>  Git, GitHub, Vercel, Railway, Supabase

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