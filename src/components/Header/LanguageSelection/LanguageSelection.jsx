import c from './LanguageSelection.module.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { LanguageContext } from '../../../languageContext';

const titles = {
  ua: ["Вибір мови", "Українська", "Російська", "Англійська"],
  ru: ["Выбор языка", "Украинский", "Русский", "Английский"],
  en: ["Language selection", "Ukrainian", "Russian" , "English"],
}

function handlerLanguage(language) {
  LanguageContext.setLanguage(language);
}

function LanguageSelection() {
  const languageContext = useContext(LanguageContext);
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {titles[languageContext.language][0]}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handlerLanguage("ua")}>{titles[languageContext.language][1]}</Dropdown.Item>
        <Dropdown.Item onClick={() => handlerLanguage("ru")}>{titles[languageContext.language][2]}</Dropdown.Item>
        <Dropdown.Item onClick={() => handlerLanguage("en")}>{titles[languageContext.language][3]}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LanguageSelection;