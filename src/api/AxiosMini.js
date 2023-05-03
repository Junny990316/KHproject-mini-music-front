import axios from "axios";
const KH_DOMAIN = "http://localhost:8111";

const AxiosApi = {
    // Login
    memberLogin : async(id, pw) => {
        const login = {
            id: id,
            pwd: pw
        };
        return await axios.post(KH_DOMAIN + "/login", login);
    },
    // 회원조회
    memberGet : async(id) => {
        return await axios.get(KH_DOMAIN + `/member?name=${id}`);
    },
    // 회원 가입 여부 확인
    memberRegCheck : async(id) => {
        return await axios.get(KH_DOMAIN + `/check?id=${id}`);
    },

    // signUp
    memberReg : async(user_id, user_pwd,user_pwdch, user_name, user_addr, user_email, user_phone, rrn) => {
        const member = {
            user_id: user_id,
            user_pwd: user_pwd,
            user_pwdch: user_pwdch,
            user_name: user_name,
            user_addr: user_addr,
            user_email: user_email,
            user_phone: user_phone,
            rrn: rrn
        };
        console.log(member);
        return await axios.post(KH_DOMAIN + "/new", member);
    }
};

export default AxiosApi;