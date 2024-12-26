interface Props {
  title: string,
  subtitle: string
}

export const HomeSectionHeader = ({ title, subtitle }: Props) => {
  return (
    <div className="w-full flex flex-col items-center justify-center font-sans text-white gap-6">
      <p className="font-semibold text-5xl">{ title }</p>
      <p className="font-medium text-2xl text-center">{ subtitle }</p>
    </div>
  )
}