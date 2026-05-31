import './Contact.scss'
import ContactCard from './contact-card/ContactCard.js'
import ContactForm from './contact-form/ContactForm.js'
import { MdOutlineEmail } from "react-icons/md";
const Contact = () => {

    let contacts = [
        {
            title: 'EMAIL',
            address: 'franzcsng23@gmail.com',
            icon: MdOutlineEmail,
        },
        {
            title: 'GITHUB',
            address: 'Franzcsng',
            icon: MdOutlineEmail,
        },
        {
            title: 'LINKEDIN',
            address: 'Francis Causing',
            icon: MdOutlineEmail,
        },
        {
            title: 'LOCATION',
            address: 'Bacolod City, Philippines',
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

                <ContactForm positionTop='-60px'/>

            </div>
        </div>
    )
}

export default Contact