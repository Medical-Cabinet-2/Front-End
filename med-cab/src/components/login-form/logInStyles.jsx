import styled from 'styled-components';
import FormBackground from '../../images/formBackground.jpg';

export const SignIn = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    background-image: url(${FormBackground});
    background-repeat: repeat;
    background-size: 100%;
    text-align: center;
    border: 3px solid black;
    width: 80%;
`;

export const RegisterLink = styled.div`
    text-align: center;
`;

export const Errors = styled.p`
    font-weight: 900;
    margin: 1em 0;
    size: 2rem;
    color: red;
    font-family: "Assistant", sans-serif;
`;

export const Heading = styled.h1`
    text-align: center;
    font-size 3rem;
    font-family: "Courgette", cursive;
    color: white;
    padding: 0 1em;
`;

export const FormLinks = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: black;
    color: white;
    width: 100%;
    max-width: 100%;
`;
