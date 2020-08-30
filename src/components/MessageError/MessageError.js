import React from 'react';

import s from './MessageError.module.css';

const MessageError = ({ text }) => {
    return <div className={s.message}>{text}</div>;
};


export default MessageError;