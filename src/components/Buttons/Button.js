import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const ButtonDelete = ({ onClick, contactId }) => {
    return (
        <Button
            variant="outline-primary"
            type="button"
            onClick={() => onClick(contactId)}
        >
            Delete
        </Button>
    );
};

ButtonDelete.propTypes = {
    onClick: PropTypes.func,
    contactId: PropTypes.string,
};


export default ButtonDelete;