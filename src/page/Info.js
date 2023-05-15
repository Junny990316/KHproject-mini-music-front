import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import logo from "../image/tier_logo.png"
import AxiosMini from "../api/AxiosMini";
import axios from "axios";


const Body = styled.div`
margin: 0;
padding: 0;
width: calc(100vw - 300px);
height: calc(100vh - 40px);
display: flex;
justify-content: flex-start;
/* align-items: center; */
flex-wrap: wrap;
background-color: aliceblue;
position: fixed;
    p {
        background-color: aliceblue;
    }
    img {
        margin: 10px;
        width: 250px;
        height: 250px;
    }
    img:hover {
        width: 300px;
        height: 300px;
    }
`;

const SongInfoWrap = styled.div`
    img {
        width: 100px;
        height: 100px;
    }
`;


const Info = () =>{
    const [songInfo, setSongInfo] = useState([]);
    const [isplaying, setIsPlaying] = useState(false);

    useEffect(()=> {
        const songInfor = async() => {
            const rsp = await AxiosMini.songGet("ALL");
            if(rsp.status === 200) setSongInfo(rsp.data); 
            //console.log(rsp.data);
        };
        songInfor();
    }, []);

    const onclick = () => {
        setIsPlaying(true);
        if(isplaying) audioElement.current.play();
    }

    const audioElement = useRef();

    return(
            <Body>
                {songInfo.length > 0 && (
                    <img src={songInfo[1].cover_url} alt="" />
                )}

            </Body>  
    );
}


export default Info;