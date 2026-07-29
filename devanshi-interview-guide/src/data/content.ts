import type { Project, QuizQuestion, Topic } from '../types';

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'languages', label: 'Languages' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend & APIs' },
  { id: 'databases', label: 'Databases' },
  { id: 'android', label: 'Android' },
  { id: 'tools', label: 'Tools' },
  { id: 'coursework', label: 'Coursework' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'questions', label: 'Interview Bank' },
  { id: 'quiz', label: 'Quiz' },
] as const;

export const topics: Topic[] = [
  {
    id: 'c', title: 'C', category: 'languages', short: 'Procedural language with direct memory access.',
    simple: [
      'C is a compiled, procedural programming language.',
      'It is useful for operating systems, embedded systems, device drivers and performance-sensitive programs.',
      'It teaches how memory, pointers, arrays and functions work at a lower level.'
    ],
    technical: [
      'C provides manual memory management through functions such as malloc, calloc, realloc and free.',
      'Pointers store memory addresses and allow indirect access to data.',
      'C programs are normally preprocessed, compiled, assembled and linked before execution.'
    ],
    interview: 'C is a procedural and compiled programming language that provides low-level memory access through pointers. It helped me understand memory management, data structures and how programs interact more closely with hardware.',
    keyPoints: ['Pointers', 'Structures', 'Stack and heap', 'Dynamic memory allocation', 'Header files', 'Compilation'],
    followUps: ['What is a pointer?', 'Stack versus heap?', 'malloc versus calloc?', 'What causes a dangling pointer?']
  },
  {
    id: 'cpp', title: 'C++', category: 'languages', short: 'Compiled language used heavily for DSA and OOP.',
    simple: [
      'C++ extends C with classes, objects, templates and the Standard Template Library.',
      'It supports procedural, object-oriented and generic programming.',
      'It is a strong choice for DSA because it offers efficient containers and fine control over memory.'
    ],
    technical: [
      'The STL provides containers such as vector, map, unordered_map, set, stack, queue and priority_queue.',
      'References provide aliases to existing objects, while pointers store addresses and can be null.',
      'C++ supports compile-time polymorphism through overloading/templates and runtime polymorphism through virtual functions.'
    ],
    interview: 'I primarily use C++ for data structures and algorithms because the STL provides efficient containers such as vectors, maps, queues and priority queues. C++ also gives me control over references, pointers and memory, which helps me understand algorithm implementation more deeply.',
    keyPoints: ['OOP', 'STL', 'Pointers and references', 'Templates', 'Constructors and destructors', 'Virtual functions'],
    code: `vector<int> values = {1, 2, 3};\nunordered_map<string, int> frequency;\npriority_queue<int> maxHeap;`,
    followUps: ['C versus C++?', 'map versus unordered_map?', 'What is RAII?', 'Why use a virtual destructor?']
  },
  {
    id: 'python', title: 'Python', category: 'languages', short: 'Readable high-level language for rapid development.',
    simple: [
      'Python is known for concise, readable syntax.',
      'It is widely used for automation, scripting, backend development, data analysis and machine learning.',
      'It handles many low-level details such as memory management automatically.'
    ],
    technical: [
      'Python is dynamically typed and uses automatic memory management and garbage collection.',
      'Lists, dictionaries, sets and tuples are built-in high-level data structures.',
      'Python implementations commonly execute bytecode through a virtual machine, although implementation details vary.'
    ],
    interview: 'Python is a high-level language that prioritises readability and developer productivity. I have used it for programming fundamentals and data-related coursework. Its concise syntax makes it useful for quickly implementing and testing logic.',
    keyPoints: ['Dynamic typing', 'Lists and dictionaries', 'Functions', 'OOP', 'Exceptions', 'Modules'],
    followUps: ['List versus tuple?', 'What is a dictionary?', 'Python versus C++?', 'What is garbage collection?']
  },
  {
    id: 'java', title: 'Java', category: 'languages', short: 'Statically typed OOP language running on the JVM.',
    simple: [
      'Java source code is compiled into bytecode.',
      'The bytecode runs on the Java Virtual Machine, supporting platform independence.',
      'Java is commonly used for backend systems, enterprise applications and Android legacy code.'
    ],
    technical: [
      'The JVM executes bytecode and manages runtime services such as memory and garbage collection.',
      'The JRE contains the JVM and runtime libraries, while the JDK includes the tools needed to develop Java applications.',
      'Java supports classes, interfaces, inheritance, exceptions, generics and a rich collections framework.'
    ],
    interview: 'Java is a statically typed, object-oriented language. Java source code is compiled into bytecode that runs on the JVM, which provides platform independence. I have used Java while studying object-oriented programming and application-development concepts.',
    keyPoints: ['JVM, JRE and JDK', 'Classes and interfaces', 'Collections', 'Exceptions', 'Garbage collection'],
    followUps: ['JDK versus JRE versus JVM?', 'Interface versus abstract class?', 'Overloading versus overriding?']
  },
  {
    id: 'kotlin', title: 'Kotlin', category: 'languages', short: 'Modern statically typed language used for Android.',
    simple: [
      'Kotlin is a modern language developed by JetBrains and widely used for Android applications.',
      'It is interoperable with Java, so both languages can coexist in one project.',
      'It reduces boilerplate and offers built-in null-safety.'
    ],
    technical: [
      'Non-nullable types cannot normally store null, while nullable types use the question-mark syntax.',
      'val creates a read-only reference, while var creates a mutable reference.',
      'Kotlin supports data classes, extension functions, type inference and coroutines.'
    ],
    interview: 'Kotlin is a statically typed language commonly used for Android development. I used it in CareCompanion to implement application logic and screen interactions. I chose Kotlin because it has concise syntax, built-in null safety and strong interoperability with the Android ecosystem.',
    keyPoints: ['Null safety', 'val versus var', 'Data classes', 'Java interoperability', 'Coroutines'],
    code: `var name: String? = null\nval length = name?.length`,
    followUps: ['What is a nullable type?', 'val versus var?', 'What is a data class?', 'Kotlin versus Java?']
  },
  {
    id: 'html', title: 'HTML', category: 'languages', short: 'Markup language that structures webpage content.',
    simple: [
      'HTML defines the structure and meaning of webpage content.',
      'It creates headings, forms, buttons, images, links, tables and other elements.',
      'HTML is a markup language, not a programming language.'
    ],
    technical: [
      'Semantic elements such as header, nav, main, section and footer describe the purpose of content.',
      'Semantic HTML improves accessibility, search-engine understanding and maintainability.',
      'Forms use input controls and labels to collect user information.'
    ],
    interview: 'HTML is a markup language used to structure webpage content. I use semantic HTML elements to make interfaces more readable, accessible and maintainable.',
    code: `<main>\n  <section aria-labelledby="readings-title">\n    <h2 id="readings-title">Vitals history</h2>\n  </section>\n</main>`,
    followUps: ['What is semantic HTML?', 'Why are labels important?', 'div versus section?']
  },
  {
    id: 'css', title: 'CSS', category: 'languages', short: 'Styles and lays out HTML interfaces.',
    simple: [
      'CSS controls colours, fonts, spacing, layouts, animations and responsive behaviour.',
      'Flexbox is useful for one-dimensional alignment.',
      'CSS Grid is useful for layouts involving rows and columns.'
    ],
    technical: [
      'The box model consists of content, padding, border and margin.',
      'Specificity and the cascade determine which style rule is applied.',
      'Media queries adapt a layout to different viewport sizes.'
    ],
    interview: 'CSS controls the visual presentation and layout of HTML. I have used Flexbox for one-dimensional alignment and CSS Grid for layouts involving both rows and columns. I also use media queries to adapt interfaces to different screen sizes.',
    keyPoints: ['Box model', 'Flexbox', 'Grid', 'Specificity', 'Media queries', 'Positioning'],
    followUps: ['Grid versus Flexbox?', 'Explain the box model.', 'What is CSS specificity?']
  },
  {
    id: 'javascript', title: 'JavaScript', category: 'languages', short: 'Adds behaviour and interactivity to web pages.',
    simple: [
      'JavaScript handles button clicks, form validation, game logic, API calls and dynamic updates.',
      'It runs in browsers and can also run on servers through Node.js.',
      'In Puzzle Grove, it is responsible for game state, answer checking, streaks and achievements.'
    ],
    technical: [
      'JavaScript is dynamically typed and uses an event loop to coordinate asynchronous work.',
      'Promises and async/await simplify asynchronous operations such as API calls.',
      'The DOM API allows JavaScript to read and change the rendered page.'
    ],
    interview: 'JavaScript is the language responsible for browser-side behaviour. In Puzzle Grove, I used JavaScript for the game logic, user interaction, state updates and progression features.',
    keyPoints: ['let, const and var', 'Functions', 'DOM', 'Events', 'Promises', 'async/await', 'Closures', 'Event loop'],
    followUps: ['let versus const versus var?', 'What is a closure?', 'What is the event loop?', 'Promise versus async/await?']
  },
  {
    id: 'typescript', title: 'TypeScript', category: 'languages', short: 'JavaScript with compile-time type checking.',
    simple: [
      'TypeScript is a superset of JavaScript that adds static type checking.',
      'It catches many mistakes during development instead of waiting for runtime.',
      'TypeScript is compiled into JavaScript before the browser runs it.'
    ],
    technical: [
      'Interfaces and type aliases define predictable data structures.',
      'Union types, generics and type narrowing improve safety without removing JavaScript flexibility.',
      'TypeScript improves code completion, refactoring and collaboration in larger projects.'
    ],
    interview: 'TypeScript extends JavaScript with static typing. I used it in the Healthcare Vitals Tracker to define predictable structures for user data and health readings. It helped catch errors during development and made React components easier to maintain.',
    code: `interface VitalReading {\n  id: string;\n  systolic: number;\n  diastolic: number;\n  bloodSugar: number;\n  createdAt: string;\n}`,
    followUps: ['JavaScript versus TypeScript?', 'Interface versus type?', 'What are generics?']
  },
  {
    id: 'react', title: 'React', category: 'frontend', short: 'Component-based library for building user interfaces.',
    simple: [
      'React divides a user interface into reusable components.',
      'Props pass information into components, while state stores changing information.',
      'When state changes, React updates the necessary parts of the interface.'
    ],
    technical: [
      'React uses a declarative model: developers describe the desired UI for a given state.',
      'Hooks such as useState and useEffect support local state and side effects in function components.',
      'React reconciles changes between render outputs and applies required updates to the DOM.'
    ],
    interview: 'React is a component-based JavaScript library for building user interfaces. In the Healthcare Vitals Tracker, I used React to divide the application into reusable components such as the login interface, reading form and vitals-history view. State was used to manage form values, authentication status and fetched records.',
    keyPoints: ['Components', 'Props', 'State', 'Hooks', 'Conditional rendering', 'Lists and keys', 'Controlled forms'],
    code: `const [systolic, setSystolic] = useState<number>(0);`,
    followUps: ['Props versus state?', 'What is useEffect?', 'Why are keys needed?', 'Controlled versus uncontrolled components?'],
    cautions: ['Only state that you actually used in the project should be claimed.', 'React handles the UI; backend security must still be enforced separately.']
  },
  {
    id: 'vite', title: 'Vite', category: 'frontend', short: 'Fast development server and frontend build tool.',
    simple: [
      'Vite starts the local development server and prepares the project for production.',
      'It offers fast startup and Hot Module Replacement.',
      'React builds the interface; Vite runs and builds the React project.'
    ],
    technical: [
      'During development, Vite serves source modules efficiently using native ES module concepts.',
      'For production, Vite creates optimised static assets.',
      'It also processes TypeScript, CSS and imported resources through its toolchain.'
    ],
    interview: 'Vite is the development and build tool I used with React. It provides a fast development server and Hot Module Replacement, and it bundles the project into optimised static assets for production.',
    followUps: ['React versus Vite?', 'What is Hot Module Replacement?', 'Development build versus production build?']
  },
  {
    id: 'bootstrap', title: 'Bootstrap', category: 'frontend', short: 'CSS framework with responsive utilities and components.',
    simple: [
      'Bootstrap provides a responsive grid and ready-made utility classes.',
      'It speeds up interface development for forms, spacing, navigation and responsive layouts.',
      'Custom CSS is still useful so the application does not look generic.'
    ],
    technical: [
      'Bootstrap follows a breakpoint-based responsive grid system.',
      'Utility classes apply common spacing, display, flex and typography rules.',
      'Its components can be customised by overriding styles or changing Sass variables in advanced setups.'
    ],
    interview: 'Bootstrap is a CSS framework that provides a responsive grid system and reusable utility classes. I used it in Puzzle Grove to build a mobile-first layout more quickly while combining it with custom CSS for the game-specific design.',
    followUps: ['Why use Bootstrap?', 'Bootstrap versus custom CSS?', 'What are breakpoints?']
  },
  {
    id: 'responsive', title: 'Responsive Web Design', category: 'frontend', short: 'Adapts interfaces across mobile, tablet and desktop.',
    simple: [
      'Responsive design allows a website to work well at different screen sizes.',
      'A mobile-first approach begins with small screens and progressively adds larger layouts.',
      'Common tools include relative units, media queries, Flexbox, Grid and responsive images.'
    ],
    technical: [
      'Breakpoints should be based on layout needs rather than only device names.',
      'Fluid containers and flexible media prevent horizontal overflow.',
      'Touch target size, readable text and keyboard navigation are also part of usable responsive design.'
    ],
    interview: 'Responsive web design means creating an interface that adapts to different screen sizes. In Puzzle Grove, I used a mobile-first approach with Bootstrap breakpoints, CSS Grid, Flexbox and custom media queries.',
    followUps: ['What is mobile-first design?', 'Grid versus Flexbox?', 'How do you test responsiveness?']
  },
  {
    id: 'node', title: 'Node.js', category: 'backend', short: 'JavaScript runtime for server-side development.',
    simple: [
      'Node.js allows JavaScript to run outside the browser.',
      'It is commonly used for web servers, APIs, command-line tools and scripts.',
      'Node.js is a runtime, not a programming language or database.'
    ],
    technical: [
      'Node.js uses the V8 JavaScript engine and an event-driven, non-blocking I/O model.',
      'It is well suited to I/O-heavy workloads such as API requests and database operations.',
      'The package ecosystem is commonly managed through npm.'
    ],
    interview: 'Node.js is a JavaScript runtime used for server-side development. It allows the same language to be used across the frontend and backend. Its event-driven model is useful for handling API requests and other I/O-heavy operations.',
    cautions: ['Node.js is listed on the resume but is not explicitly shown in the three project stacks. Prepare a truthful example of where you used it.', 'Do not claim that Supabase is a Node.js backend you personally built.'],
    followUps: ['What is the event loop?', 'Why is Node.js good for I/O?', 'Is Node.js single-threaded?']
  },
  {
    id: 'rest', title: 'REST APIs', category: 'backend', short: 'Resource-oriented communication over HTTP.',
    simple: [
      'An API allows software systems to communicate.',
      'REST APIs organise operations around resources and HTTP methods.',
      'A frontend can request, create, update or delete backend data through endpoints.'
    ],
    technical: [
      'GET retrieves, POST creates, PUT replaces, PATCH partially updates and DELETE removes resources.',
      'HTTP status codes communicate outcomes such as 200 success, 201 created, 400 invalid request, 401 unauthenticated, 403 forbidden and 500 server error.',
      'RESTful APIs are normally stateless: each request contains the context required to process it.'
    ],
    interview: 'A REST API allows the frontend and backend to communicate through HTTP requests. Resources are identified through endpoints, and operations are performed using methods such as GET, POST, PUT and DELETE.',
    code: `GET /readings\nPOST /readings\nPATCH /readings/123\nDELETE /readings/123`,
    followUps: ['PUT versus PATCH?', '401 versus 403?', 'What does stateless mean?']
  },
  {
    id: 'authentication', title: 'Authentication', category: 'backend', short: 'Verifies who a user is.',
    simple: [
      'Authentication verifies the identity of a user.',
      'Authorisation determines what that authenticated user is allowed to access.',
      'Secure systems do not store passwords as plain text.'
    ],
    technical: [
      'A successful login normally results in a server-side session or a signed token.',
      'Protected routes improve user experience, but backend access controls provide the actual security boundary.',
      'Password hashing and token generation should be delegated to secure libraries or managed services.'
    ],
    interview: 'Authentication verifies the user’s identity. In the Healthcare Vitals Tracker, users register or log in through Supabase Authentication. After successful authentication, the application maintains the user session and permits access to that user’s health records.',
    followUps: ['Authentication versus authorisation?', 'Session versus token?', 'Why not store plain-text passwords?']
  },
  {
    id: 'supabase-auth', title: 'Supabase Authentication', category: 'backend', short: 'Managed registration, login and session service.',
    simple: [
      'Supabase Authentication handles registration, login and user sessions.',
      'It can support email/password login, magic links, password reset and social login.',
      'Using a managed service avoids implementing credential storage manually.'
    ],
    technical: [
      'Supabase Auth issues identity information that can be used with database access policies.',
      'The authenticated user ID can be associated with application records.',
      'The client can listen for authentication-state changes and restore existing sessions.'
    ],
    interview: 'I used Supabase Authentication to handle email-based registration, login and session management. This allowed me to focus on application features while using a managed authentication service rather than implementing credential storage manually.',
    followUps: ['How did you protect user-specific rows?', 'How did session restoration work?', 'What happens on logout?']
  },
  {
    id: 'sql', title: 'SQL', category: 'databases', short: 'Language for defining and querying relational data.',
    simple: [
      'SQL is used to create, read, update and delete relational data.',
      'It also supports filtering, sorting, joining and aggregation.',
      'SQL is a language; MySQL and PostgreSQL are database systems that understand it.'
    ],
    technical: [
      'SELECT retrieves data, INSERT creates rows, UPDATE changes rows and DELETE removes rows.',
      'JOIN operations combine related tables using matching columns.',
      'GROUP BY and aggregate functions such as COUNT, SUM and AVG summarise data.'
    ],
    interview: 'SQL is the language used to define, query and modify relational data. I use it for CRUD operations, filtering, joins, aggregations and defining relationships between tables.',
    code: `SELECT user_id, COUNT(*) AS reading_count\nFROM vital_readings\nGROUP BY user_id;`,
    followUps: ['INNER JOIN versus LEFT JOIN?', 'WHERE versus HAVING?', 'What is an index?']
  },
  {
    id: 'relational-db', title: 'Relational Databases', category: 'databases', short: 'Stores structured data in related tables.',
    simple: [
      'A relational database stores information in tables made of rows and columns.',
      'Primary keys uniquely identify rows.',
      'Foreign keys connect records across tables.'
    ],
    technical: [
      'Constraints enforce rules such as uniqueness, valid references and required values.',
      'Normalisation reduces unnecessary duplication and update anomalies.',
      'Transactions group related operations into a reliable unit of work.'
    ],
    interview: 'A relational database organises data into related tables. Primary keys uniquely identify rows, while foreign keys establish relationships between entities. For a health tracker, a reading can store the authenticated user’s ID as a foreign key.',
    followUps: ['Primary key versus foreign key?', 'What is normalisation?', 'What is a transaction?']
  },
  {
    id: 'mysql', title: 'MySQL', category: 'databases', short: 'Popular open-source relational database system.',
    simple: [
      'MySQL stores structured information and supports SQL queries.',
      'It is widely used in traditional web applications.',
      'It supports indexes, constraints, joins and transactions.'
    ],
    technical: [
      'Schema design determines tables, column types, keys and relationships.',
      'Indexes speed up reads but consume storage and can add write overhead.',
      'Transactions provide reliable multi-step operations when used with a transactional storage engine.'
    ],
    interview: 'MySQL is a relational database-management system that uses SQL. I have used it to learn schema design, CRUD operations, joins and relationships between tables.',
    cautions: ['MySQL is listed as a skill but not connected to a listed project. Prepare one concrete schema or exercise you implemented.'],
    followUps: ['SQL versus MySQL?', 'What is an index?', 'Explain a join you have written.']
  },
  {
    id: 'postgresql', title: 'PostgreSQL', category: 'databases', short: 'Feature-rich open-source relational database.',
    simple: [
      'PostgreSQL is the database used underneath Supabase.',
      'It stores structured health records and relationships.',
      'It is known for data integrity, standards support and advanced features.'
    ],
    technical: [
      'PostgreSQL supports transactions, constraints, JSON data, views, indexes and functions.',
      'In Supabase, Row Level Security can restrict which rows a user may access.',
      'Relational constraints can ensure that records remain connected to valid users.'
    ],
    interview: 'PostgreSQL is the relational database underlying my Healthcare Vitals Tracker through Supabase. It stores structured user-specific health readings and supports relational constraints and secure data-access rules.',
    followUps: ['PostgreSQL versus MySQL?', 'What is Row Level Security?', 'Why use a relational database here?']
  },
  {
    id: 'supabase', title: 'Supabase', category: 'databases', short: 'Backend-as-a-Service built around PostgreSQL.',
    simple: [
      'Supabase combines a hosted PostgreSQL database with authentication, APIs and other backend services.',
      'It allowed the Healthcare Vitals Tracker to store data without building a complete custom server.',
      'Supabase is more than a database; it is a managed backend platform.'
    ],
    technical: [
      'Supabase generates data APIs around PostgreSQL and provides client libraries for applications.',
      'Authentication identity can be combined with Row Level Security policies.',
      'Storage, realtime capabilities and serverless functions can be added when required.'
    ],
    interview: 'Supabase is a Backend-as-a-Service platform built on PostgreSQL. In my project, I used it for email authentication, storing health readings and connecting the React application to backend data without building a complete custom server.',
    cautions: ['Confirm whether Row Level Security was actually enabled before claiming it.', 'Frontend filtering alone is not sufficient protection for user-specific records.'],
    followUps: ['Why Supabase instead of a custom backend?', 'How did you secure records?', 'Supabase versus Firebase?']
  },
  {
    id: 'android-studio', title: 'Android Studio', category: 'android', short: 'Official IDE for Android development.',
    simple: [
      'Android Studio is where the CareCompanion application was written, run and debugged.',
      'It includes an emulator, debugger, device manager and layout tools.',
      'It integrates directly with the Gradle build system.'
    ],
    technical: [
      'Logcat displays application and system logs for debugging.',
      'The emulator simulates Android devices with different versions and screen configurations.',
      'The IDE manages Kotlin source code, Android resources, manifests and build variants.'
    ],
    interview: 'Android Studio is the IDE I used to develop CareCompanion. It provided the emulator, debugging tools, layout support and Gradle integration required to build and test the Android application.',
    followUps: ['What is Logcat?', 'Emulator versus physical device testing?', 'What is AndroidManifest.xml?']
  },
  {
    id: 'gradle', title: 'Gradle', category: 'android', short: 'Build automation and dependency management for Android.',
    simple: [
      'Gradle compiles the Kotlin code and packages the Android application.',
      'It downloads and manages libraries used by the project.',
      'Android Studio is the IDE; Gradle performs the build.'
    ],
    technical: [
      'Gradle handles build types, product flavours, dependency graphs and resource processing.',
      'Android builds may produce APK or Android App Bundle outputs.',
      'Configuration files define plugins, SDK versions and dependencies.'
    ],
    interview: 'Gradle is the build system used by Android Studio. It manages project dependencies, compiles the Kotlin code, processes resources and packages the application into an installable build.',
    followUps: ['Android Studio versus Gradle?', 'What is a dependency?', 'APK versus App Bundle?']
  },
  {
    id: 'git', title: 'Git', category: 'tools', short: 'Distributed version-control system.',
    simple: [
      'Git tracks changes made to code over time.',
      'It lets developers create branches, commit changes, merge work and recover previous versions.',
      'Each developer can have a complete local copy of the repository history.'
    ],
    technical: [
      'A commit records a snapshot and metadata such as author and parent commit.',
      'Branches are movable references to commits.',
      'Merge conflicts happen when Git cannot automatically reconcile competing changes.'
    ],
    interview: 'Git is a distributed version-control system. I use it to track code changes, create separate branches for features, commit logical updates and recover earlier versions when needed.',
    code: `git checkout -b feature/vitals-history\ngit add .\ngit commit -m "Add vitals history"\ngit push -u origin feature/vitals-history`,
    followUps: ['Merge versus rebase?', 'What is a conflict?', 'What makes a good commit?']
  },
  {
    id: 'github', title: 'GitHub', category: 'tools', short: 'Online hosting and collaboration platform for Git.',
    simple: [
      'GitHub stores Git repositories online.',
      'It provides pull requests, issues, code review and automation features.',
      'Git is the version-control system; GitHub is a platform built around Git.'
    ],
    technical: [
      'Pull requests propose changes and provide a place for review before merging.',
      'Issues track bugs, feature requests and project work.',
      'GitHub Actions can automate testing and deployment workflows.'
    ],
    interview: 'Git is the version-control system running locally, while GitHub is a cloud platform used to host and collaborate on Git repositories.',
    followUps: ['What is a pull request?', 'Git versus GitHub?', 'How do you review code?']
  },
  {
    id: 'dsa', title: 'Data Structures & Algorithms', category: 'coursework', short: 'Organising data and solving problems efficiently.',
    simple: [
      'A data structure determines how data is organised.',
      'An algorithm is a step-by-step method for solving a problem.',
      'Time and space complexity help compare the efficiency of solutions.'
    ],
    technical: [
      'Arrays, linked lists, stacks, queues, hash tables, trees, graphs and heaps support different operation patterns.',
      'Big-O notation describes how resource use grows with input size.',
      'Choosing the correct structure often reduces algorithmic complexity.'
    ],
    interview: 'Data structures determine how data is organised, while algorithms determine how a problem is solved. I evaluate solutions using time and space complexity and select structures according to the required operations.',
    followUps: ['When would you use a hash map?', 'Explain O(log n).', 'BFS versus DFS?']
  },
  {
    id: 'oop', title: 'Object-Oriented Programming', category: 'coursework', short: 'Models software using objects containing data and behaviour.',
    simple: [
      'Encapsulation groups data and methods while controlling access.',
      'Abstraction exposes essential behaviour while hiding implementation details.',
      'Inheritance reuses or extends behaviour, while polymorphism allows one interface to have multiple implementations.'
    ],
    technical: [
      'Compile-time polymorphism can be achieved through overloading, while runtime polymorphism commonly uses overriding and virtual dispatch.',
      'Composition often creates looser coupling than inheritance.',
      'Interfaces and abstract classes define contracts and shared behaviour.'
    ],
    interview: 'Object-oriented programming structures software around objects containing data and behaviour. Its main principles are encapsulation, abstraction, inheritance and polymorphism.',
    followUps: ['Overloading versus overriding?', 'Composition versus inheritance?', 'Interface versus abstract class?']
  },
  {
    id: 'os', title: 'Operating Systems', category: 'coursework', short: 'Manages hardware resources and application execution.',
    simple: [
      'An operating system manages the CPU, memory, files and devices.',
      'A process is an executing program; a thread is an execution unit inside a process.',
      'Virtual memory lets programs use an address space that may be larger than physical RAM.'
    ],
    technical: [
      'Scheduling decides which ready process or thread receives CPU time.',
      'Synchronization prevents incorrect access to shared data.',
      'Deadlock requires mutual exclusion, hold and wait, no pre-emption and circular wait.'
    ],
    interview: 'An operating system manages CPU scheduling, memory, files, devices and process execution. My coursework covered processes, threads, scheduling, synchronisation, deadlocks and virtual memory.',
    followUps: ['Process versus thread?', 'What is a deadlock?', 'Paging versus segmentation?']
  },
  {
    id: 'dbms', title: 'DBMS', category: 'coursework', short: 'Software for storing, organising and retrieving data.',
    simple: [
      'A DBMS provides controlled storage and retrieval of data.',
      'Relational DBMS concepts include tables, keys, joins and transactions.',
      'Indexes improve many reads by providing faster lookup paths.'
    ],
    technical: [
      'Atomicity, Consistency, Isolation and Durability are the ACID transaction properties.',
      'Normalisation reduces redundancy and update anomalies.',
      'Concurrency control protects correctness when multiple transactions execute together.'
    ],
    interview: 'A Database Management System stores, organises and retrieves data while providing mechanisms such as constraints, transactions, indexing and concurrency control.',
    followUps: ['Explain ACID.', 'What is normalisation?', 'Why use an index?']
  },
  {
    id: 'cn', title: 'Computer Networks', category: 'coursework', short: 'How devices and software exchange data.',
    simple: [
      'Networks allow devices and applications to communicate.',
      'HTTP is an application protocol used by web clients and servers.',
      'HTTPS adds encrypted TLS communication.'
    ],
    technical: [
      'TCP is connection-oriented and reliable, while UDP avoids connection setup and delivery guarantees.',
      'DNS translates domain names into IP addresses.',
      'Routers forward packets between networks, while switches connect devices within a local network.'
    ],
    interview: 'Computer networks allow devices and systems to exchange data. My coursework covers the OSI and TCP/IP models, HTTP and HTTPS, DNS, IP addressing, TCP versus UDP and client-server communication.',
    followUps: ['TCP versus UDP?', 'What happens when you enter a URL?', 'HTTP versus HTTPS?']
  },
  {
    id: 'se', title: 'Software Engineering', category: 'coursework', short: 'Systematic process for delivering maintainable software.',
    simple: [
      'Software engineering covers requirements, design, development, testing, deployment and maintenance.',
      'It includes teamwork, documentation, version control and change management.',
      'Agile methods deliver work incrementally and adapt to feedback.'
    ],
    technical: [
      'Requirements should be converted into testable acceptance criteria.',
      'Testing includes unit, integration, system, regression and acceptance levels.',
      'Deployment should include configuration checks, smoke tests and rollback planning.'
    ],
    interview: 'Software engineering applies systematic processes to building and maintaining software. My BuildUp Mirai experience exposed me to requirements, implementation planning, testing, issue tracking and deployment support.',
    followUps: ['What is the SDLC?', 'Agile versus waterfall?', 'What is regression testing?']
  },
  {
    id: 'ml', title: 'Machine Learning', category: 'coursework', short: 'Learns patterns from data to make predictions or decisions.',
    simple: [
      'Supervised learning uses labelled examples.',
      'Unsupervised learning finds patterns in unlabelled data.',
      'Models should be evaluated on data that was not used to train them.'
    ],
    technical: [
      'Classification predicts categories, while regression predicts continuous values.',
      'Data preprocessing may include cleaning, encoding, scaling and feature selection.',
      'Overfitting occurs when a model learns training data too specifically and generalises poorly.'
    ],
    interview: 'My machine-learning coursework introduced me to data preprocessing, supervised and unsupervised learning, model training and evaluation. It complements my Honours programme in Data Science and Analytics.',
    cautions: ['Do not claim production model deployment unless you have actually implemented it.'],
    followUps: ['Classification versus regression?', 'What is overfitting?', 'Training versus test data?']
  },
  {
    id: 'buildup', title: 'BuildUp Mirai — Project Manager', category: 'experience', short: 'Dashboard, automation, testing and delivery coordination.',
    simple: [
      'Worked on a centralised dashboard for reporting, KPI tracking and operational workflows.',
      'Translated business requirements into features, data views, user flows and implementation tasks.',
      'Coordinated testing, issue tracking, deployment support and intern mentoring.'
    ],
    technical: [
      'A business request should be converted into clear acceptance criteria, data requirements, permissions and expected behaviour.',
      'A useful issue report includes steps to reproduce, expected behaviour, actual behaviour, environment and evidence.',
      'Deployment support may include production checks, smoke testing and post-release issue tracking.'
    ],
    interview: 'At BuildUp Mirai, I worked on a centralised business dashboard used for reporting, KPI monitoring and workflow automation. My role involved understanding business requirements and converting them into clear features, data views, user flows and implementation tasks for developers. I also coordinated testing, tracked issues, supported deployment and worked across two projects simultaneously.',
    cautions: ['Present this honestly as a project-management and delivery role, not a full-time software-development role.', 'Know the actual automation platform, triggers and notification flow before the interview.'],
    followUps: ['Were you coding?', 'How did you prioritise issues?', 'Describe one workflow automation.', 'How did you test a dashboard?']
  },
  {
    id: 'ui-volunteer', title: 'U&I — Volunteer', category: 'experience', short: 'Education support, communication and coordination.',
    simple: [
      'Supported education-focused initiatives for underprivileged children.',
      'Assisted with lesson planning, classroom activities and student engagement.',
      'Helped maintain communication and coordination within the volunteer group.'
    ],
    technical: [
      'Although not a technical role, it demonstrates structured communication, responsibility and adaptability.',
      'These skills transfer to requirement discussions, teamwork and explaining technical ideas clearly.'
    ],
    interview: 'At U&I, I supported education-focused sessions for underprivileged children. I assisted with lesson planning, classroom activities and coordination. It strengthened my communication skills because I had to explain ideas clearly and adapt to different learning needs.',
    followUps: ['What did you learn?', 'How did you handle different learning needs?', 'How does this help in a technical team?']
  },
];

