import { Button, Container, Row, Col } from "react-bootstrap";
import getMatieres from "../../API/getMatieres";
import Matiere from "./Matiere";
import styles from "../styles/WelcomeMsg.module.css";
import { useState, useEffect } from "react";
import ShowMoy from "./ShowMoy";
// Define the interfaces for the component's props and other data types
interface Props {
  sectionAbbr: string;
  year: string;
  branche: string;
  semestre: string;
}
interface Matiere {
  nom: string;
  coeff: number;
}
interface semestres {
  [key: string]: string;
}
interface Notes {
  moyenne: number;
  coeff: number;
}
interface InfoNote {
  [key: string]: Notes;
}
// Define the Matieres component
const Matieres = ({ sectionAbbr, year, branche, semestre }: Props) => {
  // Call the function to get list of courses for the given semester and branch
  const matieres: Matiere[] = getMatieres(sectionAbbr, year, branche, semestre);
  // Define state variables
  const [show, setShow] = useState(false); // used to show/hide the modal dialog
  let semestresCorrector: semestres = {
    S1: "Semestre 1",
    S2: "Semestre 2",
    S3: "Semestre 1",
    S4: "Semestre 2",
    S5: "Semestre 1",
  };
  const [infoMatieres, setInfoMatieres] = useState<InfoNote>(
    matieres.reduce((acc, matiere) => {
      // initialize the infoMatieres state variable as an object with default values for each course
      return { ...acc, [matiere.nom]: { moyenne: 0, coeff: matiere.coeff } };
    }, {})
  );
  const [moyenne, setMoyenne] = useState<Number>(0);
  // Define a useEffect hook to update the average when infoMatieres changes
  useEffect(() => {
    setMoyenne(calculMoy());
  }, [infoMatieres]);
  // Define function to update the state variables
  function updateInfoMatieres(nom: string, moyenneMatiere: number): void {
    setInfoMatieres((prev) => {
      return { ...prev, [nom]: { ...prev[nom], moyenne: moyenneMatiere } };
    });
  }
  // Calculate the average :
  function calculMoy() {
    let moy: number = 0;
    let coeffs: number = 0;
    Object.entries(infoMatieres).forEach(([nom, details]: [string, Notes]) => {
      moy += details.moyenne * details.coeff;
      coeffs += details.coeff;
    });
    moy /= coeffs;
    return moy;
  }
  // Return the JSX for the component
  return (
    <>
      <Container fluid>
        <h3 className={"display-3 " + styles.text}>
          {year.slice(1)}
          {sectionAbbr} {branche == "troncCommun" ? "tronc commun" : branche}{" "}
          {semestresCorrector[semestre]}:
        </h3>
        <Row className="justify-content-md-center" xs={12} md={4} lg={12}>
          {matieres.map((matiere, i) => {
            return (
              <Matiere
                key={i}
                Matiere={matiere}
                setInfoMatieres={updateInfoMatieres}
              ></Matiere>
            );
          })}
        </Row>
        <Col className="d-flex justify-content-center mb-4">
          <Button variant="secondary" onClick={() => setShow(true)}>
            Calculer
          </Button>
        </Col>
      </Container>
      <ShowMoy
        moyenne={moyenne}
        isCalculClicked={show}
        handleClose={() => setShow(false)}
      />
    </>
  );
};
export default Matieres;
