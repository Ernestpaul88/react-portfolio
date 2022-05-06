  
import React from 'react';
// import Container from 'react-bootstrap/Container';

function Jumbo(props) {
    return (
    <section id="home-jumbotron" class="text-center jumbotron jumbotron-image">

    {/* <Container>
        <h1>Fluid jumbotron !</h1>
        <p>
           This is a modified fluid jumbotron which
           stretches the whole horizontal space.    
        </p>
      </Container> */}
        {props.children}
    </section>
    );
  }


  export default Jumbo;