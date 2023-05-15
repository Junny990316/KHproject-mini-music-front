import { createContext, useState } from "react"; 
export const UserContext = createContext(null); 


const UserStore = (props) => {
    const [userId, setUserId] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [isLogin, setIsLogin] = useState("FALSE"); 
    const [signUpId, setSignUpId] = useState("");
    const [addr, setAddr] = useState("");
    const [isLoginSuv, setIsLoginSuv]  = useState("FALSE"); 
    // const [isUserIdSrt, setisUserIdSrt]= useState("FALSE");
    const [songUrl, setSongUrl] = useState("");
    const [coverUrl, setCoverUrl] = useState("");
    const [playing, setPlaying] = useState(false);
    const [songTitle, setSongTitle] = useState("");
    const [songArtist, setSongArtist] = useState("");
    const [albumName,setAlbumName] = useState("");
    const [lyrics,setLyrics] = useState("");
    
    return (
        <UserContext.Provider value={{
            userId, setUserId, 
            password, setPassword, 
            isLogin, setIsLogin,
            signUpId,setSignUpId,
            addr,setAddr,
            songUrl, setSongUrl,
            coverUrl, setCoverUrl,
            playing, setPlaying,
            songTitle, setSongTitle,
            songArtist, setSongArtist,
            albumName,setAlbumName,
            lyrics,setLyrics}}>
            {props.children}
        </UserContext.Provider>   

    );
};


export default UserStore; 