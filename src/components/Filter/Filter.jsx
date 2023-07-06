import { useDispatch } from 'react-redux';
import { FilterInput, FilterTitle } from './filter.styled';
import { addFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <FilterTitle>
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        onChange={e => dispatch(addFilter(e.target.value))}
      />
    </FilterTitle>
  );
};
