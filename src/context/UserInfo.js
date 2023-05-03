import { createContext, useState } from "react"; 
export const UserContext = createContext(null); 


const UserStore = (props) => {
    const [userId, setUserId] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [signUpId, setSignUpId] = useState(""); 
    const [isLogin, setIsLogin] = useState("FALSE"); 
  

    return (
        <UserContext.Provider value = {{userId, setUserId, password, setPassword, isLogin, setIsLogin, setSignUpId, signUpId}}>
            {props.children}
        </UserContext.Provider>

    );
};


export default UserStore; 