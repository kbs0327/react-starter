import { createContext } from "react";

const FilterContext = createContext({
  filter: 'all',
  setFilter: () => {}
});

export default FilterContext;
