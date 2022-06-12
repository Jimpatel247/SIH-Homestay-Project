import React from "react";
import styles from "../styles/Home.module.css";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { Container } from "react-bootstrap";
import { useFirebase } from "../context/firebaseContext";

const NavBar = () => {
  const { signIn, checkUserCookies, getUserCookies } = useFirebase();
  let btn = null;
  let link = null;
  if (!checkUserCookies()) {
    btn = <button onClick={signIn}>Log In</button>;
  } else {
    const cookie = getUserCookies();
    btn = (
      <Link href={`/users/${cookie.details.token.slice(5, 25)}`}>
        {cookie.details.name}
      </Link>
    );
  }
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" className={styles.navbar}>
      <Container fluid className="mx-1">
        <Navbar.Brand href="/">Hamara Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <nav className={styles.nav}>
            <Link href="/">Home</Link>
            {link}
            <Link href="/about">About</Link>
          </nav>
          {btn}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
