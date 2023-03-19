import { Container ,Row,Col} from "react-bootstrap"
import Branche from "./Branche"
interface Props {
    abbr:string;
}
const yearone =  ({abbr} : Props)=>{
    return (
      <Container fluid>
        <Row className="justify-content-md-center mt-4">
          <Col md={7}>
            <Branche parcours={["troncCommun"]} abbr={abbr} year="Y1"/>
          </Col>
        </Row>
      </Container>
    );
}
export default yearone;