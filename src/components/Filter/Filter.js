import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contactSlice';
import PropTypes from 'prop-types';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const filterChange = e => {
    e.preventDefault();
    dispatch(changeFilter(e.currentTarget.value));
  };

  return (
    <div>
      <h3>Find contacts by name</h3>
      <input type="text" value={filter} onChange={e => filterChange(e)} />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  filterChange: PropTypes.func,
};
