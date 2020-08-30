import React from 'react';

import s from './MessageFieldError.module.css';

const MessageFieldError = ({ text }) => {
    return <div className={s.message}>{text}</div>
};


export default MessageFieldError;