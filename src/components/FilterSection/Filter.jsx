import { useDispatch, useSelector } from 'react-redux';
import { filterContact, selectFilter } from 'redux/contacts/filterSlice';
import { Formik } from 'formik';
import { Input } from 'commonStyle/Common.styled';
import { createContext } from 'react';
export const UseContext = createContext();

export const Filter = () => {
  const dispatch = useDispatch();
  const valueFilter = useSelector(selectFilter);

  const handlechange = query => {
    dispatch(filterContact(query.target.value.toLowerCase().trim()));
  };

  return (
    <Formik>
      <Input
        type="text"
        value={valueFilter}
        onChange={handlechange}
        placeholder="Filter Contacts"
      />
    </Formik>
  );
};
