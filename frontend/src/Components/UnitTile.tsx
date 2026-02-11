import { useNavigate } from "react-router-dom";

interface Props {
  img: string;
  name: string;
}

function UnitTile({ img, name }: Props) {
  const navigate = useNavigate();

  const handleTileClick = () => {
    const encodedUnitName = encodeURIComponent(name);
    navigate(`/cards?units=${encodedUnitName}`);
  };

  return (
    <div
      className="cursor-pointer p-3 !m-2 max-w-[25vw]"
      onClick={handleTileClick}
    >
      <img
        className="rounded-2xl w-full h-auto object-contain"
        src={img}
        alt={name}
      />
    </div>
  );
}

export default UnitTile;
