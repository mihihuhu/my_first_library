import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router'

const EditBook = () => {

    const { id } = useParams()
    const history = useHistory()
    

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [noPages, setNoPages] = useState(0)

    useEffect(() => {
        const getDataById = async () => {
            const {data} = await axios.get(`/api/books/${id}`)
            setTitle(data.title)
            setAuthor(data.author)
            setNoPages(data.noPages)
        }

        getDataById()
    },[id])

   const updateHandler = async (e) => {

        e.preventDefault()
       
        // update by put request

        const data = {
            title: title,
            author: author,
            noPages: noPages,
        }

        await axios.put(`/api/books/${id}`, data)

        history.push('/books')

   }

    return (
        <>
            <Container className='mt-5 p-2'>
                <h1>Add Book</h1>
                <hr />

                <Form onSubmit={updateHandler}>
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                          />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="author">
                        <Form.Label>Author </Form.Label>
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
                        Update Book
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default EditBook