import { Card, Button, Col } from "react-bootstrap";
import Link from "next/link";

interface Props {
  parcour: string; // List of paths in the section
  abbr: string; // Abbreviation for the section
  year: string; // Year of the path
}

export default ({ parcour, abbr, year}: Props) => {
  return (
    <>
        <Col xs={12} lg={4} className="mt-3">
            
        </Col>
    </>
  );
};
