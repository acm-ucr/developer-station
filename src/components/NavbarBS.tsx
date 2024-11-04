"use client";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "/public/landing/acmdslogo.png";

const NavbarBS = () => {
  return (
    <Navbar className="h-1/8 flex flex-row justify-end bg-gradient-to-t from-blue-400 to-blue-400 p-4">
      <Container>
        <Navbar.Brand href="/"></Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <div className="flex flex-row">
              <div>
                <Nav.Link
                  className="mr-64 h-full w-full rounded-full bg-gray-300"
                  href="/"
                >
                  LOGO
                </Nav.Link>
              </div>
              <div>
                <Nav.Link
                  className="font-sans-serif mr-64 w-full text-[vw] text-white"
                  href="/projects"
                >
                  PROJECTS{" "}
                </Nav.Link>
              </div>
              <div className="space-x-12 pr-8">
                <Nav.Link
                  className="font-sans-serif w-full text-[vw] text-white"
                  href="/projects/git"
                >
                  GIT / GITHUB{" "}
                </Nav.Link>
                <Nav.Link
                  className="font-sans-serif w-full text-[vw] text-white"
                  href="/projects/nextjs"
                >
                  {" "}
                  NEXT.JS{" "}
                </Nav.Link>
                <Nav.Link
                  className="font-sans-serif w-full text-[vw] text-white"
                  href="/projects/tailwind"
                >
                  {" "}
                  TAILWIND CSS
                </Nav.Link>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarBS;
