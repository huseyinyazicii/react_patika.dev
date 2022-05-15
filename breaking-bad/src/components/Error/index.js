import React from 'react';
import styles from './style.module.css';

const Error = ({message}) => {
    return (
        <div className={styles.message}>{message}</div>
    )
}

export default Error