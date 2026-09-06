import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/site.js";
import SectionHeading from "./SectionHeading";
export function ProjectCard({ project, index = 0 }) {
  return (
    <article className="project-card">
      <a
        href={`/portfolio/${project.slug}/`}
        className="project-image"
        aria-label={`Read the ${project.name} project study`}
      >
        <div className="browser-bar" aria-hidden="true">
          <span />
          <span />
          <span />
          <small>{project.name}</small>
        </div>
        <img
          src={project.image}
          alt={`${project.name} website homepage screenshot`}
          width="1440"
          height="900"
          loading="lazy"
          decoding="async"
        />
        <span className="image-arrow">
          <ArrowUpRight size={22} />
        </span>
      </a>
      <div className="project-heading">
        <span className="project-index">0{index + 1}</span>
        <div>
          <p className="eyebrow">{project.category}</p>
          <h3>
            <a href={`/portfolio/${project.slug}/`}>{project.name}</a>
          </h3>
        </div>
      </div>
      <p>{project.summary}</p>
    </article>
  );
}
export default function Projects() {
  return (
    <section className="section" id="projects">
      <SectionHeading
        number="01 / SELECTED WORK"
        link="/portfolio/"
        label="All projects"
      >
        Different businesses. Same attention to detail.
      </SectionHeading>
      <div className="project-grid">
        {projects
          .filter((p) => p.slug)
          .slice(0, 2)
          .map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
      </div>
    </section>
  );
}
