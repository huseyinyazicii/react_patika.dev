import styles from './header.module.css';
import {Form, FormControl} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateSearch } from '../../redux/note/noteSlice';

const Header = () => {
    const dispatch = useDispatch();

    return (
        <div className={styles.main}>
            <div className='container'>
                <div className={styles.rows}>
                    <h1 className={styles.title}>Notes App</h1>
                    <Form className={styles.form}>
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={(e) => dispatch(updateSearch(e.target.value))}
                        />
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Header;