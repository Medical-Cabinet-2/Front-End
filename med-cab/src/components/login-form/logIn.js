import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
// import axios from 'axios';

import { SignIn, RegisterLink, Errors } from './logInStyles';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const LogIn = ({ values, errors, touched, status }, props) => {
    // const [user, setUser] = useState([]);

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     setUser({email:'', password:''});
    // }

    return (
        <SignIn>
            <Form>
                {/*E-Mail*/}
                <label htmlFor = 'email'>E-Mail:</label>
                <Field type = 'text' name = 'email' onSubmit = {handleSubmit} />
                {touched.email && errors.email && (<Errors>{errors.email} </Errors>)}
                {/*Password*/}
                <label htmlFor = 'password'>Password:</label>
                <Field type = 'password' name = 'password' onSubmit = {handleSubmit} />
                {touched.password && errors.password && (<Errors>{errors.password} </Errors>)}
            </Form>

            <RegisterLink>
                <p>Don't have an account? <Link to='/register'>Click here to register.</Link></p>
            </RegisterLink>

        </SignIn>
    )
};

const LogInValidation = withFormik ({
    mapPropsToValues({ email, password }) {
        return {
            email: email || '',
            password: password || ''
        };
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email().required('E-mail is required.'),
        password: Yup.string().min(6, 'Password must be more than 6 characters.').required('Please enter a password')
    }),
    handleSubmit(values, { setStatus, props }) {
        console.log('Submitting', values);
        const URL = 'https://node-server-med-cabinet.herokuapp.com/api/auth/login';

        axios
            .post(`${URL}`, values)
            .then(res => {
                console.log(res);
                localStorage.setItem("token", res.data.token);
                props.history.push('/dashboard');
            })
            .catch(err => console.log(err.response));
    }
})(LogIn);

export default LogInValidation;