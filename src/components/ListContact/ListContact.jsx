import { ItemList, ItemListParagr } from './ListContact.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContact } from 'redux/contacts/contactsSlice';
import { fetchRemoveContact } from 'redux/contacts/operations';
import { selectFilter } from 'redux/contacts/filterSlice';
import Button from '@mui/material/Button';
import { DeleteForever } from '@mui/icons-material';

export const Renderlist = () => {
  const dispatch = useDispatch();
  const handleClickRemove = removeId => dispatch(fetchRemoveContact(removeId));
  const selectorContact = useSelector(selectContact);
  const selectorFilter = useSelector(selectFilter);

  const renderContact = selectorContact.filter(item =>
    item.name.toLowerCase().includes(selectorFilter)
  );

  return (
    renderContact.length > 0 &&
    renderContact.map(item => {
      return (
        <ItemList key={item.id}>
          <ItemListParagr>
            {item.name} {item.number}
          </ItemListParagr>
          <Button
            type="button"
            variant="contained"
            size="small"
            color="error"
            endIcon={<DeleteForever />}
            onClick={() => handleClickRemove(item.id)}
          >
            Delete
          </Button>
        </ItemList>
      );
    })
  );
};
