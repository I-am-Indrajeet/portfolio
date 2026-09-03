import { Mail, MapPin, Phone } from 'lucide-react'

function GithubIcon({ size = 12 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .4-1.9 1-2.5-3.3-.4-6.7-1.6-6.7-7.1 0-1.6.6-2.9 1.5-3.9-.2-.4-.7-1.8.1-3.8 0 0 1.2-.4 4 1.5 1.2-.3 2.4-.5 3.6-.5s2.4.2 3.6.5c2.8-1.9 4-1.5 4-1.5.8 2 .9 3.4.1 3.8 1 .9 1.5 2.3 1.5 3.9 0 5.5-3.4 6.7-6.7 7.1.7.6 1 1.5 1 2.5V21" />
    </svg>
  )
}

function InstagramIcon({ size = 12 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function LinkedinIcon({ size = 12 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 11v5M8 8v.01M12 16v-3c0-1.5 1-2.5 2.5-2.5S17 11.5 17 13v3" />
    </svg>
  )
}

function ContactItem({ icon: Icon, children, href }) {
  return (
    <a href={href} className="group flex items-center gap-3 text-[9px] text-zinc-400 transition hover:text-zinc-100">
      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-zinc-700 text-red-600"><Icon size={11} /></span>
      {children}
    </a>
  )
}

export default function Footer() {
  return (
    <footer id="contact" aria-labelledby="contact-heading" className="relative overflow-hidden px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
      <div className="relative z-10 grid items-center gap-10 md:grid-cols-[1fr_1fr] lg:grid-cols-[.85fr_.75fr_1.25fr] lg:gap-12">
        <div>
          <h2 id="contact-heading" className="max-w-[210px] font-display text-[39px] leading-[.87] tracking-[-.04em] text-zinc-100">LET’S WORK TOGETHER</h2>
          <p className="mt-4 max-w-[220px] text-[9px] leading-[1.55] text-zinc-500">I’m currently open for new projects and collaborations. Let’s create something amazing that stands out.</p>
          <a href="mailto:indrajeetmahara07@gmail.com" className="mt-6 inline-flex items-center gap-2 rounded-full border border-red-700 px-3 py-2 text-[8px] font-bold uppercase tracking-wide text-red-500"><span className="h-1.5 w-1.5 rounded-full bg-red-500" /> Available for freelance</a>
        </div>
        <div className="space-y-3">
          <ContactItem icon={Mail} href="mailto:indrajeetmahara07@gmail.com">indrajeetmahara07@gmail.com</ContactItem>
          <ContactItem icon={Phone} href="tel:+9779809410215">+977-9809410215</ContactItem>
          <ContactItem icon={MapPin} href="https://maps.google.com/?q=Pepsicola,Kathmandu,Nepal">Pepsicola, Kathmandu, Nepal</ContactItem>
          <ContactItem icon={GithubIcon} href="https://github.com/I-am-Indrajeet">github.com/I-am-Indrajeet</ContactItem>
        </div>
        <div className="relative min-h-[220px] lg:min-h-[250px]">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=90"
            alt="Laptop displaying digital work"
            width="1000"
            height="667"
            loading="lazy"
            decoding="async"
            className="h-full min-h-[220px] w-full object-cover opacity-80 [mask-image:linear-gradient(to_right,transparent_0%,black_14%,black_86%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_14%,black_86%,transparent_100%)]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#080808] via-transparent to-[#080808]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(8,8,8,0.55)_100%)]" />
          <p className="absolute left-5 top-5 max-w-[75px] text-[9px] font-bold uppercase leading-[1.25] text-white">We design digital experiences</p>
          <span className="absolute bottom-4 right-5 font-display text-4xl text-red-600">im</span>
        </div>
      </div>
      <div className="relative z-10 mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 text-[8px] text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 indrajeet mahara. all rights reserved.</span>
        <div className="flex gap-4"><a href="https://github.com/I-am-Indrajeet" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon /></a></div>
      </div>
    </footer>
  )
}
