import React from "react";
import styled from "styled-components"

const BannerDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    column-gap: 20px;
    position: absolute;
    top: 150px;
`
const ProgressDiv = styled.div`
    width: 510px;
    height: 193px;
    border: 1px solid #99905B;
    background-color: #0e0f0f;
`
const VideoDiv = styled.div`
    width: 382px;
    height: 193px;
    border: 1px solid #99905B;
    background-color: #0e0f0f;
`
const ImageDiv = styled.div`
    width: 382px;
    height: 193px;
    border: 1px solid #99905B;
    background-color: #0e0f0f;
`
const ImageFile = styled.img`
    width: 382px;
    height: 193px;
`

export default function Banner(){
    return(
        <BannerDiv>
            <ProgressDiv>
                <h2>progreso de peliculas producidas</h2>
            </ProgressDiv>
            <VideoDiv>
            <iframe width="382" height="193" src="https://www.youtube.com/embed/c3y7UTfvzX0?autoplay=1&mute=1&loop=1" title="YouTube video player" frameborder="0" ></iframe>
            </VideoDiv>
            <ImageDiv>
                <ImageFile src="https://mcdn.wallpapersafari.com/medium/30/87/bKOQC3.jpg" alt="Marvel Wallpaper" />
            </ImageDiv>
        </BannerDiv>
    )
}