import { useDispatch, useSelector } from 'react-redux';
import { Formik, ErrorMessage, Form } from 'formik';
import Notiflix from 'notiflix';
import * as Yup from 'yup';
import { Button } from '@mui/material';
import 'yup-phone';
import { Box } from 'commonStyle/Common.styled';
import { Eror } from './Form.styled';
import { Input, Label } from 'commonStyle/Common.styled';
import { fetchAddContacts } from 'redux/contacts/operations';
import { selectContact } from 'redux/contacts/contactsSlice';

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  number: Yup.string().phone('ua').required(),
});

const initialValue = { name: '', number: '' };

export const Formes = () => {
  const dispatch = useDispatch();
  const contact = useSelector(selectContact);

  const hendleSubmit = (values, { resetForm }) => {
    addContacsFormSubmit(values);
    resetForm();
  };

  const addContacsFormSubmit = value => {
    if (contact.find(item => item.name === value.name)) {
      return Notiflix.Notify.warning(`${value.name} is already is contacts`);
    } else {
      dispatch(fetchAddContacts(value));
    }
  };

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={hendleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gridGap="25px"
        >
          <Label>
            Name
            <Input type="text" name="name" />
            <ErrorMessage name="name" render={msg => <Eror>{msg}</Eror>} />
          </Label>

          <Label>
            Telephone
            <Input type="tel" name="number" />
            <ErrorMessage name="number" render={msg => <Eror>{msg}</Eror>} />
          </Label>

          <Button
            variant="contained"
            color="primary"
            size="small"
            type="submit"
          >
            Add Contact
          </Button>
        </Box>
      </Form>
    </Formik>
  );
};
