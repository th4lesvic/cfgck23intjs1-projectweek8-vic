import { useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { ArrowUpRightCircle } from 'react-bootstrap-icons';
import headerImg from '../media/img/header-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

/*Banner animation-states*/
export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Earth", "Solar System", "Milky Way"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length +1 );
        setText(updatedText);
        
        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
     }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col x={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <span className="tagline">The Answer is 42</span>
                                <h1>{`Hi visitor you are here: `}<span className="wrap">{text}</span></h1>
                                    <p>“Space is big. You just won't believe how vastly, hugely, mind-bogglingly big it is. I mean, you may think it's a long way down the road to the chemist's, but that's just peanuts to space.”</p>
                                    <p id="bannerAuthor">― Douglas Adams, The Hitchhiker's Guide to the Galaxy</p>
                                    <button onClick={() => window.location.href = 'https://random.dog/'}>Let's connect <ArrowUpRightCircle size={25}/></button>
                            </div>}
                        </TrackVisibility>
                    </Col>
                    <Col x={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
