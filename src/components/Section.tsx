import { Card, Button} from "react-bootstrap";
import styles from "../styles/Section.module.css";
interface Props {
  year: string;
  section: string;
}
export default ({year,section} :Props) =>{
    return (
      <>
        <Card bg="dark" text="white" className="text-center ">
          <Card.Header className="display-6">{year}</Card.Header>
          <Card.Body >
            <Card.Text className="p-4">
              Calculer moyenne {year} <br /> {section}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="outline-light"> Calculer</Button>
          </Card.Footer>
        </Card>
      </>
    );
}