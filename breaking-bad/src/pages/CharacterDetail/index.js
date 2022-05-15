import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './style.module.css';
import Loading from '../../components/Loading';

const CharacterDetail = () => {
    const [character, setCharacter] = useState({});
    const [loading, setLoading] = useState(true);

    const params = useParams();

    useEffect(() => {
        axios(`${process.env.REACT_APP_BASE_URL}/characters/${params.char_id}`)
        .then((response) => response.data)
        .then((data) => {
            setCharacter(data[0]);
            setLoading(false);
        });
    }, [params])

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Character Detail</h1>
            {
                loading ? <Loading /> :
                <div className={styles.section}>
                    <div className={styles.img_container}>
                        <img alt={character.name} src={character.img} className={styles.img} />
                    </div>
                    <div className={styles.information}>
                        <div className={styles.item}>
                            <span className={styles.header}>Name: </span>
                            <span className={styles.feature}>{character.name}</span>
                        </div>
                        <div className={styles.item}>
                            <span className={styles.header}>Nickname: </span>
                            <span className={styles.feature}>{character.nickname}</span>
                        </div>
                        <div className={styles.item}>
                            <span className={styles.header}>Occupation: </span>
                            <span className={styles.feature}>{character.occupation[0]}</span>
                        </div>
                        <div className={styles.item}>
                            <span className={styles.header}>Portrayed by: </span>
                            <span className={styles.feature}>{character.portrayed}</span>
                        </div>
                        <div className={styles.item}>
                            <span className={styles.header}>Status: </span>
                            <span className={styles.feature}>{character.status}</span>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default CharacterDetail