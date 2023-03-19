import { Container ,Row,Col} from "react-bootstrap"
import Branche from "./Branche"
import styles from "../styles/WelcomeMsg.module.css";

interface Props {
    abbr:string;
}
const yearone =  ({abbr} : Props)=>{
    return (
      <Container fluid>
        <h1 className={"display-3 " + styles.text}>
          1
          {abbr} :
        </h1>
        <Row className="justify-content-md-center mt-4">
          <Col md={7}>
            <Branche parcours={["troncCommun"]} abbr={abbr} year="Y1" />
          </Col>
        </Row>
      </Container>
    );
}
export default yearone;