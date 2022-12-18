import c from './LanguageSelection.module.css';
import Dropdown from 'react-bootstrap/Dropdown';

function LanguageSelection() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Вибір мови
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Українська</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Русский</Dropdown.Item>
        <Dropdown.Item href="#/action-3">English</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LanguageSelection;