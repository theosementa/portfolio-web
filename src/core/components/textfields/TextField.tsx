export interface Props {
  title: string
  value: string
  type?: string
  isRequired?: boolean
  onChange: (value: string) => void;
}

export const TextField = ({ title, value, type = "", isRequired = false, onChange }: Props) => {
  return (
    <div>
      <label className="block text-white text-lg font-medium mb-2" htmlFor="email">
        { title }
      </label>
      <input
        id="email"
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={isRequired}
        className="w-full px-4 py-2 rounded bg-background-200 text-white text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  )
}