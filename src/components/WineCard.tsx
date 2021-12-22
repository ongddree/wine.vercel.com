import { Wine } from "../types/Wine";

interface WineProps {
  wineData: Wine;
}

export const WineCard = ({ wineData }: WineProps) => {
  const { wine, winery, location, image, rating } = wineData;

  return (
    <div>
      <h1>{wine}</h1>
      <p>{winery}</p>
      <p>{location}</p>
      <img src={image}></img>
      <p>{rating.average}</p>
    </div>
  );
};
