export interface Props {
  title: string
  value: string
  type?: string
  isRequired?: boolean
  onChange: (value: string) => void;
}

export const TextField = ({ title, value, type = "", isRequired = false, onChange }: Props) => {
  return (
    <input
      id="email"
      placeholder={title}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={isRequired}
      className="w-full px-4 py-4 rounded-xl bg-background-200 focus:outline-blue-600 text-white text-2xl focus:ring-2 focus:ring-blue-500"
    />
  )
}