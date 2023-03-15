import { Card, Button} from "react-bootstrap";
import styles from "../styles/Section.module.css";
interface Props {
  year: string;
  branche: string;
}
export default ({year,branche} :Props) =>{
    return (
      <>
        <Card bg="dark" text="white" className="text-center ">
          <Card.Header className="display-6">{year}</Card.Header>
          <Card.Body >
            <Card.Text className="p-4">
              Calculer moyenne {year} <br /> {branche}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="outline-light"> Calculer</Button>
          </Card.Footer>
        </Card>
      </>
    );
}