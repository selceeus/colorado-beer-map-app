import React, { Component } from 'react';
import { Button, Label, Row, Col } from 'reactstrap';
import Hero from '../../components/utilities/hero.component';
import Featured from '../../components/featured/featured.component';
import './sign-up.styles.scss';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val); 

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            headline: 'Sign up',
            lead: 'Get the full app experience when you sign up!',
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            agree: false,
            contactType: 'By Phone',
            feedback: '',
            touched: {
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false
            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(values) {
        console.log('Current state is: ' + JSON.stringify(values));
        alert('Current state is: ' + JSON.stringify(values));
    }

    render() {
        return(
            <section className="sign-up">
                <Hero 
                    headline={this.state.headline}
                    content={this.state.lead}
                />
                <div className="container">
                <div className="row row-content">
                    <div className="col-12 my-5">
                        
                    </div>
                </div>
                </div>
                <Featured sectionHeader={'Featured Breweries'} />
            </section>
        );
    }
}

export default Signup;