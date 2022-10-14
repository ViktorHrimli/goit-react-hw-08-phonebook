import { Box } from 'commonStyle/Common.styled';
import { Phonebook } from 'components/PhoneBook/PhoneBook';
import { useSelector } from 'react-redux';
import { authUserSelector, authTokenSelector } from 'redux/auth/authSlice';
function UserMenu() {
  const { name } = useSelector(authUserSelector);
  const token = useSelector(authTokenSelector);

  return (
    <>
      <Box display="flex" flexDirection="column" mr="auto" gridGap={[20]}>
        <p>Hello {name}</p>
        <button type="button">LogOut</button>
        {token && <Phonebook />}
      </Box>
    </>
  );
}

export default UserMenu;
