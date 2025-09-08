import './Banner.scss'
import GridTiles from '../../../components/common/grid-tiles/GridTiles.js'
const Banner = () => {
    return(
        <div className='about-banner'>
            
            <div className='banner-content'>

                <h1> SO, WHO AM I? </h1>
                <hr></hr>
                <p> 
                    Hi, I’m Francis Norman Causing, a passionate Full Stack Developer and student leader currently pursuing my degree in the College of Engineering and Computing Studies. I enjoy creating solutions that combine functionality with clean, user-friendly design, whether it’s a mobile app, web system, or an IoT-powered project.
                    My journey in tech started with curiosity about how applications work, which led me to dive into programming and eventually build projects like Komyuter, a real-time arrival tracker for modern jeepney commuters.
                </p>

            </div>

            <GridTiles/>
            
            <div>

            
            </div>
        </div>
    )
}


export default Banner