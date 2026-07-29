# Devanshi's Technical Interview Guide

An interactive React + TypeScript website based on the technologies, projects, coursework and professional experience listed in Devanshi Pandey's resume.

## Features

- Navbar sections for languages, frontend, backend, databases, Android, tools, coursework, experience, projects, interview questions and quiz
- Simple, technical and interview-ready explanations
- Search across all topics
- Expandable study cards
- Copyable interview answers
- Topic bookmarks
- Progress states stored in localStorage
- Project walkthroughs and verification checklists
- Interactive multiple-choice quiz
- Dark and light themes
- Responsive mobile navigation

## Run in VS Code

1. Install Node.js 20.19+ or 22.12+.
2. Open this folder in VS Code.
3. Open **Terminal → New Terminal**.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local URL displayed in the terminal, usually `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

## Editing the content

Most explanations are stored in:

```text
src/data/content.ts
```

The page layout and navigation are in:

```text
src/App.tsx
src/components/
```

The design is in:

```text
src/index.css
```

## Important accuracy note

The website includes reminders to verify project-specific implementation details that are not stated in the resume, such as Supabase Row Level Security, Puzzle Grove authentication storage, CareCompanion navigation and the BuildUp Mirai automation platform. Update those sections after checking the actual code and project setup.

## Windows shortcut

You can also double-click `run-windows.bat`. It installs the dependencies and starts the development server.
