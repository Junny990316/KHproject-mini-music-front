import React, { useState, useContext, useEffect } from "react";
import styled, {css} from "styled-components";
import logo from "../image/로고.png"
import { BiSearch } from "react-icons/bi";  
import { AiOutlineUser } from "react-icons/ai";
import Playlist from "./Playlist";
import Info from "./Info";
import Today from "./Today";
import Chart from "./Chart";
import MyPage from "./MyPage";
import { TbPlaylist } from "react-icons/tb";
import { TbPlayerTrackPrev } from "react-icons/tb";
import { TbPlayerTrackNext } from "react-icons/tb";
import { TbPlayerPlay } from "react-icons/tb";
import { UserContext } from "../context/UserInfo";
import { Link } from "react-router-dom";




const Sidemenu = [
  { name : "Today"},
  { name : "차트"},
  { name : "이달의 정보"},
  { name : "추천플레이리스트"}
]


const MyInfo = [
  { name : "마이페이지"}
]


const Container = styled.div`
    position: fixed;
    margin: 0;
    padding: 0;
    display: flex;
    background-color: #BB2649;
    width: 100%;
    height: 100vh;
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
    height: calc(100vh - 50px);
`;




const PlayBar = styled.div`
  background-color: #BB2649;
  display: flex;
  width: 100%;
  height: 40px;
  position: absolute;
  justify-content:space-between;
  bottom: 0;
  color: white;
  .album{
    width: 50px;
  }

  .list{
    margin-top: 5px;
    color: white;
  }
`;



const PlayBarse = styled.div`
  display: flex;
  flex-direction:row;
  color: white;
  .play{
    padding-left: 40px;
    padding-right: 40px;
  }
  `; 


const Home =() => { 
  //Context에서 값 읽기 
  const context = useContext(UserContext);
  const {userId, isLogin} = context;


 
    const[changeD, setChange] = useState("");
    const[sidemenu, setSidemenu] = useState("all"); 
    const[myInfo, setMyinfo] = useState("all"); 
  
  
    const onSelect = q =>{
      setChange(q);
      setSidemenu(q); 
      setMyinfo(q); 
    };
 



    const [isFocus, setIsFocused] = useState(false);

    const clickFocus = () => {
      setIsFocused(true);
    };
  
    const clickBlur = () => {
      setIsFocused(false);
    };
  
    // className="ment" 
  

    return(
        <Container>
          <Side>
           <a href="/"> <img src={logo} alt=""/></a>
              <Logindiv>
                {isLogin==="FALSE" && <Link to="/Loginpage" className="LoginBtn">로그인</Link>}
                {MyInfo.map(l=>(
                    isLogin ==="TRUE" && 
                    <Button to="/Mypage" className="LoginBtn"  key={l.name} active={myInfo === l.name} onClick={()=>setChange(l.name)} > 
                       {l.name}
                    </Button>
                ))}
                    <SearchBox>
                      <SearchInput type="text" placeholder=" aEL 검색" 
                          onFocus={clickFocus} onBlur={clickBlur} />
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
                {changeD === "마이페이지" && <MyPage/>} 
                {changeD === "" && <Today/>} 
                {changeD === "Today" && <Today/>}    
                {changeD === "차트" && <Chart/>}      
                {changeD === "이달의 정보" && <Info/>}  
                {changeD === "추천플레이리스트" && <Playlist/>}        
          </Mainbody>


          <PlayBar>
            <Link to="/Main"> <img className="album" src={logo} alt=""/></Link>
            <PlayBarse>
            <div ><TbPlayerTrackPrev size="30"/></div>
            <div className="play"><TbPlayerPlay size="30"/></div>
            <div ><TbPlayerTrackNext size="30"/></div>
          </PlayBarse>
          <Link to="/Main">  <div className="list" ><TbPlaylist size="30" /></div></Link>
          </PlayBar>

        </Container>  
    );
};


export default Home;