export const projects: Project[] = [
  {
    id: 'care-companion',
    title: 'CareCompanion',
    stack: ['Kotlin', 'Android Studio', 'Gradle'],
    purpose: 'An Android healthcare companion for daily wellness tasks, medicine management, schedules, emergency contacts and SOS support.',
    overview: 'CareCompanion is a native Android application. The resume supports that you built screens for daily schedules, medicine management, emergency contacts and wellness/SOS features, with an emphasis on clear navigation and structured UI flows.',
    flow: ['User opens an Android screen', 'Kotlin handles interactions and application logic', 'Application data or state is updated', 'The interface displays the result'],
    whyStack: [
      { label: 'Kotlin', text: 'Modern Android language with concise syntax, null safety and Java interoperability.' },
      { label: 'Android Studio', text: 'Provides the emulator, debugger, resource tools and Android project environment.' },
      { label: 'Gradle', text: 'Manages dependencies, compiles the project and packages the Android application.' },
    ],
    interviewAnswer: 'CareCompanion is a native Android healthcare-support application that I developed using Kotlin. Its purpose is to bring daily wellness-related tasks into one application, including medicine management, schedules, emergency contacts and SOS support. I focused on creating structured navigation and simple user flows so that health-related features were easy to access.',
    questions: ['How did navigation work?', 'Where was medicine data stored?', 'How did the SOS feature behave?', 'Which Android permissions were required?', 'What was the hardest UI flow to design?'],
    verify: ['Whether you used activities, fragments, intents, bottom navigation or the Navigation Component.', 'Whether data was hardcoded, held in memory, stored locally or retrieved from an API.', 'Whether SOS opened the dialler, made a call, sent a message or only displayed contacts.'],
  },
  {
    id: 'vitals-tracker',
    title: 'Healthcare Vitals Tracker',
    stack: ['React', 'TypeScript', 'Supabase', 'PostgreSQL'],
    purpose: 'A secure web platform for recording blood pressure and blood sugar readings and viewing timestamped personal history.',
    overview: 'This is the strongest full-stack project on the resume. It combines a component-based frontend, typed data, managed authentication and relational storage for user-specific health records.',
    flow: ['User registers or logs in', 'Supabase verifies the identity and restores a session', 'User submits blood pressure or blood sugar data', 'The frontend validates and sends the record', 'Supabase stores it in PostgreSQL', 'The user sees timestamped history associated with their account'],
    whyStack: [
      { label: 'React', text: 'Supports reusable, state-driven components for login, forms and history.' },
      { label: 'TypeScript', text: 'Defines predictable data structures for readings and component data.' },
      { label: 'Supabase', text: 'Provides managed authentication, data APIs and backend services.' },
      { label: 'PostgreSQL', text: 'Stores structured user-to-reading relationships with relational integrity.' },
    ],
    interviewAnswer: 'The Healthcare Vitals Tracker is a full-stack web application that allows users to securely record and review blood-pressure and blood-sugar readings. I built the frontend using React and TypeScript and used Supabase as the backend service for email authentication and PostgreSQL data storage. Each reading is timestamped and associated with the logged-in user.',
    questions: ['How did authentication work?', 'How were records associated with users?', 'Did you use Row Level Security?', 'What validation did the form perform?', 'How were timestamps generated and sorted?', 'What happened when a request failed?'],
    verify: ['Confirm whether Row Level Security was enabled and what policies existed.', 'Confirm the actual table and column names.', 'Confirm whether users could enter previous-day readings.', 'Confirm whether timestamps came from the browser or database.'],
  },
  {
    id: 'puzzle-grove',
    title: 'Puzzle Grove',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    purpose: 'A multi-game word-puzzle platform inspired by Wordle, Connections and Anagrams, with streaks and achievement progression.',
    overview: 'Puzzle Grove demonstrates browser fundamentals, responsive layout and game-state logic. JavaScript handles interactions and rules, while HTML, custom CSS and Bootstrap build the interface.',
    flow: ['User selects a game', 'JavaScript creates or loads game state', 'The user submits guesses or answers', 'Game logic checks the result', 'The interface updates attempts, score, streak or achievements', 'Progress is stored using the project’s chosen persistence method'],
    whyStack: [
      { label: 'HTML', text: 'Provides semantic structure for screens, controls and game content.' },
      { label: 'CSS', text: 'Creates layouts, game boards, visual feedback and responsive behaviour.' },
      { label: 'JavaScript', text: 'Implements game rules, event handling, state and progression.' },
      { label: 'Bootstrap', text: 'Speeds up responsive layout and common interface styling.' },
    ],
    interviewAnswer: 'Puzzle Grove is a browser-based word-puzzle platform containing multiple games inspired by Wordle, Connections and Anagrams. I used HTML for structure, CSS and Bootstrap for the responsive interface, and JavaScript for the game rules, interaction handling, session state, streaks and achievements.',
    questions: ['Where was progress stored?', 'How did the streak algorithm work?', 'Was authentication server-backed or client-side?', 'How did the different games share common logic?', 'How did you make the layout mobile-first?'],
    verify: ['Identify whether authentication used a backend service, localStorage, sessionStorage or a simulation.', 'Do not describe browser-only persistence as production-secure authentication.', 'Know exactly what causes a streak to increase, reset or remain unchanged.'],
  },
];

