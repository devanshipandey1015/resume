import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import Quiz from './components/Quiz';
import TopicCard from './components/TopicCard';
import { interviewBank, navItems, projects, resumeChecks, topics } from './data/content';
import type { ProgressState } from './types';

const categoryIntro: Record<string, { title: string; description: string }> = {
  languages: { title: 'Programming and web languages', description: 'Understand what each language is, how it works and exactly how to explain your level.' },
  frontend: { title: 'Frontend development', description: 'Revise component-based interfaces, build tooling, responsive design and UI structure.' },
  backend: { title: 'Backend, APIs and authentication', description: 'Explain request flow, identity, sessions and the boundary between frontend and backend.' },
  databases: { title: 'Databases and data modelling', description: 'Study SQL, relational design, PostgreSQL, MySQL and the Supabase backend platform.' },
  android: { title: 'Android development', description: 'Connect Kotlin, Android Studio and Gradle to the CareCompanion project.' },
  tools: { title: 'Development tools', description: 'Explain version control, repository hosting and collaborative workflows.' },
  coursework: { title: 'Core computer-science coursework', description: 'Refresh the concepts interviewers commonly connect to your degree and projects.' },
  experience: { title: 'Professional and volunteer experience', description: 'Describe responsibilities honestly while highlighting delivery, communication and ownership.' },
};

function loadJSON<T>(key: string, fallback: T): T {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) as T : fallback;
  } catch {
    return fallback;
  }
}

