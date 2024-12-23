import { IconType } from "react-icons";
import { ActionButtonType } from "../../../domain/enum/ActionButtonType";

interface Props {
  icon?: IconType;
  text: string;
  isPrimary: boolean;
  type?: ActionButtonType
  onClick?: () => void
}

export const ActionButton = ({ icon: Icon, text, isPrimary, type = ActionButtonType.small, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex flex-row w-full justify-center items-center space-x-2 px-4 py-2 transition duration-300 hover:scale-105
        ${isPrimary ? "bg-blue-600" : "bg-transparent border-2 border-blue-600"} 
        ${type == ActionButtonType.medium ? "h-16 rounded-2xl" : "h-auto rounded-lg"}
      `}
    >
      {Icon &&
        <Icon className={`
          text-white
          ${type == ActionButtonType.medium ? "w-8 h-8" : "w-6 h-6"}
        `} />
      }
      <p className={`
        font-semibold font-sans 
        ${isPrimary ? "text-white" : "text-blue-600"}
        ${type == ActionButtonType.medium ? "text-lg" : "text-base"}
        `}>{text}</p>
    </button>
  );
};