interface Props {
  value: string
  isRequired: boolean
  onChange: (value: string) => void;
}

export const TextArea = ({ value, isRequired, onChange }: Props) => {
  return (
    <div>
      <textarea
        id="message"
        placeholder= "Message"
        value={value}
        required={isRequired}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        className="w-full h-96 px-4 py-4 rounded-xl bg-background-200 focus:outline-blue-600 text-white text-2xl focus:ring-2 focus:ring-blue-500 resize-none overflow-hidden"
      />
    </div>
  )
}