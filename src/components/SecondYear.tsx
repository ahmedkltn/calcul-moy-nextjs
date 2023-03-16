import { Container, Row, Col } from "react-bootstrap";
import Branche from "./Branche";
interface Props {
  abbr: string;
  parcours:string[];
}
export default ({ abbr,parcours }: Props) => {
  return (
    <Container fluid>
      <Row className="justify-content-md-center mt-4">
          <Branche parcours={parcours} abbr={abbr} year="Y2" />
      </Row>
    </Container>
  );
};
