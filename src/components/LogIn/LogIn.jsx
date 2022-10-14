import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import { Box, Input, Label } from 'commonStyle/Common.styled';
import { fetchLogInUser } from 'redux/auth/authOperations';
import { FormContact, Eror } from './LogIn.styled';

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

            <button type="submit">LogIn</button>
          </Box>
        </FormContact>
      </Formik>
    </Box>
  );
};

export default LogInUser;
