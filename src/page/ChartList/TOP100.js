import React, { useContext, useEffect , useRef, useState } from "react";
import styled from "styled-components";
import ALBUM from "../../image/album.jpg"
import AxiosMini from "../../api/AxiosMini";
import {FaPlay, FaPause} from 'react-icons/fa';
// import Player from "../PlayList/Player";
import PlayMusic from "../PlayList/PlayMusic";
import Home from "../Home";
import PlayerPlay, { Player, PlayerPause } from "../PlayList/Player";
import { UserContext } from "../../context/UserInfo";
import {BsHeart, BsHeartFill} from 'react-icons/bs';

const Body = styled.div`
margin: 0;
padding: 0;
width: 100%;
height: calc(100vh - 330px);
display: flex;
justify-content: flex-start;
align-items: center;
overflow-y: scroll;
flex-wrap: wrap;
background-color: black;
-ms-overflow-style: none;
::-webkit-scrollbar {
    display: none;
}
`;
const Container_in = styled.div`
margin: 8px 18px 8px 8px;
width: 100%;
height: 150px;
border-radius: 20px;
background-color: rgba(255,255,255,0);
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
color: white;
transition: ease 0.4s;
&:hover{
    background-color: #BB2649;
    color: black;
}
.ranking{
    margin: 0 0 0 30px;
    font-size: 20px;
}
img{
    margin: 0 17px 0 17px;
    width: 120px;
    height: 120px;
    background-color: #BB2649;
    border-radius: 15px;
    display: block;
}
.TITLE{
    width: 500px;
    font-size: 30px;
    font-weight:bolder;
}
.artist{
    width: 200px;
    font-weight: bolder;
}
.minute{
    width: 100px;
}
.play{
    color: white;
    font-size: 25px;
    background-color : rgba(0,0,0,0);
    border: none;
    margin-right: 50px;
}
.stop{
    font-size: 30px;
}
.more{
    width: 100px;
    text-align: center;
    font-size: 40px;
}
.heart {
    color: white;
    font-size: 1.7rem;
    margin-right: 65px;
}
`;


const TOP100=()=>{
    const context = useContext(UserContext);
    const {playing, setPlaying} = context;

    const[clicked, setClicked] = useState(false);
    const [chart, setChart] = useState([]);
    const [clickIndex, setClickIndex] = useState(-1);
    const [selectSong, setSelectSong] = useState("");
    const [playingIndex, setPlayingIndex] = useState(-1); // 현재 재생중인 곡의 인덱스, -1이면 재생중인 곡이 없는 것을 의미
    const [isplaying, setIsPlaying] = useState(false); // 재생 상태
    const elemAudio = useRef(null); // audio 요소 참조

    useEffect(()=> {
        const chartSong = async() => {
            const rsp = await AxiosMini.songChart("ALL");
            if(rsp.status === 200) setChart(rsp.data); 
        };
        chartSong();
    }, []);
    
    const clickHeart = () =>{
        setClicked(!clicked);
    }

    const playPause = (index) => {
        if(isplaying && playingIndex === index) { // 현재 재생중이고 인덱스가 같으면
            setIsPlaying(false);    // 재생상태를 false로 변경
            setPlaying(false);
            setPlayingIndex(-1);    // 재생 중인 곡의 인덱스를 -1로 변경
            elemAudio.current.pause();  // 곡을 멈춤
        } else {
            setIsPlaying(true);     // 재생상태를 true로 변경
            setPlaying(true);
            setPlayingIndex(index);     // 재생 중인 곡의 인덱스를 변경
            setSelectSong(chart[index].song_url);
            elemAudio.current.src = chart[index].song_url;  // audio의 src를 해당 곡의 url로 변경
            elemAudio.current.play();   // 곡 재생
        }
    };

    return(
        <Body>

            {chart && chart.map((x, index) => (
            <Container_in key={x.id}>
                <div className="ranking">{index+1}</div>                
                <img src={x.cover_url}/>
                <div className="TITLE">{x.title}</div>      
                <div className="artist">{x.artist}</div>
                {/* <div className="heart"><BsHeart /></div>            */}
                {clicked && clickIndex === index ?<BsHeartFill className="heart" onClick={clickHeart}/> : <BsHeart className="heart" onClick={clickHeart}/>}
                {isplaying && playingIndex === index ? <FaPause className="play" onClick={()=>playPause(index)}/> : <FaPlay className="play" onClick={()=>playPause(index)}/>}
                <audio ref={elemAudio}/>          
            </Container_in>
            ))}
        </Body>
        
    );
}
export default TOP100;
