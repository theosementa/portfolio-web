import { FaCalendarAlt } from "react-icons/fa";

interface Props {
  date: string
}

export const DateRow = ({ date }: Props) => {
  return (
    <div className="flex flex-row items-center space-x-3 text-white p-4 rounded-lg bg-background-200">
      <FaCalendarAlt className="h-4 w-4 align-middle" />
      <p className="font-sans font-semibold">{date}</p>
    </div>
  )
}