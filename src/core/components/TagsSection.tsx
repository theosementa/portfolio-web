interface Props {
  title: string,
  children: React.ReactNode
}

export const TagsSection = ({ title, children }: Props) => {
  return (
    <div className="flex flex-col gap-6 ">
      <p className="font-sans font-semibold text-2xl text-white ps-4">{title}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {children}
      </div>
    </div>
  )
}