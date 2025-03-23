import React, { useContext } from 'react';
import { LanguageContext } from '../providers/LanguageProvider';

const useLanguage = () => {
     const langContext = useContext(LanguageContext);
     return langContext;
};

export default useLanguage;