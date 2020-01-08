import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import { Register, SignInLink, Errors } from './signUpStyles';

const SignUp = ({ values, errors, touched, status }) => {
    // const [user, setUser] = useState([]);

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     props.addUser(user);
    //     setUser({email:'', password:''});
    // }

    // useEffect(() => {
    //     status && setUser(user => [...user, status]);
    //     console.log('Status has changed', status)
    // }, [status])

    return (
        <Register>
            <Form>
                {/*Name*/}
                <label htmlFor = 'name'>Name/Nickname:</label>
                <Field type = 'text' name = 'name' />
                {touched.name && errors.name && (<Errors>{errors.name} </Errors>)}

                {/*Age*/}
                <label htmlFor = 'age'>Age:</label>
                <Field type = 'number' name = 'age' />
                {touched.age && errors.age && (<Errors>{errors.age} </Errors>)}

                {/*Email*/}
                <label htmlFor = 'email'>E-mail:</label>
                <Field type = 'text' name = 'email' />
                {touched.email && errors.email && (<Errors>{errors.email} </Errors>)}
                {/*State*/}
                <label htmlFor = 'state'>State:</label>       
                <Field type = 'text' name = 'state' />
                {touched.state && errors.state && (<Errors>{errors.state} </Errors>)}     

                {/*Password*/}
                <label htmlFor = 'password'>Password:</label>
                <Field type = 'password' name = 'password' />
                {touched.password && errors.password && (<Errors>{errors.password} </Errors>)}

                {/*Terms of Service*/}
                <label htmlFor = 'terms'>
                    Terms of Service Agreement
                    <Field type = 'checkbox' name = 'ToS' checked={values.ToS}/>
                    {touched.ToS && errors.ToS && (<Errors>{errors.ToS} </Errors>)}
                </label>

                <Field type = 'submit' name = 'submit'  />
                
            </Form>
            <SignInLink>
                <p>Have an account with us already? <Link to='/log-in'>Sign in here.</Link></p>
            </SignInLink>
            

        </Register>
    )
};

const SignUpValidation = withFormik ({
    mapPropsToValues({ name, age, email, state, password, ToS }){
    return {
        name: name || '',
        age: age || '',
        email: email || '',
        state: state || '',
        password: password || '',
        ToS: ToS || false
    };
},
    validationSchema: Yup.object().shape({
        name: Yup.string().required('Name is required.'),
        age: Yup.number().moreThan(21, 'You must be 21 or over to register to Med Cabinet').required('Please enter your age.'),
        email: Yup.string().email().required('E-mail is required.'),
        state: Yup.string().length(2, 'State must be 2 characters ex. (CA)').required('State is required.'),
        password: Yup.string().min(6, 'Password must be more than 6 characters.').required('Please enter a password'),
        ToS: Yup.bool().oneOf([true], 'You have to agree to the Terms and Conditions to continue with the regisration.')
    }),
    handleSubmit(values, { setStatus, props }) {
        console.log('Submitting', values);
        const URL = 'https://node-server-med-cabinet.herokuapp.com/api/auth/register';

        const newUser = {
            email: values.email,
            password: values.password
        };

        axios
            .post(`${URL}`, newUser)
            .then(res => {
                console.log(`success`, res);
                setStatus(res.data);
                props.history.push("/log-in");
            })
            .catch(err => console.log(err.response));

        // keeping this for Issac's MVP review
        // axios
        // .post('https://reqres.in/api/users/', values)
        // .then(res => {
        //     console.log(res);
        //     setStatus(res.data);
        // })
        // .catch(err => console.err(err));
    }
})(SignUp);

export default SignUpValidation;