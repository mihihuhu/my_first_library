import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BookCard = ({ book }) => {
    return (
        <>

            <Card className='card bg-dark text-white' style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Title: {book.title}</Card.Title>
                    <Card.Text>
                        Author: {book.author}
                    </Card.Text>
                    <Card.Text>
                        noPages: {book.noPages}
                    </Card.Text>
                 
                    <Link to={`book/${book.id}`}>
                        <Button>Detail</Button>
                    </Link>
                </Card.Body>

                
               
            </Card>
       
           
        </>
    )
}

export default BookCard