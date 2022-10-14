import * as Yup from 'yup';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import { Box, Input, Label, Links } from 'commonStyle/Common.styled';
import { fethcRegisterUser } from 'redux/auth/authOperations';
import { FormContact, Eror, ConteierRegister } from './Register.styled';
import icons from 'commonStyle/Common.styled';

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().required(),
  password: Yup.string().required(),
});

const initialValue = { name: '', email: '', password: '' };

const RegisterUser = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { IconsExpand, IconsCheckBox, IconsStanby, IconsRecord } = icons;

  const hendleSubmit = ({ name, email, password }, { resetForm }) => {
    dispatch(fethcRegisterUser({ name, email, password }));
    navigate('/login/:id', { replace: true });
    resetForm();
  };

  return (
    <ConteierRegister>
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
            gridGap="15px"
          >
            <Label>
              Name
              <Input type="text" name="name" />
              <ErrorMessage name="name" render={msg => <Eror>{msg}</Eror>} />
            </Label>

            <Label>
              Email
              <Input type="tel" name="email" />
              <ErrorMessage name="email" render={msg => <Eror>{msg}</Eror>} />
            </Label>

            <Label>
              Password
              <Input type="tel" name="password" />
              <ErrorMessage
                name="password"
                render={msg => <Eror>{msg}</Eror>}
              />
            </Label>

            <Button variant="contained" color="primary" type="submit">
              Register
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
    </ConteierRegister>
  );
};
export default RegisterUser;
