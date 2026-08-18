import { MapIcon, MailIcon, PhoneCallIcon } from 'lucide-react'
import './Contact.css'

const Contact = () => {
    return(
        <>
        <div className='contact-container'>
            <div className='contact-text'>
                 <h1>Contact</h1>
                 <div className='contact-dash'></div>
                 <h3>Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci. 
                 Suspendisse vulputate semper nunc eget rhoncus.
                 </h3>
            </div>

            <div className='contact-page-container'>
                <div className='left-contact-info'>
                    <h1>Get in touch</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                       Ut id leo tempor, congue justo at, lobortis orci.
                    </p>
                    <div className='info-block'>
                         <MapIcon/> 
                         <p>123 fifth Avenue, Gwarinpa, Abuja.</p>
                    </div>
                    
                    <div className='info-block'>
                        <MailIcon/>
                        <p>contact@info.com</p>
                    </div>

                    <div className='info-block'>
                        <PhoneCallIcon/>
                        <p>07012356770</p>
                    </div>
                </div>

                <form className='contact-form'>
                    <div className='name-row'>
                        <input type="text" placeholder="First Name *" />
                        <input type="text" placeholder="Last Name *" />
                    </div>
                    <input type="email" placeholder="Your Email Address *" />
                    <textarea placeholder="Message" rows="6"></textarea>
                    <button type="submit" className="send-button">Send</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default Contact