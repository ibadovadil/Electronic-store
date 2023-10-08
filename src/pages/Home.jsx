import React, { useContext } from 'react'
import Header from '../components/Header'
import { ProductContext } from '../context/ProductProvider';
import SingleCard from '../components/Card';

import { Row } from 'react-bootstrap';

const Home = () => {
  const [product] = useContext(ProductContext);
    
  return (
      <div>
                <Header/>
                
       <Row className='g-5 my-5'>
       
       {product.slice(0,9).map(item=>(
          <SingleCard 
          key={item.id}
          photo={item.images[0]}
          title={item.title}
          price={item.price}
          id={item.id}
          />
        ))}
        
       </Row>
            </div>
    )
}

export default Home