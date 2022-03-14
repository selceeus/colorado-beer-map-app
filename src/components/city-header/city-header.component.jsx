import React from 'react';
import { Container, Row } from 'reactstrap';
import './city-header.styles.scss';

const CityHeader = props => {
    return(
        <section className="py-3 py-sm-5 d-flex align-items-center">
            <Container>
                <Row>
                    <h1 className={`display-${props.display}`}>{props.headline}</h1>
                    <p className="lead">{props.content}</p>
                </Row>
            </Container>
        </section>
    );
}

export default CityHeader;