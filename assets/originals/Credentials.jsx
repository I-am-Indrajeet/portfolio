import { Code2, Lightbulb, MessageCircle, PenTool, Send } from 'lucide-react'
import SectionHeading, { Eyebrow } from './SectionHeading'

const education = [
  {
    degree: 'BSc. Information Technology',
    institution: 'International School of Management and Technology (ISMT), Kathmandu, Nepal',
    date: 'Jan 2026',
    note: 'Relevant coursework: Data Structures & Algorithms, DBMS, Software Engineering, Computer Networks, Web Technologies, OOP, AI, Cybersecurity Fundamentals',
  },
  {
    degree: 'Higher Secondary Education (+2) — Science Stream',
    institution: 'NAST College, Dhangadi, Nepal',
    date: '',
  },
  {
    degree: 'School Leaving Examination (SEE)',
    institution: 'Shree Dharma Janata Higher Secondary School',
    date: '',
  },
]

const skillGroups = [
  { label: 'Languages', skills: ['Python', 'C', 'C++', 'Dart', 'JavaScript'] },
  { label: 'Web & Frameworks', skills: ['HTML5', 'CSS3', 'Django', 'Bootstrap', 'Node.js', 'REST APIs', 'WebSockets'] },
  { label: 'Mobile Development', skills: ['Flutter', 'Dart', 'Android', 'iOS', 'Web'] },
  { label: 'Databases', skills: ['SQL', 'SQLite', 'PostgreSQL', 'Schema Design', 'Normalisation', 'Query Optimisation'] },
  { label: 'Security & Networking', skills: ['Secure Authentication', 'Input Validation', 'OSI / TCP-IP', 'Networking', 'Threat Concepts'] },
  { label: 'AI / Machine Learning', skills: ['Supervised Learning', 'Unsupervised Learning', 'Model Evaluation', 'AI / ML Concepts'] },
  { label: 'Tools & Platforms', skills: ['Git', 'GitHub', 'MS Office Suite', 'Vercel'] },
]
const process = [
  { number: '01', title: 'Discover', text: 'Understanding goals, audience, and project requirements.', icon: MessageCircle },
  { number: '02', title: 'Define', text: 'Planning, wireframing, and creating the right concept.', icon: Lightbulb },
  { number: '03', title: 'Design', text: 'Crafting visual design with a focus on user experience.', icon: PenTool },
  { number: '04', title: 'Develop', text: 'Building fast, responsive, and high-performing websites.', icon: Code2 },
  { number: '05', title: 'Deliver', text: 'Testing, optimizing, and launching with perfection.', icon: Send },
]

function EducationAndSkills() {
  return (
    <div>
      <SectionHeading id="about-heading">EDUCATION &amp; SKILLS</SectionHeading>
      <Eyebrow className="text-red-600">Education</Eyebrow>
      <div className="mt-3 space-y-4 border-b border-white/10 pb-5">
        {education.map((item) => (
          <div key={item.degree} className="grid grid-cols-[1fr_auto] gap-4">
            <div>
              <p className="text-[10px] font-semibold text-zinc-200">{item.degree}</p>
              <p className="mt-1 text-[8px] text-zinc-500">{item.institution}</p>
              {item.note && <p className="mt-2 max-w-[260px] text-[7px] leading-[1.5] text-zinc-600">{item.note}</p>}
            </div>
            {item.date && <span className="shrink-0 text-[8px] text-red-600">{item.date}</span>}
          </div>
        ))}
      </div>
      <Eyebrow className="mt-5 text-red-600">Technical Skills</Eyebrow>
      <div className="mt-3 space-y-4">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <p className="text-[8px] font-semibold uppercase tracking-[0.1em] text-zinc-400">{group.label}</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <span key={skill} className="rounded-sm border border-zinc-700 px-2 py-1 text-[7px] font-medium uppercase text-zinc-300">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function TimelineItem({ item, last }) {
  const Icon = item.icon
  return (
    <div className="relative grid grid-cols-[36px_44px_1fr] items-start gap-x-3 gap-y-1 pb-9 last:pb-0">
      {!last && <div className="absolute left-[57px] top-11 h-[calc(100%-12px)] w-px bg-zinc-700" />}
      <span className="pt-2 font-display text-[15px] leading-none text-red-600">{item.number}</span>
      <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-600 bg-[#0b0b0b] text-zinc-200">
        <Icon size={15} strokeWidth={1.75} />
      </span>
      <div className="pt-1.5">
        <h3 className="text-[12px] font-bold uppercase tracking-[0.04em] text-zinc-200">{item.title}</h3>
        <p className="mt-2 max-w-[240px] text-[10px] leading-[1.55] text-zinc-500">{item.text}</p>
      </div>
    </div>
  )
}

function WorkProcess() {
  return (
    <div className="flex min-h-full flex-col">
      <SectionHeading>WORK PROCESS</SectionHeading>
      <div className="mt-3 flex flex-1 flex-col justify-between py-2">{process.map((item, index) => <TimelineItem key={item.number} item={item} last={index === process.length - 1} />)}</div>
    </div>
  )
}

function QuoteBlock() {
  return (
    <aside className="relative min-h-[300px] overflow-hidden bg-[#86101a] p-7 sm:min-h-full">
      <span className="font-serif text-7xl leading-none text-red-400">“</span>
      <p className="mt-2 max-w-[175px] text-[16px] font-medium leading-[1.32] text-zinc-100">Good design is not just how it looks, but how it works.</p>
      <p className="mt-6 font-script text-[33px] text-zinc-100">indrajeet mahara</p>
      <div className="absolute bottom-7 left-7 max-w-[140px]">
        <div className="mb-3 h-px w-full bg-red-300/40" />
        <p className="text-[8px] font-semibold uppercase leading-[1.4] tracking-wider text-red-100">Let’s create something great together.</p>
      </div>
      <div className="absolute bottom-6 right-5 h-12 w-12 rotate-45 border border-red-400/30" />
    </aside>
  )
}

export default function Credentials() {
  return (
    <section id="about" aria-labelledby="about-heading" className="grid gap-10 border-b border-white/10 px-5 py-10 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.1fr_1.2fr_.72fr] lg:gap-10 lg:px-12 lg:py-14">
      <EducationAndSkills />
      <WorkProcess />
      <QuoteBlock />
    </section>
  )
}
