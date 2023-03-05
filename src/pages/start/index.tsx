import { Link } from "react-router-dom";
import styled from "styled-components";
import Animation from '../../components/Animation';
import "./style.scss";
export default function Start() {
    return (
            <BackGround className='css-selector'>
                <Animation />
                <Link to="/home">
                    <ButtonStart >
                        Start
                    </ButtonStart>
                </Link>
            </BackGround>
    );
}

export const BackGround = styled.div`
    height: 100vh;
    padding: 40px;
`;
export const ButtonStart = styled.button`
    padding: 15px;
    width: 200px;
    border-radius: 15px;
    box-shadow: 0px 0px 5px 5px #ffffffc7 ;
    background-color: rgb(72 135 114);
    font-size: 18px;
    color: white;
    text-decoration: none;
    border:none;
    transition: all 250ms;
    :hover{
        color: white;
        border:none;
    }
    cursor: pointer;
    :hover{
        transition: 500ms ease-in-out ;
        background-color: #6a9721;
        box-shadow: 0px 0px 5px 5px #fcf958 ;
    }
`
