import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const interviewRounds = [
  { key: "aptitude", name: "Aptitude Round", label: "Round 1", description: "Logic, reasoning and problem solving." },
  { key: "coding", name: "Coding Round", label: "Round 2", description: "Algorithm design and implementation." },
  { key: "technical", name: "Technical Round", label: "Round 3", description: "Architecture and technical depth." },
  { key: "teamlead", name: "Team Lead Round", label: "Round 4", description: "Leadership and collaboration." },
  { key: "hr", name: "HR Round", label: "Round 5", description: "Culture fit and communication." },
  { key: "manager", name: "Manager Round", label: "Final Round", description: "Strategy, vision and leadership." },
];

const interviewTypes = [
  {
    id: "hr",
    name: "HR Interview",
    description: "Behavioral, culture and fit questions.",
    icon: "👥",
    difficulty: "Easy",
    questionsByRound: {
      aptitude: [
        "Tell me about a time you overcame a challenge at work.",
        "How do you prioritize tasks when your workload is heavy?",
        "What motivates you to perform at your best?",
        "Describe a situation when you had to adapt quickly.",
        "How do you handle conflicting feedback from stakeholders?",
      ],
      coding: [
        "How would you explain the recruitment process from candidate view?",
        "What are the most important skills for your role?",
        "How do you prepare before an important interview?",
        "Describe your approach to problem solving in a team.",
        "How do you balance speed and quality in your work?",
      ],
      technical: [
        "What does accountability mean to you in a team?",
        "How do you measure the success of a project you worked on?",
        "Explain a time when feedback helped you improve.",
        "What is your strategy for building strong relationships at work?",
        "How do you handle stressful deadlines professionally?",
      ],
      teamlead: [
        "How would you coach a junior employee with low confidence?",
        "Describe a time when you resolved a conflict within a team.",
        "How do you inspire a team through a difficult sprint?",
        "What is your approach to mentoring and career growth?",
        "How do you ensure your team remains aligned with company strategy?",
      ],
      hr: [
        "Why are you interested in our company?",
        "What makes you a strong cultural fit for this organization?",
        "How do you keep learning in your career?",
        "Describe a difficult conversation you had and how you handled it.",
        "What are your goals for the next two years?",
      ],
      manager: [
        "How would you set priorities for your team during a product launch?",
        "What leadership qualities do you value most?",
        "How do you make decisions under uncertainty?",
        "Describe a time when you influenced stakeholders to support a vision.",
        "How do you balance business needs and team wellbeing?",
      ],
    },
  },
  {
    id: "technical",
    name: "Technical Interview",
    description: "Core systems, architecture and engineering questions.",
    icon: "💻",
    difficulty: "Medium",
    questionsByRound: {
      aptitude: [
        "Explain the difference between a process and a thread.",
        "What is the tradeoff between latency and throughput?",
        "How do you approach debugging a production incident?",
        "What is a race condition and how do you prevent it?",
        "Why do we use caching in distributed systems?",
      ],
      coding: [
        "How would you design a URL shortening service?",
        "Describe an efficient data structure for autocomplete.",
        "How do you implement pagination for a large dataset?",
        "What is the best way to validate user input on backend services?",
        "How do you safely deploy a database migration?",
      ],
      technical: [
        "Explain microservices and their benefits.",
        "What is eventual consistency?",
        "How do you design an API for real-time chat?",
        "Describe how load balancers distribute traffic.",
        "What is the CAP theorem?",
      ],
      teamlead: [
        "How do you ensure code quality across many teams?",
        "Describe your approach to architectural review.",
        "How do you mentor a team through a technical redesign?",
        "What metrics do you track for system reliability?",
        "How do you balance technical debt vs feature delivery?",
      ],
      hr: [
        "How do you communicate complex technical ideas to non-technical teammates?",
        "Describe a time when you built trust with a stakeholder.",
        "What do you do when project scope changes midway?",
        "How do you keep your team motivated during hard work?",
        "What does ownership mean in a technical role?",
      ],
      manager: [
        "How would you align engineering goals with business strategy?",
        "How do you evaluate the success of a new product feature?",
        "Describe a time you led change across departments.",
        "How do you handle resource constraints in a delivery plan?",
        "What is your framework for hiring strong technical talent?",
      ],
    },
  },
  {
    id: "frontend",
    name: "Frontend Interview",
    description: "UI engineering, React, performance and browser behavior.",
    icon: "🌐",
    difficulty: "Medium",
    questionsByRound: {
      aptitude: [
        "Explain how the browser renders a web page.",
        "What are key accessibility considerations for UI?",
        "How do you optimize load performance for a website?",
        "Why is responsive design important?",
        "What is the critical rendering path?",
      ],
      coding: [
        "How would you build a dynamic form with validation?",
        "Describe how you would implement drag and drop in React.",
        "How do you manage component state for a dashboard?",
        "How would you optimize rendering for a large list?",
        "How do you approach styling a complex UI component?",
      ],
      technical: [
        "Explain the virtual DOM and reconciliation.",
        "How does useEffect differ from useMemo?",
        "What is a closure and why is it useful in JavaScript?",
        "How do web workers improve performance?",
        "Describe how to prevent memory leaks in a single-page app.",
      ],
      teamlead: [
        "How do you coordinate UI direction with designers?",
        "What process do you use to review frontend architecture?",
        "How do you keep frontend code maintainable as it scales?",
        "Describe your approach to automated UI testing.",
        "How do you mentor teammates on React best practices?",
      ],
      hr: [
        "How do you explain the value of frontend quality to a product manager?",
        "Describe a time you navigated feedback from multiple stakeholders.",
        "How do you prioritize usability improvements?",
        "What do you do when design and feasibility conflict?",
        "How do you handle communication during a tight sprint?",
      ],
      manager: [
        "How would you plan a frontend migration project?",
        "What metrics do you use to measure user experience?",
        "How do you ensure frontend stability during a release?",
        "Describe your approach to building a strong frontend team.",
        "How do you balance innovation with engineering risk?",
      ],
    },
  },
  {
    id: "backend",
    name: "Backend Interview",
    description: "APIs, architecture and scalable systems.",
    icon: "⚙️",
    difficulty: "Hard",
    questionsByRound: {
      aptitude: [
        "What is a RESTful API?",
        "How do you secure data in a web service?",
        "What are the benefits of asynchronous processing?",
        "How do you choose a database for a new feature?",
        "What is the difference between SQL and NoSQL?",
      ],
      coding: [
        "How would you design a rate limiter for an API?",
        "Describe how to build a background job system.",
        "How do you handle schema changes in production?",
        "What pattern would you use for event-driven workflows?",
        "How do you implement retries for transient failures?",
      ],
      technical: [
        "Explain caching strategies for APIs.",
        "What is horizontal scaling?",
        "How do you monitor service health in production?",
        "Describe circuit breaker patterns.",
        "How do you guarantee data consistency across services?",
      ],
      teamlead: [
        "How do you design API versioning for long-term stability?",
        "Describe your approach to incident retrospectives.",
        "How do you mentor backend developers on system design?",
        "How do you manage technical debt in a service architecture?",
        "What is your strategy for cross-team coordination?",
      ],
      hr: [
        "How do you communicate service limitations to product partners?",
        "Describe a time you had to say no to a feature request.",
        "How do you stay motivated during long backend projects?",
        "What collaboration tools help your backend team work better?",
        "How do you share technical knowledge across teams?",
      ],
      manager: [
        "How would you align backend roadmaps with business goals?",
        "What KPIs matter most for a backend platform?",
        "Describe a time you led a reliability initiative.",
        "How do you evaluate vendor vs self-built infrastructure?",
        "What is your approach to hiring strong backend engineers?",
      ],
    },
  },
  {
    id: "react",
    name: "React JS Interview",
    description: "React internals, hooks and component design.",
    icon: "⚛️",
    difficulty: "Medium",
    questionsByRound: {
      aptitude: [
        "What happens during a React render cycle?",
        "How does component re-rendering work?",
        "Why is key important in lists?",
        "How do you avoid prop drilling?",
        "What is the difference between controlled and uncontrolled inputs?",
      ],
      coding: [
        "How would you build a modal component in React?",
        "Describe how to implement a custom hook.",
        "How do you manage form state in a React app?",
        "How would you optimize a React component tree?",
        "What is the best way to load data in a React page?",
      ],
      technical: [
        "Explain useMemo and useCallback.",
        "What is concurrent mode?",
        "How does React context work?",
        "What is reconciliation?",
        "How do you handle side effects in React?",
      ],
      teamlead: [
        "How do you lead a React migration?",
        "What architecture patterns work well for React teams?",
        "How do you establish reusable component libraries?",
        "How do you ensure React applications remain maintainable?",
        "How do you coach teammates on React performance?",
      ],
      hr: [
        "How do you explain React concepts to non-engineers?",
        "Describe a time you fixed a difficult React bug.",
        "How do you keep learning about React updates?",
        "What is your process for reviewing React pull requests?",
        "How do you handle disagreements about UI implementation?",
      ],
      manager: [
        "How would you measure the success of a React product?",
        "What is your approach to building scalable frontend teams?",
        "How do you balance UX and technical complexity in React apps?",
        "Describe your strategy for large-scale component reuse.",
        "How do you align React development with product strategy?",
      ],
    },
  },
  {
    id: "python",
    name: "Python Interview",
    description: "Python design, scripting and system automation.",
    icon: "🐍",
    difficulty: "Medium",
    questionsByRound: {
      aptitude: [
        "How do you manage dependencies in a Python project?",
        "What is the difference between list and tuple?",
        "How do you handle exceptions in Python?",
        "Why is PEP8 important?",
        "Explain duck typing.",
      ],
      coding: [
        "How would you implement a command-line tool in Python?",
        "Describe a script that parses a log file into structured records.",
        "How do you manage concurrency in Python?",
        "How would you build a REST endpoint with Flask?",
        "What is your approach to testing Python code?",
      ],
      technical: [
        "Explain generators and iterators.",
        "How does Python garbage collection work?",
        "What is the difference between shallow and deep copy?",
        "Describe how decorators work.",
        "How do you profile Python performance?",
      ],
      teamlead: [
        "How do you drive adoption of Python best practices?",
        "What is your approach to code review in Python teams?",
        "How do you prioritize technical work for Python services?",
        "How do you keep your team aligned with Python standards?",
        "Describe a time you improved Python system reliability.",
      ],
      hr: [
        "How do you keep your Python knowledge current?",
        "Describe a time you solved a hard bug in production.",
        "What do you enjoy most about Python development?",
        "How do you explain a technical concept clearly?",
        "How do you work with teammates in cross-functional projects?",
      ],
      manager: [
        "How would you scale a Python-based platform?",
        "What metrics matter for Python service health?",
        "How do you evaluate library and framework choices?",
        "What is your strategy for maintaining Python systems?",
        "How do you hire strong Python engineers?",
      ],
    },
  },
  {
    id: "dsa",
    name: "DSA Interview",
    description: "Algorithms, data structures and complexity.",
    icon: "🧠",
    difficulty: "Hard",
    questionsByRound: {
      aptitude: [
        "Explain time complexity and space complexity.",
        "What is the difference between an array and a linked list?",
        "How does a binary search work?",
        "When would you use a hash map?",
        "Explain recursion with an example.",
      ],
      coding: [
        "How would you reverse a linked list?",
        "Describe an algorithm to detect a cycle in a graph.",
        "How do you find the kth largest element in an array?",
        "How would you implement breadth-first search?",
        "What is the optimal way to merge two sorted arrays?",
      ],
      technical: [
        "Explain dynamic programming and when to use it.",
        "What is a priority queue?",
        "How do greedy algorithms differ from DP?",
        "Describe how to balance a binary search tree.",
        "What are the strengths of divide-and-conquer?",
      ],
      teamlead: [
        "How do you help teammates improve algorithmic thinking?",
        "What is your process for reviewing algorithm designs?",
        "How do you choose a data structure for a new feature?",
        "Describe a time you simplified a complex implementation.",
        "How do you ensure algorithmic code stays maintainable?",
      ],
      hr: [
        "How do you explain algorithmic tradeoffs in plain language?",
        "Describe a time you solved a difficult technical challenge.",
        "How do you approach learning new algorithm patterns?",
        "What motivates you to improve your coding skills?",
        "How do you stay composed during challenging interviews?",
      ],
      manager: [
        "How do you evaluate candidate technical depth for DSA roles?",
        "What KPIs matter for a high-performing engineering team?",
        "How do you build a culture of strong problem solving?",
        "Describe a time you drove technical excellence across teams.",
        "How do you balance speed and correctness in algorithms?",
      ],
    },
  },
  {
    id: "startup",
    name: "Startup Interview",
    description: "High-growth, product-minded and hustle questions.",
    icon: "🚀",
    difficulty: "Hard",
    questionsByRound: {
      aptitude: [
        "How would you build a minimum viable product?",
        "What does product-market fit mean to you?",
        "How do you prioritize the first features?",
        "Describe how you validate an idea quickly.",
        "How do you handle uncertainty in a startup?",
      ],
      coding: [
        "How would you architect a fast MVP with limited resources?",
        "What would you optimize first in a startup product?",
        "How do you keep code simple while shipping quickly?",
        "What is your process for building a customer-facing feature?",
        "How do you manage technical risk in a young product?",
      ],
      technical: [
        "What is the role of instrumentation in early-stage products?",
        "How do you decide between building and buying a tool?",
        "Describe how to design a feature for rapid iteration.",
        "How do you keep a startup platform reliable on low budget?",
        "What does scalable architecture mean in a startup context?",
      ],
      teamlead: [
        "How do you build trust in a small team?",
        "Describe your approach to cross-functional collaboration.",
        "How do you balance ownership and speed?",
        "What leadership style works best in startups?",
        "How do you keep the team aligned on mission?",
      ],
      hr: [
        "How do you present your experience to a startup founder?",
        "What attracts you to working in a startup?",
        "How do you adapt to changing priorities?",
        "What personal strengths make you a good startup hire?",
        "How do you handle startup pressure and ambiguity?",
      ],
      manager: [
        "How would you scale a startup engineering team?",
        "What qualities do you look for in early hires?",
        "How do you set the technical direction for a new product?",
        "Describe how you allocate time between strategy and execution.",
        "How do you keep the team focused during a growth phase?",
      ],
    },
  },
  {
    id: "product",
    name: "Product Company Interview",
    description: "Strategy, product thinking and execution.",
    icon: "📦",
    difficulty: "Medium",
    questionsByRound: {
      aptitude: [
        "How do you identify the right problem to solve?",
        "What makes a product experience feel polished?",
        "How do you measure feature success?",
        "What is the role of user feedback in product design?",
        "How do you balance business goals with user needs?",
      ],
      coding: [
        "How would you implement a fast product analytics dashboard?",
        "How do you design a resilient event tracking flow?",
        "What would you build to improve user onboarding?",
        "How do you make a product feature easy to iterate on?",
        "How do you architect a cross-platform experience?",
      ],
      technical: [
        "How do you support product metrics with technical infrastructure?",
        "What are the key tradeoffs in platform design?",
        "How do you ensure product reliability at scale?",
        "Describe a system that supports personalized user experiences.",
        "How do you enable fast experiment cycles?",
      ],
      teamlead: [
        "How do you align engineering execution with product strategy?",
        "How do you lead product launches across teams?",
        "What is your process for prioritizing product backlog?",
        "How do you collaborate with product managers effectively?",
        "How do you build empathy across engineering and product?",
      ],
      hr: [
        "How do you explain complex product decisions to non-technical stakeholders?",
        "What is your approach to cross-team communication?",
        "How do you manage expectations around delivery timelines?",
        "Describe a time you turned customer feedback into a better product.",
        "What motivates you about product company work?",
      ],
      manager: [
        "How do you set product strategy for a large engineering effort?",
        "What metrics define success for your team?",
        "How do you support experimentation while managing risk?",
        "How do you hire for a product-focused engineering culture?",
        "Describe how you scale product and engineering together.",
      ],
    },
  },
];

