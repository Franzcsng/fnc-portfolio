import './About.scss'
import Banner from './banner/Banner.js'
import Journey from './Journey.js'

const About = () => {
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
                    <Journey
                        journey='THE BEGINNING'
                    />

                    <Journey
                        journey='LEARNING'
                    />

                    <Journey
                        journey='EXPERIENCE'
                    />

                    <Journey
                        journey='PASSION'
                    />

                    <Journey
                        journey="WHAT'S NEXT"
                    />

                </div>
               


            </div>

            <div className='about-section'>

                
            </div>
        </div>
    )
}

export default About