import { useState } from "react";
import { Card,Form,InputGroup} from "react-bootstrap";
import styles from "../styles/Matiere.module.css";
interface typeMatiere {
    nom:string;
    coeff:number;
}
interface Props {
    Matiere : typeMatiere;
}
const matiere = ({Matiere} : Props) => {
  const [examen,setExamen] = useState(["examen","DS/TP"]);
  const [value,setValue] = useState("DS/DS");
  function changeExamen(newValue : string){
    setValue(newValue)
    if(value == "DS/DS"){
      setExamen(["DS1","DS2"])
    }else if(value == "Examen/DS"){
      setExamen(["examen", "DS/TP"]);
    }
  }
  return (
    <Card bg="dark" text="white" className="d-flex mb-2 m-lg-2 m-md-2">
      <Card.Header>{Matiere.nom}</Card.Header>
      <Card.Body>
        <Form>
          <Form.Label>Type de notes :</Form.Label>
          <Form.Select
            name="type"
            defaultValue="Examen/DS"
            onChange={(e) => changeExamen(e.target.value)}
          >
            <option value="Examen/DS">Examen / (DS/TP)</option>
            <option value="DS/DS">DS1/DS2</option>
          </Form.Select>
          {}
          {examen.map((nom,i) => {
            return (
              <>
                <Form.Label key={i}>Note {nom}:</Form.Label>
                <Form.Control
                  type="text"
                  key={i}
                  className={styles.input}
                  name={nom}
                  placeholder={nom}
                />
              </>
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
export default matiere;