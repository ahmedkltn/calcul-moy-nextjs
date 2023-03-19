import { Col, Container, Row } from "react-bootstrap"
import WelcomeMsg from "@/components/WelcomeMsg";
import { Button } from "react-bootstrap";

const welcome = ()=>{
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
export default welcome;