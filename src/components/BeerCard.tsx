import { Beer } from "../types/Beer";

interface BeerProps {
  beerData: Beer;
}

export const BeerCard = ({ beerData }: BeerProps) => {
  const { price, name, rating } = beerData;

  return (
    <div>
      <h1>{name}</h1>
      <p>{price}</p>
      <p>{rating.average}</p>
    </div>
  );
};
