import styled from 'styled-components';
import FormBackground from '../../images/formBackground.jpg';

export const Register = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-image: url(${FormBackground});
    background-repeat: repeat;
    background-size: 100%;
    border: 3px solid black;
    flex-wrap: wrap;
    width: 80%;
`;

export const SignInLink = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    color: white;
    background-color black;
    width: 100%;
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
    font-size: 3rem;
    font-family: "Courgette", cursive;
    color: white;
    padding: 0 1em;
`;

export const FormContainer = styled.div`
    background: rgb(255,255,204);
    z-index: 1;
    padding: 4em;
    max-width: 100%;
`;

export const HeadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: black;
    width: 100%;
`;
