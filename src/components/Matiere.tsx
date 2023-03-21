import { useEffect, useState } from "react";
import { Card, Form, InputGroup } from "react-bootstrap";
import styles from "../styles/Matiere.module.css";

// Interface for a subject, containing its name and coefficient
interface typeMatiere {
  nom: string;
  coeff: number;
}

// Interface for notes, containing the average and coefficient
interface Notes {
  moyenne: number;
  coeff: number;
}
// Interface for the props passed to the Matiere component
interface Props {
  Matiere: typeMatiere;
  setInfoMatieres: (name: string, moyenne: number) => void;
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
const Matiere = ({ Matiere, setInfoMatieres }: Props) => {
  const { examen, handleChange } = useChangeExamen();
  // State for each type of note (examen, DS/TP, and other)
  const [noteEXDS, setNoteEXDS] = useState<number>(0);
  const [noteDS, setNoteDS] = useState<number>(0);
  const [noteAutre, setNoteAutre] = useState<number>(0);
  const [isNoteAutre, setIsNoteAutre] = useState<boolean>(false);
  // Calculate the subject's average based on the current exam type and note values
  const moyenneMatiere = calculMoyenne();
  // update the moy everytime moyenne change
  useEffect(() => {
    setInfoMatieres(Matiere.nom, moyenneMatiere);
  }, [moyenneMatiere]);
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
      return false;
    } else {
      return true;
    }
  }
  // Function to calculate the subject's average based on the current exam type and note values
  function calculMoyenne() {
    let moy: number = 0;
    if (examen[0] === "examen") {
      if (isNoteAutre) {
        moy = noteEXDS * 0.7 + noteDS * 0.2 + noteAutre * 0.1;
      } else {
        moy = noteEXDS * 0.7 + noteDS * 0.3;
      }
    } else if (examen[0] === "DS1") {
      if (isNoteAutre) {
        moy = noteEXDS * 0.4 + noteDS * 0.4 + noteAutre * 0.2;
      } else {
        moy = noteEXDS * 0.5 + noteDS * 0.5;
      }
    }
    if (isNaN(moy)) moy = 0;
    return Number(moy.toFixed(3));
  }
  return (
    <Card
      bg="dark"
      text="white"
      className="shadow d-flex mt-2 m-lg-2 m-md-2 mb-3"
    >
      <Card.Header className={styles.text + "border-secondary"}>
        <b>{Matiere.nom[0].toUpperCase() + Matiere.nom.slice(1)}</b>
      </Card.Header>
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
                validateInputValue(e.target.value)
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
                validateInputValue(e.target.value)
                  ? setNoteDS(parseFloat(e.target.value))
                  : setNoteDS(0);
              }}
              isInvalid={!isValidNoteDS}
            />
          </div>
          <Form.Label>Autre note :</Form.Label>
          <InputGroup className={"mb-3 " + styles.input}>
            <InputGroup.Checkbox onClick={() => setIsNoteAutre((prev) => !prev)} />
            <Form.Control
              type="number"
              name="autre"
              placeholder={"Autre"}
              onChange={(e) => {
                setIsValidNoteAutre(validateInputValue(e.target.value));
                validateInputValue(e.target.value)
                  ? setNoteAutre(parseFloat(e.target.value))
                  : setNoteAutre(0);
              }}
              isInvalid={!isValidNoteAutre && isNoteAutre}
              disabled={!isNoteAutre}
            />
          </InputGroup>
          <Form.Text muted>
            Si trois notes existent,veuillez écrire la note ici.
          </Form.Text>
          <br></br>
          <Form.Label>Coefficient Matiere : {Matiere.coeff} </Form.Label>
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
