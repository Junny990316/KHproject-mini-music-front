
import './App.css';
import Home from './page/Home';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Chart from './page/Chart';
import UserStore, { UserContext } from './context/UserInfo';
import LoginPage from './page/Login';
import MyPage from './page/MyPage';
import Secession from './page/Secession';
import Today from './page/Today';
import Agreement from './page/SignUp/agreement';
import SignUp from './page/SignUp/signUp';
import Welcome from './page/SignUp/welcome';
import PlayMusic from './page/PlayList/PlayMusic';
import MusicInfo from './page/MusicInfo';




function App() {
  return (

    <UserStore>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/Today' element={<Today/>}/>
          <Route path='/Chart' element={<Chart/>}/>
          <Route path='/LoginPage' element={<LoginPage/>}/>
          <Route path='/MyPage' element={<MyPage/>}/>
          <Route path='/Secession' element={<Secession/>}/>
          <Route path='/Agreement' element={<Agreement/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
          <Route path='/Welcome' element={<Welcome/>}/>
          <Route path='/PlayMusic' element={<PlayMusic/>}/>
          <Route path='/MusicInfo' element={<MusicInfo/>}/>
        </Routes>
     </Router>
    </UserStore>
  

  );    
}

export default App;
