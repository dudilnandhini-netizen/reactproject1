import {
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";

import { useNavigate } from "react-router-dom";

import { AppContext } from "../context/AppContext";

function AIChat() {
  const navigate = useNavigate();
  const { darkMode } = useContext(AppContext);
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [conversationHistory, setConversationHistory] = useState([]);
  const [error, setError] = useState("");
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const chatBoxRef = useRef(null);

  const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
  const OPENAI_MODEL = import.meta.env.VITE_OPENAI_MODEL || "gpt-4o-mini";
  const isSpeechSupported = typeof window !== "undefined" && "speechSynthesis" in window;

  const speakResponse = (text) => {
    if (!voiceEnabled || !isSpeechSupported || !text) return;
    const plainText = text.replace(/\*\*/g, "");
    const utterance = new SpeechSynthesisUtterance(plainText);
    utterance.lang = "en-US";
    utterance.rate = 1;
    utterance.pitch = 1;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  // Load conversation history from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('aiChatHistory');
    if (saved) {
      setConversationHistory(JSON.parse(saved));
    } else {
      // Initialize with welcome message
      const welcomeMessage = {
        id: Date.now(),
        sender: "ai",
        text: "Hello! 👋 I'm your AI coding assistant, similar to ChatGPT but specialized for programming and interview preparation. I can help you with:\n\n• **Coding questions** in any language\n• **Algorithm explanations** and problem-solving\n• **Interview preparation** and practice questions\n• **Debugging** and code optimization\n• **Project ideas** and implementation guidance\n• **Technical concepts** and best practices\n\nWhat would you like to learn or work on today?",
        timestamp: new Date().toISOString(),
      };
      setConversationHistory([welcomeMessage]);
    }
  }, []);

  // Save conversation history to localStorage
  useEffect(() => {
    if (conversationHistory.length > 0) {
      localStorage.setItem('aiChatHistory', JSON.stringify(conversationHistory));
    }
  }, [conversationHistory]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [conversationHistory, isTyping]);

  // Enhanced AI Response System
  const getAIReply = (userMessage, history) => {
    const lowerText = userMessage.toLowerCase();
    const recentMessages = history.slice(-4); // Look at last 4 messages for context

    // Friendly persona and small talk
    const normalized = lowerText.replace(/[?!.]/g, "").trim();
    const isPureGreeting = /^(hi|hii|hello|hey|good morning|good afternoon|good evening|yo|sup|hiya)(\s+(there|buddy|friend|all))?$/i.test(normalized);
    if (isPureGreeting) {
      return "Hey! 😊 I'm your AI coding buddy. I love chatting and helping with code. What would you like to talk about today?";
    }
    if (normalized.includes("how are you")) {
      return "I'm feeling great, thanks! I'm here to help you with programming, interviews, or just chat about tech.";
    }
    if (normalized.includes("what's up") || normalized.includes("whats up") || normalized.includes("what are you doing")) {
      return "I'm just hanging out in the chat, ready to answer your questions or help you solve code problems.";
    }
    if (normalized.includes("thank")) {
      return "You're very welcome! 😊 I'm glad I could help. Ask me anything else anytime.";
    }
    if (normalized.includes("bye") || normalized.includes("see you") || normalized.includes("good night")) {
      return "See you later! Come back whenever you want to learn more or talk about code.";
    }
    if (normalized.includes("joke")) {
      return "Why do programmers prefer dark mode? Because light attracts bugs! 😂";
    }
    if (normalized.includes("tell me about yourself") || normalized.includes("who are you")) {
      return "I'm your friendly AI chat assistant. I can talk like a friend, help you understand code, explain concepts, and guide you through interview prep.";
    }
    if (normalized.includes("one word") || normalized.includes("one-word")) {
      return "Sure.";
    }
    if (normalized === "cool" || normalized === "nice" || normalized === "great") {
      return "Glad you think so! Want to try asking me something technical or just chat more?";
    }

    // Short direct answers for common doubts
    if (normalized.startsWith("what is") || normalized.startsWith("define") || normalized.startsWith("explain") || normalized.startsWith("how to") || normalized.startsWith("how do i")) {
      if (lowerText.includes("api")) return "An API is an interface that lets applications talk to each other.";
      if (lowerText.includes("html")) return "HTML is a markup language used to structure website content.";
      if (lowerText.includes("css")) return "CSS styles web pages and makes them look nice.";
      if (lowerText.includes("javascript")) return "JavaScript is the language that makes web pages interactive.";
      if (lowerText.includes("react")) return "React is a library for building UI components in JavaScript.";
      if (lowerText.includes("python")) return "Python is a simple, powerful programming language used for many things.";
      if (lowerText.includes("git")) return "Git is a tool for tracking changes in your code.";
      if (lowerText.includes("node")) return "Node.js lets you run JavaScript on the server.";
      if (lowerText.includes("function")) return "A function is a reusable piece of code that does something.";
      if (lowerText.includes("variable")) return "A variable stores data for your program to use.";
    }

    // A little friendly fallback for non-technical chat
    if (normalized.length < 30 && !lowerText.match(/react|javascript|python|api|html|css|code|debug|interview/)) {
      return "That sounds interesting! Tell me more, or ask me anything about programming and I can help.";
    }

    // Code-related questions
    if (lowerText.includes('react') || lowerText.includes('jsx') || lowerText.includes('component')) {
      if (lowerText.includes('hook') || lowerText.includes('usestate') || lowerText.includes('useeffect')) {
        return `React Hooks are functions that let you use state and lifecycle features in functional components. Here are the most common ones:

**useState**: Manages local component state
\`\`\`jsx
const [count, setCount] = useState(0);
setCount(count + 1);
\`\`\`

**useEffect**: Handles side effects like API calls, subscriptions
\`\`\`jsx
useEffect(() => {
  // Component did mount + update
  return () => {
    // Cleanup function (component will unmount)
  };
}, [dependencies]);
\`\`\`

**useContext**: Accesses context values without prop drilling
**useRef**: Creates mutable references that persist across re-renders
**useMemo/useCallback**: Performance optimizations for expensive operations

Would you like me to explain any specific hook in more detail?`;
      }

      if (lowerText.includes('lifecycle') || lowerText.includes('mount') || lowerText.includes('unmount')) {
        return `React component lifecycle in functional components using hooks:

**Mounting Phase:**
- Component renders for the first time
- useEffect with empty dependency array runs once

**Updating Phase:**
- Component re-renders due to state/props changes
- useEffect runs when dependencies change

**Unmounting Phase:**
- Cleanup functions in useEffect return statements execute

**Example:**
\`\`\`jsx
useEffect(() => {
  console.log('Component mounted');
  return () => console.log('Component will unmount');
}, []); // Empty array = mount/unmount only
\`\`\`

This replaces class component lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.`;
      }

      return `React is a popular JavaScript library for building user interfaces. Key concepts include:

• **Components**: Reusable UI building blocks (functional/class)
• **Props**: Data passed from parent to child components
• **State**: Local component data that can change
• **Hooks**: Functions for using state and lifecycle in functional components
• **JSX**: Syntax extension for writing HTML-like code in JavaScript

Common patterns:
- Conditional rendering: \`{condition && <Component />}\`
- List rendering: \`{items.map(item => <Item key={item.id} {...item} />)}\`
- Event handling: \`onClick={handleClick}\`

What specific React topic would you like to explore?`;
    }

    // JavaScript questions
    if (lowerText.includes('javascript') || lowerText.includes('js') || lowerText.includes('closure') || lowerText.includes('async')) {
      if (lowerText.includes('closure')) {
        return `A closure is a function that has access to variables in its outer (enclosing) scope, even after the outer function has returned. This is possible because functions in JavaScript form closures.

**Example:**
\`\`\`javascript
function outerFunction() {
  let outerVariable = 'I am from outer scope';

  function innerFunction() {
    console.log(outerVariable); // Can access outerVariable
  }

  return innerFunction;
}

const closure = outerFunction();
closure(); // Logs: "I am from outer scope"
\`\`\`

**Common use cases:**
1. **Data Privacy**: Create private variables
2. **Currying**: Partial function application
3. **Event handlers**: Maintain state in callbacks
4. **Module pattern**: Encapsulate code

Closures are fundamental to understanding JavaScript's scoping and are used extensively in modern JS patterns.`;
      }

      if (lowerText.includes('async') || lowerText.includes('promise') || lowerText.includes('await')) {
        return `JavaScript async programming handles operations that take time (API calls, file I/O, etc.) without blocking the main thread.

**Promises:**
\`\`\`javascript
const promise = new Promise((resolve, reject) => {
  // Async operation
  setTimeout(() => resolve('Done!'), 1000);
});

promise
  .then(result => console.log(result))
  .catch(error => console.error(error));
\`\`\`

**Async/Await (syntactic sugar for promises):**
\`\`\`javascript
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}
\`\`\`

**Key concepts:**
- **async** functions always return promises
- **await** pauses execution until promise resolves
- Use try/catch for error handling
- Avoid mixing promises with async/await in the same function

Modern JavaScript heavily uses async patterns for better user experience.`;
      }

      return `JavaScript is a versatile programming language used for web development, server-side programming, and more. Key concepts include:

**Core Features:**
• **Variables**: let, const, var (prefer let/const)
• **Functions**: Arrow functions, regular functions, IIFE
• **Objects & Arrays**: Data structures and manipulation
• **DOM Manipulation**: Interacting with web pages
• **ES6+ Features**: Destructuring, spread operator, modules

**Advanced Topics:**
• Closures and scope
• Prototypes and inheritance
• Async programming (Promises, async/await)
• Event loop and concurrency
• Memory management

What JavaScript concept would you like me to explain?`;
    }

    // Python questions
    if (lowerText.includes('python') || lowerText.includes('django') || lowerText.includes('flask')) {
      if (lowerText.includes('list') || lowerText.includes('comprehension')) {
        return `Python lists are mutable, ordered sequences of items. List comprehensions provide a concise way to create lists.

**Basic Operations:**
\`\`\`python
# Creating lists
my_list = [1, 2, 3, 4, 5]
empty_list = []

# Common methods
my_list.append(6)        # Add to end
my_list.insert(0, 0)     # Insert at index
my_list.remove(3)        # Remove value
my_list.pop()           # Remove last item
my_list.sort()          # Sort in place
\`\`\`

**List Comprehensions:**
\`\`\`python
# Basic comprehension
squares = [x**2 for x in range(10)]
# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# With condition
even_squares = [x**2 for x in range(10) if x % 2 == 0]
# [0, 4, 16, 36, 64]

# Nested comprehension
matrix = [[i*j for j in range(3)] for i in range(3)]
# [[0, 0, 0], [0, 1, 2], [0, 2, 4]]
\`\`\`

List comprehensions are more readable and often faster than traditional loops for simple transformations.`;
      }

      if (lowerText.includes('decorator')) {
        return `Python decorators are functions that modify the behavior of other functions or classes. They're a powerful way to add functionality without changing the original code.

**Basic Decorator:**
\`\`\`python
def my_decorator(func):
    def wrapper():
        print("Something before the function.")
        func()
        print("Something after the function.")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()
# Output:
# Something before the function.
# Hello!
# Something after the function.
\`\`\`

**Decorator with Arguments:**
\`\`\`python
def repeat(times):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(times):
                func(*args, **kwargs)
        return wrapper
    return decorator

@repeat(3)
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")
# Output:
# Hello, Alice!
# Hello, Alice!
# Hello, Alice!
\`\`\`

**Common Use Cases:**
- Logging function calls
- Authentication/authorization
- Caching/memoization
- Input validation
- Timing function execution

Decorators use closures and are a key feature of Python's functional programming capabilities.`;
      }

      return `Python is a high-level, interpreted programming language known for its simplicity and readability. Key features include:

**Core Concepts:**
• **Indentation**: Used for code blocks (no braces)
• **Dynamic Typing**: Variables don't need type declarations
• **Lists, Tuples, Dictionaries**: Powerful built-in data structures
• **Functions**: First-class objects, lambda functions
• **Classes**: Object-oriented programming support

**Popular Libraries:**
• **Data Science**: NumPy, Pandas, Matplotlib, Scikit-learn
• **Web Development**: Django, Flask, FastAPI
• **Automation**: Selenium, Beautiful Soup
• **Machine Learning**: TensorFlow, PyTorch

**Best Practices:**
- Use virtual environments (venv)
- Follow PEP 8 style guide
- Write docstrings for functions
- Use list comprehensions when appropriate
- Handle exceptions properly

What Python topic interests you most?`;
    }

    // Data Structures & Algorithms
    if (lowerText.includes('algorithm') || lowerText.includes('data structure') || lowerText.includes('big o') || lowerText.includes('complexity')) {
      if (lowerText.includes('big o') || lowerText.includes('time complexity') || lowerText.includes('space complexity')) {
        return `Big O notation describes how an algorithm's performance scales with input size. It's crucial for comparing algorithm efficiency.

**Common Complexities (from best to worst):**

**O(1) - Constant Time:**
- Array access by index
- Hash table operations
- Stack/queue operations
\`\`\`javascript
const arr = [1, 2, 3];
console.log(arr[0]); // O(1)
\`\`\`

**O(log n) - Logarithmic Time:**
- Binary search
- Balanced BST operations
- Some divide-and-conquer algorithms

**O(n) - Linear Time:**
- Linear search
- Single pass through array
- Some string operations
\`\`\`javascript
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // O(n)
}
\`\`\`

**O(n log n) - Linearithmic Time:**
- Efficient sorting algorithms (QuickSort, MergeSort)
- Some divide-and-conquer algorithms

**O(n²) - Quadratic Time:**
- Nested loops
- Bubble sort, insertion sort
- Some brute force algorithms

**Space Complexity:**
- O(1): Constant space
- O(n): Linear space (arrays, lists)
- O(n²): Quadratic space (matrices)

**Key Points:**
- Focus on worst-case scenarios
- Consider both time and space
- Trade-offs exist (time vs space)
- Big O hides constants and lower terms

Understanding Big O helps you choose the right algorithm for your use case!`;
      }

      if (lowerText.includes('sort') || lowerText.includes('sorting')) {
        return `Sorting algorithms are fundamental in computer science. Here's a comparison of common ones:

**QuickSort - O(n log n) average, O(n²) worst:**
\`\`\`javascript
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const left = [], right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
\`\`\`

**MergeSort - O(n log n) worst case:**
- Divides array into halves recursively
- Merges sorted subarrays
- Stable sort, predictable performance
- Used in many programming languages

**BubbleSort - O(n²):**
- Simple but inefficient
- Compares adjacent elements
- Good for nearly sorted arrays

**InsertionSort - O(n²):**
- Builds sorted array one element at a time
- Efficient for small or nearly sorted arrays
- Used in hybrid sorting algorithms

**Choosing the Right Sort:**
- **Small datasets**: Insertion sort
- **Large datasets**: QuickSort or MergeSort
- **Stability needed**: MergeSort
- **Memory constrained**: QuickSort (in-place)

Most languages provide built-in sort functions that are highly optimized.`;
      }

      if (lowerText.includes('tree') || lowerText.includes('binary tree')) {
        return `Trees are hierarchical data structures with a root node and child nodes. Binary trees have at most 2 children per node.

**Binary Tree Traversals:**

**Inorder (Left → Root → Right):**
\`\`\`javascript
function inorderTraversal(root) {
  if (!root) return [];
  return [
    ...inorderTraversal(root.left),
    root.val,
    ...inorderTraversal(root.right)
  ];
}
\`\`\`
- For BST: visits nodes in sorted order
- Use case: Getting sorted data from BST

**Preorder (Root → Left → Right):**
\`\`\`javascript
function preorderTraversal(root) {
  if (!root) return [];
  return [
    root.val,
    ...preorderTraversal(root.left),
    ...preorderTraversal(root.right)
  ];
}
\`\`\`
- Creates copy of tree
- Use case: Expression trees, serialization

**Postorder (Left → Right → Root):**
\`\`\`javascript
function postorderTraversal(root) {
  if (!root) return [];
  return [
    ...postorderTraversal(root.left),
    ...postorderTraversal(root.right),
    root.val
  ];
}
\`\`\`
- Deletes tree safely
- Use case: Evaluating expressions

**Level Order (BFS):**
- Uses queue
- Visits nodes level by level
- Use case: Finding shortest path in unweighted graphs

**Binary Search Trees (BST):**
- Left subtree: values < node
- Right subtree: values > node
- Operations: O(log n) average case
- Inorder traversal gives sorted order

Trees are fundamental for hierarchical data and efficient searching!`;
      }

      return `Data Structures and Algorithms are the foundation of efficient programming. Key areas include:

**Linear Structures:**
• **Arrays**: Fixed-size, random access O(1)
• **Linked Lists**: Dynamic size, sequential access O(n)
• **Stacks**: LIFO, O(1) operations
• **Queues**: FIFO, O(1) operations

**Non-Linear Structures:**
• **Trees**: Hierarchical, BST for O(log n) search
• **Graphs**: Complex relationships, various traversal algorithms
• **Hash Tables**: O(1) average lookup

**Algorithm Paradigms:**
• **Divide & Conquer**: QuickSort, MergeSort
• **Dynamic Programming**: Fibonacci, Knapsack
• **Greedy Algorithms**: Huffman coding, Dijkstra
• **Backtracking**: N-Queens, Sudoku solver

**Complexity Analysis:**
• Time complexity (Big O notation)
• Space complexity
• Best/Average/Worst case analysis

What specific data structure or algorithm would you like to explore?`;
    }

    // Interview preparation
    if (lowerText.includes('interview') || lowerText.includes('behavioral') || lowerText.includes('technical')) {
      if (lowerText.includes('tell me about yourself') || lowerText.includes('introduce yourself')) {
        return `**"Tell me about yourself"** is often the first interview question. Structure your answer strategically:

**Structure (1-2 minutes):**
1. **Current Role & Responsibilities** (4-5 sentences)
2. **Key Achievements** (2-3 quantifiable accomplishments)
3. **Why This Company/Role** (2-3 sentences)
4. **Brief Personal Background** (1 sentence, optional)

**Example Answer:**
"I'm a Senior Software Engineer with 4 years of experience building scalable web applications. Currently at TechCorp, I lead a team of 5 developers and recently architected a microservices system that reduced API response times by 60%. I'm excited about this role at StartupXYZ because your focus on AI-driven solutions aligns perfectly with my passion for machine learning applications. Outside of work, I enjoy contributing to open-source projects and mentoring junior developers."

**Tips:**
- Tailor to the job description
- Focus on relevant experience
- Show enthusiasm and cultural fit
- Practice timing (don't ramble)
- Prepare 2-3 versions for different audiences

This question sets the tone for the entire interview - make it count!`;
      }

      if (lowerText.includes('strength') || lowerText.includes('weakness')) {
        return `**Strengths and Weaknesses** questions test self-awareness and honesty. Choose real examples with growth stories.

**Strength Example:**
*"One of my key strengths is attention to detail. In my previous role, I implemented comprehensive error handling and logging that reduced production bugs by 40%. I enjoy breaking down complex problems into manageable tasks and ensuring nothing falls through the cracks."*

**Weakness Example (with growth):**
*"I used to struggle with delegation because I wanted to ensure everything was done perfectly. However, I've learned that trusting my team leads to better results. Now I focus on clear communication and setting expectations, which has improved our team's productivity by 25%."*

**Tips for Strengths:**
- Choose 2-3 relevant to the job
- Back up with specific examples
- Quantify impact when possible
- Show how it benefits the team/company

**Tips for Weaknesses:**
- Pick a real weakness (not a strength in disguise)
- Show self-awareness and improvement
- Focus on professional development
- Demonstrate learning from experience

Avoid clichés like "I'm a perfectionist" or "I work too hard." Be authentic and show growth mindset.`;
      }

      if (lowerText.includes('system design') || lowerText.includes('architecture')) {
        return `System design interviews test your ability to design scalable, reliable systems. Focus on trade-offs and rationale.

**Key Principles:**
1. **Requirements Gathering**: Functional vs Non-functional requirements
2. **Scalability**: Handle growth (users, data, traffic)
3. **Reliability**: Fault tolerance, redundancy
4. **Performance**: Latency, throughput
5. **Security**: Authentication, authorization, data protection

**Common System Design Questions:**

**URL Shortener (TinyURL):**
- **Components**: Web server, database, cache, load balancer
- **Database**: Hash URL → short code mapping
- **Scalability**: Sharding, replication
- **Edge Cases**: Custom URLs, analytics, expiration

**Design Twitter/News Feed:**
- **Data Model**: Users, Tweets, Followers, Timeline
- **Feed Generation**: Pull vs Push model
- **Caching**: Redis for hot data
- **Scalability**: Fan-out on write, read optimization

**Design Uber/Location Service:**
- **Real-time**: WebSocket connections
- **Matching**: Geospatial indexing
- **Scalability**: Microservices, message queues
- **Reliability**: Circuit breakers, retries

**General Approach:**
1. **Clarify Requirements**: Ask questions, define scope
2. **High-Level Design**: Draw architecture diagram
3. **Component Deep Dive**: Database, API, caching
4. **Trade-offs Discussion**: Consistency vs Availability
5. **Bottlenecks & Optimization**: Identify and solve issues

Practice drawing architecture diagrams and explaining your design decisions!`;
      }

      return `Technical interviews typically include multiple rounds:

**1. Initial Screen (30-60 min):**
- Basic coding problems
- Behavioral questions
- Cultural fit assessment

**2. Technical Phone Screen (45-90 min):**
- Data structures & algorithms
- System design basics
- Language-specific questions

**3. On-site/Technical Interview (3-6 hours):**
- Multiple coding interviews
- System design problems
- Leadership/behavioral questions
- Lunch with team members

**4. Final Rounds:**
- Executive interviews
- Offer negotiation

**Preparation Strategy:**
• **Practice Coding**: LeetCode, HackerRank (200-300 problems)
• **Study Fundamentals**: DSA, system design, language internals
• **Mock Interviews**: Practice with peers or services
• **Company Research**: Understand their tech stack and challenges
• **Communication**: Explain your thought process clearly

**Common Topics:**
- Arrays, strings, linked lists
- Trees, graphs, dynamic programming
- SQL, system design, behavioral questions

Focus on consistent practice and understanding concepts deeply rather than memorizing solutions.`;
    }

    // Coding problems and debugging
    if (lowerText.includes('debug') || lowerText.includes('error') || lowerText.includes('bug') || lowerText.includes('fix')) {
      return `Debugging is a systematic process of finding and fixing issues in code. Here's a structured approach:

**1. Reproduce the Issue:**
- Understand when/where the bug occurs
- Create minimal test case
- Note exact error messages and stack traces

**2. Understand the Code:**
- Read relevant code sections
- Check recent changes
- Review logic flow and assumptions

**3. Use Debugging Tools:**
\`\`\`javascript
// Console logging
console.log('Variable value:', variable);
console.table(array); // For arrays/objects

// Browser dev tools breakpoints
// Node.js debugger
// IDE debuggers
\`\`\`

**4. Common Bug Categories:**

**Logic Errors:**
- Incorrect algorithm implementation
- Off-by-one errors in loops
- Wrong conditional logic

**Runtime Errors:**
- Null/undefined references
- Type mismatches
- Array index out of bounds

**Performance Issues:**
- Infinite loops
- Memory leaks
- Inefficient algorithms

**5. Debugging Techniques:**
- **Rubber Duck Debugging**: Explain code to inanimate object
- **Binary Search**: Comment out code sections to isolate issue
- **Unit Tests**: Write tests to verify fixes
- **Code Review**: Get another pair of eyes

**6. Prevention:**
- Write clean, readable code
- Add input validation
- Use defensive programming
- Write tests before/after fixes

**Pro Tips:**
- Take breaks when stuck
- Document the bug and solution
- Learn from each debugging session
- Use version control to track changes

Remember: Every bug is a learning opportunity!`;
    }

    // Project ideas and guidance
    if (lowerText.includes('project') || lowerText.includes('build') || lowerText.includes('create')) {
      return `Here are some engaging project ideas across different skill levels:

**Beginner Projects (1-2 weeks):**

**1. Todo List App**
- Features: Add, delete, mark complete tasks
- Tech: HTML, CSS, JavaScript (vanilla or React)
- Learning: DOM manipulation, state management

**2. Weather Dashboard**
- Features: Current weather, 5-day forecast
- Tech: API integration, responsive design
- Learning: Async programming, API handling

**3. Calculator**
- Features: Basic arithmetic, scientific functions
- Tech: HTML, CSS, JavaScript
- Learning: Event handling, math operations

**Intermediate Projects (2-4 weeks):**

**4. E-commerce Site**
- Features: Product catalog, shopping cart, checkout
- Tech: React/Node.js, database integration
- Learning: Full-stack development, payment integration

**5. Chat Application**
- Features: Real-time messaging, user authentication
- Tech: WebSocket/Socket.io, React, backend
- Learning: Real-time communication, authentication

**6. Personal Finance Tracker**
- Features: Expense tracking, budgeting, reports
- Tech: React, charts library, local storage
- Learning: Data visualization, state management

**Advanced Projects (4+ weeks):**

**7. Social Media Platform**
- Features: Posts, likes, comments, following
- Tech: Full-stack with microservices
- Learning: Scalability, complex state management

**8. Code Editor/IDE**
- Features: Syntax highlighting, file management
- Tech: Monaco Editor, file system APIs
- Learning: Complex UI, performance optimization

**9. Machine Learning Web App**
- Features: Data visualization, model training UI
- Tech: Python backend, React frontend
- Learning: ML integration, data processing

**Tips for Success:**
- Start small, add features iteratively
- Focus on clean code and good UX
- Deploy early and often
- Document your process
- Consider scalability from the start

Choose a project that interests you and aligns with your learning goals!`;
    }

    // Default conversational responses
    if (lowerText.includes('hello') || lowerText.includes('hi') || lowerText.includes('hey')) {
      return `Hello! 👋 I'm excited to help you with your coding journey. Whether you're learning a new language, preparing for interviews, debugging code, or working on projects, I'm here to assist.

What would you like to work on today? I can help with:
• **Programming concepts** and explanations
• **Algorithm problems** and solutions
• **Interview preparation** and practice
• **Code debugging** and optimization
• **Project ideas** and implementation guidance

Just ask away!`;
    }

    if (lowerText.includes('thank') || lowerText.includes('thanks')) {
      return `You're very welcome! 😊 I'm glad I could help. Remember, consistent practice and curiosity are key to becoming a great developer. Don't hesitate to ask if you have more questions - I'm always here to help!

Keep coding and learning! 🚀`;
    }

    if (lowerText.includes('help') || lowerText.includes('what can you do')) {
      return `I'm your AI coding assistant, designed to help with all aspects of programming and technical interviews. Here's what I can do:

**💻 Coding Help:**
• Explain programming concepts in any language
• Debug code and fix errors
• Provide code examples and best practices
• Help with algorithms and data structures

**🎯 Interview Preparation:**
• Technical interview questions and answers
• System design problems and solutions
• Behavioral interview tips
• Coding problem walkthroughs

**🚀 Project Guidance:**
• Project ideas for different skill levels
• Implementation strategies
• Technology recommendations
• Best practices and patterns

**📚 Learning Support:**
• Explain complex technical concepts
• Recommend learning resources
• Career advice and guidance
• Industry trends and technologies

**🔧 Tools & Technologies:**
• Web development (React, Node.js, etc.)
• Backend development (Python, Java, etc.)
• Databases and APIs
• DevOps and deployment

Just ask me anything related to programming, and I'll do my best to help you understand and solve it! What would you like to learn about?`;
    }

    if (lowerText.includes('error') || lowerText.includes('bug') || lowerText.includes('issue') || lowerText.includes('fix')) {
      return `If you're debugging, please share the exact error message or the code snippet. I can help pinpoint the issue and suggest a fix.`;
    }

    if (lowerText.includes('project') || lowerText.includes('idea') || lowerText.includes('application') || lowerText.includes('build')) {
      return `Looking for a project idea? Tell me what technologies you like and your experience level, and I can suggest a project with a clear plan and sample approach.`;
    }

    if (lowerText.includes('algorithm') || lowerText.includes('sort') || lowerText.includes('search') || lowerText.includes('binary')) {
      return `Algorithms are about solving problems efficiently. Tell me the exact problem you're working on, and I can explain the best approach with code examples.`;
    }

    // Generic response for unrecognized queries
    return `I understand you're asking about "${userMessage}". While I specialize in programming, coding concepts, algorithms, and interview preparation, I'd be happy to help if you can provide more context or rephrase your question.

For example, you could ask:
• "How do I implement a binary search in JavaScript?"
• "Explain React hooks with examples"
• "Help me debug this error: [paste your error]"
• "What are some good project ideas for beginners?"
• "How should I prepare for technical interviews?"

What specific programming topic or question can I help you with?`;
  };

  const getAIReplyOpenAI = async (userMessage, history) => {
    const systemPrompt = `You are a friendly AI chat companion and coding mentor. You only answer questions related to programming, software engineering, interview preparation, and technical learning. Keep the tone warm and conversational, provide clear, accurate explanations, and include helpful examples when appropriate. If the user question is vague, offer a useful programming guideline and ask for a specific follow-up. Do not wander into unrelated topics.`;

    const recentMessages = history.slice(-10).map((msg) => ({
      role: msg.sender === "user" ? "user" : "assistant",
      content: msg.text,
    }));

    const requestBody = {
      model: OPENAI_MODEL,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "assistant", content: "Answer as a friendly, helpful programming mentor and keep responses focused on technical topics." },
        ...recentMessages,
        { role: "user", content: userMessage },
      ],
      temperature: 0.35,
      top_p: 0.95,
      frequency_penalty: 0.1,
      presence_penalty: 0.2,
      max_tokens: 900,
    };

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error?.message || "Failed to fetch AI response.");
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content?.trim() || "Sorry, I couldn't generate a response.";
  };

  const sendMessage = async () => {
    if (message.trim() === "" || isTyping) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: message.trim(),
      timestamp: new Date().toISOString(),
    };

    const currentHistory = [...conversationHistory, userMessage];
    setConversationHistory(currentHistory);
    setMessage("");
    setIsTyping(true);
    setError("");

    try {
      let aiReply;

      if (OPENAI_API_KEY) {
        aiReply = await getAIReplyOpenAI(userMessage.text, currentHistory);
      } else {
        // fallback if no API key is provided
        const typingDelay = Math.min(1000 + userMessage.text.length * 20, 4000);
        await new Promise((resolve) => setTimeout(resolve, typingDelay));
        aiReply = getAIReply(userMessage.text, currentHistory);
      }

      const aiMessage = {
        id: Date.now() + 1,
        sender: "ai",
        text: aiReply,
        timestamp: new Date().toISOString(),
      };
      setConversationHistory((prev) => [...prev, aiMessage]);
      speakResponse(aiReply);
    } catch (err) {
      setError(err.message);
      const errorMessage = {
        id: Date.now() + 2,
        sender: "ai",
        text: `Sorry, I couldn't process that request. ${err.message}`,
        timestamp: new Date().toISOString(),
      };
      setConversationHistory((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearConversation = () => {
    const welcomeMessage = {
      id: Date.now(),
      sender: "ai",
      text: "Hello! 👋 I'm your AI coding assistant, similar to ChatGPT but specialized for programming and interview preparation. I can help you with:\n\n• **Coding questions** in any language\n• **Algorithm explanations** and problem-solving\n• **Interview preparation** and practice questions\n• **Debugging** and code optimization\n• **Project ideas** and implementation guidance\n• **Technical concepts** and best practices\n\nWhat would you like to learn or work on today?",
      timestamp: new Date().toISOString(),
    };
    setConversationHistory([welcomeMessage]);
    localStorage.removeItem('aiChatHistory');
  };

  // Format message text with basic markdown-like formatting
  const formatMessage = (text) => {
    return text.split('\n').map((line, index) => {
      // Code blocks
      if (line.startsWith('```')) {
        return <pre key={index} style={styles.codeBlock}><code>{line.slice(3)}</code></pre>;
      }
      // Bold text
      if (line.includes('**')) {
        const parts = line.split('**');
        return (
          <span key={index}>
            {parts.map((part, i) => i % 2 === 1 ? <strong key={i}>{part}</strong> : part)}
          </span>
        );
      }
      // Bullet points
      if (line.startsWith('• ') || line.startsWith('- ')) {
        return <li key={index} style={styles.listItem}>{line.slice(2)}</li>;
      }
      return <span key={index}>{line}</span>;
    });
  };

  return (
    <div
      style={{
        ...styles.container,
        background: darkMode
          ? "linear-gradient(135deg, #0f172a, #1e293b)"
          : "linear-gradient(135deg, #f8fafc, #e2e8f0)",
      }}
    >
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <div style={styles.logoContainer}>
          <h1 style={styles.logo}>AI</h1>
          <span style={styles.logoText}>Chat</span>
        </div>

        <nav style={styles.nav}>
          <button
            style={styles.navButton}
            onClick={() => navigate("/dashboard")}
          >
            <span style={styles.navIcon}>🏠</span>
            <span style={styles.navLabel}>Home</span>
          </button>

          <button
            style={styles.navButton}
            onClick={() => navigate("/quiz")}
          >
            <span style={styles.navIcon}>🧠</span>
            <span style={styles.navLabel}>Quiz</span>
          </button>

          <button
            style={styles.navButton}
            onClick={() => navigate("/interview")}
          >
            <span style={styles.navIcon}>🎤</span>
            <span style={styles.navLabel}>Interview</span>
          </button>

          <button
            style={styles.navButton}
            onClick={() => navigate("/practice")}
          >
            <span style={styles.navIcon}>💻</span>
            <span style={styles.navLabel}>Practice</span>
          </button>
        </nav>

        <div style={styles.sidebarFooter}>
          <button
            style={styles.clearButton}
            onClick={clearConversation}
            title="Clear conversation"
          >
            🗑️
          </button>

          <button
            style={styles.themeButton}
            onClick={() => {
              // Theme toggle would go here if implemented
            }}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>

      {/* Main Chat Area */}
      <div style={styles.main}>
        <div style={styles.chatTopBar}>
          <div style={styles.chatTitleRow}>
            <h2 style={styles.chatTitle}>AI Chat</h2>
            <button style={styles.newChatButton} onClick={clearConversation}>
              + New chat
            </button>
          </div>
          <p style={styles.chatSubtitle}>
            Talk naturally and get instant answers for programming, debugging, and interview questions.
          </p>
        </div>

        <div
          style={{
            ...styles.header,
            background: darkMode ? "rgba(15, 23, 42, 0.95)" : "rgba(255, 255, 255, 0.95)",
            border: darkMode ? "1px solid rgba(255, 255, 255, 0.05)" : "1px solid rgba(15, 23, 42, 0.08)",
          }}
        >
          <h1
            style={{
              ...styles.title,
              color: darkMode ? "#f8fafc" : "#0f172a",
            }}
          >
            AI Coding Assistant
          </h1>
          <p
            style={{
              ...styles.subtitle,
              color: darkMode ? "#cbd5e1" : "#475569",
            }}
          >
            Your intelligent programming companion - ask me anything about code, algorithms, interviews, or debugging!
          </p>
          <div style={styles.voiceControl}>
            <label style={styles.voiceLabel}>
              <input
                type="checkbox"
                checked={voiceEnabled}
                onChange={(e) => setVoiceEnabled(e.target.checked)}
                style={styles.voiceCheckbox}
              />
              Speak responses
            </label>
            {!isSpeechSupported && (
              <div style={styles.voiceNotice}>
                Voice is not supported in this browser.
              </div>
            )}
          </div>
          {!OPENAI_API_KEY && (
            <div style={styles.apiNotice}>
              Tip: Set <strong>VITE_OPENAI_API_KEY</strong> in your environment to enable real ChatGPT-style responses.
            </div>
          )}
        </div>

        {/* Chat Messages */}
        <div
          style={{
            ...styles.chatContainer,
            background: darkMode ? "rgba(15, 23, 42, 0.94)" : "#f8fafc",
            border: darkMode ? "1px solid rgba(255, 255, 255, 0.06)" : "1px solid rgba(148, 163, 184, 0.18)",
          }}
          ref={chatBoxRef}
        >
          {conversationHistory.map((msg) => (
            <div
              key={msg.id}
              style={{
                ...styles.messageWrapper,
                justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
              }}
            >
              <div
                style={{
                  ...styles.message,
                  background: msg.sender === "user"
                    ? (darkMode ? "#2563eb" : "#2563eb")
                    : (darkMode ? "#111827" : "#f8fafc"),
                  color: msg.sender === "user" ? "#ffffff" : (darkMode ? "#e2e8f0" : "#0f172a"),
                  border: msg.sender === "user" ? "none" : `1px solid ${darkMode ? "rgba(148, 163, 184, 0.12)" : "rgba(148, 163, 184, 0.18)"}`,
                  alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                  maxWidth: msg.sender === "user" ? "70%" : "75%",
                  borderRadius: msg.sender === "user" ? "20px 20px 4px 20px" : "20px 20px 20px 4px",
                }}
              >
                {formatMessage(msg.text)}
              </div>
            </div>
          ))}

          {isTyping && (
            <div style={styles.typingIndicator}>
              <div style={styles.typingBubble}>
                <div style={styles.typingDots}>
                  <span style={styles.dot}></span>
                  <span style={styles.dot}></span>
                  <span style={styles.dot}></span>
                </div>
                <span style={styles.typingText}>AI is thinking...</span>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div
          style={{
            ...styles.inputContainer,
            background: darkMode ? "rgba(15, 23, 42, 0.95)" : "rgba(255, 255, 255, 0.95)",
          }}
        >
          <div style={styles.inputWrapper}>
            <textarea
              placeholder="Ask me anything about programming, algorithms, interviews, or debugging..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              style={styles.input}
              rows={1}
            />
            <button
              style={{
                ...styles.sendButton,
                opacity: message.trim() && !isTyping ? 1 : 0.5,
                cursor: message.trim() && !isTyping ? "pointer" : "not-allowed",
              }}
              onClick={sendMessage}
              disabled={!message.trim() || isTyping}
            >
              {isTyping ? "⏳" : "📤"}
            </button>
          </div>
          {error && <div style={styles.errorAlert}>{error}</div>}
          <div style={styles.inputHint}>
            Press Enter to send, Shift+Enter for new line
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
  },
  sidebar: {
    width: "280px",
    background: "rgba(15, 23, 42, 0.95)",
    backdropFilter: "blur(20px)",
    borderRight: "1px solid rgba(255, 255, 255, 0.1)",
    display: "flex",
    flexDirection: "column",
    padding: "30px 20px",
    boxShadow: "2px 0 20px rgba(0, 0, 0, 0.1)",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "40px",
  },
  logo: {
    fontSize: "32px",
    color: "white",
    fontWeight: "bold",
  },
  logoText: {
    fontSize: "18px",
    color: "#60a5fa",
    fontWeight: "600",
  },
  nav: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  navButton: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "14px 16px",
    borderRadius: "12px",
    border: "none",
    background: "rgba(30, 41, 59, 0.8)",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    textAlign: "left",
  },
  navIcon: {
    fontSize: "20px",
    width: "24px",
    textAlign: "center",
  },
  navLabel: {
    fontWeight: "500",
  },
  sidebarFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "20px",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
  },
  clearButton: {
    width: "44px",
    height: "44px",
    borderRadius: "12px",
    border: "none",
    background: "rgba(239, 68, 68, 0.2)",
    color: "#ef4444",
    fontSize: "18px",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
  themeButton: {
    width: "44px",
    height: "44px",
    borderRadius: "12px",
    border: "none",
    background: "rgba(30, 41, 59, 0.8)",
    color: "white",
    fontSize: "18px",
    cursor: "pointer",
  },
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 0 20px 20px",
  },
  chatTopBar: {
    width: "100%",
    maxWidth: "920px",
    padding: "20px 30px 12px",
    marginBottom: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  chatTitleRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "16px",
  },
  chatTitle: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#f8fafc",
    margin: 0,
  },
  newChatButton: {
    padding: "10px 16px",
    borderRadius: "12px",
    border: "none",
    background: "#3b82f6",
    color: "white",
    fontWeight: "600",
    cursor: "pointer",
  },
  chatSubtitle: {
    fontSize: "14px",
    color: "#cbd5e1",
    margin: 0,
  },
  header: {
    width: "100%",
    maxWidth: "920px",
    padding: "24px 30px",
    borderRadius: "20px",
    boxShadow: "0 16px 40px rgba(0, 0, 0, 0.12)",
    marginBottom: "16px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "700",
    margin: "0 0 8px 0",
  },
  subtitle: {
    fontSize: "15px",
    margin: "0",
    lineHeight: "1.6",
  },
  chatContainer: {
    width: "100%",
    maxWidth: "920px",
    flex: 1,
    padding: "28px 30px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    borderRadius: "24px",
    boxShadow: "0 30px 80px rgba(15, 23, 42, 0.12)",
    maxHeight: "calc(100vh - 260px)",
  },
  messageWrapper: {
    display: "flex",
    width: "100%",
  },
  message: {
    padding: "18px 20px",
    borderRadius: "20px",
    fontSize: "15px",
    lineHeight: "1.7",
    wordWrap: "break-word",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  codeBlock: {
    background: "#1e293b",
    color: "#e2e8f0",
    padding: "16px",
    borderRadius: "8px",
    margin: "12px 0",
    overflowX: "auto",
    fontSize: "14px",
    fontFamily: "Monaco, 'Courier New', monospace",
  },
  listItem: {
    marginBottom: "8px",
    paddingLeft: "8px",
  },
  errorAlert: {
    marginTop: "10px",
    padding: "12px 16px",
    background: "rgba(248, 113, 113, 0.12)",
    color: "#f87171",
    borderRadius: "14px",
    border: "1px solid rgba(248, 113, 113, 0.25)",
    fontSize: "14px",
  },
  apiNotice: {
    marginTop: "12px",
    padding: "12px 16px",
    background: "rgba(59, 130, 246, 0.12)",
    color: "#bfdbfe",
    borderRadius: "14px",
    border: "1px solid rgba(59, 130, 246, 0.25)",
    fontSize: "14px",
  },
  voiceControl: {
    marginTop: "18px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  voiceLabel: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#cbd5e1",
    fontSize: "14px",
    fontWeight: "500",
  },
  voiceCheckbox: {
    width: "16px",
    height: "16px",
    accentColor: "#3b82f6",
  },
  voiceNotice: {
    color: "#f8fafc",
    background: "rgba(245, 158, 11, 0.12)",
    padding: "10px 14px",
    borderRadius: "12px",
    fontSize: "13px",
    border: "1px solid rgba(245, 158, 11, 0.25)",
  },
  typingIndicator: {
    display: "flex",
    justifyContent: "flex-start",
    marginBottom: "16px",
  },
  typingBubble: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    background: "rgba(30, 41, 59, 0.9)",
    padding: "12px 18px",
    borderRadius: "18px",
    maxWidth: "200px",
    color: "white",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
  typingDots: {
    display: "flex",
    gap: "4px",
  },
  dot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "#60a5fa",
    animation: "typingPulse 1.4s infinite ease-in-out",
  },
  typingText: {
    fontSize: "14px",
    color: "#94a3b8",
  },
  inputContainer: {
    width: "100%",
    maxWidth: "920px",
    padding: "20px 40px",
    borderTop: "1px solid rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(10px)",
  },
  inputWrapper: {
    display: "flex",
    alignItems: "flex-end",
    gap: "12px",
    marginBottom: "8px",
  },
  input: {
    flex: 1,
    padding: "14px 18px",
    borderRadius: "16px",
    border: "2px solid #e2e8f0",
    outline: "none",
    fontSize: "16px",
    fontFamily: "inherit",
    resize: "none",
    minHeight: "20px",
    maxHeight: "120px",
    transition: "all 0.2s ease",
  },
  sendButton: {
    width: "48px",
    height: "48px",
    borderRadius: "12px",
    border: "none",
    background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
    color: "white",
    fontSize: "18px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputHint: {
    fontSize: "12px",
    color: "#64748b",
    textAlign: "center",
  },
};

// Add CSS animations
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes typingPulse {
    0%, 80%, 100% {
      transform: scale(0.8);
      opacity: 0.5;
    }
    40% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;
document.head.appendChild(styleSheet);

export default AIChat;