import { useState, useEffect } from 'react';
import { Navbar, Container } from 'react-bootstrap';

export const Navbar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }

        window.addEvenetListener("scroll",onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
            <Navbar.Brand href="#home">
                <img src={''} alt="Design World Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'nav-bar-link'}>Home</Nav.Link>
                <Nav.Link href="#proficiencies">Proficiencies</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                </Nav>
                <span clasName="navbar-text">
                    <div className="social-icon">
                        <a href="#"><img src={''} alt="" /></a>
                        <a href="#"><img src={''} alt="" /></a>
                    </div>
                    <button className="contactus" onClick={() => console.log('connect')}><span>Get in Touch</span></button>
                </span>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        );
}