import './style.css';

export const MenuItem = ({ text,onSelect }) => {
  return (
    <a onClick={() => onSelect(text)} href="#" className="menu-item">
      {text}
    </a>
  );
};
