import * as Yup from 'yup';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import { Box, Input, Label, Links } from 'commonStyle/Common.styled';
import { fetchLogInUser } from 'redux/auth/authOperations';
import { FormContact, Eror, ConteierLogin } from './LogIn.styled';
import icons from 'commonStyle/Common.styled';

const validationSchema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().required(),
});

const initialValue = { email: '', password: '' };

const LogInUser = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { IconsExpand, IconsCheckBox, IconsStanby, IconsRecord } = icons;

  const hendleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(fetchLogInUser({ email, password }));
    navigate('contacts');
    resetForm();
  };

  return (
    <ConteierLogin
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <IconsRecord />
      <Formik
        initialValues={initialValue}
        onSubmit={hendleSubmit}
        validationSchema={validationSchema}
      >
        <FormContact>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gridGap="25px"
          >
            <Label>
              Email
              <Input type="email" name="email" />
              <ErrorMessage name="email" render={msg => <Eror>{msg}</Eror>} />
            </Label>

            <Label>
              Password
              <Input type="text" name="password" />
              <ErrorMessage
                name="password"
                render={msg => <Eror>{msg}</Eror>}
              />
            </Label>

            <Button variant="contained" color="primary" type="submit">
              Login
            </Button>
          </Box>
        </FormContact>
      </Formik>
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
    </ConteierLogin>
  );
};

export default LogInUser;
