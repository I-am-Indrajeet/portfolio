import { useEffect, useState } from 'react'
import { Globe2, Menu } from 'lucide-react'

const heroSkills = ['WEB DESIGN', 'UI / UX', 'FIGMA', 'WEBFLOW', 'BRANDING']
const cipherCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*'

function CyberSkillText() {
  const [activeSkill, setActiveSkill] = useState(0)
  const [displayText, setDisplayText] = useState(heroSkills[0])
  const [isScrambling, setIsScrambling] = useState(false)
  const [cycle, setCycle] = useState(0)

  useEffect(() => {
    let intervalId
    let timeoutId
    let skillIndex = 0

    const randomCharacter = () => cipherCharacters[Math.floor(Math.random() * cipherCharacters.length)]

    const showNextSkill = () => {
      const nextSkill = (skillIndex + 1) % heroSkills.length
      const target = heroSkills[nextSkill]
      let frame = 0

      setIsScrambling(true)
      intervalId = window.setInterval(() => {
        const revealedCharacters = Math.floor((frame / 15) * target.length)
        const encryptedText = [...target].map((character, index) => {
          if (character === ' ') return ' '
          return index < revealedCharacters ? character : randomCharacter()
        }).join('')

        setDisplayText(encryptedText)
        frame += 1

        if (frame > 15) {
          window.clearInterval(intervalId)
          skillIndex = nextSkill
          setActiveSkill(nextSkill)
          setDisplayText(target)
          setIsScrambling(false)
          setCycle((current) => current + 1)
          timeoutId = window.setTimeout(showNextSkill, 2100)
        }
      }, 46)
    }

    timeoutId = window.setTimeout(showNextSkill, 2200)

    return () => {
      window.clearInterval(intervalId)
      window.clearTimeout(timeoutId)
    }
  }, [])

  return (
    <span
      key={cycle}
      className={`hero-skill ${isScrambling ? 'hero-skill--scrambling' : ''}`}
      data-text={displayText}
      aria-label={heroSkills[activeSkill]}
    >
      {displayText}
    </span>
  )
}

function HeroStat({ number, label }) {
  return (
    <div className="border-b border-white/10 py-3 last:border-b-0">
      <div className="font-display text-[27px] leading-none text-red-600">{number}</div>
      <p className="mt-1 text-[8px] font-medium uppercase tracking-[0.12em] text-zinc-400">{label}</p>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero-grid relative isolate min-h-[720px] overflow-hidden border-b border-white/10 px-5 pb-10 pt-5 sm:min-h-[820px] sm:px-8 lg:min-h-[760px] lg:px-12 xl:min-h-[850px]">
      <div className="relative z-20 flex items-start justify-between">
        <a href="#" className="max-w-18 text-[8px] font-bold uppercase leading-[1.05] tracking-tight text-red-600">
          Web Designer<br />Digital Creator
        </a>
        <div className="hidden items-center gap-7 sm:flex">
          <span className="text-[8px] font-semibold uppercase tracking-wide text-zinc-400">Available for freelance</span>
          <span className="h-2 w-2 rotate-45 bg-red-600" />
        </div>
        <button className="text-zinc-300 sm:hidden" aria-label="Open menu"><Menu size={19} /></button>
      </div>

      <div className="hero-skills pointer-events-none absolute inset-x-0 top-[4.75rem] z-0 flex h-[clamp(5.5rem,19vw,18rem)] items-center justify-center px-2 text-center font-display text-[clamp(3.6rem,17vw,17rem)] leading-[.72] text-red-600 sm:top-[5.5rem] sm:px-6 lg:top-[4.25rem]">
        <CyberSkillText />
      </div>
      <div className="absolute left-1/2 top-[11rem] z-10 flex h-[440px] w-[300px] -translate-x-1/2 items-end justify-center sm:top-[9rem] sm:h-[560px] sm:w-[390px] lg:top-[7.5rem] lg:h-[650px] lg:w-[455px]">
        <img
          src="/hero_section_no_bg.webp"
          alt="Portrait of indrajeet mahara"
          className="h-full w-auto max-w-none object-contain object-bottom"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#080808] to-transparent" />
      </div>

      <div className="relative z-20 mt-[25rem] grid gap-10 sm:mt-[29rem] sm:grid-cols-[1fr_auto] lg:mt-[20.5rem] lg:grid-cols-[250px_1fr_205px] lg:items-end">
        <div className="max-w-[250px]">
          <p className="font-script text-[31px] leading-none text-white">Hello, I’m</p>
          <h1 className="mt-1 font-display text-[44px] leading-[.82] tracking-[-0.04em] text-zinc-100 sm:text-[56px]">indrajeet<br />mahara</h1>
          <p className="mt-3 text-[9px] font-bold uppercase tracking-[.09em] text-red-600">Web Designer &<br />React Developer</p>
          <p className="mt-4 max-w-[205px] text-[10px] leading-[1.55] text-zinc-400">
            I’m a Kathmandu-based web designer and React developer creating stylish, user-focused websites and UI/UX experiences that combine creativity with strategy.
          </p>
          <div className="mt-5 flex items-center gap-2 text-[8px] font-semibold uppercase tracking-wide text-zinc-300">
            <Globe2 size={12} className="text-red-600" /> Available worldwide
          </div>
        </div>
        <div className="hidden lg:block" />
        <div className="flex items-center gap-5 self-end lg:block">
          <div className="relative hidden h-12 w-12 items-center justify-center rounded-full border border-zinc-600 lg:flex">
            <div className="h-5 w-5 rounded-full border border-red-600" />
            <span className="absolute h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_12px_4px_rgba(255,255,255,.35)]" />
          </div>
          <div className="min-w-[150px] lg:mt-7">
            <HeroStat number="10+" label="Years Experience" />
            <HeroStat number="11+" label="Projects Completed" />
            <HeroStat number="20+" label="Happy Clients" />
          </div>
        </div>
      </div>
    </section>
  )
}
