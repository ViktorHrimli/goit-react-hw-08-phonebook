import { Box } from 'commonStyle/Common.styled';
import { ItemList, ItemListParagr, ButtonIcon } from './ListContact.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContact } from 'redux/contacts/contactsSlice';
import { fetchRemoveContact } from 'redux/contacts/operations';
import { selectFilter } from 'redux/contacts/filterSlice';

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
          <Box display="flex" alignItems="center" gridGap="15px">
            <ItemListParagr>
              {item.name.toUpperCase()} {item.number}
            </ItemListParagr>
            <ButtonIcon onClick={() => handleClickRemove(item.id)}></ButtonIcon>
          </Box>
        </ItemList>
      );
    })
  );
};
