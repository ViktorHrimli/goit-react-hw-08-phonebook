import { Box, Links } from 'commonStyle/Common.styled';
import { ConteierContacts, NameText } from './UserMenu.styled';
import { Phonebook } from 'components/PhoneBook/PhoneBook';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { authUserSelector, authTokenSelector } from 'redux/auth/authSlice';
import icons from 'commonStyle/Common.styled';
import { useLocation } from 'react-router-dom';

function UserMenu() {
  const location = useLocation();
  const { name } = useSelector(authUserSelector);
  const token = useSelector(authTokenSelector);
  const { IconsExpand, IconsCheckBox, IconsStanby, IconsRecord } = icons;

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
