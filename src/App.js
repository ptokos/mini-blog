import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import MainPage from './component/page/MainPage';

const MainTitleText = styled.p `
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App(props) {
  return (
    <BrowserRouter>
      <MainTitleText> ptokos의 미니 블로그 </MainTitleText>
      <Routes>
        <Route index element={<MainPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
