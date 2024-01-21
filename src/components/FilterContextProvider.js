import {useMemo, useState} from 'react';
import FilterContext from '../FilterContext';

function FilterContextProvider({children}) {
  const [filter, setFilter] = useState('all');

  const value = useMemo(() => (
    {filter, setFilter}
  ), [filter]);
  return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>;
}

export default FilterContextProvider;
