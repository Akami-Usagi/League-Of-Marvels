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
    width: 100%;
    
`
const ProgressMeter = styled.div`
  width: 90%;
`
const ProgressCell = styled.div`
        width: 100%;
        position: relative;
        bottom: 42px;
        left: 8px;
        
        
`
const ProgressImage = styled.img`
      height: 37px;
      margin-right: -5px;
      
`
const MetaCompletada = styled.div`
    width: 100%;
    font-family: LeagueFont;
    color: #3cb3c8;
    display: flex;
    flex-direction: column;
    line-height: 0.1;
    font-size: 10px;
    align-items: flex-end;
    margin-right: 30px;

`
const MetaCompletadaDiv = styled.div`
  width: fit-content;
`

export default function ProgressBar({seriesGoal}){

    const [characters, setCharacters] = useState([]);
    const [progressArray, setProgressArray] = useState([])
    const cells = (index) => {
      for (let i = 0; i < index; i++) {
        setProgressArray(current => [...current, "item"])
        
      }
    }
        
    const totalSeries = characters.map((character) => character.series.available).reduce(function(a, b) { return a + b; }, 0);
    const porcentajeCompletado = ((totalSeries / seriesGoal) * 100)
    let cantidadCeldas = Math.round( porcentajeCompletado / 10);

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

    useEffect(()=>{
      cells(cantidadCeldas)
      
    },[cantidadCeldas])
  

    return(
        <ProgresDiv>
            <MetaProduccion>
                <p>{`${seriesGoal} Series`}</p>
                <p>Meta de Produccion</p>
            </MetaProduccion>
            <ProgressMeter>
                <ProgressBack src="/img/progress_bar.svg" alt="Progress Bar" />
                <ProgressCell>
                  <MetaCompletadaDiv>
                  {progressArray.map((item) => {
                    return <ProgressImage src="/img/progress_cell.svg"/>
                  })}
                  <MetaCompletada>
                     <p>{`${totalSeries} Series`}</p>
                     <p>{`${porcentajeCompletado}% Meta Completada`}</p>
                  </MetaCompletada>
                  </MetaCompletadaDiv>
                </ProgressCell>
            </ProgressMeter>       
        </ProgresDiv>
    )
}