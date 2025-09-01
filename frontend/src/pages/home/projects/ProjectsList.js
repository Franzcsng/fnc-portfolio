import './ProjectsList.scss'
import ProjectCard from './ProjectCard.js'

const ProjectsList = () => {
    return(
        <div className='projects-container'>

            <ProjectCard
                img='https://images.unsplash.com/photo-1755177510462-bf74c129428f'
                title='PROJECT 1'
                level ='Beginner'
                desc='A responsive web application designed to provide users with a seamless and intuitive experience. It features a modern UI, optimized performance, and reusable components for scalability and maintainability.'
            />

            <ProjectCard
                img='https://images.unsplash.com/photo-1755177510462-bf74c129428f'
                title='PROJECT 1'
                level ='Beginner'
                desc='A responsive web application designed to provide users with a seamless and intuitive experience. It features a modern UI, optimized performance, and reusable components for scalability and maintainability.'
            />

            <ProjectCard
                img='https://images.unsplash.com/photo-1755177510462-bf74c129428f'
                title='PROJECT 1'
                level ='Beginner'
                desc='A responsive web application designed to provide users with a seamless and intuitive experience. It features a modern UI, optimized performance, and reusable components for scalability and maintainability.'
            />
               
        </div>
    )
}

export default ProjectsList