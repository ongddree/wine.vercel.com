import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import Link from "next/link";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  min-height: 100vh;
  background: #191919;

  li a {
    display: block;
    margin: 10px 20px;
    padding: 10px 20px;
    border-radius: 20px;
    color: #ecdbba;
    font-size: 40px;
    font-weight: 500;
    background: #c84b31;
  }

  a:hover {
    transition: all 0.5s ease;
    background: #781d42;
  }
`;

const Container = styled.ul`
  background-color: #2d4263;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px 20px;
  align-items: center;
  list-style: none;
  border-radius: 20px;
`;

const Home: NextPage = () => {
  return (
    <Wrap>
      <Container>
        <li>
          <Link href="/wines/dessert">
            <a href="">🍷 dessert</a>
          </Link>
        </li>
        <li>
          <Link href="/wines/port">
            <a href="">🍷 port</a>
          </Link>
        </li>
        <li>
          <Link href="/wines/reds">
            <a href="">🍷 reds</a>
          </Link>
        </li>
        <li>
          <Link href="/wines/rose">
            <a href="">🍷 rose</a>
          </Link>
        </li>
        <li>
          <Link href="/wines/sparkling">
            <a href="">🍷 sparkling</a>
          </Link>
        </li>
        <li>
          <Link href="/wines/whites">
            <a href="">🍷 whites</a>
          </Link>
        </li>
      </Container>
      <Container>
        <li>
          <Link href="/beers/ale">
            <a href="">🍺 ale</a>
          </Link>
        </li>
        <li>
          <Link href="/beers/stouts">
            <a href="">🍺 stouts</a>
          </Link>
        </li>
      </Container>
    </Wrap>
  );
};

export default Home;
