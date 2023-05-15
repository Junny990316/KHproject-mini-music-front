import axios, { all } from "axios";
const Story_Board = "http://localhost:8111";




const AxiosMini = {
     // 로그인
     memberLogin: async(id, pw) => {
        const login = {
            id : id,
            pwd : pw 
        };
        return await axios.post(Story_Board + "/login", login);
    },
    //회원 조회
    memberGet: async(id) => {
        return await axios.get(Story_Board + `/member?name=${id}`);
    },
      // 회원 가입 여부 확인
      memberRegCheck : async(id) => {
        return await axios.get(Story_Board + `/check?id=${id}`);
    },

    // 회원 가입
    memberReg: async(id, pwd, pwdchk, addr, name, mail, phone, rrn) => {
        //memberReg(inputId, inputPw, inputConPw, inputName, inputEmail, inputPhone);
        const member = {
            USER_ID: id, 
            USER_PWD: pwd,
            USER_PWDCH: pwdchk,
            USER_ADDR: addr,
            USER_NAME: name,
            USER_EMAIL: mail,
            USER_PHONE: phone,
            RRN: rrn
        };
        return await axios.post(Story_Board + "/new", member);
    },


    //탈퇴
    memberSec : async(id_sec, pwd_sec) =>{
        const sec ={
            id : id_sec,
            pwd : pwd_sec            
        };
        return await axios.post(Story_Board + "/sec", sec);
    },

    songFind : async(title) =>{
        const member ={
            title : title
        };
        return await axios.post(Story_Board + "/findsong", member);
    },

    songGet : async(id) => {
        return await axios.get(Story_Board + `/getsong/?id=${id}`);
    },

    songChart : async(id) => {
        return await axios.get(Story_Board + `/songChart/?id=${id}`);
    },

    mailCode : async(mail) => {
        return await axios.get(Story_Board + `/mail/?mail=${mail}`);
    }


};


export default AxiosMini; 