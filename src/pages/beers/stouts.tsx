import type { NextPage } from "next";
import { BeerContainer } from "../../components/BeerContainer";

const StoutsPage: NextPage = () => {
  const name = "stouts";

  return (
    <div>
      <BeerContainer name={name} />
    </div>
  );
};

export default StoutsPage;
