import type { NextPage } from "next";
import { BeerCardList } from "../../components/BeerCardList";

const StoutsPage: NextPage = () => {
  const name = "stouts";

  return (
    <div>
      <BeerCardList name={name} />
    </div>
  );
};

export default StoutsPage;
