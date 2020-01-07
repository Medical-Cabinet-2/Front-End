import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
// import axios from 'axios';

import { SignIn, RegisterLink, Errors } from './logInStyles';

const LogIn = ({ values, errors, touched, status }, props) => {
    const [user, setUser] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setUser({email:'', password:''});
    }

    return (
        <SignIn>
            <Form>
                {/*E-Mail*/}
                <label htmlFor = 'email'>E-Mail:</label>
                <Field type = 'text' name = 'email' onSubmit = {handleSubmit} />
                {touched.email && errors.email && (<Errors>{errors.email} </Errors>)}
                {/*Password*/}
                <label htmlFor = 'password'>Password:</label>
                <Field type = 'text' name = 'password' onSubmit = {handleSubmit} />
                {touched.password && errors.password && (<Errors>{errors.password} </Errors>)}
            </Form>

            <RegisterLink>
                <p>Don't have an account? <Link to='/register'>Click here to register.</Link></p>
            </RegisterLink>

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
        email: Yup.string().email().required('E-mail is required.'),
        password: Yup.string().min(6, 'Password must be more than 6 characters.').required('Please enter a password')
    }),
    handleSubmit(values, { setStatus }) {
        console.log('Submitting', values);
    }
})(LogIn);

export default LogInValidation;