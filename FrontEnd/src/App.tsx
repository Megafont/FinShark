import { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';


function App()
{
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) =>
  {
    setSearch(e.target.value);
    console.log(e);
  };

  const onPortfolioCreate = (e: SyntheticEvent) =>
  {
    e.preventDefault();
    console.log(e);
  }

  const onSearchSubmit = async (e: SyntheticEvent) =>
  {
    e.preventDefault();
    const result = await searchCompanies(search);

    // Do type narrowing
    if (typeof result === "string")
    {
      setServerError(result);
    }
    else if (Array.isArray(result.data))
    {
      setSearchResult(result.data);
    }

    console.log(searchResult);
  };

  return (
    <div className="App">
      <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange} />
      {/* If there is a server error, then display it. This line is how you make comments in React code.*/}
      {serverError && <h1>{serverError}</h1>}
      <CardList searchResults={searchResult} onPortfolioCreate={onPortfolioCreate} />
    </div>
  );

}

export default App;
