import React, { useEffect, useState } from 'react'
import {Card, Button, Container, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useParams, useHistory} from 'react-router'
import axios from 'axios'

const BookDetail = () => {

  const { id } = useParams()
  const history = useHistory()
  
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [noPages, setNoPages] = useState(0)



  useEffect(() => {
    const getSingleBookData = async () => {
      const { data } = await axios.get(`/api/books/${id}`)
      console.log(data)

      setTitle(data.title)
      setAuthor(data.author)
      setNoPages(data.noPages)
    }

    getSingleBookData()

  }, [id])

   // handling Delete
   const handleDelete = async (id) => {
    await axios.delete(`/api/books/${id}`)
    history.push('/books')
}



return (
  <>

  <Container className="mt-10 p-4">
  <h1>Detail Book</h1>
  <hr />

  <Row>
      <Col md={8} lg={8} sm={8}>
          <Card className='shadow-lg m-3 p-2 rounded'>
                  <Card.Body>
                      <Card.Title>Title: {title}</Card.Title>
                      <Card.Text>
                          Author: {author}
                      </Card.Text>
                      <Card.Text>
                          noPages: {noPages}
                      </Card.Text>
                  <br />

              
                      <Link to={`/book/edit/${id}`}>
                          <Button>Edit</Button>
                      </Link>
                      
                      <Button onClick={() => handleDelete(id)}>Delete</Button> 
                  
              </Card.Body>        
          </Card>
      </Col>


  </Row>



          
  </Container>

 

  </>
)
}

export default BookDetail