import { ArrowUpRight } from "lucide-react";
export function Eyebrow({ children }) {
  return <p className="eyebrow">{children}</p>;
}
export default function SectionHeading({ children, number, link, label }) {
  return (
    <div className="section-heading">
      <div>
        <Eyebrow>{number}</Eyebrow>
        <h2>{children}</h2>
      </div>
      {link && (
        <a className="text-link" href={link}>
          {label}
          <ArrowUpRight size={18} />
        </a>
      )}
    </div>
  );
}
