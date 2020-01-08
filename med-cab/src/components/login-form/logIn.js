import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup } from 'reactstrap';
import {withFormik, Field } from 'formik';
import * as Yup from 'yup';
// import axios from 'axios';

import { SignIn, RegisterLink, Errors, Heading, FormLinks } from './logInStyles';
import { HeadingContainer, FormContainer } from '../sign-up-form/signUpStyles';

const LogIn = ({ values, errors, touched, status }, props) => {
    const [user, setUser] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setUser({email:'', password:''});
    }

    return (
        <SignIn>

            <HeadingContainer>
                <Heading>Welcome back!</Heading>
            </HeadingContainer>
            <FormContainer>

                <Form>
                    <FormGroup>
                    {/*E-Mail*/}
                    <label htmlFor = 'email'>E-Mail:</label>
                    <Field type = 'text' name = 'email' onSubmit = {handleSubmit} />
                    </FormGroup>
                    {touched.email && errors.email && (<Errors>{errors.email} </Errors>)}

                    <FormGroup>
                    {/*Password*/}
                    <label htmlFor = 'password'>Password:</label>
                    <Field type = 'text' name = 'password' onSubmit = {handleSubmit} />
                    </FormGroup>
                    {touched.password && errors.password && (<Errors>{errors.password} </Errors>)}

                    <FormGroup>
                        <Field type = 'submit' name = 'submit' value ='Log In' />
                    </FormGroup>

                </Form>

            </FormContainer>
            <FormLinks>
                <RegisterLink>
                    <p>Don't have an account? <Link to='/register'>Click here to register.</Link></p>
                </RegisterLink>

                <RegisterLink>
                    <p>Forgot password? <a href = '#'>Click here.</a></p>
                </RegisterLink>
            </FormLinks>
 
        </SignIn>
    )
};

const LogInValidation = withFormik ({
    confirmUser({ email, password }) {
        return {
            email: email || '',
            password: password || ''
        };
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email('Not a vaild email ex. (MyEmail@aol.com)').required('E-mail is required.'),
        password: Yup.string().min(6, 'Password must be more than 6 characters.').required('Please enter a password')
    }),
    handleSubmit(values, { setStatus }) {
        console.log('Submitting', values);
    }
})(LogIn);

export default LogInValidation;