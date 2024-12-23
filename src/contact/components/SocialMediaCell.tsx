import { NetworkPath } from "../../core/network/NetworkPath"

interface Props {
  logo: string
  name: string
  link: string
}

export const SocialMediaCell = ({ logo, name, link, }: Props) => {
  return (
    <div
      className="w-32 h-32 flex flex-col items-center justify-center gap-4 bg-background-100 rounded-2xl hover:bg-background-200 hover:scale-105 transition duration-300 cursor-pointer"
      onClick={() => { window.open(link) }}
    >
      <img src={NetworkPath.baseUrl + logo} alt={name} className="w-12 h-12 object-cover" />
      <p className="font-sans font-semibold text-xl text-white">{name}</p>
    </div>

  )
}