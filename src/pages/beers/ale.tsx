import type { NextPage } from "next";
import { BeerCardList } from "../../components/BeerCardList";

const AlePage: NextPage = () => {
  const name = "ale";

  return (
    <div>
      <BeerCardList name={name} />
    </div>
  );
};

export default AlePage;
