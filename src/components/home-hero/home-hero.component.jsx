import React from 'react';
import { Container } from 'reactstrap';
import CtaButton from '../utilities/cta-button.component';
import './home-hero.styles.scss';

const HomeHero = props => {

    return(
        <section className="hero bg-light mb-4 py-3 py-sm-5">
            <Container>
                <h1 className="display-3">{props.headline}</h1>
                <p className="lead">{props.content}</p>
                <div className="lead">
                    <CtaButton button={props.buttonText} /> 
                </div>
            </Container>
        </section>
    );
}

export default HomeHero;