import React from 'react';

const Search: React.FunctionComponent<{
  callback: Function;
}> = ({ callback }) => {
  const [search, setSearch] = React.useState('');

  const OnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setSearch(e.currentTarget.value);
  };

  const OnSubmiHandler = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault(); 
    return callback(search);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={(e) => OnSubmiHandler(e)}>
        <div className="field">
          <label htmlFor="searchId">Search</label>
          <input
            type="text"
            id="searchId"
            value={search}
            onChange={(e) => OnChangeHandler(e)}
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
