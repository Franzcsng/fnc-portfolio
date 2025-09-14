import './About.scss'
import Banner from './banner/Banner.js'
import Journey from './Journey.js'
import AboutItem from './AboutItem.js'
import { HiAcademicCap } from "react-icons/hi2";

const About = () => {

    let journeys = [
        "THE BEGINNING",
        "LEARNING",
        "EXPERIENCE",
        "PASSION",
        "WHAT'S NEXT"
        ]

    let aboutSections = [
        {
            section: journeys[0],
            description: "My journey has been a continuous story of growth and discovery. It began with humble beginnings that shaped my character and values. As I moved into the stage of learning, I embraced knowledge and built the foundations that would guide me forward. Experience taught me resilience, adaptability, and the importance of turning challenges into opportunities. Through these moments, I discovered my passion—an inner drive that fuels my creativity and purpose. Now, as I look toward what’s next, I carry with me the lessons of the past and the excitement of new opportunities waiting ahead",
            icon: HiAcademicCap,
            year: "2002-2010",
            text: "Behind the Red Gate Under the Santol Tree"
        },

        {
            section: journeys[1],
            description: "My journey has been a continuous story of growth and discovery. It began with humble beginnings that shaped my character and values. As I moved into the stage of learning, I embraced knowledge and built the foundations that would guide me forward. Experience taught me resilience, adaptability, and the importance of turning challenges into opportunities. Through these moments, I discovered my passion—an inner drive that fuels my creativity and purpose. Now, as I look toward what’s next, I carry with me the lessons of the past and the excitement of new opportunities waiting ahead",
            icon: HiAcademicCap,
            year: "2002-2010",
            text: "Behind the Red Gate Under the Santol Tree"
        },

        {
            section: journeys[2],
            description: "My journey has been a continuous story of growth and discovery. It began with humble beginnings that shaped my character and values. As I moved into the stage of learning, I embraced knowledge and built the foundations that would guide me forward. Experience taught me resilience, adaptability, and the importance of turning challenges into opportunities. Through these moments, I discovered my passion—an inner drive that fuels my creativity and purpose. Now, as I look toward what’s next, I carry with me the lessons of the past and the excitement of new opportunities waiting ahead",
            icon: HiAcademicCap,
            year: "2002-2010",
            text: "Behind the Red Gate Under the Santol Tree"
        },

        {
            section: journeys[3],
            description: "My journey has been a continuous story of growth and discovery. It began with humble beginnings that shaped my character and values. As I moved into the stage of learning, I embraced knowledge and built the foundations that would guide me forward. Experience taught me resilience, adaptability, and the importance of turning challenges into opportunities. Through these moments, I discovered my passion—an inner drive that fuels my creativity and purpose. Now, as I look toward what’s next, I carry with me the lessons of the past and the excitement of new opportunities waiting ahead",
            icon: HiAcademicCap,
            year: "2002-2010",
            text: "Behind the Red Gate Under the Santol Tree"
        },

        {
            section: journeys[4],
            description: "My journey has been a continuous story of growth and discovery. It began with humble beginnings that shaped my character and values. As I moved into the stage of learning, I embraced knowledge and built the foundations that would guide me forward. Experience taught me resilience, adaptability, and the importance of turning challenges into opportunities. Through these moments, I discovered my passion—an inner drive that fuels my creativity and purpose. Now, as I look toward what’s next, I carry with me the lessons of the past and the excitement of new opportunities waiting ahead",
            icon: HiAcademicCap,
            year: "2002-2010",
            text: "Behind the Red Gate Under the Santol Tree"
        },

    ]

    const returnJourneys = (journeys) => {
        return journeys.map((journey, index) =>  ( 
            <Journey
                key={index}
                journey={journey}
            />
        ))
    }
     
    const returnSections = (sections) => {
        return sections.map((section, index) => {
        const isReverse = index % 2 !== 0 ? "reverse" : "";
        const alternate = index % 2 !== 0 ? "rev" : "";
                 
        return (
            <>
                <AboutItem
                    key={index}
                    section={section.section}
                    description={section.description}
                    icon={section.icon}
                    year={section.year}
                    text={section.text}
                    reverse={isReverse}
                    rev={alternate}
                />

                <hr></hr>
            </>

        )
    })
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

                {returnSections(aboutSections)}

            </div>
        </div>
    )
}

export default About