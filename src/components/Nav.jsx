import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { LinkContainer} from 'react-router-bootstrap';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className="Nav bg-body-tertiary container mt-4">
      <Container style={{'height':'60px'}}>
        <Navbar.Brand href="#home" className='navname'><Image src="src/images/logo.png" rounded /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ms-auto">
            <LinkContainer to="/"><Nav.Link >Home</Nav.Link></LinkContainer>
            <LinkContainer to="/shop"><Nav.Link >Shop</Nav.Link></LinkContainer>
            <LinkContainer to="/pages"><Nav.Link >Pages</Nav.Link></LinkContainer>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
<div>
  {/* Button trigger modal */}
  <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
  </button>
  {/* Modal */}
  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
        <form className="input-group mb-3">
                      {/* <input onChange={e => setQuery(e.target.value)} type="text" className="form-control" placeholder="Enter product name" aria-label="Enter product name" aria-describedby="button-addon2" /> */}
                      <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Search</button>
                    </form>
                    
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</div>


            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
