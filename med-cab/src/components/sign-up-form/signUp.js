import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withFormik,  Field } from 'formik';
import { Form, FormGroup } from 'reactstrap';
import * as Yup from 'yup';
// import axios from 'axios';

import { Register, SignInLink, Errors, Heading, FormContainer,  HeadingContainer } from './signUpStyles';

const SignUp = ({ values, errors, touched, status }, props) => {
    const [user, setUser] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addUser(user);
        setUser({email:'', password:''});
    }

    useEffect(() => {
        status && setUser(user => [...user, status]);
        console.log('Status has changed', status)
    }, [status])

    return (
        <Register>
            <HeadingContainer>
                <Heading>Welcome, enter some info to start filling your Med Cabinet!</Heading>
            </HeadingContainer>
            <FormContainer>

                <Form>

                    <FormGroup>
                    {/*Name*/}
                        <label htmlFor = 'name'>Username:</label>
                        <Field type = 'text' name = 'name' onSubmit = {handleSubmit} />                   
                    </FormGroup>
                    {touched.name && errors.name && (<Errors>{errors.name} </Errors>)}

                    <FormGroup>
                    {/*Age*/}
                        <label htmlFor = 'age'>Age:</label>
                        <Field type = 'number' name = 'age' onSubmit = {handleSubmit} />
                        
                    </FormGroup>
                    {touched.age && errors.age && (<Errors>{errors.age} </Errors>)}

                    <FormGroup>
                    {/*Email*/}
                        <label htmlFor = 'email'>E-mail:</label>
                        <Field type = 'text' name = 'email' onSubmit = {handleSubmit} />  
                    </FormGroup>
                    {touched.email && errors.email && (<Errors>{errors.email} </Errors>)}

                    <FormGroup>
                    {/*State*/}
                        <label htmlFor = 'state'>State:</label>       
                        <Field type = 'text' name = 'state' onSubmit = {handleSubmit} />
                        
                    </FormGroup>
                    {touched.state && errors.state && (<Errors>{errors.state} </Errors>)}

                    <FormGroup>
                    {/*Password*/}
                        <label htmlFor = 'password'>Password:</label>
                        <Field type = 'text' name = 'password' onSubmit = {handleSubmit} />
                        
                    </FormGroup>
                    {touched.password && errors.password && (<Errors>{errors.password} </Errors>)}
                    
                    <FormGroup>
                    {/*Terms of Service*/}
                        <label htmlFor = 'terms'>
                            Terms of Service Agreement
                            <Field type = 'checkbox' name = 'ToS' onSubmit = {handleSubmit} />
                            
                        </label>
                    </FormGroup>
                    {touched.ToS && errors.ToS && (<Errors>{errors.ToS} </Errors>)}

                    <FormGroup>
                        <Field type = 'submit' name = 'submit' value ='Register' />
                    </FormGroup>

                </Form>

            </FormContainer>

            <SignInLink>
                <p>Have an account with us already? <Link to='/log-in'>Sign in here.</Link></p>
            </SignInLink>
            

        </Register>
    )
};

const SignUpValidation = withFormik ({
    createUser({ name, age, email, state, password }){
    return {
        name: name || '',
        age: age || '',
        email: email || '',
        state: state.toUpperCase()  || '',
        password: ''
    };
},
    validationSchema: Yup.object().shape({
        name: Yup.string().required('Name is required.'),
        age: Yup.number().moreThan(21, 'You must be 21 or over to register to Med Cabinet').required('Please enter your age.'),
        email: Yup.string().email('Email is invalid. ex. MyEmail@lol.co)').required('E-mail is required.'),
        state: Yup.string().length(2, 'State must be 2 characters ex. (CA)').required('State is required.'),
        password: Yup.string().min(6, 'Password must be more than 6 characters.').required('Please enter a password'),
        ToS: Yup.bool().test('consent', 'You have to agree to the Terms and Conditions to continue with registration.', value => value === true).required('You have to agree to the Terms and Conditions to continue with the regisration.')
    }),
    handleSubmit(values, { setStatus }) {
        console.log('Submitting', values);
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