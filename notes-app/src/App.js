import './app.css';
import Footer from './components/Footer';
import Header from './components/Header';
import NotesList from './components/NotesList';
import AddNote from './components/AddNote';
import {Container, Row, Col} from 'react-bootstrap';

function App() {
    return (
        <Container fluid className='g-0 main'>
            <Row className='g-0 main_row'>
                <Col lg={12}>
                    <Header />
                    <Container className='g-0'>
                        <Row className='g-0'>
                            <Col lg={4}>
                                <AddNote />
                            </Col>
                            <Col lg={8}>
                                <NotesList />
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col lg={12} className='align-self-end'>
                    <Footer />
                </Col>
            </Row>
        </Container>
    );
}

export default App;
