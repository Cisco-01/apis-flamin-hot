'use client';

import { useEffect, useState } from 'react';
import ListOfCharacters from './ListOfCharacters';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function RickMorty() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [page, setPage] = useState([1]);

  const initialURL = `https://rickandmortyapi.com/api/character?page=${page}`;

  const FetchCharacters = async () => {
    fetch(initialURL)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch(error => console.log(error)),
      {
        keepPreviousData: true,
      };
  };

  function handlePaginationChange(e, value) {
    e.preventDefault();
    setPage(value);
  }

  useEffect(() => {
    FetchCharacters(initialURL);
  });

  useEffect(() => {
    if (page) {
      setPage(parseInt(page));
    }
  }, [page]);

  return (
    <div className="flex flex-col items-center">
      <Stack spacing={2}>
        <Pagination
          count={info.pages}
          className="pagination bg-white rounded-full mt-2 hover:bg-zinc-200"
          page={page}
          onChange={handlePaginationChange}
        />
      </Stack>
      <ListOfCharacters characters={characters} />
      <Stack spacing={2}>
        <Pagination
          count={info.pages}
          className="pagination bg-white rounded-full mb-6 hover:bg-zinc-200"
          page={page}
          onChange={handlePaginationChange}
        />
      </Stack>
    </div>
  );
}
