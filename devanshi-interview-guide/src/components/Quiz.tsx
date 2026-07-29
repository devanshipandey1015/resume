import { useMemo, useState } from 'react';
import { quizQuestions } from '../data/content';

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const question = quizQuestions[index];

  const answeredCount = Object.keys(answers).length;
  const percentage = useMemo(() => Math.round((score / quizQuestions.length) * 100), [score]);

  const choose = (choice: number) => {
    if (selected !== null) return;
    setSelected(choice);
    setAnswers((current) => ({ ...current, [question.id]: choice }));
    if (choice === question.answer) setScore((value) => value + 1);
  };

  const next = () => {
    if (index === quizQuestions.length - 1) {
      setFinished(true);
      return;
    }
    setIndex((value) => value + 1);
    setSelected(null);
  };

  const reset = () => {
    setIndex(0); setSelected(null); setScore(0); setFinished(false); setAnswers({});
  };

  if (finished) {
    return (
      <div className="quiz-finish panel">
        <span className="eyebrow">Quiz completed</span>
        <h2>{score}/{quizQuestions.length}</h2>
        <p>You scored {percentage}%. Review weak sections and try again.</p>
        <button className="primary-button" onClick={reset}>Restart quiz</button>
      </div>
    );
  }

  return (
    <div className="quiz-shell panel">
      <div className="quiz-meta"><span>{question.category}</span><span>{answeredCount + 1} / {quizQuestions.length}</span></div>
      <div className="quiz-progress"><span style={{ width: `${((index + 1) / quizQuestions.length) * 100}%` }} /></div>
      <h2>{question.question}</h2>
      <div className="quiz-options">
        {question.options.map((option, optionIndex) => {
          const isCorrect = selected !== null && optionIndex === question.answer;
          const isWrong = selected === optionIndex && optionIndex !== question.answer;
          return <button key={option} className={`${isCorrect ? 'correct' : ''} ${isWrong ? 'wrong' : ''}`} onClick={() => choose(optionIndex)} disabled={selected !== null}>{option}</button>;
        })}
      </div>
      {selected !== null && <div className="quiz-explanation"><strong>{selected === question.answer ? 'Correct.' : 'Review this.'}</strong> {question.explanation}</div>}
      <div className="quiz-footer"><span>Score: {score}</span><button className="primary-button" onClick={next} disabled={selected === null}>{index === quizQuestions.length - 1 ? 'Finish' : 'Next question'}</button></div>
    </div>
  );
}
