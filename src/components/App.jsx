import { Box } from 'commonStyle/Common.styled';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import RegisterUser from './Register/Register';
import LogIn from './LogIn/LogIn';
import UserMenu from './UserMenu/UserMenu';

export const App = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" py={[3]}>
      <Box display="flex" border="1px solid black" borderRadius="15px">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/login/:contacts" element={<UserMenu />}></Route>
        </Routes>
      </Box>
    </Box>
  );
};
