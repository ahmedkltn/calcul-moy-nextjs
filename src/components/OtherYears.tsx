import { Container, Row, Col } from "react-bootstrap";
import Branche from "./Branche";
import styles from "../styles/WelcomeMsg.module.css";
interface Props {
  abbr: string;
  parcours:string[];
  year:string;
}
const otherYears =  ({ abbr,parcours, year }: Props) => {
  // Render a container that centers a row with the "Branche" component
  // Pass in the "parcours" and "abbr" props and set the "year" prop to "Y2"
  return (
    <Container fluid>
      <h1 className={"display-3 " + styles.text}> {year.slice(1)}{abbr} :</h1>
      <Row className="justify-content-md-center mt-4">
        <Branche parcours={parcours} abbr={abbr} year={year} />
      </Row>
    </Container>
  );
};
export default otherYears;