import type { NextPage } from "next";

const BeerPage: NextPage = () => {
  return (
    <div>
      <h1>🍺Hello Beersworld!🍺</h1>
      <a href="./beers/stouts">👍best stouts</a>
      <br />
      <a href="./beers/stouts">🤞best ale</a>
    </div>
  );
};

export default BeerPage;