const avatars = [
  { id: "human", label: "Ava", icon: "🧑‍💼", theme: "Human-like AI interviewer" },
];

const storageKey = "aiInterviewProgress";

function Interview() {
  const navigate = useNavigate();
  const { darkMode, recordInterviewSession, completeDailyChallenge } = useContext(AppContext);
  const recognitionRef = useRef(null);

  const [selectedInterviewType, setSelectedInterviewType] = useState(null);
  const [selectedAvatar, setSelectedAvatar] = useState("human");
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [microphoneEnabled, setMicrophoneEnabled] = useState(true);
  const [selectedVoice, setSelectedVoice] = useState("default");
  const [selectedDifficulty, setSelectedDifficulty] = useState("Medium");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [started, setStarted] = useState(false);
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0);
  const [roundStatus, setRoundStatus] = useState(interviewRounds.map((round) => ({ key: round.key, status: "unlocked" })));
  const [askedQuestions, setAskedQuestions] = useState([]);
  const [questionHistory, setQuestionHistory] = useState([]);
  const [activeQuestion, setActiveQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [transcript, setTranscript] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [sessionAnswers, setSessionAnswers] = useState([]);
  const [report, setReport] = useState(null);
  const [feedbackNotes, setFeedbackNotes] = useState([]);

  const recognitionSupported = useMemo(() => {
    return typeof window !== "undefined" && Boolean(window.SpeechRecognition || window.webkitSpeechRecognition);
  }, []);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.lang = selectedDifficulty === "Hard" ? "en-US" : "en-GB";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const transcriptText = event.results[0][0].transcript;
      setTranscript(transcriptText);
      setAnswer(transcriptText);
      setIsRecording(false);
    };

    recognition.onerror = () => {
      setIsRecording(false);
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    recognitionRef.current = recognition;
  }, [selectedDifficulty]);

  useEffect(() => {
    if (!selectedInterviewType) return;
    const saved = JSON.parse(localStorage.getItem(storageKey) || "null");
    if (saved && saved.interviewId === selectedInterviewType.id) {
      setCurrentRoundIndex(saved.currentRoundIndex || 0);
      setRoundStatus(saved.roundStatus || roundStatus);
      setAskedQuestions(saved.askedQuestions || []);
      setQuestionHistory(saved.questionHistory || []);
      setSessionAnswers(saved.sessionAnswers || []);
      setSelectedAvatar(saved.selectedAvatar || "male");
      setSelectedDifficulty(saved.selectedDifficulty || "Medium");
      setStarted(saved.started || false);
      if (saved.activeQuestion) {
        setActiveQuestion(saved.activeQuestion);
      }
    }
  }, [selectedInterviewType]);

  useEffect(() => {
    if (!selectedInterviewType) return;
    localStorage.setItem(
      storageKey,
      JSON.stringify({
        interviewId: selectedInterviewType.id,
        currentRoundIndex,
        roundStatus,
        askedQuestions,
        questionHistory,
        sessionAnswers,
        selectedAvatar,
        selectedDifficulty,
        started,
        activeQuestion,
      })
    );
  }, [selectedInterviewType, currentRoundIndex, roundStatus, askedQuestions, questionHistory, sessionAnswers, selectedAvatar, selectedDifficulty, started, activeQuestion]);

  const speak = (text) => {
    if (!soundEnabled || typeof window === "undefined" || !window.speechSynthesis) return;
    const voices = window.speechSynthesis.getVoices();
    const utterance = new SpeechSynthesisUtterance(text);
    const voicePreference = selectedVoice === "deep" ? "google us english" : selectedVoice === "bright" ? "google uk english" : "";
    const preferredVoice = voices.find((voice) => voicePreference && voice.name.toLowerCase().includes(voicePreference)) || voices.find((voice) => voice.lang.includes("en")) || voices[0];
    if (preferredVoice) utterance.voice = preferredVoice;
    utterance.rate = 1.05;
    utterance.pitch = selectedVoice === "deep" ? 0.92 : selectedVoice === "bright" ? 1.18 : 1;
    utterance.lang = preferredVoice?.lang || "en-US";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  const loadQuestion = (roundIndex) => {
    if (!selectedInterviewType) return "";
    const roundKey = interviewRounds[roundIndex].key;
    const pool = selectedInterviewType.questionsByRound[roundKey] || [];
    const available = pool.filter((question) => !questionHistory.includes(question));
    if (!available.length) return pool[Math.floor(Math.random() * pool.length)] || "";
    return available[Math.floor(Math.random() * available.length)];
  };

  const chooseQuestion = (roundIndex) => {
    const question = loadQuestion(roundIndex);
    if (!question) return "";
    setQuestionHistory((prev) => [...prev, question]);
    setAskedQuestions((prev) => [...prev, question]);
    return question;
  };

  const resetInterview = () => {
    setStarted(false);
    setCurrentRoundIndex(0);
    setRoundStatus(interviewRounds.map((round) => ({ key: round.key, status: "unlocked" })));
    setAskedQuestions([]);
    setQuestionHistory([]);
    setActiveQuestion(""
    );
    setAnswer("");
    setTranscript("");
    setAnalysis("");
    setSessionAnswers([]);
    setReport(null);
    setFeedbackNotes([]);
  };

  const beginInterview = () => {
    if (!selectedInterviewType) return;
    resetInterview();
    const firstQuestion = chooseQuestion(0);
    setActiveQuestion(firstQuestion);
    setStarted(true);
    setAnalysis("");
    setAnswer("");
    setTranscript("");
    speak(`Hi, I'm ${avatars[0].label}. I am your human-like AI interviewer. I will ask each question clearly, and you can answer by voice or text. Let's begin with: ${firstQuestion}`);
  };

  const startVoiceInput = () => {
    if (!recognitionRef.current || !microphoneEnabled) return;
    setTranscript("");
    setAnswer("");
    setIsRecording(true);
    recognitionRef.current.start();
  };

  const getKeywords = (question) => {
    const normalized = question.toLowerCase();
    if (normalized.includes("react")) return ["hooks", "state", "component", "virtual dom", "props"];
    if (normalized.includes("python")) return ["python", "script", "module", "function", "library"];
    if (normalized.includes("backend")) return ["api", "server", "database", "service", "scaling"];
    if (normalized.includes("frontend")) return ["ui", "performance", "browser", "css", "javascript"];
    if (normalized.includes("team")) return ["leadership", "communication", "decision", "collaboration", "vision"];
    return ["experience", "solution", "approach", "impact", "results"];
  };

  const getRequiredQuestionsPerRound = () => {
    if (selectedDifficulty === "Hard") return 5;
    if (selectedDifficulty === "Medium") return 4;
    return 3;
  };

  const evaluateAnswer = (text, question) => {
    const cleaned = text.trim().toLowerCase();
    const keywords = getKeywords(question);
    const matches = keywords.reduce((count, keyword) => count + (cleaned.includes(keyword.toLowerCase()) ? 1 : 0), 0);
    const depth = Math.min(10, Math.floor(cleaned.split(" ").length / 5));
    const score = Math.min(10, matches * 2 + depth);
    const feedback = score >= 7
      ? "Strong answer. You included important context and structure."
      : "Your response needs more detail and real examples. I will help you correct it now.";

    const correction = score < 7
      ? `A stronger response would include ${keywords.slice(0, 3).join(", ")} and explain why that approach works in practice.`
      : "Great answer — keep going with that clarity.";

    const suggestions = [];
    if (!cleaned) {
      suggestions.push("Try speaking or typing a complete answer.");
    }
    if (matches < 2) {
      suggestions.push(`Mention phrases like ${keywords.slice(0, 3).join(", ")} to strengthen the answer.`);
    }

    return {
      score,
      feedback,
      correction,
      suggestions,
      followUp: `Can you expand on how you would apply this in a real project?`,
    };
  };

  const submitAnswer = () => {
    if (!activeQuestion) return;

    const responseText = answer || transcript || "";
    const result = evaluateAnswer(responseText, activeQuestion);
    const entry = {
      question: activeQuestion,
      answer: responseText || "No response",
      score: result.score,
      feedback: result.feedback,
      suggestions: result.suggestions,
      round: interviewRounds[currentRoundIndex].name,
    };

    const updatedSession = [...sessionAnswers, entry];
    setSessionAnswers(updatedSession);
    setAnalysis(`${result.feedback}${result.correction ? " " + result.correction : ""}`);
    setFeedbackNotes([...(result.correction ? [result.correction] : []), ...result.suggestions]);

    if (result.score < 7) {
      setAnswer("");
      setTranscript("");
      speak(`${result.feedback} ${result.correction} Please try again on the same question.`);
      return;
    }

    speak(`${result.feedback} ${result.correction} ${result.followUp}`);

    const currentRoundAnswers = updatedSession.filter((item) => item.round === interviewRounds[currentRoundIndex].name);
    const requiredQuestions = getRequiredQuestionsPerRound();
    const shouldEndRound = currentRoundAnswers.length >= requiredQuestions;

    if (shouldEndRound) {
      const roundAverage = Math.round(currentRoundAnswers.reduce((sum, item) => sum + item.score, 0) / currentRoundAnswers.length);
      const passed = roundAverage >= 6;
      setRoundStatus((prev) => prev.map((round, index) => {
        if (index === currentRoundIndex) {
          return { ...round, status: passed ? "passed" : "unlocked" };
        }
        if (index === currentRoundIndex + 1 && passed) {
          return { ...round, status: "unlocked" };
        }
        return round;
      }));

      if (passed && currentRoundIndex < interviewRounds.length - 1) {
        setTimeout(() => {
          const nextRound = currentRoundIndex + 1;
          setCurrentRoundIndex(nextRound);
          const nextQuestion = chooseQuestion(nextRound);
          setActiveQuestion(nextQuestion);
          setAnswer("");
          setTranscript("");
          setAnalysis(`Great work! You passed this round. Next question: ${nextQuestion}`);
          speak(`Great work. You unlocked ${interviewRounds[nextRound].name}. ${nextQuestion}`);
        }, 1800);
      } else if (passed) {
        setTimeout(() => {
          const generated = generateReport(updatedSession);
          setReport(generated);
          recordInterviewSession(generated);
          completeDailyChallenge();
          speak("Interview complete. Your performance report is ready.");
        }, 1800);
      } else {
        setAnalysis("You reached the end of the round. Review your feedback, then retry this round for a stronger result.");
        speak("This round needs improvement. Please review the feedback and try again.");
      }
    } else {
      const nextQuestion = chooseQuestion(currentRoundIndex);
      setActiveQuestion(nextQuestion);
      setAnswer("");
      setTranscript("");
      setAnalysis(`Nice answer. Next question: ${nextQuestion}`);
      speak(`Next question: ${nextQuestion}`);
    }
  };

  const generateReport = (answers) => {
    const totalAnswers = answers.length;
    const averageScore = totalAnswers ? Math.round((answers.reduce((sum, item) => sum + item.score, 0) / (totalAnswers * 10)) * 100) : 0;
    const communicationScore = Math.min(100, averageScore + 12);
    const technicalScore = Math.min(100, averageScore + 8);
    const confidenceScore = Math.min(100, averageScore + 10);
    const leadershipScore = Math.min(100, averageScore + 7);
    const fluencyScore = Math.min(100, averageScore + 9);
    const problemSolvingScore = Math.min(100, averageScore + 6);

    const weakAreas = answers
      .filter((item) => item.score < 6)
      .map((item) => item.question)
      .slice(0, 4);

    return {
      interviewType: selectedInterviewType.name,
      summary: `You completed ${selectedInterviewType.name} with a ${averageScore}% performance score.`,
      communicationScore,
      technicalScore,
      confidenceScore,
      leadershipScore,
      fluencyScore,
      problemSolvingScore,
      weakAreas: weakAreas.length ? weakAreas : ["Keep building structured answers."],
      recommendations: [
        "Add specific examples when answering questions.",
        "Use technical terminology clearly.",
        "Practice your answer structure before the interview.",
      ],
      details: answers,
      timestamp: new Date().toLocaleString(),
    };
  };

  const downloadReport = () => {
    if (!report) return;
    const lines = [
      `AI Interview Performance Report`,
      `Date: ${report.timestamp}`,
      `Interview: ${report.interviewType}`,
      `Summary: ${report.summary}`,
      `Communication: ${report.communicationScore}%`,
      `Technical: ${report.technicalScore}%`,
      `Confidence: ${report.confidenceScore}%`,
      `Leadership: ${report.leadershipScore}%`,
      `Fluency: ${report.fluencyScore}%`,
      `Problem Solving: ${report.problemSolvingScore}%`,
      `Weak Areas: ${report.weakAreas.join(", ")}`,
      `Recommendations: ${report.recommendations.join(", ")}`,
      "",
      "Detailed Answers:",
      ...report.details.map((item, index) =>
        `${index + 1}. ${item.round} | ${item.question} | Score: ${item.score} | Answer: ${item.answer}`
      ),
    ];

    const blob = new Blob([lines.join("\n")], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "ai-interview-report.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resetTypeSelection = () => {
    setSelectedInterviewType(null);
    resetInterview();
  };

  return (
    <div
      style={{
        ...styles.container,
        background: darkMode
          ? "radial-gradient(circle at top left, rgba(56, 189, 248, 0.15), transparent 30%), linear-gradient(145deg, #04091e 0%, #111827 100%)"
          : "radial-gradient(circle at top left, rgba(59, 130, 246, 0.18), transparent 25%), linear-gradient(145deg, #f0f9ff 0%, #dbeafe 100%)",
      }}
    >
      <div style={styles.sidebar}>
        <div style={styles.brandArea}>
          <span style={styles.brandLogo}>AI</span>
          <span style={styles.brandText}>Interview Lab</span>
        </div>
        <button style={styles.navButton} onClick={() => navigate("/dashboard")}>
          🏠
        </button>
        <button style={styles.navButton} onClick={() => navigate("/practice")}>🧠</button>
        <button style={styles.navButton} onClick={() => navigate("/quiz")}>📚</button>
        <button style={styles.navButton} onClick={() => navigate("/resume")}>📄</button>
      </div>

      <div style={styles.main}>
        {!selectedInterviewType ? (
          <div style={styles.panel}>
            <div style={styles.heroRow}>
              <div>
                <div style={styles.breadcrumb}>Interview Experience</div>
                <h1 style={styles.heroTitle}>Build confidence with realistic AI rounds.</h1>
                <p style={styles.heroDescription}>
                  Choose your interview track and practice with a single human-like AI interviewer that asks the questions and gives you realistic feedback.
                </p>
              </div>
              <div style={styles.heroStats}>
                <div style={styles.statCard}>
                  <span style={styles.statValue}>12</span>
                  <span style={styles.statLabel}>Interview Tracks</span>
                </div>
                <div style={styles.statCard}>
                  <span style={styles.statValue}>6</span>
                  <span style={styles.statLabel}>Interview Rounds</span>
                </div>
                <div style={styles.statCard}>
                  <span style={styles.statValue}>100+</span>
                  <span style={styles.statLabel}>Question Variants</span>
                </div>
              </div>
            </div>

            <div style={styles.typeGrid}>
              {interviewTypes.map((type) => (
                <button
                  key={type.id}
                  style={styles.typeCard}
                  onClick={() => setSelectedInterviewType(type)}
                >
                  <div style={styles.typeTop}>
                    <span style={styles.typeIcon}>{type.icon}</span>
                    <span style={styles.typeBadge}>{type.difficulty}</span>
                  </div>
                  <h3 style={styles.typeTitle}>{type.name}</h3>
                  <p style={styles.typeText}>{type.description}</p>
                </button>
              ))}
            </div>
          </div>
        ) : !started ? (
          <div style={styles.panel}>
            <div style={styles.heroRow}>
              <div>
                <div style={styles.breadcrumb}>Interview Ready</div>
                <h1 style={styles.heroTitle}>Prepare for {selectedInterviewType.name}</h1>
                <p style={styles.heroDescription}>
                  Customize your AI interviewer and begin the realistic multi-round interview experience.
                </p>
              </div>
            </div>

            <div style={styles.startSetupGrid}>
              <div style={styles.settingCard}>
                <h3 style={styles.sectionTitle}>Your AI Interviewer</h3>
                <div style={styles.avatarPanel}>
                  <span style={styles.avatarFace}>{avatars[0].icon}</span>
                  <div>
                    <span style={styles.avatarName}>{avatars[0].label}</span>
                    <p style={styles.avatarMeta}>{avatars[0].theme}</p>
                  </div>
                </div>
                <p style={styles.settingNote}>
                  Ava is your single human-like AI host for this interview session. She will ask each question, listen to your voice or typed answer, and respond with feedback.
                </p>
              </div>

              <div style={styles.settingCard}>
                <h3 style={styles.sectionTitle}>Interview Settings</h3>
                <div style={styles.settingRow}>
                  <span>Difficulty</span>
                  <select
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                    style={styles.selectInput}
                  >
                    {['Easy', 'Medium', 'Hard'].map((level) => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
                <div style={styles.settingRow}>
                  <span>Voice Feedback</span>
                  <button style={styles.toggleButton} onClick={() => setSoundEnabled((prev) => !prev)}>
                    {soundEnabled ? "On" : "Muted"}
                  </button>
                </div>
                <div style={styles.settingRow}>
                  <span>Microphone</span>
                  <button style={styles.toggleButton} onClick={() => setMicrophoneEnabled((prev) => !prev)}>
                    {microphoneEnabled ? "On" : "Off"}
                  </button>
                </div>
              </div>
            </div>

            <div style={styles.actionButtons}>
              <button style={styles.secondaryButton} onClick={resetTypeSelection}>
                Back to Interview Types
              </button>
              <button style={styles.primaryButton} onClick={beginInterview}>
                Start Interview
              </button>
            </div>
          </div>
        ) : report ? (
          <div style={styles.panel}>
            <div style={styles.reportHeader}>
              <div>
                <div style={styles.breadcrumb}>Interview Summary</div>
                <h1 style={styles.heroTitle}>Final Performance Report</h1>
                <p style={styles.heroDescription}>{report.summary}</p>
              </div>
              <button style={styles.secondaryButton} onClick={resetTypeSelection}>
                Choose another track
              </button>
            </div>

            <div style={styles.reportGrid}>
              {[
                { label: "Communication", value: report.communicationScore },
                { label: "Technical", value: report.technicalScore },
                { label: "Confidence", value: report.confidenceScore },
                { label: "Leadership", value: report.leadershipScore },
                { label: "Fluency", value: report.fluencyScore },
                { label: "Problem Solving", value: report.problemSolvingScore },
              ].map((metric) => (
                <div key={metric.label} style={styles.metricCard}>
                  <span style={styles.metricLabel}>{metric.label}</span>
                  <span style={styles.metricValue}>{metric.value}%</span>
                </div>
              ))}
            </div>

            <div style={styles.summaryGrid}>
              <div style={styles.summaryCard}>
                <h3 style={styles.sectionTitle}>Weak Areas</h3>
                <p>{report.weakAreas.join(", ")}</p>
              </div>
              <div style={styles.summaryCard}>
                <h3 style={styles.sectionTitle}>AI Suggestions</h3>
                <ul style={styles.bulletList}>
                  {report.recommendations.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div style={styles.calloutRow}>
              <button style={styles.primaryButton} onClick={downloadReport}>
                Download Report
              </button>
              <button style={styles.secondaryButton} onClick={() => navigate("/dashboard")}>Back to Dashboard</button>
            </div>
          </div>
        ) : (
          <div style={styles.panel}>
            <div style={styles.interviewHeader}>
              <div>
                <div style={styles.breadcrumb}>Live AI Interview</div>
                <h1 style={styles.heroTitle}>{selectedInterviewType.name}</h1>
                <p style={styles.heroDescription}>{selectedInterviewType.description}</p>
              </div>
              <div style={styles.avatarPanel}>
                <span style={styles.avatarFace}>{avatars.find((item) => item.id === selectedAvatar)?.icon}</span>
                <div>
                  <span style={styles.avatarName}>{avatars.find((item) => item.id === selectedAvatar)?.label}</span>
                  <p style={styles.avatarMeta}>AI interviewer</p>
                </div>
              </div>
            </div>

            <div style={styles.controlGrid}>
              <div style={styles.settingsPanel}>
                <div style={styles.panelTitle}>Interview Settings</div>
                <div style={styles.settingRow}>
                  <span>Interviewer</span>
                  <span>{avatars[0].label}</span>
                </div>
                <div style={styles.settingRow}>
                  <span>Difficulty</span>
                  <select
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                    style={styles.selectInput}
                  >
                    {['Easy', 'Medium', 'Hard'].map((level) => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
                <div style={styles.settingRow}>
                  <span>Voice</span>
                  <button style={styles.toggleButton} onClick={() => setSoundEnabled((prev) => !prev)}>
                    {soundEnabled ? "On" : "Muted"}
                  </button>
                </div>
                <div style={styles.settingRow}>
                  <span>Microphone</span>
                  <button style={styles.toggleButton} onClick={() => setMicrophoneEnabled((prev) => !prev)}>
                    {microphoneEnabled ? "On" : "Off"}
                  </button>
                </div>
                <button style={styles.secondaryButton} onClick={resetInterview}>Restart Interview</button>
              </div>
            </div>

            <div style={styles.interviewFlow}>
              <div style={styles.questionPanel}>
                <div style={styles.questionHeader}>
                  <div>
                    <span style={styles.questionTag}>{interviewRounds[currentRoundIndex].label}</span>
                    <h2 style={styles.questionText}>{activeQuestion || "Ready to start your first question?"}</h2>
                  </div>
                  <div style={styles.timerCard}>
                    <span style={styles.timerLabel}>Question</span>
                    <span style={styles.timerValue}>{Math.min(sessionAnswers.filter((item) => item.round === interviewRounds[currentRoundIndex].name).length + 1, getRequiredQuestionsPerRound())} / {getRequiredQuestionsPerRound()}</span>
                  </div>
                </div>
                <p style={styles.questionNote}>{interviewRounds[currentRoundIndex].description}</p>

                <textarea
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="Type your answer here or use voice input."
                  style={styles.answerInput}
                />

                <div style={styles.voicePanel}>
                  <button
                    style={styles.voiceButton}
                    onClick={startVoiceInput}
                    disabled={!recognitionSupported || !microphoneEnabled}
                  >
                    {isRecording ? "Listening..." : "Speak Answer"}
                  </button>
                  <div style={styles.voiceInfo}>
                    <span>{transcript || "Live transcript appears here."}</span>
                    <span style={styles.voiceWave}>{Array.from({ length: 12 }).map((_, index) => (
                      <span key={index} style={{ ...styles.waveBar, height: `${12 + (index % 3) * 6}px` }} />
                    ))}</span>
                  </div>
                </div>

                <div style={styles.controlRow}>
                  <button style={styles.primaryButton} onClick={submitAnswer} disabled={!activeQuestion}>
                    Submit Answer
                  </button>
                  <button style={styles.secondaryButton} onClick={() => speak(activeQuestion || "Let's continue the interview.")}>Repeat Question</button>
                </div>
              </div>

              <div style={styles.feedbackPanel}>
                <div style={styles.panelTitle}>AI Feedback</div>
                <p style={styles.feedbackText}>{analysis || "Your feedback will appear here after each answer."}</p>
                {feedbackNotes.length > 0 && (
                  <div style={styles.feedbackList}>
                    {feedbackNotes.map((note) => (
                      <div key={note} style={styles.feedbackNote}>{note}</div>
                    ))}
                  </div>
                )}
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    overflowX: "hidden",
  },
  sidebar: {
    width: "100px",
    background: "rgba(15, 23, 42, 0.96)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "28px 12px",
    gap: "18px",
  },
  brandArea: {
    textAlign: "center",
    marginBottom: "16px",
  },
  brandLogo: {
    display: "block",
    fontSize: "38px",
    fontWeight: 900,
    color: "#60a5fa",
  },
  brandText: {
    display: "block",
    fontSize: "12px",
    color: "#cbd5e1",
    marginTop: "4px",
  },
  navButton: {
    width: "60px",
    height: "60px",
    borderRadius: "18px",
    border: "none",
    background: "rgba(30, 41, 59, 0.85)",
    color: "white",
    fontSize: "24px",
    cursor: "pointer",
  },
  main: {
    flex: 1,
    padding: "32px 40px",
    display: "flex",
    justifyContent: "center",
  },
  panel: {
    width: "100%",
    maxWidth: "1220px",
    background: "rgba(10, 20, 40, 0.96)",
    borderRadius: "32px",
    padding: "36px",
    boxShadow: "0 40px 120px rgba(0,0,0,0.22)",
    color: "white",
  },
  heroRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: "24px",
    alignItems: "flex-start",
    marginBottom: "36px",
  },
  breadcrumb: {
    display: "inline-flex",
    padding: "10px 16px",
    borderRadius: "999px",
    background: "rgba(37, 99, 235, 0.15)",
    color: "#60a5fa",
    fontWeight: 700,
    fontSize: "13px",
    marginBottom: "16px",
  },
  heroTitle: {
    fontSize: "44px",
    lineHeight: 1.05,
    margin: 0,
  },
  heroDescription: {
    fontSize: "17px",
    color: "white",
    lineHeight: 1.8,
    maxWidth: "720px",
  },
  heroStats: {
    display: "grid",
    gap: "18px",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  },
  statCard: {
    borderRadius: "24px",
    padding: "22px",
    background: "rgba(255, 255, 255, 0.06)",
    textAlign: "center",
  },
  statValue: {
    display: "block",
    fontSize: "32px",
    fontWeight: 800,
    color: "#60a5fa",
  },
  statLabel: {
    color: "#cbd5e1",
    marginTop: "10px",
    fontSize: "14px",
  },
  typeGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
  },
  typeCard: {
    borderRadius: "28px",
    padding: "28px",
    background: "rgba(15, 23, 42, 0.88)",
    border: "1px solid rgba(100, 116, 139, 0.2)",
    textAlign: "left",
    cursor: "pointer",
    transition: "transform 0.25s ease, border-color 0.25s ease",
    color: "white",
  },
  typeTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "18px",
  },
  typeIcon: {
    fontSize: "32px",
  },
  typeBadge: {
    padding: "8px 14px",
    borderRadius: "999px",
    background: "rgba(96, 165, 250, 0.15)",
    color: "#7dd3fc",
    fontWeight: 700,
    fontSize: "12px",
  },
  typeTitle: {
    fontSize: "22px",
    margin: "0 0 10px",
    color: "white",
  },
  typeText: {
    color: "white",
    lineHeight: 1.7,
    margin: 0,
  },
  reportHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "20px",
    marginBottom: "32px",
  },
  reportGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "18px",
  },
  metricCard: {
    background: "rgba(15, 23, 42, 0.95)",
    borderRadius: "24px",
    padding: "24px",
  },
  metricLabel: {
    display: "block",
    marginBottom: "10px",
    color: "#94a3b8",
  },
  metricValue: {
    fontSize: "32px",
    fontWeight: 700,
  },
  summaryGrid: {
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: "20px",
  },
  summaryCard: {
    background: "rgba(15, 23, 42, 0.96)",
    borderRadius: "24px",
    padding: "24px",
  },
  startSetupGrid: {
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: "20px",
    marginBottom: "24px",
  },
  settingCard: {
    background: "rgba(15, 23, 42, 0.95)",
    borderRadius: "24px",
    padding: "24px",
  },
  avatarGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "12px",
  },
  avatarCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    padding: "18px",
    borderRadius: "22px",
    border: "2px solid transparent",
    background: "rgba(255, 255, 255, 0.04)",
    color: "#e2e8f0",
    cursor: "pointer",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
  },
  avatarIcon: {
    fontSize: "28px",
    display: "inline-block",
  },
  actionButtons: {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
    marginTop: "20px",
  },
  sectionTitle: {
    margin: "0 0 16px",
    fontSize: "20px",
  },
  bulletList: {
    marginTop: 0,
    paddingLeft: "18px",
    color: "#cbd5e1",
  },
  calloutRow: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "16px",
    marginTop: "28px",
    flexWrap: "wrap",
  },
  interviewHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "24px",
    marginBottom: "28px",
  },
  avatarPanel: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    background: "rgba(255, 255, 255, 0.06)",
    borderRadius: "24px",
    padding: "18px 24px",
  },
  avatarFace: {
    fontSize: "44px",
    display: "inline-block",
  },
  avatarName: {
    color: "white",
    fontWeight: 700,
    fontSize: "18px",
  },
  avatarMeta: {
    color: "#94a3b8",
    fontSize: "14px",
    marginTop: "4px",
  },
  settingNote: {
    marginTop: "18px",
    color: "#cbd5e1",
    lineHeight: 1.8,
  },
  controlGrid: {
    display: "grid",
    gridTemplateColumns: "1.5fr 0.85fr",
    gap: "20px",
    marginBottom: "30px",
  },
  roundPanel: {
    background: "rgba(15, 23, 42, 0.95)",
    borderRadius: "28px",
    padding: "24px",
  },
  panelTitle: {
    color: "#60a5fa",
    margin: "0 0 18px",
    fontSize: "18px",
  },
  roundList: {
    display: "grid",
    gap: "14px",
  },
  roundItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "18px",
    padding: "16px",
    borderRadius: "20px",
    background: "rgba(255, 255, 255, 0.04)",
  },
  roundDot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    flexShrink: 0,
  },
  roundName: {
    fontSize: "14px",
    color: "white",
  },
  roundDescription: {
    fontSize: "12px",
    color: "white",
  },
  roundStatus: {
    fontSize: "13px",
    color: "#cbd5e1",
    textTransform: "capitalize",
  },
  settingsPanel: {
    background: "rgba(15, 23, 42, 0.95)",
    borderRadius: "28px",
    padding: "24px",
    minHeight: "320px",
  },
  settingRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "16px",
    marginBottom: "18px",
    color: "white",
  },
  selectInput: {
    width: "170px",
    padding: "12px 14px",
    borderRadius: "14px",
    border: "1px solid rgba(148, 163, 184, 0.2)",
    background: "rgba(15, 23, 42, 0.95)",
    color: "white",
  },
  toggleButton: {
    border: "1px solid rgba(96, 165, 250, 0.4)",
    borderRadius: "14px",
    padding: "10px 16px",
    color: "white",
    background: "transparent",
    cursor: "pointer",
  },
  interviewFlow: {
    display: "grid",
    gridTemplateColumns: "1.4fr 0.9fr",
    gap: "20px",
    marginBottom: "30px",
  },
  questionPanel: {
    background: "rgba(15, 23, 42, 0.95)",
    borderRadius: "28px",
    padding: "28px",
  },
  questionHeader: {
    display: "flex",
    justifyContent: "space-between",
    gap: "18px",
    alignItems: "flex-start",
    marginBottom: "18px",
  },
  questionTag: {
    display: "inline-flex",
    padding: "8px 14px",
    borderRadius: "999px",
    background: "rgba(37, 99, 235, 0.18)",
    color: "#bfdbfe",
    fontWeight: 700,
    fontSize: "13px",
    marginBottom: "12px",
  },
  questionText: {
    fontSize: "24px",
    margin: 0,
    lineHeight: 1.35,
  },
  timerCard: {
    background: "rgba(255, 255, 255, 0.06)",
    borderRadius: "20px",
    padding: "16px 20px",
    textAlign: "center",
    minWidth: "120px",
  },
  timerLabel: {
    color: "white",
    display: "block",
    marginBottom: "6px",
    fontSize: "12px",
  },
  timerValue: {
    fontSize: "22px",
    fontWeight: 700,
  },
  questionNote: {
    color: "white",
    lineHeight: 1.8,
    marginTop: 0,
    marginBottom: "20px",
  },
  answerInput: {
    width: "100%",
    minHeight: "180px",
    borderRadius: "24px",
    border: "1px solid rgba(148, 163, 184, 0.2)",
    background: "rgba(15, 23, 42, 0.95)",
    color: "white",
    padding: "22px",
    fontSize: "16px",
    fontFamily: "Inter, sans-serif",
    resize: "vertical",
  },
  voicePanel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    marginTop: "20px",
  },
  voiceButton: {
    border: "none",
    borderRadius: "18px",
    padding: "16px 24px",
    background: "linear-gradient(135deg, #7c3aed, #2563eb)",
    color: "white",
    cursor: "pointer",
    minWidth: "180px",
  },
  voiceInfo: {
    flex: 1,
    padding: "18px 20px",
    borderRadius: "20px",
    background: "rgba(255, 255, 255, 0.05)",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "18px",
    minHeight: "72px",
  },
  voiceWave: {
    display: "flex",
    alignItems: "flex-end",
    gap: "4px",
  },
  waveBar: {
    width: "6px",
    background: "#60a5fa",
    borderRadius: "999px",
    display: "inline-block",
  },
  controlRow: {
    display: "flex",
    gap: "16px",
    marginTop: "24px",
    flexWrap: "wrap",
  },
  feedbackPanel: {
    background: "rgba(15, 23, 42, 0.95)",
    borderRadius: "28px",
    padding: "28px",
  },
  feedbackText: {
    color: "white",
    lineHeight: 1.8,
    marginBottom: "18px",
  },
  feedbackList: {
    display: "grid",
    gap: "12px",
  },
  feedbackNote: {
    padding: "16px",
    borderRadius: "20px",
    background: "rgba(37, 99, 235, 0.08)",
    color: "white",
  },
  progressPanel: {
    background: "rgba(15, 23, 42, 0.95)",
    borderRadius: "28px",
    padding: "28px",
  },
  progressGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "16px",
    marginBottom: "24px",
  },
  statCardSmall: {
    borderRadius: "22px",
    background: "rgba(255, 255, 255, 0.05)",
    padding: "18px",
    textAlign: "center",
  },
  statValueSmall: {
    display: "block",
    fontSize: "24px",
    fontWeight: 700,
    color: "#60a5fa",
  },
  statLabelSmall: {
    marginTop: "8px",
    color: "#94a3b8",
  },
  sessionCards: {
    display: "grid",
    gap: "14px",
  },
  sessionCard: {
    borderRadius: "24px",
    background: "rgba(255, 255, 255, 0.05)",
    padding: "20px",
  },
  sessionChip: {
    display: "inline-flex",
    marginBottom: "10px",
    padding: "8px 14px",
    borderRadius: "999px",
    background: "rgba(37, 99, 235, 0.18)",
    color: "#bfdbfe",
    fontSize: "12px",
    fontWeight: 700,
  },
  sessionQuestion: {
    fontSize: "15px",
    color: "#e2e8f0",
    margin: "0 0 10px",
  },
  sessionScore: {
    color: "#94a3b8",
    fontSize: "14px",
  },
  primaryButton: {
    border: "none",
    borderRadius: "18px",
    padding: "16px 28px",
    background: "linear-gradient(135deg, #22c55e, #2563eb)",
    color: "white",
    cursor: "pointer",
    fontWeight: 700,
  },
  secondaryButton: {
    border: "1px solid rgba(96, 165, 250, 0.5)",
    borderRadius: "18px",
    padding: "16px 28px",
    background: "transparent",
    color: "white",
    cursor: "pointer",
    fontWeight: 700,
  },
};

export default Interview;
