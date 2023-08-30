import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

function DisplayLanguage() {
  const { selected } = useContext(LanguageContext);

  return (
    <div>
      <h1>Lingua Selezionata: {selected}</h1>
    </div>
  );
}

export default DisplayLanguage;



