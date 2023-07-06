import PropTypes from 'prop-types';
import { FilterInput, FilterTitle } from './filter.styled';

export const Filter = ({ filter, onFilter }) => {
  return (
    <FilterTitle>
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={onFilter}
      />
    </FilterTitle>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
