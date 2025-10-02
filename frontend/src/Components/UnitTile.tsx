interface Props {
  img: string;
  name: string;
}

function UnitTile({ img, name }: Props) {
  return (
    <div className="flex flex-col items-center gap-[1vh] cursor-pointer rounded-2xl w-[20vw] bg-white/30 !p-2">
      <img className="rounded-2xl" src={img} alt={name} />
      <span>{name}</span>
    </div>
  );
}

export default UnitTile;
