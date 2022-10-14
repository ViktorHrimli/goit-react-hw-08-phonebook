import { Box, Links } from 'commonStyle/Common.styled';
import icons from 'commonStyle/Common.styled';
import { Phonebook } from 'components/PhoneBook/PhoneBook';
import { ConteierContacts, NameText } from './UserMenu.styled';
import { fetchLogOutUser } from 'redux/auth/authOperations';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { authUserSelector, authTokenSelector } from 'redux/auth/authSlice';
import { useLocation, useNavigate } from 'react-router-dom';

function UserMenu() {
  const location = useLocation();
  const { name } = useSelector(authUserSelector);
  const token = useSelector(authTokenSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { IconsExpand, IconsCheckBox, IconsStanby, IconsRecord } = icons;

  const handleLogOutUser = () => {
    dispatch(fetchLogOutUser());
    navigate('/');
  };
  return (
    <>
      <ConteierContacts>
        <IconsRecord />
        <Box
          width="380px"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gridGap={[20]}
          px={[3]}
        >
          <NameText>Hello {name}</NameText>

          <Button
            variant="contained"
            color="primary"
            size="small"
            type="button"
            onClick={handleLogOutUser}
          >
            Logout
          </Button>
        </Box>
        {token && <Phonebook />}
        <Box
          display="flex"
          alignItems="flex-start"
          gridGap="20px"
          justifyContent="space-around"
          mt="auto"
          width="380px"
        >
          <Links to={location.state?.from ?? '/'}>
            <IconsExpand />
          </Links>
          <Links to={location.state?.from ?? '/'}>
            <IconsStanby />
          </Links>
          <Links to={location.state?.from ?? '/'}>
            <IconsCheckBox />
          </Links>
        </Box>
      </ConteierContacts>
    </>
  );
}

export default UserMenu;
