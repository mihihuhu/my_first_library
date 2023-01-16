import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap'
import BookCard from '../components/BookCard';

const ShowBooks = () => {


    const [books, setBooks] = useState([])

    useEffect(() => {
        const getBooksData = async () => {
            const { data } = await axios.get('/api/books/allBooks')
            console.log(data)
            setBooks(data)
        }
        getBooksData()
    }, [])

    return (
        <>
           <Container  className="justify-content-center p-2">
               <h1 className='text-center'>My library</h1>
               <hr />

               <Row>
                    {
                        books.map(book => {
                            return <Col md={6} lg={4} sm={12} key={book.id}>
                                <BookCard book = {book} />
                            </Col>
                        })
                    }
               </Row>


           </Container>

           
        </>
    )
}

export default ShowBooks