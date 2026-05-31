import './ContactForm.scss'


const ContactForm = ({header = 'CONTACT ME', positionTop = 'none'}) => {

    const styles = {
        top: `${positionTop}`
    }

    return(
        <form className='contact-form' style={{...styles}}>

            <h2>{header}</h2>
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
    )
}


export default ContactForm

