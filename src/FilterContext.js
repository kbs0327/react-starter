import { createContext } from "react";

const FilterContext = createContext({
  filter: '',
  setFilter: () => {}
});

export default FilterContext;
