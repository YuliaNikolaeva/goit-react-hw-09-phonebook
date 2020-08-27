import React from 'react';

import s from './ContainerGeneralForPage.module.css';

const ContainerGeneralForPage = ({ children }) => {
    return (
        <div className={s.containerGeneral}>
            {children}
        </div>
    );
};

export default ContainerGeneralForPage;