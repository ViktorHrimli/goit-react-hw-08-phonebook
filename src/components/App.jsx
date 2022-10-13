import { Box } from 'commonStyle/Common.styled';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import RegisterUser from './Register/Register';
import LogIn from './LogIn/LogIn';
import UserMenu from './UserMenu/UserMenu';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
      }}
    >
      <Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/login/:contacts" element={<UserMenu />}></Route>
        </Routes>
      </Box>
    </div>
  );
};
