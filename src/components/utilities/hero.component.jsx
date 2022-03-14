import React from 'react';
import { Container, Row } from 'reactstrap';
import './hero.styles.scss';

const Hero = props => {
    return(
        <section className="hero bg-light mb-4 py-5 py-sm-5">
            <Container>
                <Row>
                    <h1 className="display-3">{props.headline}</h1>
                    <p className="lead">{props.content}</p>
                </Row>
            </Container>
        </section>
    );
}

export default Hero;