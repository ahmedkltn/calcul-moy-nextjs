import { Container, Row } from "react-bootstrap";
import Branche from "./Branche";
import Semestre from "./Semestre";
interface Props {
  parcour: string;
  abbr: string;
  year: string;
}
export default ({ parcour, year, abbr }: Props) => {
  return (
    <Container fluid>
      <Row className="justify-content-md-center mt-4">
        <Semestre abbr={abbr} year={year} parcour={parcour} />
      </Row>
    </Container>
  );
};
