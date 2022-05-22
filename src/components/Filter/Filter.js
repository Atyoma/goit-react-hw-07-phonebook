import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice';
import PropTypes from 'prop-types';
import { InputBox, TitleH2, TitleH3 } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.value);

  const filterChange = e => {
    e.preventDefault();
    dispatch(changeFilter(e.currentTarget.value));
  };

  return (
    <InputBox>
      <TitleH2>Contact list</TitleH2>
      <TitleH3>Find contacts by name</TitleH3>
      <input type="text" value={filter} onChange={e => filterChange(e)} />
    </InputBox>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  filterChange: PropTypes.func,
};
