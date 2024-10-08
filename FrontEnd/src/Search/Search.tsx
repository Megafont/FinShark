import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import "./Search.css"

interface Props
{
    onSearchSubmit: (e: SyntheticEvent) => void;
    search: string | undefined;
    handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({ onSearchSubmit, search, handleSearchChange }: Props): JSX.Element =>
{
    return (
        <>
            {/* The tag above is a "fragment" and ends with a closing </> further down.*/}
            <form onSubmit={onSearchSubmit}>
                <input value={search} onChange={handleSearchChange} />
            </form>
        </>
    );
}

export default Search