export const interviewBank = [
  'Tell me about yourself.',
  'Walk me through the Healthcare Vitals Tracker end to end.',
  'Why did you choose React and TypeScript?',
  'What is the difference between authentication and authorisation?',
  'How did you ensure one user could not see another user’s health data?',
  'What is Row Level Security?',
  'Why use PostgreSQL for health readings?',
  'What is the difference between SQL and MySQL?',
  'Explain props and state in React.',
  'What does useEffect do?',
  'What is the difference between React and Vite?',
  'How does JavaScript handle asynchronous work?',
  'Explain the event loop in simple terms.',
  'What is the difference between JavaScript and TypeScript?',
  'What is REST and what do the main HTTP methods mean?',
  'What is the difference between 401 and 403?',
  'Explain Git versus GitHub.',
  'Describe a merge conflict and how you resolved one.',
  'Why did you use Kotlin for CareCompanion?',
  'What is null safety in Kotlin?',
  'What does Gradle do?',
  'How did you structure navigation in CareCompanion?',
  'How did Puzzle Grove store sessions and progress?',
  'Explain CSS Grid versus Flexbox.',
  'What is mobile-first design?',
  'Were you coding at BuildUp Mirai?',
  'Describe one requirement you translated into a technical task.',
  'How did you document and prioritise issues?',
  'Explain one challenge, your approach and the result.',
  'What would you improve in each project?'
];

export const quizQuestions: QuizQuestion[] = [
  { id: 'q1', category: 'Frontend', question: 'What is React primarily responsible for?', options: ['Database storage', 'Building user interfaces', 'Compiling Kotlin', 'Managing Git repositories'], answer: 1, explanation: 'React is a component-based library for building user interfaces.' },
  { id: 'q2', category: 'Frontend', question: 'What does TypeScript add to JavaScript?', options: ['A database', 'Static type checking', 'An Android emulator', 'HTTP encryption'], answer: 1, explanation: 'TypeScript adds compile-time type checking and related tooling.' },
  { id: 'q3', category: 'Backend', question: 'Which HTTP method is normally used to create a resource?', options: ['GET', 'POST', 'DELETE', 'HEAD'], answer: 1, explanation: 'POST is commonly used to create a new resource.' },
  { id: 'q4', category: 'Security', question: 'What does authentication answer?', options: ['What are you allowed to do?', 'Who are you?', 'How fast is the query?', 'Where is the file stored?'], answer: 1, explanation: 'Authentication verifies identity; authorisation determines permissions.' },
  { id: 'q5', category: 'Database', question: 'What is the purpose of a primary key?', options: ['Style a table', 'Uniquely identify a row', 'Encrypt a password', 'Start a server'], answer: 1, explanation: 'A primary key uniquely identifies each row in a table.' },
  { id: 'q6', category: 'Database', question: 'Which database underlies Supabase?', options: ['MongoDB', 'PostgreSQL', 'SQLite only', 'Redis'], answer: 1, explanation: 'Supabase is built around PostgreSQL.' },
  { id: 'q7', category: 'Android', question: 'What is Gradle used for?', options: ['Designing logos', 'Building projects and managing dependencies', 'Writing SQL only', 'Hosting Git repositories'], answer: 1, explanation: 'Gradle automates builds and manages project dependencies.' },
  { id: 'q8', category: 'Tools', question: 'What is the difference between Git and GitHub?', options: ['There is no difference', 'Git is version control; GitHub hosts and collaborates on Git repositories', 'Git is a language; GitHub is a database', 'Git is only for Android'], answer: 1, explanation: 'Git tracks versions; GitHub is an online collaboration platform built around Git.' },
  { id: 'q9', category: 'CSS', question: 'Which layout system is generally best for two-dimensional rows and columns?', options: ['CSS Grid', 'A Java loop', 'SQL JOIN', 'Gradle'], answer: 0, explanation: 'CSS Grid is designed for two-dimensional layouts.' },
  { id: 'q10', category: 'JavaScript', question: 'Which declaration should generally be preferred when reassignment is not needed?', options: ['var', 'const', 'goto', 'static'], answer: 1, explanation: 'const communicates that the binding should not be reassigned.' },
  { id: 'q11', category: 'OS', question: 'A thread is best described as:', options: ['A database table', 'An execution unit within a process', 'A CSS selector', 'A Git remote'], answer: 1, explanation: 'Threads are execution units within a process and usually share process resources.' },
  { id: 'q12', category: 'Networks', question: 'What does HTTPS add to HTTP?', options: ['Database indexing', 'Encrypted TLS communication', 'A new programming language', 'Android packaging'], answer: 1, explanation: 'HTTPS protects HTTP communication using TLS.' },
];

export const resumeChecks = [
  'Node.js is listed, but no listed project explicitly uses it. Prepare one truthful use case.',
  'MySQL is listed, but no listed project demonstrates it. Prepare a schema, CRUD example and join.',
  'Java and Python appear as skills without project evidence. Describe your actual academic or problem-solving level.',
  'Confirm exactly how Puzzle Grove authentication and session management work.',
  'Confirm whether Supabase Row Level Security protects Healthcare Vitals Tracker records.',
  'Confirm where CareCompanion data is stored and how SOS behaves.',
  'Know the exact automation tool and trigger flow used at BuildUp Mirai.'
];
