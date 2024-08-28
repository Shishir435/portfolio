import Image from "next/image";

const TechCard = ({ name, icon }: { name: string; icon: string }) => {
  return (
    <>
      <div className="flex size-20 cursor-pointer flex-col items-center justify-evenly rounded-lg p-2">
        <Image
          src={icon}
          title={name}
          width={80}
          height={80}
          style={{ height: 80, width: 80 }}
          alt={`${name}_logo`}
          className="  size-auto object-contain"
        />
      </div>
    </>
  );
};

export default TechCard;
