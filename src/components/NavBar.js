import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../media/img/logo.svg';
import navIcon1 from '../media/img/nav-icon1.svg';
import navIcon2 from '../media/img/nav-icon2.svg';
import navIcon3 from '../media/img/nav-icon3.svg';

export const NavBar = ()  => {
    //States of links in the Home page
    const [activeLink, setActiveLink] = useState('home');
    //Detect if the user is scrolling and change the color of background
    const [scrolled, seScrolled] = useState(false);
    //Trigger once it is scrolled, depend on the state
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            }else {
                seScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return() => window.removeEventListener("scroll", onScroll);
    }, [])
    //Variable declaration when Nav.Link is updated
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return (
        //ClassName based on the condition (if scrolled)
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" /> 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"> 
                    <span className="nav-toggler-icon"></span>
                </Navbar.Toggle>.
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="../pages/SecondPage.jsx" className={activeLink === 'projects' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Planet Cards</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/victoriapbravo/"><img src={navIcon1} alt="LinkedIn link"/></a>
                            <a href="https://twitter.com/th4lesvic"><img src={navIcon2} alt="Twitter link"/></a>
                            <a href="#https://github.com/th4lesvic"><img src={navIcon3} alt="Github link"/></a>
                        </div>
                        <button className="vvd" onClick={() => alert('Please feel free to relay your comments, suggestions at: \n th4lesvic@gmail.com')}><span>Let's Connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

