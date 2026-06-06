import './ContactForm.scss'
import { sendEmail } from '../../../services/email/send-email'
import {useState} from 'react'

const ContactForm = ({header = 'CONTACT ME', positionTop = 'none'}) => {

    const styles = {
        top: `${positionTop}`
    }

    const [email, setEmail] = useState({
        sender: '',
        emailAddress: '',
        message: ''
    })

    const  [isSubmitting, setIsSubmitting] = useState(false)
    const [emailStatus, setEmailStatus] = useState({status: undefined, message: '' })

    const submitEmail = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        try {
            const emailSend = await sendEmail(email);

            setEmailStatus({
                status: emailSend.success,
                message: emailSend.message
            });

            if (emailSend.success) {
                setEmail({
                    sender: '',
                    emailAddress: '',
                    message: ''
                });
            }

        } catch (err) {
            setEmailStatus({
                status: false,
                message: 'Failed to send email'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return(
        <form className='contact-form' style={{...styles}} onSubmit={(e) => {submitEmail(e)}}>

            <h2>{header}</h2>
            <p>DON'T BE SHY TO LEAVE A MESSAGE, I'LL GET BACK TO YOU AS SOON AS POSSIBLE!</p>

            <div className='form-grid'>

                <div className='form-child'>

                    <label htmlFor='name'> NAME </label>
                    <input 
                        type='text' 
                        className='first-item' 
                        id='name' 
                        value={email.sender}
                        name='name' 
                        placeholder="Who's this from?"
                        onChange={(e) => {setEmail({
                            ...email,
                            sender: e.target.value}
                        )
                        }}
                    ></input>

                    <label htmlFor='email'> EMAIL </label>
                    <input 
                        type='email' 
                        id='email' 
                        name='email' 
                        value={email.emailAddress}
                        placeholder="Your email address here"
                        onChange={(e) => {setEmail({
                            ...email,
                            emailAddress: e.target.value}
                        )}}
                    ></input>

                </div>

                <div className='form-child'>

                    <label htmlFor='message'> MESSAGE </label>
                    <textarea 
                        id='message' 
                        value={email.message}
                        name='message' 
                        placeholder="What do you want to talk about? "
                        onChange={(e) => {setEmail({
                            ...email,
                            message: e.target.value}
                        )}}  
                    ></textarea>

                </div>

            </div>

            <button className='submit-btn' disabled={isSubmitting}> {isSubmitting ? 'SENDING...' : 'SUBMIT'} </button>
            {emailStatus.message !== '' && (
                <p>{emailStatus.message}</p>
            )}
        </form>
    )
}


export default ContactForm

