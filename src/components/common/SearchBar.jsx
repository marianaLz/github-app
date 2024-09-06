import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const SearchBar = ({ value, onChange }) => {
  return (
    <InputGroup maxW='xl'>
      <Input
        value={value}
        onChange={onChange}
        placeholder='Type here'
        aria-label='Search input'
      />
      <InputLeftElement>
        <SearchIcon color='gray-400' />
      </InputLeftElement>
    </InputGroup>
  );
};

export default SearchBar;
