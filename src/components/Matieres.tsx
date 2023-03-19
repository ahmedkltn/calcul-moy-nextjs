import { Button, Container , Row , Col  } from "react-bootstrap"
import getMatieres from "../../API/getMatieres";
import Matiere from "./Matiere";
import styles from "../styles/WelcomeMsg.module.css";
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
const Matieres = ({ sectionAbbr, year, branche, semestre } : Props) => {
  const matieres : Matiere[] = getMatieres(sectionAbbr,year,branche,semestre);
  return (
    <Container fluid>
      <h3 className={"display-3 " + styles.text}>
        {sectionAbbr} {branche == "troncCommun" ? "tronc commun" : branche} {semestre}:
      </h3>
      <Row className="justify-content-md-center" xs={12} md={4} lg={12}>
        {matieres.map((matiere,i) => {
          return <Matiere key={i} Matiere={matiere}></Matiere>;
        })}
      </Row>
      <Col className="d-flex justify-content-center mb-4">
        <Button variant="secondary">Calculer</Button>
      </Col>
    </Container>
  );
};
export default Matieres;