import useHash from '../hooks/useHash';

const links = [
  {
    link: "#/",
    label: "All",
    default: true,
  },
  {
    link: "#/active",
    label: "Active",
    default: false,
  },
  {
    link: "#/completed",
    label: "Completed",
    default: false,
  },
];
function FilterButtons() {
  const hash = useHash();
  const existHash = links.some((link) => link.link === hash);

  const isSelected = (link) => (existHash ? hash === link.link : link.default);

  return (
    <ul className="filters">
      {links.map((link) => (
        <li key={link.link}>
          <a href={link.link} className={isSelected(link) ? "selected" : ""}>
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default FilterButtons;
