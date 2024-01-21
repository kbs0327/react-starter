import {useContext} from 'react';
import FilterContext from '../FilterContext';

const links = [
  {
    filter: "all",
    label: "All",
    default: true,
  },
  {
    filter: "active",
    label: "Active",
    default: false,
  },
  {
    filter: "completed",
    label: "Completed",
    default: false,
  },
];
function FilterButtons() {
  const {filter, setFilter} = useContext(FilterContext);
  const hasFilter = links.some((link) => link.filter === filter);

  const isSelected = (link) => (hasFilter ? filter === link.filter : link.default);

  const handleClick = filter => {
    // FIXME startTransition 적용
    setFilter(filter);
  }

  return (
    <ul className="filters">
      {links.map((link) => (
        <li key={link.filter}>
          <a href="#" onClick={() => handleClick(link.filter)} className={isSelected(link) ? "selected" : ""}>
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default FilterButtons;
