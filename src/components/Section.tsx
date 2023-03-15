import { Card, Button} from "react-bootstrap";
import styles from "../styles/Section.module.css";
interface Props {
  year: string;
  section: string;
  branches: string[];
}
export default ({year,section,branches} :Props) =>{
  let branche : string ;
  if(year == "Première année"){
    branche = branches[0]
  }else{
    branche = branches.slice(1,branches.length).join(" & ")
  }
    return (
      <>
        <Card bg="dark" text="white" className="text-center " style={{height:"18rem"}}>
          <Card.Header className="display-6">{year}</Card.Header>
          <Card.Body>
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