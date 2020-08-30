import axios from 'axios';
import contactActions from './contacts-actions';

const {
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    addContactRequest,
    addContactSuccess,
    addContactContactsError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
} = contactActions;

const fetchContacts = () => dispatch => {
    dispatch(fetchContactsRequest());

    axios.get('/contacts')
    .then(response => dispatch(fetchContactsSuccess(response.data)))
    .catch(err => dispatch(fetchContactsError(err.message)))
};


const addContact= ({name, number}) => dispatch => {
    const newContact = {
        name,
        number,
    };

    dispatch(addContactRequest())

    axios.post('/contacts', newContact)
    .then(({data}) => dispatch(addContactSuccess(data)))
    .catch(err => dispatch(addContactContactsError(err.message)))
};


const deleteContact = id => dispatch => {
    dispatch(deleteContactRequest());

    axios.delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(err => dispatch(deleteContactError(err.message)))
}


export default { 
    fetchContacts,
    addContact,
    deleteContact, 
};