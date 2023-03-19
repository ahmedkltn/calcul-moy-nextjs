import { Card  ,Form} from "react-bootstrap";
import styles from "../styles/Matiere.module.css";
interface typeMatiere {
    nom:string;
    coeff:number;
}
interface Props {
    Matiere : typeMatiere;
}
export default ({Matiere} : Props) => {
  return (
    <Card bg="dark" text="white" className="d-flex mb-2 m-lg-2">
      <Card.Header>{Matiere.nom}</Card.Header>
      <Card.Body>calcule</Card.Body>
      <Card.Footer>
        <Form.Label>Coefficient Matiere :</Form.Label>
        <Form.Control
          type="text"
          className={styles.input}
          placeholder={Matiere.coeff.toString()}
        />
      </Card.Footer>
    </Card>
  );
};