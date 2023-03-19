import { Container, Row, Col } from "react-bootstrap";
import Branche from "./Branche";
interface Props {
  abbr: string;
  parcours:string[];
  year:string;
}
export default ({ abbr,parcours, year }: Props) => {
  // Render a container that centers a row with the "Branche" component
  // Pass in the "parcours" and "abbr" props and set the "year" prop to "Y2"
  return (
    <Container fluid>
      <Row className="justify-content-md-center mt-4">
        <Branche parcours={parcours} abbr={abbr} year={year} semestre="" />
      </Row>
    </Container>
  );
};
