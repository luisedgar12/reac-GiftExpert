import GiftItem from "./GiftItem";
import useFetchGifs from "../hooks/useFetchGifs";

const GiftGrid = ({ category }) => {
  const { image, isLoanding } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {
        isLoanding&&(<h3>Cargando...</h3>)

      }

      <div className="card-grid ">
        {image.map((img) => (
          <GiftItem {...img} />
        ))}
      </div>
    </>
  );
};

export default GiftGrid;
