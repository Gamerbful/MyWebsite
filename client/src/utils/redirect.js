

function attributeRedirect() {
    const logos = document.querySelectorAll('.networks--logo img');
    const [linkedin, github, instagram, twitch ] = logos;
    instagram.addEventListener('click', (e) => {
        window.open('https://www.instagram.com/bryan56_c/?hl=en', '_blank');
    })
    github.addEventListener('click', (e) => {
        window.open('https://github.com/Gamerbful', '_blank');
    })
    linkedin.addEventListener('click', (e) => {
        window.open('https://www.linkedin.com/in/bryan-cappelle-9b0a11199/', '_blank');
    })
    twitch.addEventListener('click', (e) => {
        window.open('https://www.twitch.tv/choux_ganai', '_blank');
    })
}

export default attributeRedirect;