import React from "react";
import styled from "styled-components"
import { useState, useEffect } from "react";
import { getCharacters } from "../api";

const ProgresDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const MetaProduccion = styled.div`
    width: 100%;
    font-family: LeagueFont;
    color: #C89B3c;
    display: flex;
    flex-direction: column;
    line-height: 0.1;
    font-size: 10px;
    align-items: flex-end;
    margin-right: 30px;

`
const ProgressBack = styled.img`
    width: 90%;
    
`

export default function ProgressBar({seriesGoal}){

    const [characters, setCharacters] = useState([]);
        

    useEffect(() => {
      const fetchCharacters = async () => {
        try {
          const response = await getCharacters();
          setCharacters(response.data.data.results);
        } catch (error) {
          console.error('Error fetching characters:', error);
        }
      };

      fetchCharacters();
    }, []);

    const totalSeries = characters.map((character) => character.series.available).reduce(function(a, b) { return a + b; }, 0);
   
     

    return(
        <ProgresDiv>
            <MetaProduccion>
                <p>500 Series</p>
                <p>Meta de Produccion</p>
            </MetaProduccion>
            <ProgressBack src="/img/progress_bar.svg" alt="Progress Bar" />
        </ProgresDiv>
    )
}