import { ThreeDots } from 'react-loader-spinner';
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
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt="10px"
      gridGap="10px"
    >
      <Formes />
      <Filter />

      <ContactList>
        <Renderlist />
      </ContactList>
      {isLoading && !error && (
        <ThreeDots
          height="20"
          width="20"
          radius="9"
          color="#ffd700"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      )}
    </Box>
  );
};
