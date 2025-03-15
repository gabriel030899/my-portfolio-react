import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    
        useEffect(() => {
                setTimeout(() => {
                    setLetterClass('text-animate-hover')
                }, 3000)
            }
            , [])
    
    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in growing up as a developer, becoming fullstack in the future and helping other people achieving their goals. Feel free to get in touch with me, I`ll be very happy and thankful for the contact. You can contact me using the form below.
                    </p>
                    <div className="contact-form">
                        <form action="">
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required/>
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="Email" required/>
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required/>
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact