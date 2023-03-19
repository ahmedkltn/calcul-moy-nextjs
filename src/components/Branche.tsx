import { Card, Button, Col } from "react-bootstrap";
import styles from "../styles/Section.module.css";
import Link from "next/link";

interface Props {
  parcours: string[]; // List of paths in the section
  abbr: string; // Abbreviation for the section
  year: string; // Year of the path
}

const Branche =  ({ parcours, abbr, year }: Props) => {
  return (
    <>
      {/* Loop through each path in the section */}
      {parcours.map((parcour,i) => {
        return (
          <Col xs={12} lg={year == "Y1" ? 12 : 4} className="mt-3" key={i}>
            {/* Display a card for each path */}
            <Card
              bg="dark"
              text="white"
              className="text-center "
              style={{ minHeight: "17rem" }}
            >
              <Card.Header className="display-6">
                {parcour == "troncCommun" ? "tronc commun" : parcour}
              </Card.Header>
              <Card.Body>
                {/* Display the path name */}
                <Card.Text>
                  Calculer moyenne {year.slice(1)}{abbr}
                  <br /> <b>{parcour == "troncCommun" ? "tronc commun" : parcour}</b>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                {/* Add a Link component to navigate to the path page */}
                <Link
                  href={"/" + abbr + "/" + year + "/" + parcour.split(" ").join("-")}
                  passHref
                  legacyBehavior
                >
                  <Button variant="outline-light">Choisir</Button>
                </Link>
              </Card.Footer>
            </Card>
          </Col>
        );
      })}
    </>
  );
};
export default Branche;