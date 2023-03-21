import { Button, Container , Row , Col  } from "react-bootstrap"
import getMatieres from "../../API/getMatieres";
import Matiere from "./Matiere";
import styles from "../styles/WelcomeMsg.module.css";
import { useState } from "react";
interface Props {
    sectionAbbr : string;
    year : string;
    branche : string;
    semestre:string;
}
interface Matiere {
    nom : string;
    coeff : number;
}
interface semestres {
  [key: string]: string;
}
interface notes {
  moyenne : number;
  coeff : number;
}
const Matieres = ({ sectionAbbr, year, branche, semestre } : Props) => {
  const matieres : Matiere[] = getMatieres(sectionAbbr,year,branche,semestre);
  let semestresCorrector: semestres = {
    S1: "Semestre 1",
    S2: "Semestre 2",
    S3: "Semestre 1",
    S4: "Semestre 2",
    S5: "Semestre 1",
  };
  const [noteMatieres,setNoteMatieres] = useState<notes[]>([])
  return (
    <Container fluid>
      <h3 className={"display-3 " + styles.text}>
        {year.slice(1)}{sectionAbbr} {branche == "troncCommun" ? "tronc commun" : branche} {semestresCorrector[semestre]}:
      </h3>
      <Row className="justify-content-md-center" xs={12} md={4} lg={12}>
        {matieres.map((matiere,i) => {
          return <Matiere key={i} Matiere={matiere} noteMatieres={noteMatieres}></Matiere>;
        })}
      </Row>
      <Col className="d-flex justify-content-center mb-4">
        <Button variant="secondary">Calculer</Button>
      </Col>
    </Container>
  );
};
export default Matieres;