import React, { Component } from 'react';
import { Formik } from 'formik';
import Hero from '../../components/utilities/hero.component';
import CityHeader from '../../components/city-header/city-header.component';
import Featured from '../../components/featured/featured.component';
import './sign-up.styles.scss';


class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            headline: 'Sign up',
            lead: 'Get the full app experience when you sign up!'
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
                <Hero />
                <CityHeader headline={ this.state.headline } content={this.state.lead} display="3"/>
                <div className="container">
                <div className="row row-content">
                    <div className="col-12 my-5">
                        <Formik
                            initialValues={{ 
                                name: '', 
                                email: ''
                            }}
                            validate={values => {

                                const errors = {};

                                if (!values.email) {
                                    errors.email = 'Required';
                                } 
                                else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
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
                            }) => (
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <div className="mb-1">
                                            <label 
                                                htmlFor="name"
                                                className="form-label"
                                            >
                                                Name:
                                            </label>
                                        </div>
                                        <div className="col-sm-12">
                                            <input
                                                id="name"
                                                type="text"
                                                name="name"
                                                className="form-control-lg"
                                                aria-label="Name"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.name}
                                            />
                                            {errors.name && touched.name && errors.name}
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <div className="mb-1">
                                            <label 
                                                htmlFor="email"
                                                className="form-label"
                                            >
                                                Email:
                                            </label>
                                        </div>
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            className="form-control-lg"
                                            aria-label="Email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                        {errors.email && touched.email && errors.email}
                                    </div>

                                    <button
                                        className='btn btn-secondary'
                                        type="submit" 
                                        disabled={isSubmitting}
                                    >
                                        Submit
                                    </button>

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

export default Signup; 