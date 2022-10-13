import { Box } from 'commonStyle/Common.styled';
import { Phonebook } from 'components/PhoneBook/PhoneBook';
import { useSelector } from 'react-redux';
import { authUserSelector } from 'redux/auth/authSlice';
function UserMenu() {
  const wtf = useSelector(authUserSelector);
  console.log(wtf);
  return (
    <>
      <Box display="flex" flexDirection="column" mr="auto" gridGap={[20]}>
        <p>Hello {}</p>
        <button type="button">LogOut</button>
        <Phonebook />
      </Box>
    </>
  );
}

export default UserMenu;
