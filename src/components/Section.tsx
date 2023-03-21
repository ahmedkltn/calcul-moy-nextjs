import { Card, Button } from "react-bootstrap";
import styles from "../styles/Section.module.css";
import Link from "next/link";

// Define the props interface
interface Props {
  year: string;
  section: string;
  branches: string[];
  y: string;
  abbr: string;
}

// Define the component function
const section =  ({ year, section, branches, y, abbr }: Props) => {
  let branche: string;

  // Determine the branch based on the year
  if (year == "Première année") {
    branche = branches[0].split(" ").join("-");
  } else {
    branche = branches.slice(1, branches.length).join("/");
  }

  // Return the JSX for the component
  return (
    <>
      {/* Render a Card component with Bootstrap styling */}
      <Card
        bg="dark"
        text="white"
        className="text-center shadow"
        style={{ minHeight: "17rem" }}
      >
        <Card.Header className="display-6">{year}</Card.Header>
        <Card.Body>
          {/* Display the branch and year */}
          <Card.Text>
            Calculer moyenne {year}
            <br /> <b>{branche == "Tronc-commun" ? "tronc commun" : branche}</b>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          {/* Add a Link component to navigate to the branche page */}
          <Link href={"/" + abbr + "/" + y} passHref legacyBehavior>
            <Button variant="outline-light">Choisir</Button>
          </Link>
        </Card.Footer>
      </Card>
    </>
  );
};
export default section;