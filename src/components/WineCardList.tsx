import { Error, Loading, WineCard } from ".";
import { useWineData } from "../hooks/useWineData";
import { Wine } from "../types/Wine";

interface WineCardListProps {
  name: string;
}

export const WineCardList = ({ name }: WineCardListProps) => {
  const { data, error } = useWineData(name);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div>
      <h1>Wine</h1>
      <main>
        {data.map((wineData: Wine) => {
          return (
            <WineCard
              key={`${name}-wine-list-${wineData.id}`}
              wineData={wineData}
            />
          );
        })}
      </main>
    </div>
  );
};
