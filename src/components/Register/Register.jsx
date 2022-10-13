import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import { Box } from 'commonStyle/Common.styled';
import { fethcRegisterUser } from 'redux/auth/authOperations';
import {
  FormContact,
  FormLabel,
  Input,
  FormButton,
  Eror,
} from './Register.styled';

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

  const hendleSubmit = ({ name, email, password }, { resetForm }) => {
    dispatch(fethcRegisterUser({ name, email, password }));
    navigate('/login/:id', { replace: true });
    resetForm();
  };

  return (
    <Box>
      <Link to={location.state?.from ?? '/'}>Back</Link>
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
          >
            <FormLabel>
              Name
              <Input type="text" name="name" />
              <ErrorMessage name="name" render={msg => <Eror>{msg}</Eror>} />
            </FormLabel>

            <FormLabel>
              Email
              <Input type="tel" name="email" />
              <ErrorMessage name="email" render={msg => <Eror>{msg}</Eror>} />
            </FormLabel>

            <FormLabel>
              Password
              <Input type="tel" name="password" />
              <ErrorMessage
                name="password"
                render={msg => <Eror>{msg}</Eror>}
              />
            </FormLabel>

            <FormButton type="submit">Register</FormButton>
          </Box>
        </FormContact>
      </Formik>
    </Box>
  );
};
export default RegisterUser;
