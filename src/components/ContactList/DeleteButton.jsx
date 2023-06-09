import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

function DeleteButton({ onDeleteContact, contactId }) {
  return (
    <button
      type="button"
      className={styles.DeleteButton}
      onClick={() => onDeleteContact(contactId)}
    >
      <span className={styles.DeleteButtonTitle}>delete</span>
    </button>
  );
}

DeleteButton.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contactId: PropTypes.string.isRequired,
};

export default DeleteButton;
