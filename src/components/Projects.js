import { Container, Col, Row, Nav, Tab } from 'react-bootstrap';
import { ProjectCard } from './Cards';
import projImg1 from "../media/img/project-img1.png";
import projImg2 from "../media/img/project-img2.png";
import projImg3 from "../media/img/project-img3.png";
import projImg4 from "../media/img/project-img4.png";
import projImg5 from "../media/img/project-img5.png";
import projImg6 from "../media/img/project-img6.png";
import projImg7 from "../media/img/project-img7.png";
import projImg8 from "../media/img/project-img8.png";
import projImg9 from "../media/img/project-imag9.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {   
    const planets1 = [
        {
           title: "MERCURY",
           description: "Distance from Sum (10^6km): 51.9 \nMass (10^24): 0.33 \nDiameter (km):4879 \nDensity (kg/m^3): 5427 \nGravity (m/s^2): 3.7 \nMoons: None",
           imgUrl: projImg1,
        },
        {
           title: "VENUS",
           description: "Distance from Sum (10^6km): 108.2 \nMass (10^24): 4.87 \nDiameter (km): 12104 \nDensity (kg/m^3): 5243 \nGravity (m/s^2): 8.9 \nMoons: None",
           imgUrl: projImg2,
        },
        {
           title: "EARTH",
           description: "Distance from Sum (10^6km): 149.6 \nMass (10^24): 5.97 \nDiameter (km): 12756 \nDensity (kg/m^3): 5514 \nGravity (m/s^2): 9.8 \nMoons: (1)",
           imgUrl: projImg3,
        },
        {
           title: "MARS",
           description: "Distance from Sum (10^6km): 227.9 \nMass (10^24): 0.642 \nDiameter (km): 6792 \nDensity (kg/m^3): 3933 \nGravity (m/s^2): 3.7 \nMoons: (2)",
           imgUrl: projImg4,
        },
    ];
    const planets2 = [
        {
           title: "JUPITER",
           description: "Distance from Sum (10^6km): 778.6 \nMass (10^24): 1898 \nDiameter (km): 4879 \nDensity (kg/m^3): 1326 \nGravity (m/s^2): 59.1 \nMoons: (79)",
           imgUrl: projImg5,
        },
        {
           title: "SATURN",
           description: "Distance from Sum (10^6km): 1433.5 \nMass (10^24): 568 \nDiameter (km): 120536 \nDensity (kg/m^3): 687 \nGravity (m/s^2): 9 \nMoons: (62)",
           imgUrl: projImg6,
        },
        {
            title: "URANUS",
            description: "Distance from Sum (10^6km): 2872.5 \nMass (10^24): 86.8 \nDiameter (km): 51118 \nDensity (kg/m^3): 1271 \nGravity (m/s^2): 8.7 \nMoons: (27)",
            imgUrl: projImg7,
         },
         {
            title: "NEPTUNE",
            description: "Distance from Sum (10^6km): 4495.1 \nMass (10^24): 102 \nDiameter (km):49528 \nDensity (kg/m^3): 1638 \nGravity (m/s^2): 11 \nMoons: (14)",
            imgUrl: projImg8,
         },
    ];
    const planets3 = [
        {
           title: "PLUTO",
           description: "Distance from Sum (10^6km): 5906.4 \nMass (10^24): 0.0146 \nDiameter (km): 2370 \nDensity (kg/m^3): 2095 \nGravity (m/s^2): 0.7 \nMoons: (5)",
           imgUrl: projImg9,
        },
    ];

/*Building Planet Cards-info*/   
    return (
       <section className="project" id="project">
        <Container>
            <Row>
                <Col>
                <TrackVisibility>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                    <h2>Planet Cards</h2>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Inner Planets</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Outer Planets</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Dwarf Planets</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    <Tab.Content className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    planets1.map((project, index) => {
                                        return (
                                            <ProjectCard
                                                key={index}
                                                {...project}
                                            />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    <Tab.Container id="projects-tabs" defaultActiveKey="second">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Inner Planets</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Outer Planets</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Dwarf Planets</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    <Tab.Content  className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="second">
                            <Row>
                                {
                                    planets2.map((project, index) => {
                                        return (
                                            <ProjectCard 
                                                key={index}
                                                {...project}
                                            />
                                        )
                                    })
                                }
                            </Row>                      
                        </Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    <Tab.Container id="projects-tabs" defaultActiveKey="third">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Inner Planets</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Outer Planets</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Dwarf Planets</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="third">
                            <Row>
                                {
                                    planets3.map((project, index) => {
                                        return (
                                            <ProjectCard
                                                key={index}
                                                {...project}
                                            />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    </div>}    
                </TrackVisibility>           
                </Col>
            </Row>
        </Container>
       </section> 
    )
}
