import './ProjectDetails.scss'
import { useState } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { projects } from '../../assets/projects/projects.js'
import TechIcon from '../../components/common/tech-icon/TechIcon.js'
import FeatureCard from './FeatureCard.js'
import ScreenshotModal from './ScreenshotModal.js'
import { FaGithubAlt } from "react-icons/fa6"
import { IoLink } from "react-icons/io5"

const ProjectDetails = () => {

    const { slug } = useParams()
    const project = projects.find(p => p.slug === slug)
    const iconSize = 'clamp(60px, 5.5vw, 90px)'
    const [activeIndex, setActiveIndex] = useState(null)

    if (!project) {
        return (
            <div className='project-details-main'>
                <div className='not-found'>
                    <h1>Project not found</h1>
                    <NavLink to='/projects'>Back to projects</NavLink>
                </div>
            </div>
        )
    }

    const galleryImages = [project.featured_image, ...(project.screenshots || [])]

    const closeModal = () => setActiveIndex(null)
    const showPrev = () => setActiveIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length)
    const showNext = () => setActiveIndex((i) => (i + 1) % galleryImages.length)

    return (
        <div className='project-details-main'>

            <div className='project-hero'>
                <img className='hero-image' alt={project.title} src={project.featured_image}></img>

                <div className='overlay'>
                    <h1>{project.title}</h1>

                    <div className='hero-links'>
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <FaGithubAlt className='icon'/> Github
                            </a>
                        )}
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <IoLink className='icon'/> Live Site
                            </a>
                        )}
                    </div>
                </div>
            </div>

            <div className='details-section'>
                <div className='section-header'>
                    <hr></hr>
                    <h2>OVERVIEW</h2>
                    <hr></hr>
                </div>

                <p>{project.overview}</p>
            </div>

            <div className='details-section'>
                <div className='section-header pill'>
                    <hr></hr>
                    <h2>TECHNOLOGIES USED</h2>
                    <hr></hr>
                </div>

                <div className='tech-container'>
                    {project.tech.map((t, index) => (
                        <TechIcon
                            key={index}
                            icon={t.icon}
                            label={t.tech}
                            size={iconSize}
                        />
                    ))}
                </div>
            </div>

            {project.features?.length > 0 && (
                <div className='details-section'>
                    <div className='section-header'>
                        <hr></hr>
                        <h2>FEATURES</h2>
                        <hr></hr>
                    </div>

                    <div className='features-grid'>
                        {project.features.map((feature, index) => (
                            <FeatureCard key={index} text={feature}/>
                        ))}
                    </div>
                </div>
            )}

            {project.problemsSolved?.length > 0 && (
                <div className='details-section'>
                    <div className='section-header'>
                        <hr></hr>
                        <h2>PROBLEMS SOLVED</h2>
                        <hr></hr>
                    </div>

                    <ul className='problems-list'>
                        {project.problemsSolved.map((problem, index) => (
                            <li key={index}>{problem}</li>
                        ))}
                    </ul>
                </div>
            )}

            {project.reflection && (
                <div className='details-section'>
                    <div className='section-header'>
                        <hr></hr>
                        <h2>REFLECTION</h2>
                        <hr></hr>
                    </div>

                    <p>{project.reflection}</p>
                </div>
            )}

            <div className='details-section'>
                <div className='section-header'>
                    <hr></hr>
                    <h2>SCREENSHOTS</h2>
                    <hr></hr>
                </div>

                <div className='gallery-grid'>
                    {galleryImages.map((src, index) => (
                        <img
                            key={index}
                            alt={`${project.title} screenshot ${index + 1}`}
                            src={src}
                            loading='lazy'
                            onClick={() => setActiveIndex(index)}
                        ></img>
                    ))}
                </div>
            </div>

            {activeIndex !== null && (
                <ScreenshotModal
                    images={galleryImages}
                    activeIndex={activeIndex}
                    onClose={closeModal}
                    onPrev={showPrev}
                    onNext={showNext}
                />
            )}

        </div>
    )
}

export default ProjectDetails
