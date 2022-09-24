


function Contact() {
    return ( 
    <div className="contact--wrapper">
        <div className="contact--form">
            <h6>Pour me laisser un message</h6>
            <form>
                <textarea id='name' placeholder="votre mail ou votre nom"></textarea>
                <textarea id='message' placeholder="votre message"></textarea>
                <button type="button" >envoyer<img src='/logo/send.svg' alt="logo d'envoi"></img></button>
            </form>
            <img id='message--logo' src='/logo/envelope.svg' alt="lettre d'envoi"></img>

        </div>
        <div className="contact--networks">
            <img id="ligne" src='/logo/line.svg' alt='ligne blanche'></img>
            <div className="networks--logo">
                <img className='nl' src='/logo/instagram.svg' alt='instagram'></img>
                <img className='nl' src='/logo/linkedin.svg' alt='linkedin'></img>
                <img className='nl' src='/logo/github.svg' alt='github'></img>
                <img className='nl' src='/logo/twitch.svg' alt='twitch'></img>
            </div>
        </div>

    </div> 
    );
}

export default Contact;