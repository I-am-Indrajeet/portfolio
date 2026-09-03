import { ArrowUpRight } from 'lucide-react'

export function Eyebrow({ children, className = '' }) {
  return <p className={`text-[9px] font-semibold uppercase tracking-[0.12em] text-zinc-500 ${className}`}>{children}</p>
}

export default function SectionHeading({ children, action }) {
  return (
    <div className="mb-5 flex items-center gap-4">
      <h2 className="shrink-0 text-[14px] font-bold tracking-[-.02em] text-zinc-100">{children}</h2>
      <div className="h-px flex-1 bg-white/15" />
      {action && (
        <a href="#projects" className="hidden items-center gap-2 text-[8px] font-semibold uppercase tracking-wide text-zinc-300 sm:flex">
          {action} <ArrowUpRight size={13} />
        </a>
      )}
    </div>
  )
}
