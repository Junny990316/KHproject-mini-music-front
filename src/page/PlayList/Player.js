import React, { useEffect, useRef, useState } from "react";
import {BsFillPlayFill, BsFillPauseFill, BsFillSkipStartFill, BsFillSkipEndFill } from 'react-icons/bs'
import styled from "styled-components";
import useSound from "use-sound";
import image from "../PlayList/image"


const PlayerContainer = styled.div`
    width: 100%;
    height: 40px;
    padding-bottom: 10px;
    background-color: gray;
    z-index: 100;
    /* padding: 10px; */
    /* border: 1px solid gray; */
    /* color: rgb(218, 218, 218); */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    /* background-color: rgba(31, 31, 31, 1); */

    .title {
        font-size: 20px;
        font-weight: bold;
        color: white;
        margin: 10px 0;
    }
    .navigation {
        width: 100%;
        .navigation_wrapper {
            min-width: 100%;
            /* background-color: aliceblue; */
            height: 5px;
            margin-bottom: 10px;
            cursor: pointer;

            .seek_bar {
                width: 0;
                height: 100%;
                background-color: rgb(255, 19, 80);
            }
        }
    }
    .controls {
        font-size: inherit;
        display: flex;
        align-items: center;
        justify-content: center;

        .btn_action {
            font-size: 1.9rem;
            margin: 0 2rem;
            color: white;
            cursor: pointer;

            &:hover {
                font-size: 2rem;
            }
        }

        .btn_action_pp {
            font-size: 2.1rem;
            color: rgb(255, 19, 80);
            cursor: pointer;
        }
    }
`;



export const Player = ({isplaying}) => {


    console.log(isplaying);

    return (
        <PlayerContainer>
            <div className="controls">
                <BsFillSkipStartFill className="btn_action" />
            {isplaying? <BsFillPauseFill className="btn_action_pp" /> : <BsFillPlayFill className="btn_action_pp" />}    
                <BsFillSkipEndFill className="btn_action" />
            </div>
        </PlayerContainer>
        
    );
}

export default Player;