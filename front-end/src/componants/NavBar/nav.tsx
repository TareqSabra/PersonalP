import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../NavBar/NavStyle.scss";
import logo from "../../Resoruces/Pics/logo/logo.png";
import Container from "react-bootstrap/Container";
interface Props {
  user?: {
    Name: string;
    ID: number;
    Pass: string;
  };
}
export const NavBar: React.FC<Props> = ({ user }) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img alt="logo" src={logo} className="logoIcon" />
          </Navbar.Brand>
          <Navbar.Brand href="#home" className="logoTitel">
            Mena
          </Navbar.Brand>
          <Nav className="me-auto m-5">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Gallery</Nav.Link>
            <Nav.Link href="#pricing">Fan Club</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
