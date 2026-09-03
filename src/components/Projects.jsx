import { useEffect, useState } from 'react'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeading from './SectionHeading'

const projects = [
  {
    number: '01',
    display: 'EDWISE',
    title: 'Edwise Foundation',
    category: 'Virtual Education Fair',
    description: 'A digital event platform that helps students explore global study options, webinars, scholarships, and university guidance in one place.',
    link: 'https://edwise-foundation.vercel.app',
  },
  {
    number: '02',
    display: 'SHAILUNG',
    title: 'Shailung Holidays',
    category: 'Travel & Pilgrimage',
    description: 'A premium Nepal travel experience that presents curated tours and pilgrimage journeys with a refined, easy-to-explore interface.',
    link: 'https://shailung-holidays.vercel.app',
  },
  {
    number: '03',
    display: 'ECO VILLAGE',
    title: 'Shailung Eco Village',
    category: 'Hospitality & Resort',
    description: 'A calm resort website designed to showcase mountain stays, villas, local food, camping, and nature-led experiences in Shailung.',
    link: 'https://shailung-eco-village.vercel.app',
  },
  {
    number: '04',
    display: 'NAWA',
    title: 'NAWA Himalayan Coffee',
    category: 'Brand & E-commerce',
    description: 'A single-origin Nepali coffee brand site that brings its Himalayan provenance, roast story, and product character to the foreground.',
    link: 'https://nawa-himalayan-coffee.vercel.app',
  },
  {
    number: '05',
    display: 'SINGAPORE',
    title: 'Singapore Beverages Nepal',
    category: 'Brand & Manufacturing',
    description: 'A premium Himalayan beverage brand site that communicates Nepal-made quality, global reach, and internationally certified production.',
    link: 'https://singapore-beverages-nepal-new.vercel.app',
  },
  {
    number: '06',
    display: 'PARALLAX',
    title: 'Parallax',
    category: 'Motion-led Landing Page',
    description: 'An experimental front-end project exploring layered scrolling, depth, and motion to create a more immersive landing page.',
    link: 'https://parallax-mu-eight.vercel.app',
  },
  {
    number: '07',
    display: 'GRAMMAR',
    title: 'GrammarIELTS',
    category: 'Education Technology',
    description: 'An interactive IELTS grammar practice tool with real Writing Task examples, immediate feedback, and no sign-in barrier.',
    link: 'https://ielts-grammar-livid.vercel.app',
  },
]

function getSlidesPerView(width) {
  if (width >= 1024) return 3
  if (width >= 640) return 2
  return 1
}

export function ProjectCard({ project }) {
  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer" className="group block h-full" aria-label={`${project.title} project — ${project.category}`}>
      <div className="relative aspect-[1.52] overflow-hidden border border-white/8 bg-gradient-to-br from-[#121212] via-[#090909] to-[#151515] p-5 sm:p-6">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(219,16,27,0.22),transparent_42%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04)_0%,transparent_45%)]" />
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <span className="relative z-10 text-[7px] font-semibold uppercase tracking-[0.22em] text-red-500">{project.category}</span>
        <h3 className="relative z-10 mt-4 max-w-[90%] font-display text-[clamp(1.75rem,4.5vw,2.35rem)] leading-[0.88] tracking-[-0.02em] text-zinc-100 transition duration-500 group-hover:text-white">
          {project.display}
        </h3>
        <p className="relative z-10 mt-2 text-[8px] uppercase tracking-[0.14em] text-zinc-500">{project.title}</p>

        <span className="pointer-events-none absolute bottom-3 right-4 font-display text-[3.5rem] leading-none text-red-600/10 transition duration-500 group-hover:text-red-600/20">
          {project.number}
        </span>
        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 transition-all duration-500 group-hover:w-full" />
      </div>

      <div className="mt-3 grid grid-cols-[35px_1fr_auto] items-end gap-2">
        <span className="font-display text-[24px] leading-none text-red-600">{project.number}</span>
        <div>
          <h4 className="text-[10px] font-bold uppercase text-zinc-100">{project.title}</h4>
          <p className="mt-0.5 text-[7px] font-medium uppercase tracking-wide text-zinc-500">{project.category}</p>
        </div>
        <ArrowUpRight size={15} className="mb-1 text-zinc-300 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-500" />
      </div>
      <p className="mt-2 text-[9px] leading-[1.45] text-zinc-500 transition group-hover:text-zinc-300">{project.description}</p>
    </a>
  )
}

function CarouselButton({ direction, onClick, disabled }) {
  const Icon = direction === 'prev' ? ChevronLeft : ChevronRight
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === 'prev' ? 'Previous projects' : 'Next projects'}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 text-zinc-300 transition hover:border-red-600 hover:text-red-500 disabled:cursor-not-allowed disabled:opacity-30"
    >
      <Icon size={16} />
    </button>
  )
}

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [slidesPerView, setSlidesPerView] = useState(1)

  useEffect(() => {
    const updateSlides = () => setSlidesPerView(getSlidesPerView(window.innerWidth))
    updateSlides()
    window.addEventListener('resize', updateSlides)
    return () => window.removeEventListener('resize', updateSlides)
  }, [])

  const maxIndex = Math.max(0, projects.length - slidesPerView)

  useEffect(() => {
    if (activeIndex > maxIndex) setActiveIndex(maxIndex)
  }, [activeIndex, maxIndex])

  const goPrev = () => setActiveIndex((current) => Math.max(0, current - 1))
  const goNext = () => setActiveIndex((current) => Math.min(maxIndex, current + 1))

  return (
    <section id="projects" aria-labelledby="projects-heading" className="border-b border-white/10 px-5 py-10 sm:px-8 lg:px-12 lg:py-12">
      <SectionHeading id="projects-heading" action={`${projects.length} live projects`}>SELECTED PROJECTS</SectionHeading>

      <div className="relative">
        <div className="mb-4 flex items-center justify-end gap-2">
          <CarouselButton direction="prev" onClick={goPrev} disabled={activeIndex === 0} />
          <CarouselButton direction="next" onClick={goNext} disabled={activeIndex === maxIndex} />
        </div>

        <div className="-mx-2.5 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${(activeIndex * 100) / slidesPerView}%)` }}
          >
            {projects.map((project) => (
              <div
                key={project.number}
                className="shrink-0 px-2.5"
                style={{ width: `${100 / slidesPerView}%` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === index ? 'w-6 bg-red-600' : 'w-1.5 bg-zinc-600 hover:bg-zinc-400'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
