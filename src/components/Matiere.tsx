import { useState } from "react";
import { Card, Form, InputGroup } from "react-bootstrap";
import styles from "../styles/Matiere.module.css";
interface typeMatiere {
  nom: string;
  coeff: number;
}
interface Props {
  Matiere: typeMatiere;
}
function useChangeExamen() {
  const [examen, setExamen] = useState(["examen", "DS/TP"]);

  function handleChange(newValue: string) {
    if (newValue === "DS/DS") {
      setExamen(["DS1", "DS2"]);
    } else if (newValue === "Examen/DS") {
      setExamen(["examen", "DS/TP"]);
    }
  }

  return { examen, handleChange };
}
const Matiere = ({ Matiere }: Props) => {
  const { examen, handleChange } = useChangeExamen();
  return (
    <Card bg="dark" text="white" className="d-flex mb-2 m-lg-2 m-md-2">
      <Card.Header>{Matiere.nom}</Card.Header>
      <Card.Body>
        <Form>
          <Form.Label>Type de notes :</Form.Label>
          <Form.Select
            name="type"
            defaultValue="Examen/DS"
            onChange={(e) => handleChange(e.target.value)}
          >
            <option value="Examen/DS">Examen / (DS/TP)</option>
            <option value="DS/DS">DS1/DS2</option>
          </Form.Select>
          {}
          {examen.map((nom, i) => {
            return (
              <div key={i}>
                <Form.Label>Note {nom}:</Form.Label>
                <Form.Control
                  type="text"
                  className={styles.input}
                  name={nom}
                  placeholder={nom}
                />
              </div>
            );
          })}
          <Form.Label>Autre note :</Form.Label>
          <Form.Control
            type="text"
            className={styles.input}
            name="aute"
            placeholder={"0"}
          />
          <Form.Text muted>Si il existe 3 notes ecrire la 3eme note ici </Form.Text>
        </Form>
      </Card.Body>
      <Card.Footer>
        <Form.Label>Coefficient Matiere :</Form.Label>
        <Form.Control
          type="text"
          className={styles.input}
          name="coeff"
          placeholder={Matiere.coeff.toString()}
        />
        <Form.Text muted>Tu peux modifie le coefficient si il est incorrect</Form.Text>
      </Card.Footer>
    </Card>
  );
};
export default Matiere;
