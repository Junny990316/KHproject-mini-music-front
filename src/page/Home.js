import React, { useState, useContext,  useRef, useEffect } from "react";
import styled, {css} from "styled-components";
import logo from "../image/로고.png"
import { BiSearch } from "react-icons/bi";  
import { AiOutlineUser } from "react-icons/ai";
import Playlist from "./Playlist"
import Info from "./Info";
import Today from "./Today";
import Chart from "./Chart";
import MyPage from "./MyPage";
import { TbPlayerTrackPrev, TbPlayerPause, TbPlayerPlay, TbPlaylist, TbPlayerTrackNext } from "react-icons/tb";
import { UserContext } from "../context/UserInfo";
import {  Link } from "react-router-dom";
import AxiosApi from "../api/AxiosMini";
import Player from "./PlayList/Player";
import MusicInfo from "./MusicInfo";
import useSound from "use-sound";
import image from "./PlayList/image"

const Sidemenu = [
  //버튼을 카테고리로 분류하여 값을 쉽게 가져오기 위해 name으로 설정한다.
  { name : "Today"},
  { name : "차트"},
  { name : "이달의 정보"},
  { name : "추천플레이리스트"}
]
const MyInfo = [
  //버튼을 카테고리로 분류하여 값을 쉽게 가져오기 위해 name으로 설정한다.
  { name : "마이페이지"}
]
const ContainerWhole=styled.div`
  width:100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`
const Container = styled.div`
    height: calc(100vh - 40px);
    /* position: fixed; */
    margin: 0;
    padding: 0;
    display: flex;
    background-color: #BB2649;
    width: 100%;
    /* background-color: aliceblue; */
`; 

const Side = styled.div`
  width: 300px; 
  height: calc(100vh - 40px);
  display: flex;
  flex-direction:column;
  background-color: rgb(0, 0, 0, 0.80);
  a{
    width: 150px;
    height: 150px; 
  }
  img{
    width: 150px;
    height: 150px;
    margin-left: 50%;
  }
`;

const Logindiv = styled.div`
  width: 300px;
  height: 140px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  color: white;
.LoginBtn{
  width: 300px;
  height: 70px;
  color:white;
  text-decoration: none;
  font-size: 18px;
  font-weight:bolder;
  letter-spacing: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
      color: #BB2649;
      background-color: black;
    }
  }
`;

const SearchBox = styled.div`
  width: 300px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  .icon{
    margin-left: 20px;
    margin-top: 10px;
  }
`;

const SearchInput = styled.input`
  border-radius: 30px;
  width: 190px;
  height: 30px;
  text-align: center;
  border: none;
`;


const Icon = styled(BiSearch)`
  color: gray;
  color : ${({ isFocus }) => (isFocus ? "black" : "gray")}; 
`;

const Ulb = styled.ul`
  flex-direction: column;
  color: white;
  list-style: none;
`;
const Lib = styled.li`
  margin-left: 10%;
  font-size: 15PX;
  color: white;
  list-style: none; 
  letter-spacing: 20px;
  margin-bottom: 20px;
`;


const Button = styled.button`
  width: 300px;
  height: 90px;
  background-color: rgb(0,0,0, .0);
  font-size: 18px;
  font-weight: bold;
  color: white;
  border: none;
  &:hover{
        font-weight: bold;
        background-color: black;
        color: #BB2649;
        width: 300px;
    
    }
    ${props => props.active && css` 
        background-color: black;
        color: #BB2649;
        width: 100%;
        `}
`; 


const Mainbody = styled.div`
    width: 100%;
    display: flex;
    flex-direction:column;
    height: 100%;
`;



const PlayBar = styled.div`
  width: 100%;
  height: 100%;
  .album{
    width: 50px;
  }

  .list{
    margin-top: 5px;
    color: white;
  }
`;

    const LogOut=styled.div`
        width: 300px;
        height: 30px;
      `;

