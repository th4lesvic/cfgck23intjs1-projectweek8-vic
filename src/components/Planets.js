/*MultiCarousel minimum set up*/
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
/*Imgs for the section*/
import planet1 from '../media/img/mercury.jpg';
import planet2 from '../media/img/venus.jpg';
import planet3 from '../media/img/earth.jpg';
import planet4 from '../media/img/mars.jpg';
import planet5 from '../media/img/jupiter.jpg';
import planet6 from '../media/img/saturn.jpg';
import planet7 from '../media/img/uranus.jpg';
import planet8 from '../media/img/neptune.jpg';

export const Planets = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>Planets</h2>
                        <p>Our solar system consists of our star, the Sun, and everything bound to it by gravity – the planets Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune; dwarf planets such as Pluto; dozens of moons; and millions of asteroids, comets, and meteoroids. Beyond our own solar system, we have discovered thousands of planetary systems orbiting other stars in the Milky Way.</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={planet1} alt="Mercury" />
                                <h5>Mercury</h5>
                            </div>
                            <div className="item">
                                <img src={planet2} alt="Venus" />
                                <h5>Venus</h5>
                            </div>
                            <div className="item">
                                <img src={planet3} alt="Earth" />
                                <h5>Earth</h5>
                            </div>
                            <div className="item">
                                <img src={planet4} alt="Mars" />
                                <h5>Mars</h5>
                            </div>
                            <div className="item">
                                <img src={planet5} alt="Jupiter" />
                                <h5>Jupiter</h5>
                            </div>  
                            <div className="item">
                                <img src={planet6} alt="Saturn" />
                                <h5>Saturn</h5>
                            </div>  
                            <div className="item">
                                <img src={planet7} alt="Uranus" />
                                <h5>Uranus</h5>
                            </div>
                            <div className="item">
                                <img src={planet8} alt="Neptune" />
                                <h5>Neptune</h5>
                            </div>                                                                                       
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>       
        </section>
      )
}

