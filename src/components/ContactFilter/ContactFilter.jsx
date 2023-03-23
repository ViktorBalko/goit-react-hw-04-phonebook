import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactFilter.module.css';

const ContactFilter = ({ value, onChange }) => {
  return (
    <label className={styles.ContactFilterLabel}>
      <input
        type="text"
        value={value}
        className={styles.ContactFilterInput}
        placeholder={'..find'}
        onChange={onChange}
      />
    </label>
  );
};

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ContactFilter;
