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
            section: "THE BEGINNING",
            description: "",
            icon: HiAcademicCap,
            year: "2002=2010",
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
        return sections.map((section, index) => (
            <AboutItem
                key={index}
                section={section.section}
                description={section.description}
                icon={section.icon}
                year={section.year}
                text={section.text}
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

                {returnSections(aboutSections)}

            </div>
        </div>
    )
}

export default About