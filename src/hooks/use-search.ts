import { useState } from 'react';

interface UseSearch<T> {
  filteredData: T[];
  handleSearch: (query: string) => void;
}

function useSearch<T extends Record<string, string>>(
  initialData: T[],
  searchBy: keyof T,
): UseSearch<T> {
  const [filteredData, setFilteredData] = useState<T[]>(initialData);

  const handleSearch = (query = '') => {
    setFilteredData(
      initialData.filter((data) => {
        const searchValue = data[searchBy];
        return searchValue?.toLowerCase().includes(query?.toLowerCase());
      }),
    );
  };

  return { filteredData, handleSearch };
}

export default useSearch;
