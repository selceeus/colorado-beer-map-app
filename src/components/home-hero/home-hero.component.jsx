import React from 'react';
import { Container, Row } from 'reactstrap';
import CtaButton from '../utilities/cta-button.component';
import './home-hero.styles.scss';

const HomeHero = props => {

    return(
        <section className="hero bg-light mb-4 py-sm-5">
            <Container>
                <Row>
                    <h1 className="display-3">{props.headline}</h1>
                    <p className="lead">{props.content}</p>
                    <div className="lead">
                        <CtaButton button={props.buttonText} /> 
                    </div>
                </Row>
            </Container>
        </section>
    );
}

export default HomeHero;