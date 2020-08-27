import React, { useCallback, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';
import s from './ContactForm.module.css';

import {contactSelectors, contactOperations} from '../../redux/contacts';

const {getContacts} = contactSelectors;
const {addContact} = contactOperations;


export default function ContactForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    const createIdName = uuidv4();
    const createIdNumber = uuidv4();

    const saveName = e => {
        setName(e.target.value)
    };

    const saveNumber = e => {
        setNumber(e.target.value)
    };


    const submitContact = useCallback((e) => {
        e.preventDefault();

        const isCorrectInput = name.length !== 0 && number.length !== 0;

        if (!isCorrectInput) {
            alert('One or more fields is full');
            return;
        };

        const isNewContactDublicate = contacts.some(
            contact => contact.name.trim() === name.trim(),
        );

        if (isNewContactDublicate) {
            alert(`${name.trim()} is alredy in contacts`);
            return;
        };

        dispatch(addContact({ name, number }));
        setName('');
        setNumber('');

        }, [contacts, dispatch, name, number]
    )

    return (
        <form onSubmit={submitContact}>
            <label className={s.label} htmlFor={createIdName}>
                <div className={s.head__field}>Name</div>
                <input
                    type="text"
                    placeholder=" "
                    name="name"
                    className={s.input}
                    value={name}
                    onChange={saveName}
                    id={createIdName}
                />
            </label>

            <label className={s.label} htmlFor={createIdNumber}>
                <div className={s.head__field}>Number</div>
                <input
                    type="tel"
                    placeholder=" "
                    name="number"
                    className={s.input}
                    value={number}
                    onChange={saveNumber}
                    id={createIdNumber}
                />
            </label>
            <Button type="submit">
                Add contact
            </Button>
        </form>
    )
};

ContactForm.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
};