import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getQuotesAsync } from '../../redux/quotes/quotesSlice';
import styles from './style.module.css';
import Loading from '../../components/Loading';

const Quotes = () => {
    const quotes = useSelector((state) => state.quotes.items);
    const status = useSelector((state) => state.quotes.status);

    const dispatch = useDispatch();
    
    useState(() => {
        if(status === 'idle'){
            dispatch(getQuotesAsync());
        }
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Quotes ({quotes.length})</h1>
            {
                status === 'loading' ? <Loading /> :
                quotes.map((item) => (
                    <Link to={`/quotes/${item.quote_id}`} className={styles.link}  key={item.quote_id}>
                        <div className={styles.quote}>
                            "{item.quote}" - <span className={styles.author}>{item.author}</span>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Quotes;