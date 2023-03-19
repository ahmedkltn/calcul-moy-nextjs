import { Container, Row } from "react-bootstrap";
import Branche from "./Branche";
import Semestre from "./Semestre";
import styles from "../styles/WelcomeMsg.module.css";
interface Props {
  parcour: string;
  abbr: string;
  year: string;
}
const semestres =  ({ parcour, year, abbr }: Props) => {
  return (
    <Container fluid>
      <h1 className={"display-3 " + styles.text}>
        {year.slice(1)}{abbr} {parcour == "troncCommun" ? "tronc commun" : parcour} :
      </h1>
      <Row className="justify-content-md-center mt-4">
        <Semestre abbr={abbr} year={year} parcour={parcour} />
      </Row>
    </Container>
  );
};
export default semestres;