export default function App() {
  const [active, setActive] = useState('home');
  const [query, setQuery] = useState('');
  const [darkMode, setDarkMode] = useState(() => loadJSON('darkMode', false));
  const [bookmarks, setBookmarks] = useState<string[]>(() => loadJSON('bookmarks', []));
  const [progress, setProgress] = useState<Record<string, ProgressState>>(() => loadJSON('progress', {}));
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light';
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);
  useEffect(() => localStorage.setItem('bookmarks', JSON.stringify(bookmarks)), [bookmarks]);
  useEffect(() => localStorage.setItem('progress', JSON.stringify(progress)), [progress]);

  const navigate = (id: string) => {
    setActive(id); setMenuOpen(false); setQuery(''); window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filtered = useMemo(() => {
    const source = active === 'home' ? topics : topics.filter((topic) => topic.category === active);
    const normalised = query.trim().toLowerCase();
    if (!normalised) return source;
    return topics.filter((topic) => [topic.title, topic.short, topic.interview, ...topic.simple, ...topic.technical, ...(topic.keyPoints ?? [])].join(' ').toLowerCase().includes(normalised));
  }, [active, query]);

  const completed = Object.values(progress).filter((value) => value === 'interview-ready').length;
  const revised = Object.values(progress).filter((value) => value === 'revised').length;
  const bookmarkedTopics = topics.filter((topic) => bookmarks.includes(topic.id));

  const topicSection = () => {
    const intro = categoryIntro[active];
    return (
      <>
        <section className="page-heading">
          <span className="eyebrow">Resume knowledge base</span>
          <h1>{intro.title}</h1>
          <p>{intro.description}</p>
        </section>
        <section className="search-panel panel">
          <label htmlFor="topic-search">Search all resume topics</label>
          <input id="topic-search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Try React, Kotlin, REST, Git..." />
          <span>{filtered.length} topic{filtered.length === 1 ? '' : 's'}</span>
        </section>
        <section className="topic-grid">
          {filtered.map((topic) => (
            <TopicCard key={topic.id} topic={topic} bookmarked={bookmarks.includes(topic.id)} progress={progress[topic.id] ?? 'not-started'} onBookmark={() => setBookmarks((current) => current.includes(topic.id) ? current.filter((id) => id !== topic.id) : [...current, topic.id])} onProgress={(value) => setProgress((current) => ({ ...current, [topic.id]: value }))} />
          ))}
        </section>
      </>
    );
  };

  return (
    <>
      <Navbar active={active} onNavigate={navigate} darkMode={darkMode} onToggleDark={() => setDarkMode((value) => !value)} menuOpen={menuOpen} onToggleMenu={() => setMenuOpen((value) => !value)} />
      <main>
        {active === 'home' && (
          <>
            <section className="hero">
              <div className="hero-copy">
                <span className="eyebrow">Devanshi Pandey · Technical Interview Preparation</span>
                <h1>Know every line of your resume.</h1>
                <p>Study each technology from first principles, connect it to your projects, and practise a clear interview-ready explanation.</p>
                <div className="hero-actions"><button className="primary-button" onClick={() => navigate('projects')}>Start with projects</button><button className="secondary-button" onClick={() => navigate('quiz')}>Take the quiz</button><a className="secondary-button button-link" href="/Devanshi-Pandey-Resume.pdf" target="_blank" rel="noreferrer">Open resume</a></div>
              </div>
              <div className="hero-card panel">
                <span className="eyebrow">Your positioning</span>
                <h2>Frontend + Android + data-backed applications</h2>
                <p>Computer & Electronics Engineering student with a 9.83 SGPA, an Honours programme in Data Science & Analytics, project-delivery experience, and hands-on React, TypeScript, Kotlin and Supabase work.</p>
              </div>
            </section>

            <section className="stats-grid">
              <div className="stat-card panel"><strong>{topics.length}</strong><span>Resume topics</span></div>
              <div className="stat-card panel"><strong>{bookmarks.length}</strong><span>Bookmarked</span></div>
              <div className="stat-card panel"><strong>{revised}</strong><span>Revised</span></div>
              <div className="stat-card panel"><strong>{completed}</strong><span>Interview ready</span></div>
            </section>

            <section className="section-block">
              <div className="section-heading"><div><span className="eyebrow">Recommended order</span><h2>Start with the strongest evidence</h2></div></div>
              <div className="path-grid">
                <button onClick={() => navigate('projects')}><span>01</span><strong>Healthcare Vitals Tracker</strong><small>React · TypeScript · Supabase · PostgreSQL</small></button>
                <button onClick={() => navigate('android')}><span>02</span><strong>CareCompanion</strong><small>Kotlin · Android Studio · Gradle</small></button>
                <button onClick={() => navigate('frontend')}><span>03</span><strong>Puzzle Grove</strong><small>HTML · CSS · JavaScript · Bootstrap</small></button>
                <button onClick={() => navigate('coursework')}><span>04</span><strong>Core CS</strong><small>OOP · DBMS · OS · Networks · DSA</small></button>
              </div>
            </section>

            <section className="section-block split-home">
              <div className="panel">
                <span className="eyebrow">60-second introduction</span>
                <h2>Tell me about yourself</h2>
                <blockquote>I am pursuing a BTech in Computer and Electronics Engineering at KJ Somaiya College of Engineering, with a current SGPA of 9.83 and an Honours programme in Data Science and Analytics. My primary interests are software and frontend development. I have built a React and TypeScript healthcare vitals tracker using Supabase and PostgreSQL, a native Android healthcare application using Kotlin, and a browser-based word-puzzle platform using JavaScript and Bootstrap. I also worked as a Project Manager at BuildUp Mirai, where I translated business requirements into dashboard features, coordinated testing and issue tracking, and supported automation workflows. This combination has given me both hands-on development experience and an understanding of how software projects move from requirements to delivery.</blockquote>
              </div>
              <div className="panel">
                <span className="eyebrow">Answer framework</span>
                <h2>Explain any technology</h2>
                <ol className="framework-list"><li><strong>Definition</strong><span>What is it?</span></li><li><strong>Purpose</strong><span>Why is it useful?</span></li><li><strong>Your use</strong><span>Where did you apply it?</span></li><li><strong>Trade-off</strong><span>What limitation should you acknowledge?</span></li></ol>
              </div>
            </section>

            {bookmarkedTopics.length > 0 && <section className="section-block"><div className="section-heading"><div><span className="eyebrow">Saved for revision</span><h2>Your bookmarks</h2></div></div><div className="bookmark-list">{bookmarkedTopics.map((topic) => <button key={topic.id} onClick={() => { setActive(topic.category); setQuery(topic.title); }}>{topic.title}<span>Open →</span></button>)}</div></section>}

            <section className="section-block"><div className="section-heading"><div><span className="eyebrow">Accuracy check</span><h2>Verify these before an interview</h2></div></div><div className="check-grid">{resumeChecks.map((check, index) => <div className="check-item" key={check}><span>{String(index + 1).padStart(2, '0')}</span><p>{check}</p></div>)}</div></section>
          </>
        )}

        {Object.keys(categoryIntro).includes(active) && topicSection()}

        {active === 'projects' && <><section className="page-heading"><span className="eyebrow">Deep project preparation</span><h1>Projects</h1><p>Understand the problem, complete data flow, stack choices, honest limitations and likely follow-up questions.</p></section><section className="project-list">{projects.map((project) => <ProjectCard key={project.id} project={project} />)}</section></>}

        {active === 'questions' && <><section className="page-heading"><span className="eyebrow">Practice aloud</span><h1>Interview question bank</h1><p>Answer each question using a real project detail. Avoid memorised definitions without personal context.</p></section><section className="question-bank">{interviewBank.map((question, index) => <details key={question}><summary><span>{String(index + 1).padStart(2, '0')}</span>{question}</summary><div className="answer-prompt"><strong>Build your answer with:</strong><p>Definition → reason → your implementation → challenge or trade-off → result.</p></div></details>)}</section></>}

        {active === 'quiz' && <><section className="page-heading"><span className="eyebrow">Active recall</span><h1>Resume quiz</h1><p>Test the concepts most likely to come up when an interviewer follows a line from your resume.</p></section><Quiz /></>}
      </main>
      <footer><strong>Devanshi’s Interview Guide</strong><span>Progress and bookmarks are stored locally in your browser.</span></footer>
    </>
  );
}
