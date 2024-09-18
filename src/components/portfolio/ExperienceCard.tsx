import { FC } from "react"
interface ExperienceCardProps {
  designation: string
  company: string
  timeline: string
  description: string
}

const ExperienceCard: FC<ExperienceCardProps> = ({
  designation,
  company,
  timeline,
  description,
}) => {
  return (
    <div className="rounded-xl bg-gradient-to-r from-[#f6f5fe] to-[#ececec] p-4 shadow-md">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="w-full">
            <h3 className="flex w-full justify-between text-base font-bold capitalize text-black">
              <p className="">{designation}</p>{" "}
              <p className="text-sm text-gray-500">{timeline}</p>
            </h3>
            <h4 className="italic">@{company}</h4>
            <p className="">{}</p>
          </div>
        </div>
        <p className="mt-3 text-[14px] text-gray-700">{description}</p>
      </div>
    </div>
  )
}

export default ExperienceCard
