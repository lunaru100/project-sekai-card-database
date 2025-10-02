interface Props {
  img: string;
  name: string;
}

function UnitTile({ img, name }: Props) {
  return (
    <div className="cursor-pointer p-3 !m-2 max-w-[25vw]">
      <img
        className="rounded-2xl w-full h-auto object-contain"
        src={img}
        alt={name}
      />
    </div>
  );
}

export default UnitTile;
