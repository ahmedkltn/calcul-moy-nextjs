import { Card, Button } from "react-bootstrap";
import styles from "../styles/Section.module.css";
import Link from "next/link";
interface Props {
  parcours: string;
  abbr :string;
  year:string;
}
export default ({parcours ,abbr ,year }: Props) => {
    return(
  <Card bg="dark" text="white" className="text-center " style={{ minHeight: "17rem" }}>
    <Card.Header className="display-6">{parcours}</Card.Header>
    <Card.Body>
      {/* Display the branch and year */}
      <Card.Text className="p-4">
        Calculer moyenne {parcours}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      {/* Add a Link component to navigate to the branche page */}
      <Link href={"/" + abbr + "/" + year +"/" + parcours.split(" ").join("-")} passHref legacyBehavior>
        <Button variant="outline-light"> Calculer</Button>
      </Link>
    </Card.Footer>
  </Card>
    )
};