const Home =() => { 
    //Context에서 값 읽기 
    const context = useContext(UserContext);
    const {playing, setPlaying} = context;
    const {isLogin,setIsLogin,setSongTitle,setSongArtist,setAlbumName,setLyrics} = context;

  
 
    //버튼의 선택을 통해서 버튼의 값을 가져온다.
    const[changeSide, setChangeSide] = useState("");
    const[sidemenu, setSidemenu] = useState("all"); 
    const[myInfo, setMyinfo] = useState("all"); 
    
    

    const [timeUpdate, setTimeUpdate] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null); 

  // // 재생 및 일시중지 
  //   const changPlay = () => {
  //     const audio = audioRef.current; 
    
  
  //   if(isPlaying) {
  //     audio.pause();  // 일지중지
  //   } else {
  //     audio.play();   // 재생
  //   }

  //   setIsPlaying(!isPlaying);
  // };


  // 재생 시간이 변경 될 때마다 timeUpdate 상태 업데이트 
  const handleTimeUpdate = () => {
    const audio = audioRef.current; 
    const timeUpdate = audio.currentTime / audio.duration; 
    setTimeUpdate(timeUpdate); 
  };



  // 재생 바를 클릭하면 재생 위치 업데이트 
  // 클릭 위치를 계산하여 새로운 재생 시간 계산 
    // const handleTimeUpdateClick = (e) =>{
    //   const audio = audioRef.current; 
    //   const { width, left } = e.target.getBoundingClientRect(); 
    //   const clickX = e.clickX - left;
    //   const newTime = (clickX / width) * audio.duration; 
    //   audio.currentTime = newTime;  // 업데이트
    // };

    //onClick을 통해서 가져온 값을 해당하는 구역에 기입 한다. 
    const onSelect = q =>{
      setChangeSide(q);
      setSidemenu(q); 
      setMyinfo(q); 
    };
 

  

  const isLoginStr = window.localStorage.getItem("isLoginSuv");
    if(isLoginStr==="TRUE"){
       setIsLogin("TRUE");
    }else{
     setIsLogin("FALSE");
    };
  
   //노래를 검색해서 콘솔로 url 출력
  const [inputSongName,setInPutSongName] =useState("");
  const [inputArtName,setInPutArtName] =useState("");
  const [songUrl, setSongUrl] =useState("");
//엔터키를 눌러야 onFindSong이 실행되게 한다.
const onEnter=(e)=>{
  if(e.key==='Enter'){
    onFindSong();
    setChangeSide("Enter");
  }
}



//비동기 통신으로 받아온 노래 이름과 아티스트 이름으로 URL을 검색한다.
const onFindSong=async()=>{
  const songFind = await AxiosApi.songFind(inputSongName);
  console.log(inputSongName);
  console.log("여기까지");
  console.log(songFind.data);
  setAlbumName(songFind.data[0].albumName);
  setSongArtist(songFind.data[0].artist);
  setSongTitle(songFind.data[0].title);
  setLyrics(songFind.data[0].lyrics);
}
//노래 이름을 검색
  const onChangeSong =e=>{
    setInPutSongName(e.target.value);
  }


  
 const onLogOut=()=>{
        window.localStorage.setItem("userIdSuv", "");
        window.localStorage.setItem("isLoginSuv", "FALSE");
        window.location.replace("/");
      };


    return(
      <ContainerWhole>
        <Container>
          <Side>
           <a href="/"> <img src={logo} alt=""/></a>
              <Logindiv>  
              {isLogin==="FALSE" && <Link to="/Loginpage" className="LoginBtn"><AiOutlineUser/>로그인</Link>}
                {MyInfo.map(l=>(
                    isLogin ==="TRUE" && 
                    <Button to="/Mypage" className="LoginBtn"  key={l.name} active={myInfo === l.name} onClick={()=>setChangeSide(l.name)} > 
                       {l.name}
                    </Button>
                ))}
                <div>
                    {isLogin==="FALSE"}
                    {isLogin==="TRUE" && <LogOut onClick={onLogOut}>로그 아웃</LogOut>}
                                    
              </div>
                <SearchBox>
                  <Icon className="icon" />
                  <SearchInput type="text" placeholder="노래 검색" 
                  onKeyDown={onEnter} value={inputSongName} onChange={onChangeSong}/>
                </SearchBox>
              </Logindiv>
              {Sidemenu.map( s=>(
                <Button key={s.name} active={sidemenu === s.name}onClick={()=>onSelect(s.name)}>
                    {s.name}
                </Button>
              ))};
              <Ulb> 
                  <Lib>멤버쉽안내</Lib>
                  <Lib>고객센터</Lib>
              </Ulb>
          </Side> 
          <Mainbody>  
                {changeSide === "" && <Today/>} 
                {changeSide === "마이페이지" && <MyPage/>} 
                {changeSide === "Today" && <Today/>}    
                {changeSide === "차트" && <Chart/>}      
                {changeSide === "이달의 정보" && <Info/>}  
                {changeSide === "추천플레이리스트" && <Playlist/>}     
                {changeSide === "Enter" && <MusicInfo/>} 
          </Mainbody>
        </Container> 
        
          
            <PlayBar>
            
            <Player isplaying={playing} />
            </PlayBar>
        
      </ContainerWhole>
  );
};



export default Home;