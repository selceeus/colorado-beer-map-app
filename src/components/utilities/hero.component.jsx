import React from 'react';
import { Container } from 'reactstrap';
import './hero.styles.scss';

const Hero = props => {
    return(
        <section className="hero bg-light mb-4 py-3 py-sm-5">
            <Container>
                <h1 className="display-3">{props.headline}</h1>
                <p className="lead">{props.content}</p>
            </Container>
        </section>
    );
}

export default Hero;