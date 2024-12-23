import { Taggable } from "../../domain/interface/Taggable";

interface Props {
  item: Taggable
}

export const TagRow = ({ item }: Props) => {
  return (
    <button onClick={() => { window.open(item.link) }}>
      <div className="flex flex-row gap-4 items-center justify-center p-4 bg-background-200 rounded-xl hover:bg-background-300 transition duration-300 transform hover:scale-105">
      {
        item.logo &&
        <img src={item.logo} alt={item.name} className="h-7 w-7" />
      }
      <p className="font-sans font-medium text-xl text-white">{ item.name }</p>
    </div>
    </button>
  )
}