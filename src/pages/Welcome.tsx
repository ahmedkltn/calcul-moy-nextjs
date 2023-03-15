import { Col, Container, Row } from "react-bootstrap"
import WelcomeMsg from "@/components/WelcomeMsg";
export default ()=>{
    return (
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <div >
            <WelcomeMsg />
            </div>
          </Col>
        </Row>
      </Container>
    );
}