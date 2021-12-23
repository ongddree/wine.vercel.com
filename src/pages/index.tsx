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

  li {
    display: block;
    margin: 10px 20px;
    padding: 10px 20px;
    border-radius: 20px;
    color: #ecdbba;
    font-size: 40px;
    font-weight: 500;
    background: #c84b31;
  }

  li:hover {
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
          <Link href="/wines/dessert">🍷 dessert</Link>
        </li>
        <li>
          <Link href="/wines/port">🍷 port</Link>
        </li>
        <li>
          <Link href="/wines/reds">🍷 reds</Link>
        </li>
        <li>
          <Link href="/wines/rose">🍷 rose</Link>
        </li>
        <li>
          <Link href="/wines/sparkling">🍷 sparkling</Link>
        </li>
        <li>
          <Link href="/wines/whites">🍷 whites</Link>
        </li>
      </Container>
      <Container>
        <li>
          <Link href="/beers/ale">🍺 ale</Link>
        </li>
        <li>
          <Link href="/beers/stouts">🍺 stouts</Link>
        </li>
      </Container>
    </Wrap>
  );
};

export default Home;
