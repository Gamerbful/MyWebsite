

import Header from '../components/Header';
import Content from '../components/Content';
import Profil from '../components/Profil';
import Caroussel from '../components/Caroussel';
import Contact from '../components/Contact';

function Main(props) {
    return (
        <>
            <Header/>
            <Content title="About Me" class="ctn1" svg={props.getSvgBorder(0)}>
                <Profil description={props.data[0]} ratings={props.data[1]}></Profil>
            </Content>
            <Content title="My Projects" class="ctn2" svg={props.getSvgBorder(1)}>
                <Caroussel projects={props.data[2]}/>
            </Content>
            <Content title="Contact" class="ctn3">
                <Contact />
            </Content>
        </>  
    )
}

export default Main;