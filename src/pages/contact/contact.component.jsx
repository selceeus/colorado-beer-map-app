import React, { Component } from 'react';
import { Formik } from 'formik';
import Hero from '../../components/utilities/hero.component';
import Featured from '../../components/featured/featured.component';
import './contact.styles.scss';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            headline: 'Contact',
            lead: 'You have questions, we might have the answers!',
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

                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validate={values => {
                            const errors = {};
                            if (!values.email) {
                            errors.email = 'Required';
                            } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                            errors.email = 'Invalid email address';
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                            }, 400);
                        }}
                        >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                            /* and other goodies */
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                {errors.email && touched.email && errors.email}
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                {errors.password && touched.password && errors.password}
                                <button type="submit" disabled={isSubmitting}>Submit</button>
                            </form>
                        )}
                    </Formik>
                    </div>
                </div>
                </div>
                <Featured sectionHeader={'Featured Breweries'} />
            </section>
        );
    }
}

export default Contact;