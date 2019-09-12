import React from "react";
// import Content from "./Content";
import styled from "styled-components";
const StyledContainer = styled.div`
    height: 100%;
    width: 80%;
    margin: 0 auto;
    box-shadow: 0px 0px 50px 30px #8b7373 ;
    padding: 10px 0px;
    background-color: #9dc5c3;
    background-image: linear-gradient(315deg, #9dc5c3 0%, #5e5c5c 74%);
`;

const StyledImg = styled.img`
    width: 100%;
`;

const StyledText = styled.p`
    padding: 80px;
    width: 80%;
    margin: 0 auto;
    text-align: center;
`;

const BottomStyledText = styled.p`
    font-size: 1.25rem;
    padding: 15px;
`;


const PhotoCard = props => {
    return (
        <div>
            <h1>Photo of the Day</h1>
            <StyledContainer>
            <h2>{props.title}</h2>
            <StyledImg alt="random nasa" src={props.url}></StyledImg>
            <StyledText>{props.explanation}</StyledText>
            </StyledContainer>
            <BottomStyledText>{props.date}</BottomStyledText>
            <BottomStyledText>&copy;{props.copyright}</BottomStyledText>
        </div>
    );
};

export default PhotoCard;