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
                    <label for='subject'> SUBJECT </label>
                    <input type='text' id='subject' name='subject' placeholder='What do you want to talk about?'></input>
                </form>

            </div>
        </div>
    )
}

export default Contact