import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import contactOperation from '../../redux/contacts/contacts-operations';
import ButtonDelete from '../Buttons';
import s from './ContactsList.module.css';

import {contactSelectors} from '../../redux/contacts';

const {deleteContact} = contactOperation;
const {getVisibleContacts} = contactSelectors;

export default function ContactsList () {
    const dispatch = useDispatch();
    const contacts = useSelector(getVisibleContacts);
    const onClickBtn = useCallback((id) => {
        dispatch(deleteContact(id))
    }, [dispatch])

    return (
        <ul>
            {contacts.map(contact => (
                <li className={s.contactBox} key={contact.id}>
                    <div className={s.name}>{contact.name}</div>
                    <div className={s.number}>{contact.number}</div>
                    <div className={s.btnBox}>
                        <ButtonDelete onClick={onClickBtn} contactId={contact.id} />
                    </div>
                </li>
            ))}
        </ul>
    );
};

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            number: PropTypes.string,
        }).isRequired,
    ),
};


