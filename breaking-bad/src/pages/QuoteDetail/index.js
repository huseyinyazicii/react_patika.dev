import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from './style.module.css';

const QuoteDetail = () => {
    const [quote, setQuote] = useState({});

    const quotes = useSelector((state) => state.quotes.items);

    const params = useParams();

    useEffect(() => {
        setQuote(quotes.find((item) => item.quote_id === Number(params.quote_id)));
    }, [quotes,params])

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Quote Details</h1>
            <div className={styles.quote}>"{quote.quote}"</div>
            <div className={styles.author}>- {quote.author}</div>
            <hr className={styles.seperator} />
        </div>
    )
}

export default QuoteDetail