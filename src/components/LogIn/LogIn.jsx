import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import { Box } from 'commonStyle/Common.styled';
import { fetchLogInUser } from 'redux/auth/authOperations';
import {
  FormContact,
  FormLabel,
  Input,
  FormButton,
  Eror,
} from './LogIn.styled';

const validationSchema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().required(),
});

const initialValue = { email: '', password: '' };

const LogInUser = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hendleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(fetchLogInUser({ email, password }));
    navigate('contacts');
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
              Email
              <Input type="email" name="email" />
              <ErrorMessage name="email" render={msg => <Eror>{msg}</Eror>} />
            </FormLabel>

            <FormLabel>
              Password
              <Input type="text" name="password" />
              <ErrorMessage
                name="password"
                render={msg => <Eror>{msg}</Eror>}
              />
            </FormLabel>

            <FormButton type="submit">LogIn</FormButton>
          </Box>
        </FormContact>
      </Formik>
    </Box>
  );
};

export default LogInUser;
