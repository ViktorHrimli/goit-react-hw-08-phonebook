import { Box } from 'commonStyle/Common.styled';
import { Formes } from '../FormSection/Form';
import { Filter } from '../FilterSection/Filter';
import { Renderlist } from '../ListContact/ListContact';
import { ContactList } from '../ListContact/ListContact.styled';
import { fetchAllContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export const Phonebook = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchAllContacts());
    return () => {};
  }, [dispatch]);

  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center">
        <h1>Phonebook</h1>
        <Formes />
        <h2>Contacts</h2>
        <Filter />
        {isLoading && !error && <b>Loading...</b>}
        <ContactList>
          <Renderlist />
        </ContactList>
      </Box>
    </>
  );
};
