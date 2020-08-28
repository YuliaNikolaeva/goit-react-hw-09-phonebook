import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';


import ContactForm from '../components/ContactForm';
import Container from '../components/Container';
import ContactsList from '../components/ContactsList';
import Filter from '../components/Filter';
import Message from '../components/Message';

import {contactOperations, contactSelectors} from '../redux/contacts';

const {fetchContacts} = contactOperations;

const {getContacts, getLoading} = contactSelectors;

export default function ContactsPage () {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const isLoadingContacts = useSelector(getLoading);

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);


    return(
        <>
            <Container title={'Phonebook'}>
                {contacts.length > 1 && <Filter />}
                <ContactForm />
            </Container>
            <Container title={'Contacts'}>
                {isLoadingContacts && <Loader
                    type="Puff"
                    color="#666464"
                    height={60}
                    width={60}
                />}
                {contacts.length > 0 ? (
                    <ContactsList />
                ) : (
                    !isLoadingContacts &&
                    <Message text={'Phonebook is empty'} />
                )}
            </Container>
        </>
    );
};