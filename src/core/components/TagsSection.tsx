interface Props {
  title: string,
  children: React.ReactNode
}

export const TagsSection = ({ title, children }: Props) => {
  return (
    <div className="flex flex-col gap-6 bg-background-100 rounded-2xl p-6">
      <p className="font-sans font-semibold text-3xl text-white ps-4">{title}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {children}
      </div>
    </div>
  )
}