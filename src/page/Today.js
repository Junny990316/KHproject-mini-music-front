import styled, {css} from "styled-components";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../context/UserInfo";
import NewAlbum from "./TodayList/NewAlbum";
import NewInfo from "./TodayList/NewInfo";
import NewMv from "./TodayList/NewMv";




const Body = styled.div`
margin: 0;
padding: 0;
width: calc(100vw - 300px);
display: flex;
justify-content: flex-start;
align-items: center;
flex-wrap: wrap;
background-color: black;
position: fixed;

`;


const BackHead=styled.div`
width: 100%;
height: 50px;
display: flex;
justify-content: space-between;

a{
    width: 100px;
    font-size: 12px;
    color: #BB2649;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight:bold;
 
}
.logTrue{
    width: 200px;
    font-size: 12px;
    color: #BB2649;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight:bold;
}
`;


const categories=[
    {
        name:"NEW ALBUM"
    },
    {
        name:"MAGAZINE"
    },
    {
        name:"M/V"
    }
]


const Head=styled.div`
width: 100%;
height: 90px;
background-color: #BB2649;
display: flex;
justify-content: space-between;
`;


const Button= styled.button`
    width: 500px;
    border: none;    
    background-color: #BB2649;
    color:rgba(0,0,0,0.7);
    font-size: 25px;    
    font-weight: bolder;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: ease 0.3s;   
    &:hover{
        background-color: white;
        color: #BB2649;
        width: 50%;
        font-size: 29px;
        border: 2px solid white;
        border-radius: 20px;
    }
    ${props => props.active && css` 
        background-color: white;
        color: #BB2649;
        width: 50%;
        font-size: 29px;
        border: 2px solid white;
        border-radius: 20px;

    `}
    & + &{
        margin-left: 3px;
    }
`;



const Allplay = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
width: 100%;
height: 90px;
border-bottom:2px solid #BB2649;

div{
    color: white;
    font-size: 12px;
    width: 180px;
}
button{
    width: 120px;
    height: 40px;
    margin: 0 10px 0 0 ;
    background-color: #BB2649;
    color: white;
    font-weight: bolder;
    border: none;
    border-radius: 5px;
    &:hover{
        background-color: white;
        color: #BB2649;
    }
}
`;


const CHART = styled.div`
width: 100%;
margin: 0;
padding: 0;
.nowSelect{
    background-color: #BB2649;
    color: black;
    font-weight: bolder;
    font-size: 29px;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;    
 
}
`;




const Today=()=>{
   
    const context = useContext(UserContext);
    const {userId,isLogin} = context;
  
    const now = new Date();

    const [topName,setTopName] = useState("");
    const [category,setCategory] = useState("all"); 
    const [changeB,setChange] = useState("");
    const onSelect = e =>{
        setTopName(e);
        setCategory(e);
        setChange(e);
    }  
    const nowDate=[{
            month:now.getMonth() + 1,
            day:now.getDate(),
            hour:now.getHours(),
            min:now.getMinutes()
        }]   
    
    return(
        <Body>
            <BackHead>
                <a href="/"><Link to="/">HOME</Link></a>
                {isLogin==="FALSE" && <a href="#"><Link to="/Loginpage">LOGIN</Link></a>}
                {isLogin==="TRUE" && <a href="#" className="logTrue">반갑습니다 {userId}님</a>}
            </BackHead>

            <Head>
            {categories.map(c=>(
                <Button key={c.name} active={category === c.name} onClick={()=>onSelect(c.name)}> 
                    {c.name}
                </Button>
            ))}
            </Head>
    
            
            <CHART>
                <div className="nowSelect">{topName}</div>
               {changeB === "" && <NewAlbum />}
               {changeB === "NEW ALBUM" && <NewAlbum/>}
               {changeB === "MAGAZINE" && <NewInfo/>}
               {changeB === "M/V" && <NewMv/>}
            </CHART>
        </Body>
    );
};

export default Today;



  
  
  
  
  

  
  
