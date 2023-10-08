import React from 'react'
import { Button, Card, Col, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const ProdctCard = ({photo,title,price,id}) => {
    return (

        <Col sm={12} md={4}>
         <Container className='ms-4'>
         <Card className='card-main'>
                <Card.Img height={300} width={350} variant="top" src={photo} />
                <Card.Body>
                    <Card.Title >{title}</Card.Title>
                    <Card.Text >
                        {price} $
                    </Card.Text>
                    <LinkContainer to={`/products/${id}`}><Button variant="primary">Read more</Button></LinkContainer>
                </Card.Body>
            </Card>
         </Container>
        </Col>
    )
}

export default ProdctCard