import { useState } from 'react';
import type { Project } from '../types';

export default function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(project.id === 'vitals-tracker');
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(project.interviewAnswer);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <article className="project-card">
      <div className="project-top">
        <div>
          <span className="eyebrow">Project walkthrough</span>
          <h3>{project.title}</h3>
          <p>{project.purpose}</p>
          <div className="chip-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
        <button className="expand-button" onClick={() => setOpen(!open)}>{open ? 'Collapse' : 'Open project'}</button>
      </div>
      {open && (
        <div className="project-details">
          <section><h4>What the project demonstrates</h4><p>{project.overview}</p></section>
          <section><h4>End-to-end flow</h4><ol className="flow-list">{project.flow.map((step, index) => <li key={step}><span>{index + 1}</span>{step}</li>)}</ol></section>
          <section><h4>Why this stack</h4><div className="why-grid">{project.whyStack.map((item) => <div key={item.label}><strong>{item.label}</strong><p>{item.text}</p></div>)}</div></section>
          <section className="interview-answer"><h4>Ready interview answer</h4><p>“{project.interviewAnswer}”</p><button onClick={copy}>{copied ? 'Copied' : 'Copy answer'}</button></section>
          <div className="split-grid">
            <section><h4>Questions to prepare</h4><ul>{project.questions.map((q) => <li key={q}>{q}</li>)}</ul></section>
            <section className="caution"><h4>Verify in your code</h4><ul>{project.verify.map((v) => <li key={v}>{v}</li>)}</ul></section>
          </div>
        </div>
      )}
    </article>
  );
}
