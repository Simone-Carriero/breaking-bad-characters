import './Search.scss';

type SearchProps = {
  query: string;
  setQuery: (search: string) => void;
};

const Search = ({ query, setQuery }: SearchProps) => {
  return (
    <div className='search'>
      <input
        className='search-input'
        type='search'
        placeholder='Search...'
        onChange={({ target }) => setQuery(target.value)}
        value={query}
      />
    </div>
  );
};

export default Search;
