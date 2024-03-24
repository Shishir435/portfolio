import Image from "next/image"

const TechCard = ({ name, icon }: { name: string; icon: string }) => {
  return (
    <>
      <div className="flex justify-evenly items-center flex-col bg-tertiary rounded-lg p-2 h-20 w-20  cursor-pointer">
        <Image
          src={icon}
          title={name}
          width={80}
          height={80}
          style={{ height: 80, width: 80 }}
          alt={`${name}_logo`}
          // style={{height: "auto"}}
          className="  object-contain h-auto w-auto"
        />
      </div>
    </>
  )
}

export default TechCard
