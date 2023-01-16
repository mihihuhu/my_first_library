import axios from 'axios'
import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'



const AddBook = ({ history }) => {


    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [noPages, setNoPages] = useState(0)


    const addBookHandler = async (e) => {

        e.preventDefault()

        const data = {

        title: title,
        author: author,
        noPages: noPages
        }

        await axios.post('/api/books/addBook', data)
        
        history.push('/books')
    
    }



    return (
        <>
            <Container className='mt-5 p-2'>
                <h1>Add Book</h1>
                <hr />

                <Form onSubmit={addBookHandler}>

                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                          />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="author">
                        <Form.Label>Author</Form.Label>
                        <Form.Control
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            type="text"
                             />
                    </Form.Group>

                  
                    <Form.Group className="mb-3" controlId="noPages">
                        <Form.Label>noPages</Form.Label>
                        <Form.Control
                            value={noPages}
                            onChange={(e) => setNoPages(e.target.value)}
                            type="number"
                            />
                    </Form.Group>


                    <Button variant="primary" type="submit">
                        Add Book
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default AddBook