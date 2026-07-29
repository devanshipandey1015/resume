import { useState } from 'react';
import type { ProgressState, Topic } from '../types';

type Props = {
  topic: Topic;
  bookmarked: boolean;
  progress: ProgressState;
  onBookmark: () => void;
  onProgress: (value: ProgressState) => void;
};

const progressLabels: Record<ProgressState, string> = {
  'not-started': 'Not started',
  learning: 'Learning',
  revised: 'Revised',
  'interview-ready': 'Interview ready',
};

export default function TopicCard({ topic, bookmarked, progress, onBookmark, onProgress }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [tab, setTab] = useState<'simple' | 'technical' | 'interview'>('simple');
  const [copied, setCopied] = useState(false);

  const copyAnswer = async () => {
    await navigator.clipboard.writeText(topic.interview);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  };

  return (
    <article className={`topic-card ${expanded ? 'expanded' : ''}`}>
      <div className="topic-card-head">
        <div>
          <span className="eyebrow">{topic.category.replace('-', ' ')}</span>
          <h3>{topic.title}</h3>
          <p>{topic.short}</p>
        </div>
        <div className="card-actions">
          <button className={bookmarked ? 'icon-button bookmarked' : 'icon-button'} onClick={onBookmark} aria-label="Bookmark topic">★</button>
          <button className="expand-button" onClick={() => setExpanded(!expanded)}>{expanded ? 'Close' : 'Study'}</button>
        </div>
      </div>

      <div className="progress-row">
        <label htmlFor={`progress-${topic.id}`}>Progress</label>
        <select id={`progress-${topic.id}`} value={progress} onChange={(e) => onProgress(e.target.value as ProgressState)}>
          {Object.entries(progressLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
        </select>
      </div>

      {expanded && (
        <div className="topic-details">
          <div className="tabs">
            <button className={tab === 'simple' ? 'active' : ''} onClick={() => setTab('simple')}>Explain simply</button>
            <button className={tab === 'technical' ? 'active' : ''} onClick={() => setTab('technical')}>Technical depth</button>
            <button className={tab === 'interview' ? 'active' : ''} onClick={() => setTab('interview')}>Interview answer</button>
          </div>

          {tab === 'simple' && <ul>{topic.simple.map((line) => <li key={line}>{line}</li>)}</ul>}
          {tab === 'technical' && <ul>{topic.technical.map((line) => <li key={line}>{line}</li>)}</ul>}
          {tab === 'interview' && (
            <div className="interview-answer">
              <p>“{topic.interview}”</p>
              <button onClick={copyAnswer}>{copied ? 'Copied' : 'Copy answer'}</button>
            </div>
          )}

          {topic.keyPoints && <div className="chip-list">{topic.keyPoints.map((point) => <span key={point}>{point}</span>)}</div>}
          {topic.code && <pre><code>{topic.code}</code></pre>}
          {topic.followUps && <details><summary>Likely follow-up questions</summary><ul>{topic.followUps.map((q) => <li key={q}>{q}</li>)}</ul></details>}
          {topic.qa && topic.qa.length > 0 && (
  <section className="qa-section">
    <h4>Interview Questions and Answers</h4>

    <div className="qa-list">
      {topic.qa.map((item) => (
        <details className="qa-item" key={item.question}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  </section>
)}
          {topic.cautions && <div className="caution"><strong>Be accurate:</strong><ul>{topic.cautions.map((c) => <li key={c}>{c}</li>)}</ul></div>}
        </div>
      )}
    </article>
  );
}
