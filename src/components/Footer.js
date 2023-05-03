import { Container, Row, Col } from 'react-bootstrap';
import navIcon1 from '../media/img/nav-icon1.svg';
import navIcon2 from '../media/img/nav-icon2.svg';
import navIcon3 from '../media/img/nav-icon3.svg';

export const Footer =() => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <p>Project inspired by <a href= "https://github.com/judygab/web-dev-projects/tree/main/personal-portfolio">@judygab's </a>original idea. Made with &hearts; by <cite><abbr title="Victoria P.">th4lesvic</abbr></cite> </p>
                        <p>&copy;May 2023</p>
                    </Col>                  
                    <Col sm={6} className="text-center text-sm-end" >
                        <div id="social-icon-footer" className="social-icon" >
                            <a href="https://www.linkedin.com/in/victoriapbravo/"><img src={navIcon1} alt="LinkedIn link2" /></a>
                            <a href="https://twitter.com/th4lesvic"><img src={navIcon2} alt="Twitter Link2"  /></a>
                            <a href="https://github.com/th4lesvic"><img src={navIcon3} alt="Github Link2" /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}