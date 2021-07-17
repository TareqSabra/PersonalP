import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import logo from "../../Resoruces/Pics/logo/logo.png";
import Container from "react-bootstrap/Container";
import "../NavBar/NavStyle.css";
import React, { useState, useEffect } from "react";
interface Props {
  user?: {
    Name: string;
    ID: number;
    Pass: string;
  };
}
export const NavBar: React.FC<Props> = ({ user }) => {
  const [hidden, setlhidden] = useState(true);
  const [Notice, setlNotice] = useState("you must be logged in");
  const [dispabled, setldispabled] = useState(true);
  useEffect(() => {
    if (user === undefined) {
      setlhidden(true);
      setldispabled(true);
      setlNotice("you must be logged in");
    } else {
      setlhidden(false);
      setldispabled(false);
      setlNotice(`View your Fan Club ${user.Name}`);
    }
  }, [user]);
  const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      {Notice}
    </Tooltip>
  );
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img alt="logo" src={logo} className="logoIcon" />
        </Navbar.Brand>
        <Navbar.Brand href="#home" className="logoTitel">
          Mena
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto m-5">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Gallery</Nav.Link>
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <Container>
                <Nav.Link disabled={dispabled} href="#pricing">
                  Fan Club
                </Nav.Link>
              </Container>
            </OverlayTrigger>
          </Nav>
          <Nav>
            <Nav.Link hidden={hidden}>
              <Navbar.Text className="text-light">{`Welcome : ${user?.Name}!`}</Navbar.Text>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
