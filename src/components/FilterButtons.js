import {useEffect, useState} from 'react';

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
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    // FIXME window 에서 hashchange event 발생할 때마다 setHash로 값 추가
  }, []);
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
