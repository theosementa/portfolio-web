import { Skill } from "../../domain/Skill";

interface Props {
  skill: Skill
}

export const SkillRow = ({ skill }: Props) => {
  return (
    <button onClick={() => { window.open(skill.link) }}>
      <div className="flex flex-row gap-4 items-center justify-center p-6 bg-background-200 rounded-xl hover:bg-background-300 transition duration-300 transform hover:scale-105">
      <img src={skill.logo} alt={skill.name} className="h-8 w-8" />
      <p className="font-sans font-medium text-2xl text-white">{ skill.name }</p>
    </div>
    </button>
  )
}