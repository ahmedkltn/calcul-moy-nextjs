import { useState } from "react";
import { Card, Form, Alert } from "react-bootstrap";
import styles from "../styles/Matiere.module.css";

// Interface for a subject, containing its name and coefficient
interface typeMatiere {
  nom: string;
  coeff: number;
}

// Interface for notes, containing the average and coefficient
interface notes {
  moyenne: number;
  coeff: number;
}

// Interface for the props passed to the Matiere component
interface Props {
  Matiere: typeMatiere;
  noteMatieres: notes[];
}

// Custom hook to change the type of exam between "examen" and "DS/TP"
function useChangeExamen() {
  const [examen, setExamen] = useState(["examen", "DS/TP"]);

  // Function to handle the change of exam type
  function handleChange(newValue: string) {
    if (newValue === "DS/DS") {
      setExamen(["DS1", "DS2"]);
    } else if (newValue === "Examen/DS") {
      setExamen(["examen", "DS/TP"]);
    }
  }

  // Return the current exam type and the handleChange function to update it
  return { examen, handleChange };
}

// Main component for a single subject
const Matiere = ({ Matiere, noteMatieres }: Props) => {
  const { examen, handleChange } = useChangeExamen();

  // State for each type of note (examen, DS/TP, and other)
  const [noteEXDS, setNoteEXDS] = useState<number>(0);
  const [noteDS, setNoteDS] = useState<number>(0);
  const [noteAutre, setNoteAutre] = useState<number>(0);

  // State for displaying error messages when input values are invalid
  const [errorMessage, setErrorMessage] = useState("");

  // Calculate the subject's average based on the current exam type and note values
  const moyenneMatiere = calculMoyenne();

  // States to validate whether the input values are valid
  const [isValidNoteEXDS, setIsValidNoteEXDS] = useState(true);
  const [isValidNoteDS, setIsValidNoteDS] = useState(true);
  const [isValidNoteAutre, setIsValidNoteAutre] = useState(true);

  // Function to validate an input value, returning a boolean indicating whether it's valid or not
  function validateInputValue(value: string) {
    const parsedValue = parseFloat(value);
    if (
      /^[a-zA-Z]+$/.test(value) ||
      isNaN(parsedValue) ||
      parsedValue < 0 ||
      parsedValue > 20
    ) {
      setErrorMessage("Please enter a number between 0 and 20");
      return false;
    } else {
      setErrorMessage("");
      return true;
    }
  }

  // Function to calculate the subject's average based on the current exam type and note values
  function calculMoyenne() {
    let moy: number = 0;
    if (examen[0] === "examen") {
      moy = noteEXDS * 0.7 + noteDS * 0.3;
    } else if (examen[0] === "DS1") {
      moy = noteEXDS * 0.5 + noteDS * 0.5;
    }
    if (isNaN(moy)) moy = 0;
    return moy;
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
            onChange={(e) => handleChange(e.target.value)}
          >
            <option value="Examen/DS">Examen / (DS/TP)</option>
            <option value="DS/DS">DS1/DS2</option>
          </Form.Select>
          <div>
            <Form.Label>Note {examen[0]}:</Form.Label>
            <Form.Control
              type="number"
              className={styles.input}
              name="noteEXDS"
              placeholder={examen[0]}
              onChange={(e) => {
                setIsValidNoteEXDS(validateInputValue(e.target.value));
                isValidNoteEXDS
                  ? setNoteEXDS(parseFloat(e.target.value))
                  : setNoteEXDS(0);
              }}
              isInvalid={!isValidNoteEXDS}
            />
          </div>
          <div>
            <Form.Label>Note {examen[1]}:</Form.Label>
            <Form.Control
              type="number"
              className={styles.input}
              name="noteDS"
              placeholder={examen[1]}
              onChange={(e) => {
                setIsValidNoteDS(validateInputValue(e.target.value));
                isValidNoteDS ? setNoteDS(parseFloat(e.target.value)) : setNoteDS(0);
              }}
              isInvalid={!isValidNoteDS}
            />
          </div>
          <Form.Label>Autre note :</Form.Label>
          <Form.Control
            type="number"
            className={styles.input}
            name="aute"
            placeholder={"Autre"}
            onChange={(e) => {
              setIsValidNoteAutre(validateInputValue(e.target.value));
              isValidNoteAutre
                ? setNoteAutre(parseFloat(e.target.value))
                : setNoteAutre(0);
            }}
            isInvalid={!isValidNoteAutre}
          />
          <Form.Text muted>
            Si trois notes existent,veuillez écrire la note ici.
          </Form.Text>
          <br></br>
          <Form.Label>Coefficient Matiere :</Form.Label>
          <Form.Control
            type="number"
            className={styles.input}
            name="coeff"
            placeholder={Matiere.coeff.toFixed(2).toString()}
          />
          <Form.Text muted>Tu peux modifie le coefficient si il est incorrect</Form.Text>
        </Form>
      </Card.Body>
      <Card.Footer>
        <Form.Label>Moyenne matiere :</Form.Label>
        <Form.Control
          type="text"
          className={styles.input}
          name="moyenne"
          placeholder={moyenneMatiere.toString()}
          disabled
        />
      </Card.Footer>
    </Card>
  );
};
export default Matiere;
