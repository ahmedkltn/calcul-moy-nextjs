import Section from "@/components/Section";
import { Row, Container, Col } from "react-bootstrap";
import styles from "../styles/Section.module.css";
export default () => {
  const years: string[] = ["Première année", "Deuxieme année", "Troisième année"];
  return (
    <Container fluid>
      <h1 className={"display-4 p-2 " + styles.ds}>Bussiness Computing :</h1>
      <Row className="justify-content-md-center">
        {years.map(year =>{
          return (
            <Col xs lg="3" sm="12" className="m-2">
              <Section year={year} section="Bussiness Intellgience" />
            </Col>
          );
        })}
     
      </Row>
    </Container>
  );
};
