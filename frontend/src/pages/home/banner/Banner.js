import './Banner.scss'
import GridTiles from './GridTiles.js'
import Button from './../../../components/common/button/Button.js'

const Banner = () => {

    
    return(
        <div className='banner-main'>
            
            <div className='banner-content'>
                <h1>HELLO, I'M <span>FRANCIS</span></h1>
                <p>An Information Technology Graduate with a passion in tech, particularly in web-development, and an aspiringfull-stack developer from the Philippines!</p>
                <div className='btn-container'>
                    <Button
                        text='Contact me'
                        link='/contact'
                    />

                    <Button
                        text='Resume'
                        link='/resume'
                    />
                </div>
            </div>
            <GridTiles/>

            
        </div>
    )
}
export default Banner