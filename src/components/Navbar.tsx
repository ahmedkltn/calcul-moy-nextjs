import { Container, Navbar, Nav } from "react-bootstrap";
import { sections } from "../../data/sections";
import Link from "next/link";
import Image from "next/image";

export default () => {
  return (
    // Create a Navbar component with a dark background color and expand it to medium size
    <Navbar bg="dark" variant="dark" expand="md">
      <Container fluid>
        {/* Create a Navbar.Toggle component for collapsing the Navbar on small screens */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Create a Navbar.Collapse component to hold the navigation links */}
        <Navbar.Collapse id="navbar-nav">
          {/* Create a Nav component to hold the navigation links */}
          <Nav className="me-auto">
            {/* Map over the sections array and create a link for each section */}
            {sections.map((section) => {
              return (
                /* Create a Next.js Link component for each section link */
                <Link key={section.id} href={"/" + section.abbr} passHref legacyBehavior>
                  {/* Create a Nav.Link component to display the section name as a clickable link */}
                  <Nav.Link>{section.section}</Nav.Link>
                </Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
