import './Contact.scss'
import TechIcon from '../../components/common/tech-icon/TechIcon.js'
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
    return (
        <div className='contact-main'>
            <div className='contact-section'>

                <div className='banner'>
                    <h1> GET IN TOUCH</h1>

                    <p>
                        HAVE A QUESTION, AN IDEA, OR JUST WANT TO SAY HI? DON’T HESITATE TO DROP ME A MESSAGE! I’D BE HAPPY TO CONNECT AND CHAT WITH YOU.
                    </p>

                    <div className='contact-list'>

                        <div className='contact-card'>

                            <TechIcon
                                icon={MdOutlineEmail}
                                size='clamp(30px, 3.7vw, 60px)'
                            />


                            <div className='text'>
                                <p className='card-title'>
                                    GITHUB
                                </p>

                                <p className='address'>
                                    franzcsng23@gmail.com
                                </p>
                            </div>
                            
                        </div>

                        <div className='contact-card'>

                            <TechIcon
                                icon={MdOutlineEmail}
                                size='clamp(30px, 3.7vw, 60px)'
                            />


                            <div className='text'>
                                <p className='card-title'>
                                    GITHUB
                                </p>

                                <p className='address'>
                                    franzcsng23@gmail.com
                                </p>
                            </div>
                            
                        </div>

                        <div className='contact-card'>

                            <TechIcon
                                icon={MdOutlineEmail}
                                size='clamp(30px, 3.7vw, 60px)'
                            />


                            <div className='text'>
                                <p className='card-title'>
                                    GITHUB
                                </p>

                                <p className='address'>
                                    franzcsng23@gmail.com
                                </p>
                            </div>
                            
                        </div>

                        <div className='contact-card'>

                            <TechIcon
                                icon={MdOutlineEmail}
                                size='clamp(30px, 3.7vw, 60px)'
                            />


                            <div className='text'>
                                <p className='card-title'>
                                    GITHUB
                                </p>

                                <p className='address'>
                                    franzcsng23@gmail.com
                                </p>
                            </div>
                            
                        </div>

                        
                    
                    </div>
                </div>


            </div>

            <div className='contact-section second'>


            </div>
        </div>
    )
}

export default Contact