import './Projects.scss'
import GridTiles from './../../components/common/grid-tiles/GridTiles.js'
import ProjectCardLong from './ProjectCardLong.js'
import {projects} from '../../assets/projects/projects.js'


const Projects = () => {
    return(
        <div className="projects-main">

            <div className='projects-banner'>

                <div className='grid-container'>
                    <GridTiles/>
                </div>
                
                <div className='overlay'>
                    <h1>MY WORKS</h1>
                    <p>Some are for practice, some are for fun, and some for professional work! Explore my diverse set of projects</p>
                </div>
                
            </div>

            <div className='projects-section'>

                {projects.map(p => (
                    <ProjectCardLong
                        image={p.featured_image}
                        title={p.title}
                        slug={p.slug}
                        description={p.description}
                        repo={p.github}
                        live={p.link || undefined}
                        techs={p.tech.map(t => (
                            {
                                icon: t.icon, 
                                label: t.tech
                            }
                        ))}
                    />
                ))}
                
            </div>

        </div>
    )
}

export default Projects