import './Contact.scss'
import TechIcon from '../../components/common/tech-icon/TechIcon.js'
import ContactCard from './contact-card/ContactCard.js'
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const Contact = () => {

    let contacts = [
        {
            title: 'EMAIL',
            address: 'franzcsng23@gmail.com',
            icon: MdOutlineEmail,
        },
        {
            title: 'GITHUB',
            address: 'franzcsng23@gmail.com',
            icon: MdOutlineEmail,
        },
        {
            title: 'LINKEDIN',
            address: 'franzcsng23@gmail.com',
            icon: MdOutlineEmail,
        },
        {
            title: 'LOCATION',
            address: 'BACOLOD CITY, PHILIPPINES',
            icon: MdOutlineEmail,
        },
    ]

    const displayContacts = (list) => {
        return list.map((contact, index) => (
                <ContactCard
                    key='index'
                    icon={contact.icon}
                    title={contact.title}
                    address={contact.address}
                />  
            ))
        }
    
    return (
        <div className='contact-main'>
            <div className='contact-section'>

                <div className='banner'>
                    <h1> GET IN TOUCH</h1>

                    <p className='banner-body'>
                        HAVE A QUESTION, AN IDEA, OR JUST WANT TO SAY HI? DON’T HESITATE TO DROP ME A MESSAGE! I’D BE HAPPY TO CONNECT AND CHAT WITH YOU.
                    </p>


                
                    <div className='contact-list'>

                        { displayContacts(contacts)}
                                 
                    </div> 
                </div>


            </div>

            <div className='contact-section second'>

                <form className='contact-form'>

                    <h2>CONTACT US</h2>
                    <p>DON'T BE SHY TO LEAVE A MESSAGE, I'LL GET BACK TO YOU AS SOON AS POSSIBLE!</p>

                    <div className='form-grid'>

                        <div className='form-child'>

                            <label for='name'> NAME </label>
                            <input type='name' className='first-item' id='name' name='name' placeholder="Who's this from? "></input>

                            <label for='email'> EMAIL </label>
                            <input type='email' id='email' name='email' placeholder="Your email address here"></input>

                        </div>

                        <div className='form-child'>

                            <label for='message'> MESSAGE </label>
                            <textarea type='message' id='message' name='message' placeholder="What do you want to talk about? "></textarea>

                        </div>

                    </div>

                    <button className='submit-btn'> SUBMIT </button>

                </form>

            </div>
        </div>
    )
}

export default Contact