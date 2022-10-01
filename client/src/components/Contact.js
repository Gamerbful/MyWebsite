
import {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';

function Contact() {

    const form = useRef();
    const [count, setCount] = useState( ()=> 0);
    
    // send an email to website owner, use EmailJS API
    const sendEmail = (e) => {
        e.preventDefault();
        setCount( (count) => count+1);
        if (count > 2 ) {
            alert( "Stop le spamming! :)");
        }
        else {
            emailjs.sendForm('service_h91o2nr', 'template_ueduxiw', form.current, 'SJbF76iKFc5AUA92A')
            .then((result) => {
                alert("email envoyé!");
            }, (error) => {
                alert("erreur survenue, mon mail pro : bryan.cappelle@gmail.com");
            });
        }

      };

    return ( 
    <div className="contact--wrapper">
        <div className="contact--form">
            <h6>Pour me laisser un message</h6>
            <form ref={form} onSubmit={sendEmail}>
                <textarea id='name' name="from_name" placeholder="votre mail ou votre nom"></textarea>
                <textarea id='message' name="message" placeholder="votre message"></textarea>
                <button type="submit" >envoyer<img src='/logo/send.svg' alt="logo d'envoi"></img></button>
            </form>
            <img id='message--logo' src='/logo/envelope.svg' alt="lettre d'envoi"></img>

        </div>
        <div className="contact--networks">
            <img id="ligne" src='/logo/line.svg' alt='ligne blanche'></img>
            <div className="networks--logo">
                <img className='nl' src='/logo/linkedin.svg' alt='linkedin'></img>
                <img className='nl' src='/logo/github.svg' alt='github'></img>
                <img className='nl' src='/logo/instagram.svg' alt='instagram'></img>
                <img className='nl' src='/logo/twitch.svg' alt='twitch'></img>
            </div>
        </div>

    </div> 
    );
}

export default Contact;