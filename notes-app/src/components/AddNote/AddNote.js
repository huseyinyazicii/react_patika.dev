import React, { useState } from 'react';
import styles from './addnote.module.css';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {addNote} from '../../redux/note/noteSlice';
import { ToastContainer } from 'react-toastify';
import { notifyError, notifySuccess } from '../notify/Notify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck} from '@fortawesome/free-solid-svg-icons';

const AddNote = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [color, setColor] = useState('#F9FAFB');

    const dispatch = useDispatch();

    const handleSubmit = () => {
        if(title.length <= 0 || content.length <= 0){
            notifyError("Title and Note are required.");
            return;
        }
        else if(title.length > 20){
            notifyError("The title can be a maximum of 20 characters");
            return;
        }
        let note = {title, content, color};
        dispatch(addNote(note));
        setTitle("");
        setContent("");
        notifySuccess("Added Note")
    }
    
    const iconShow = <FontAwesomeIcon icon={faCheck} />;
 
    return (
        <div className={styles.main}>
            <h3 className={styles.title}>Add Note</h3>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label className={styles.text}>Title</Form.Label>
                    <Form.Control type="email" placeholder="React" value={title}  onChange={(e) => setTitle(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className={styles.text}>Note</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Learn react" value={content}  onChange={(e) => setContent(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className={styles.text}>Color</Form.Label>
                    <div className={styles.color_container}>
                        <div className={styles.color1} onClick={() => setColor("#F9FAFB")}>{color === "#F9FAFB" ? iconShow : null}</div>
                        <div className={styles.color2} onClick={() => setColor("#7EFFDB")}>{color === "#7EFFDB" ? iconShow : null}</div>
                        <div className={styles.color3} onClick={() => setColor("#FF9DE2")}>{color === "#FF9DE2" ? iconShow : null}</div>
                        <div className={styles.color4} onClick={() => setColor("#FFE477")}>{color === "#FFE477" ? iconShow : null}</div>
                    </div>
                </Form.Group>
                <Form.Group className="mt-4 text-center">
                    <Button variant="secondary" onClick={handleSubmit}>Add Note</Button>
                </Form.Group>
            </Form>
            <ToastContainer/>
        </div>
    );
}

export default AddNote;