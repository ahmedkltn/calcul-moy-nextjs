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
  const brancheSelected = sections.filter(section => section.section == sectionSelected)[0].branches
  return (
    <Container fluid>
      <h1 className={"display-4 p-2 " + styles.ds}>Licence {sectionSelected} : </h1>
      <Row className="justify-content-md-center">
        {years.map((year, i) => {
          return (
            <Col xs={12} lg={3}  className="mt-3" key={i}>
              <Section year={year} section={sectionSelected} branches={brancheSelected}/>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
