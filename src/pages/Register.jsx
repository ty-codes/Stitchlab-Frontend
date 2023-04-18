import styled from "styled-components";
import {CustomInput} from "../components";
import { Link } from "react-router-dom";


export default function Register() {
    return (
        <Wrapper>
            <section>

                <Form>
                    <h2>Sign Up</h2>
                    <CustomInput type="text" placeholder="First name" required />
                    <CustomInput type="text" placeholder="Last name" required/>
                    <CustomInput type="email" placeholder="Email" required />
                    <CustomInput type="password" placeholder="Password" required />
                    <Button type="submit">Submit</Button>
                    <Text>Already have an account?
                        <Link to="/signin">  Sign in</Link>
                    </Text>
                </Form>

                {/* <div class="colored-curve"></div> */}
            </section>

        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background: #fff;
    display: inline-block;
    position: relative;
    overflow: hidden;

    &:before,
    &:after {
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    border-style: solid;
    }

    &:before {
        border-width: 200px;
        border-width: 200px;
        border-color: transparent #2b0548 #2b0548 transparent;
        bottom: 0px;
        right: 0px;

        @media (max-width: 900px) {
            border-width: 150px;
        }

        @media (max-width: 900px) {
            border-width: 120px;
        }
    }


    section {
        width: 100%;
        display: flex;
        height: 100%;
    }
`;

const Form = styled.form`
    width: 40%;
    margin: auto;
    background-color: #fafafa;
    padding: 30px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
    @media (max-width: 900px) {
        width: 70%;
    }

    @media (max-width: 425px) {
        width: 95%;
    }

    h2 {
        text-align: center;
        margin-bottom: 1em;
        font-weight: 700;
        color: #2b0548;
    }

    div {
        @media (max-width: 345px) {
            width: 100%;
        }
    }
`;

const Button = styled.button`
border: none;
display: flex;
margin: auto;
padding: 10px 30px;
font-weight: 800;
background-color: #2b0548;
color: wheat;
border-radius: 5px;
`;

const Text = styled.h6`
    font-size: 0.8em;
    color: #000;
    margin-top: 2em;
    text-align: center;


    a {
        text-decoration: none;
        color: rgb(43, 5, 72);
        font-weight: 600;

        &:hover {
            text-decoration: underline;
        }
    }
`;