import type { NextPage } from "next";

const BeerPage: NextPage = () => {
  return (
    <div>
      <h1>๐บHello Beersworld!๐บ</h1>
      <a href="./beers/stouts">๐best stouts</a>
      <br />
      <a href="./beers/stouts">๐คbest ale</a>
      <button>์๋ํ์ธ์</button>
    </div>
  );
};

export default BeerPage;
