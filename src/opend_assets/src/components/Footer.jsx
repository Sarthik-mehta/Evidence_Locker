import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div id="footer" style={{ backgroundColor: "#d6efff",border:"none"}}>
      <hr style={{border:"2px solid #646161"}}></hr>
      <footer style={{ backgroundColor: "#d6efff " }}>
        <Container fluid="md">
          <nav class="nav">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            <a class="nav-link" href="#">Services</a>
            <a class="nav-link" href="#">System</a>
            <a class="nav-link" href="#">Benefits</a>
            <a class="nav-link" href="#">Steps</a>
            <a class="nav-link disabled"></a>
                                                              
            <a class="nav-link disabled">© All rights reserved 2022</a>

          </nav>
        </Container>
      </footer>
    </div>
  );
}
export default Footer;
