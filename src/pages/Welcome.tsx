import { Col, Container, Row } from "react-bootstrap"
import WelcomeMsg from "@/components/WelcomeMsg";
import { Button } from "react-bootstrap";

export default ()=>{
    return (
      <Container>
        <Row className="justify-content-center">
          <Col md={7}>
            <div>
              <WelcomeMsg />
            </div>
          </Col>
          </Row>
      </Container>
    );
}