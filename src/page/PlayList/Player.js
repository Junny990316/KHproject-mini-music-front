import React from "react";
import {BsFillPlayFill, BsFillPauseFill, BsFillSkipStartFill, BsFillSkipEndFill } from 'react-icons/bs'
import styled from "styled-components";

const PlayerContainer = styled.div`
    width: 100%;
    padding-bottom: 10px;
    /* padding: 10px; */
    /* border: 1px solid gray; */
    /* color: rgb(218, 218, 218); */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    /* position: relative; */
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    background-color: rgba(31, 31, 31, 1);
    /* background-color: aliceblue; */

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
            background-color: aliceblue;
            height: 3px;
            margin-bottom: 10px;

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

        .btn_action {
            font-size: 2rem;
            margin: 0 2rem;
            color: white;
            cursor: pointer;

            &:hover {
                font-size: 2.3rem;
            }
        }

        .btn_action_pp {
            font-size: 3rem;
            color: rgb(255, 19, 80);
            cursor: pointer;
        }
    }
`;


const Player = ({audioElem, isplaying, setIsPlaying, currAlbum, setCurrAlbum, albumData}) => {
    
    const playPause = () => {
        setIsPlaying(!isplaying);
    }

    const skipBack = () => {
        const index = albumData.findIndex(x=>x.title == currAlbum.title);
        if(index == 0) {
            setCurrAlbum(albumData[albumData.length-1])
        }
        else {
            setCurrAlbum(albumData[index - 1]);
        }
    }

    const skipNext = () => {
        const index = albumData.findIndex(x=>x.title == currAlbum.title);
        if(index == albumData.length-1) {
            setCurrAlbum(albumData[0])
        }
        else {
            setCurrAlbum(albumData[index + 1]);
        }
    }

    return (
        <PlayerContainer>
            <div className="navigation">
                <div className="navigation_wrapper">
                    <div className="seek_bar" style={{width:'50%'}}></div>
                </div>
            </div>
            <div className="title">{currAlbum.title}
                {/* <p>{currAlbum.title}</p> */}
                {/* <p>{currAlbum.artist}</p> */}
            </div>
            
            <div className="controls">
                <BsFillSkipStartFill className="btn_action" onClick={skipBack} />
                {isplaying ? <BsFillPauseFill className="btn_action_pp" onClick={playPause}/>
                : <BsFillPlayFill className="btn_action_pp" onClick={playPause} />}
                <BsFillSkipEndFill className="btn_action" onClick={skipNext} />
            </div>
           
            
        </PlayerContainer>
    );
}

export default Player;