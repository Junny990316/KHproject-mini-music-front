import React, { useContext }from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Secession from "./Secession";
import { UserContext } from "../context/UserInfo";


const Container=styled.div`
width: calc(100vw - 300px);
background-color: #BB2649;
position: fixed;

background: linear-gradient(150deg,#BB2649, rgb(0,0,0) 1200px);
`
const Head=styled.div`
background-color: rgba(0,0,0,0.4);
width: 100%;
height: 140px;
display: flex;
justify-content: end;
color: white;
border-bottom: 1px solid rgba(255,255,255,0.5);
button{
    margin: 20px 50px 10px 10px;
    color: white;
    font-size: 11px;
    width: 110px;
    height: 30px;
    border-radius: 10px;    
    border: none;
    background: linear-gradient(70deg, blue, pink);
    &:hover{
        cursor: pointer;
    }
}
.id{
    display: flex;
    align-items: center;
    height: 30px;
    color: rgba(255,255,255,0.9);
    margin: 20px 0px 10px 10px;
    font-size: 14px;    
    font-weight: 500;
}
`
const Body=styled.div`
width: 100%;
height: calc(100vh - 300px);
display: flex;
overflow-y: scroll;
flex-direction: row;
//화면 1400 픽셀 이하로 내려 갈 시 화면 구성 바뀐다.
    @media only screen and (max-width: 1200px){
        flex-direction: column;
    }    
-ms-overflow-style: none;
::-webkit-scrollbar {
    display: none;
}
a{
    text-decoration: none;
}
.partition{
    color: white;
    width: 900px;
    height: 600px; 
//화면 1400 픽셀 이하로 내려 갈 시 화면 구성 바뀐다.
    @media only screen and (max-width: 1200px){
        width: 100%;
}        
}
.innerContain{
    margin: 30px 50px 10px 20px;
    width: 95%;
    height: 170px;
    border: 1px solid white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    &:hover{
        background-color: rgba(255,255,255,0.2);
        cursor: pointer;
    }
    h3{
        text-decoration:none;
    }
    span{
        font-size: 12px;
    }
}
`
const Footer=styled.div`
width: 100%;
height: 100px;
.footContain{
    border: 1.4px solid rgba(255,255,255,0.5);
    height: 80px;
    border-radius: 18px;
    margin:  10px 10px 10px 20px;
    color: white;
    font-size: 11px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
}
`

const MyPage =()=>{

    const context = useContext(UserContext);
    const {userId} = context;

    return(
        <Container>
            <Head>
                <div className="id">{userId}님</div>
                <button>MEMBERSHIP</button>
            </Head>
            <Body>
                <div className="partition">
                    <div className="innerContain">
                        <h2> 내 정보 관리 </h2>
                        <span>정보관리 및 변경을 할 수 있습니다.</span>
                        </div>
                    <div className="innerContain">
                        <h2> 알림 </h2>
                        <span>활동에 대한 알림을 확인 할 수 있습니다.</span>
                    </div>
                    <div className="innerContain">
                        <h2> 맴버십 </h2>
                        <span>맴버십 등급을 확인하고 관리할 수 있습니다.</span>
                    </div>
                </div>
                <div className="partition">
                    <div className="innerContain">
                        <h2> 서비스 안내 </h2>
                        <span>FAQ / 문의 내역 / 문의 접수 </span>
                    </div>
                    <Link to="/Secession">
                        <div className="innerContain">
                            <h2> 회원탈퇴 </h2>
                        </div>
                    </Link>
                </div>
      
            </Body>

            <Footer>
                <div className="footContain">
                    Copyrightⓒ StoryBoard Crop. All Rights Reserved.
                </div>
                
            </Footer>


        </Container>

    );
}

export default MyPage;