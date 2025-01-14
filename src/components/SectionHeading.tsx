import { SectionHeadingProps } from "@/lib/types"

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="max-w-[85ch] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          {subtitle}
        </p>
      )}
    </div>
  )
}