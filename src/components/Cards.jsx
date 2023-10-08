
import { useContext } from 'react';
import SingleCard from '../components/Card';
import { Col, Row } from 'react-bootstrap'
import { ProductContext } from '../context/ProductProvider';

const Cards = () => {
  const [product] = useContext(ProductContext);
  return (
      
      <Col>

       <Row className='g-5 my-5'>
       
       {product.map(item=>(
          <SingleCard 
          key={item.id}
          photo={item.images[0]}
          title={item.title}
          price={item.price}
          id={item.id}
          />
        ))}
        
       </Row>
      </Col>
  )
}

export default Cards