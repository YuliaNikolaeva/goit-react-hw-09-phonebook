import React, {useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

import {contactActions, contactSelectors} from '../../redux/contacts';

const {getFilter} = contactSelectors;
const {changeFilter} = contactActions;


export default function Filter() {
    const value = useSelector(getFilter);
    const dispatch = useDispatch();


    const onChange = useCallback((e) => {
        dispatch(changeFilter(e.target.value))
    }, [dispatch]);

    return (
        <label className={s.label}>
            <div className={s.head__field}>Filter by name</div>
            <input
                className={s.input}
                type="text"
                value={value}
                onChange={onChange}
            />
        </label>
    );
};

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};