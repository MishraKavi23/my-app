import contactInfo from '../images/contact-decoration.png'
import Image from './Image';
import InputField from './InputField';
const inputData = [
    {
        type: "text" ,
        name : "name",
        placeholder : "Enter Here..."
    },
    {
        type: "text" ,
        name : "Last name",
        placeholder : "Enter Here..."
    },
    {
        type: "email" ,
        name : "email",
        placeholder : "Enter Here..."
    },
    {
        type: "text" ,
        name : "name",
        placeholder : "Enter Here..."
    },
]
const Contact = () => {
    return(
        <>
            <form id="contact" className='position-relative'>
                    <div class="row form">
                        <InputField inputData={inputData} column="col-lg-6"/>
                    <div class="col-lg-12">
                        <fieldset>
                        <button type="submit" id="form-submit" class="main-button ">Send Message</button>
                        </fieldset>
                    </div>
                    </div>
                    <div class="contact-dec">
                        <Image path={contactInfo}/>
                    </div>
                </form>
        </>
    )
}

export default Contact;