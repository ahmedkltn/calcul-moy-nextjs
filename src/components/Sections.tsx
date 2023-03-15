import Section from "@/components/Section";
import { Row, Container, Col } from "react-bootstrap";
import styles from "../styles/Section.module.css";
import { sections } from "../../data/sections";
interface Props {
  sectionSelected: string;
}
export default ({sectionSelected} : Props) => {
  // creating years since its the same for 3 sections
  const years: string[] = ["Première année", "Deuxieme année", "Troisième année"];
  // filter sections and get the desired section 
  // getting the first element from the array which is the wanted section and get branches
  const sectionFiltered = sections.filter(section => section.section == sectionSelected)[0].branches
  console.log(sectionFiltered)
  return (
    <Container fluid>
      <h1 className={"display-4 p-2 " + styles.ds}>Bussiness Computing :</h1>
      <Row className="justify-content-md-center">
        {sectionFiltered.map((branche, i) => {
          return (
            <Col xs lg="3" sm="12" className="m-2" key={i}>
              <Section year={years[i]} branche={branche} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
