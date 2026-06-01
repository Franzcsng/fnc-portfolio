import './Contact.scss'
import ContactCard from './contact-card/ContactCard.js'
import ContactForm from './contact-form/ContactForm.js'
import { MdOutlineEmail } from "react-icons/md";

import {icons} from '../../components/icons.js'


const GitHubIcon = icons.github
const LinkedinIcon = icons.linkedin
const PhoneIcon = icons.phone

const Contact = () => {

    let contacts = [
        {
            title: 'EMAIL',
            address: 'franzcsng23@gmail.com',
            link: 'mailto:franzcsng23@gmail.com',
            icon: MdOutlineEmail,
        },
        {
            title: 'CONTACT NO.',
            address: '+639285200815',
            link: 'tel:+639285200815',
            icon: PhoneIcon,
        },
        {
            title: 'GITHUB',
            address: 'Franzcsng',
            link: 'https://github.com/Franzcsng',
            icon: GitHubIcon,
        },
        
        {
            title: 'LINKEDIN',
            address: 'Francis Causing',
            link: 'https://linkedin.com/in/francis-causing-895463367',
            icon: LinkedinIcon,
        }
        
    ]

    const displayContacts = (list) => {
        return list.map((contact, index) => (
                <ContactCard
                    key='index'
                    icon={contact.icon}
                    title={contact.title}
                    link={contact.link}
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

                <ContactForm positionTop='-60px'/>

            </div>
        </div>
    )
}

export default Contact