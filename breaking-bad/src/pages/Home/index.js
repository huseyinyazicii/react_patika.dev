import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharactersAsync } from '../../redux/characters/charactersSlice';
import styles from './style.module.css';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import { Link } from 'react-router-dom';

const Home = () => {
    const characters = useSelector((state) => state.characters.items);
    const error = useSelector((state) => state.characters.error);
    const status = useSelector((state) => state.characters.status);
    const nextPage = useSelector((state) => state.characters.page);
    const hasNextPage = useSelector((state) => state.characters.hasNextPage);

    const dispatch = useDispatch();

    useEffect(() => {
        if(status === 'idle'){
            dispatch(getCharactersAsync());
        }
    }, [dispatch, status])

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Characters</h1>
            {
                error ? <Error message={error} /> : 
                <div>
                    <div className={styles.section}>
                        {
                            characters.map((item) => (
                                <Link to={`/character/${item.char_id}`}  key={item.char_id} className={styles.link}>
                                    <div className={styles.card}>
                                        <img src={item.img} alt={item.name} />
                                        <span className={styles.card_text}>{item.name}</span>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                    <div className={styles.button_container}>
                        {status === 'loading' && <Loading />}
                        {
                            hasNextPage && 
                            status !== 'loading' && 
                            <button className={styles.button} onClick={() => dispatch(getCharactersAsync(nextPage))}>
                                See More ({nextPage})
                            </button>
                        }
                        {
                            !hasNextPage && <div>There is nothing to be shown.</div>
                        }
                    </div>
                </div>
                    
            }
        </div>
    )
}

export default Home;