import { Card, Button, Col } from "react-bootstrap";
import styles from "../styles/Section.module.css";
import Link from "next/link";

interface Props {
  parcours: string[]; // List of paths in the section
  abbr: string; // Abbreviation for the section
  year: string; // Year of the path
}

export default ({ parcours, abbr, year }: Props) => {
  return (
    <>
      {/* Loop through each path in the section */}
      {parcours.map((parcour) => {
        return (
          <Col xs={12} lg={year == "Y1" ? 12 : 4} className="mt-3">
            {/* Display a card for each path */}
            <Card
              bg="dark"
              text="white"
              className="text-center "
              style={{ minHeight: "17rem" }}
            >
              <Card.Header className="display-6">{parcour}</Card.Header>
              <Card.Body>
                {/* Display the path name */}
                <Card.Text className="p-4">Calculer moyenne {parcour}</Card.Text>
              </Card.Body>
              <Card.Footer>
                {/* Add a Link component to navigate to the path page */}
                <Link
                  href={"/" + abbr + "/" + year + "/" + parcour.split(" ").join("-")}
                  passHref
                  legacyBehavior
                >
                  <Button variant="outline-light">Calculer</Button>
                </Link>
              </Card.Footer>
            </Card>
          </Col>
        );
      })}
    </>
  );
};
