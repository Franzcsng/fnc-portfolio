import './Banner.scss'
import GridTiles from './GridTiles.js'
import Button from './../../../components/common/button/Button.js'

const Banner = () => {

    
    return(
        <div className='banner-main'>
            
            <div className='banner-content'>
                <h1>HELLO, I AM <span>FRANCIS NORMAN A. CAUSING</span></h1>
                <p>An aspiring full-stack developer from the Philippines!</p>
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