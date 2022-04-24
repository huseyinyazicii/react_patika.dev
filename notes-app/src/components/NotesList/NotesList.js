import React from 'react';
import styles from './noteslist.module.css';
import {Card, Col, Row, Badge} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { removeNote } from '../../redux/note/noteSlice';

const NotesList = () => {
    const notes = useSelector((state) => {
        if(state.search === ""){
            return state.note.notes;
        }
        return state.note.notes.filter((note) => note.title.toLowerCase().includes(state.note.search) || note.content.toLowerCase().includes(state.note.search) );
    });

    const dispatch = useDispatch();

    return (
        <div className={styles.main}>
            <Row>
                {
                    notes.map((note) => (
                        <Col md={4} sm={6} key={note.id}>
                            <Card className={styles.card} style={{ backgroundColor:`${note.color}` }}>
                                <Card.Header className={styles.header}>
                                    <span>{note.title}</span>
                                    <Badge bg="danger" className={styles.remove} onClick={() => dispatch(removeNote(note.id))}>X</Badge>
                                </Card.Header>
                                <Card.Body className={styles.body}>
                                    <Card.Text>{note.content}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </div>
    );
}

export default NotesList;