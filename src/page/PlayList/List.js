import React from "react";
import styled from "styled-components";


const SongList = styled.div`
    position: relative;
    display: flex;
    left: 300px;
    width: 400px;
    top: 30px;
    .listTable {
        display: flex;
        margin-bottom: 5px;
        width: 100%;
    }
    .listTable:hover {
        background-color: rgba(74, 74, 74, 0.5);
    }
    .songList {
        color: white;
        line-height: 40px;
        margin-left: 10px;

        .title {
            font-weight: bold;
        }
    }
    img {
        width: 80px;
        height: 80px;
    }

`;



const List = ({item, onSelect}) => { // Album으로부터 albumData와 onSelect 함수를 넘겨받음
    const{image, title, id, artist} = item; // item을 구조분해해서 각 변수에 맞는 값 할당

    return (
        <SongList>
            <div onClick={() => onSelect(id)} className="listTable">
                    <img src={image}/>
                <div className="songList">
                    <div className="title">{title}</div>
                    <div className="artist">{artist}</div>
                </div>
            </div>
        </SongList>
    );
}
export default List;