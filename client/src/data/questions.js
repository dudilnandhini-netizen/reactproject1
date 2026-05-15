export const questions = [
  // REACT QUESTIONS
  // Level 1 - Easy
  {
    id: 1,
    category: "React",
    level: 1,
    difficulty: "Easy",
    question: "What is React primarily used for?",
    options: ["Server-side rendering", "Building user interfaces", "Database management", "API development"],
    answer: "Building user interfaces",
  },
  {
    id: 2,
    category: "React",
    level: 1,
    difficulty: "Easy",
    question: "Which hook is used to manage component state?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    answer: "useState",
  },
  {
    id: 3,
    category: "React",
    level: 1,
    difficulty: "Easy",
    question: "What does JSX stand for?",
    options: ["JavaScript XML", "Java Syntax Extension", "JSON XML", "JavaScript Extension"],
    answer: "JavaScript XML",
  },
  {
    id: 4,
    category: "React",
    level: 1,
    difficulty: "Easy",
    question: "Which method is used to render a React component?",
    options: ["render()", "display()", "show()", "ReactDOM.render()"],
    answer: "ReactDOM.render()",
  },
  {
    id: 5,
    category: "React",
    level: 1,
    difficulty: "Easy",
    question: "What is the purpose of props in React?",
    options: ["To store component state", "To pass data between components", "To handle events", "To manage side effects"],
    answer: "To pass data between components",
  },

  // Level 2 - Medium
  {
    id: 6,
    category: "React",
    level: 2,
    difficulty: "Medium",
    question: "Which hook is used for side effects in functional components?",
    options: ["useState", "useEffect", "useMemo", "useCallback"],
    answer: "useEffect",
  },
  {
    id: 7,
    category: "React",
    level: 2,
    difficulty: "Medium",
    question: "What is the virtual DOM?",
    options: ["A copy of the real DOM kept in memory", "A database for React components", "A server-side rendering engine", "A testing framework"],
    answer: "A copy of the real DOM kept in memory",
  },
  {
    id: 8,
    category: "React",
    level: 2,
    difficulty: "Medium",
    question: "Which package is commonly used for routing in React?",
    options: ["react-router", "react-navigation", "react-router-dom", "react-redux"],
    answer: "react-router-dom",
  },
  {
    id: 9,
    category: "React",
    level: 2,
    difficulty: "Medium",
    question: "What does the useMemo hook do?",
    options: ["Manages component state", "Memoizes expensive calculations", "Handles side effects", "Manages context"],
    answer: "Memoizes expensive calculations",
  },
  {
    id: 10,
    category: "React",
    level: 2,
    difficulty: "Medium",
    question: "Which lifecycle method is replaced by useEffect?",
    options: ["componentDidMount", "render", "constructor", "shouldComponentUpdate"],
    answer: "componentDidMount",
  },

  // Level 3 - Hard
  {
    id: 11,
    category: "React",
    level: 3,
    difficulty: "Hard",
    question: "What is reconciliation in React?",
    options: ["The process of updating the DOM", "The process of comparing virtual DOM with real DOM", "The process of rendering components", "The process of managing state"],
    answer: "The process of comparing virtual DOM with real DOM",
  },
  {
    id: 12,
    category: "React",
    level: 3,
    difficulty: "Hard",
    question: "Which hook would you use to optimize re-renders?",
    options: ["useState", "useEffect", "useCallback", "useMemo"],
    answer: "useCallback",
  },
  {
    id: 13,
    category: "React",
    level: 3,
    difficulty: "Hard",
    question: "What is the purpose of React.memo?",
    options: ["To memoize functions", "To prevent unnecessary re-renders", "To manage state", "To handle events"],
    answer: "To prevent unnecessary re-renders",
  },
  {
    id: 14,
    category: "React",
    level: 3,
    difficulty: "Hard",
    question: "Which pattern is used for conditional rendering?",
    options: ["Ternary operator", "Logical && operator", "Both A and B", "Switch statement"],
    answer: "Both A and B",
  },
  {
    id: 15,
    category: "React",
    level: 3,
    difficulty: "Hard",
    question: "What is the Context API used for?",
    options: ["Managing local state", "Sharing state between components", "Handling events", "Optimizing performance"],
    answer: "Sharing state between components",
  },

  // PYTHON QUESTIONS
  // Level 1 - Easy
  {
    id: 16,
    category: "Python",
    level: 1,
    difficulty: "Easy",
    question: "Which keyword is used to define a function in Python?",
    options: ["func", "def", "function", "define"],
    answer: "def",
  },
  {
    id: 17,
    category: "Python",
    level: 1,
    difficulty: "Easy",
    question: "What symbol is used for single-line comments in Python?",
    options: ["//", "#", "--", "/*"],
    answer: "#",
  },
  {
    id: 18,
    category: "Python",
    level: 1,
    difficulty: "Easy",
    question: "Which of the following is a mutable data type in Python?",
    options: ["tuple", "string", "list", "int"],
    answer: "list",
  },
  {
    id: 19,
    category: "Python",
    level: 1,
    difficulty: "Easy",
    question: "What is the output of print(2 + 3)?",
    options: ["23", "5", "2+3", "Error"],
    answer: "5",
  },
  {
    id: 20,
    category: "Python",
    level: 1,
    difficulty: "Easy",
    question: "Which operator is used for exponentiation in Python?",
    options: ["^", "**", "*", "//"],
    answer: "**",
  },

  // Level 2 - Medium
  {
    id: 21,
    category: "Python",
    level: 2,
    difficulty: "Medium",
    question: "Which data structure uses key-value pairs?",
    options: ["list", "tuple", "dictionary", "set"],
    answer: "dictionary",
  },
  {
    id: 22,
    category: "Python",
    level: 2,
    difficulty: "Medium",
    question: "What is the purpose of the 'if __name__ == '__main__'' block?",
    options: ["To define main function", "To run code only when script is executed directly", "To import modules", "To handle exceptions"],
    answer: "To run code only when script is executed directly",
  },
  {
    id: 23,
    category: "Python",
    level: 2,
    difficulty: "Medium",
    question: "Which method is used to add an item to a list?",
    options: ["add()", "append()", "insert()", "extend()"],
    answer: "append()",
  },
  {
    id: 24,
    category: "Python",
    level: 2,
    difficulty: "Medium",
    question: "What does the 'len()' function return?",
    options: ["Last element", "First element", "Length of sequence", "Type of object"],
    answer: "Length of sequence",
  },
  {
    id: 25,
    category: "Python",
    level: 2,
    difficulty: "Medium",
    question: "Which keyword is used for exception handling?",
    options: ["catch", "except", "handle", "error"],
    answer: "except",
  },

  // Level 3 - Hard
  {
    id: 26,
    category: "Python",
    level: 3,
    difficulty: "Hard",
    question: "What is a decorator in Python?",
    options: ["A design pattern", "A function that modifies another function", "A class method", "An exception handler"],
    answer: "A function that modifies another function",
  },
  {
    id: 27,
    category: "Python",
    level: 3,
    difficulty: "Hard",
    question: "Which module is used for regular expressions?",
    options: ["regex", "re", "regexp", "pattern"],
    answer: "re",
  },
  {
    id: 28,
    category: "Python",
    level: 3,
    difficulty: "Hard",
    question: "What is the purpose of __init__ method?",
    options: ["To create object", "To initialize object attributes", "To delete object", "To copy object"],
    answer: "To initialize object attributes",
  },
  {
    id: 29,
    category: "Python",
    level: 3,
    difficulty: "Hard",
    question: "Which concept allows code reusability through inheritance?",
    options: ["Polymorphism", "Encapsulation", "Abstraction", "All of the above"],
    answer: "All of the above",
  },
  {
    id: 30,
    category: "Python",
    level: 3,
    difficulty: "Hard",
    question: "What is a generator in Python?",
    options: ["A function that returns an iterator", "A list comprehension", "A lambda function", "A class method"],
    answer: "A function that returns an iterator",
  },

  // APTITUDE QUESTIONS
  // Level 1 - Easy
  {
    id: 170,
    category: "Aptitude",
    level: 1,
    difficulty: "Easy",
    question: "What is 25% of 240?",
    options: ["40", "60", "80", "90"],
    answer: "60",
  },
  {
    id: 171,
    category: "Aptitude",
    level: 1,
    difficulty: "Easy",
    question: "If 5 workers can finish a job in 8 days, how many days will 10 workers take?",
    options: ["2", "4", "6", "8"],
    answer: "4",
  },
  {
    id: 172,
    category: "Aptitude",
    level: 1,
    difficulty: "Easy",
    question: "Which number is the next in the series: 2, 4, 8, 16, ?",
    options: ["18", "20", "24", "32"],
    answer: "32",
  },
  {
    id: 173,
    category: "Aptitude",
    level: 1,
    difficulty: "Easy",
    question: "If a train travels 120 km in 2 hours, what is its average speed?",
    options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
    answer: "60 km/h",
  },
  {
    id: 174,
    category: "Aptitude",
    level: 1,
    difficulty: "Easy",
    question: "In a group of 30 students, 18 like maths and 15 like science. If 8 like both, how many like neither?",
    options: ["5", "7", "8", "10"],
    answer: "7",
  },
  {
    id: 175,
    category: "Aptitude",
    level: 1,
    difficulty: "Easy",
    question: "Which shape has 4 equal sides and 4 right angles?",
    options: ["Rectangle", "Square", "Rhombus", "Parallelogram"],
    answer: "Square",
  },
  {
    id: 176,
    category: "Aptitude",
    level: 1,
    difficulty: "Easy",
    question: "What is the next logical number: 5, 7, 10, 14, ?",
    options: ["17", "18", "19", "20"],
    answer: "19",
  },
  {
    id: 177,
    category: "Aptitude",
    level: 1,
    difficulty: "Easy",
    question: "If the ratio of boys to girls is 3:2 and there are 15 boys, how many girls are there?",
    options: ["8", "9", "10", "12"],
    answer: "10",
  },

  // Aptitude QUESTIONS
  // Level 2 - Medium
  {
    id: 178,
    category: "Aptitude",
    level: 2,
    difficulty: "Medium",
    question: "A shop offers a 15% discount on a product originally priced at $200. What is the sale price?",
    options: ["$160", "$165", "$170", "$175"],
    answer: "$170",
  },
  {
    id: 179,
    category: "Aptitude",
    level: 2,
    difficulty: "Medium",
    question: "If the probability of rain is 0.4, what is the probability that it will not rain?",
    options: ["0.4", "0.6", "0.2", "0.8"],
    answer: "0.6",
  },
  {
    id: 180,
    category: "Aptitude",
    level: 2,
    difficulty: "Medium",
    question: "Which of these is the best estimate of 7/24 as a decimal?",
    options: ["0.29", "0.33", "0.21", "0.42"],
    answer: "0.29",
  },
  {
    id: 181,
    category: "Aptitude",
    level: 2,
    difficulty: "Medium",
    question: "A number is increased by 20% and then decreased by 20%. The final value is: ",
    options: ["The same", "4% less", "4% more", "20% less"],
    answer: "4% less",
  },
  {
    id: 182,
    category: "Aptitude",
    level: 2,
    difficulty: "Medium",
    question: "If x + y = 12 and x - y = 4, what is x?",
    options: ["4", "6", "8", "10"],
    answer: "8",
  },
  {
    id: 183,
    category: "Aptitude",
    level: 2,
    difficulty: "Medium",
    question: "In a class of 40 students, 25 like physics and 18 like chemistry. If 10 like both, how many like either physics or chemistry?",
    options: ["28", "33", "35", "38"],
    answer: "33",
  },
  {
    id: 184,
    category: "Aptitude",
    level: 2,
    difficulty: "Medium",
    question: "What is the area of a triangle with base 10 and height 6?",
    options: ["30", "32", "36", "60"],
    answer: "30",
  },
  {
    id: 185,
    category: "Aptitude",
    level: 2,
    difficulty: "Medium",
    question: "If 3x = 18, what is x?",
    options: ["4", "5", "6", "7"],
    answer: "6",
  },
  
  // Level 3 - Hard
  {
    id: 186,
    category: "Aptitude",
    level: 3,
    difficulty: "Hard",
    question: "A car travels the first half of a journey at 40 km/h and the second half at 60 km/h. What is the average speed for the journey?",
    options: ["48 km/h", "50 km/h", "52 km/h", "54 km/h"],
    answer: "48 km/h",
  },
  {
    id: 187,
    category: "Aptitude",
    level: 3,
    difficulty: "Hard",
    question: "If 5 workers take 12 days to complete a task, how many workers are needed to complete it in 8 days?",
    options: ["6", "7", "7.5", "8"],
    answer: "7.5",
  },
  {
    id: 188,
    category: "Aptitude",
    level: 3,
    difficulty: "Hard",
    question: "What is the value of 15% of 240 plus 20% of 150?",
    options: ["66", "72", "75", "80"],
    answer: "75",
  },
  {
    id: 189,
    category: "Aptitude",
    level: 3,
    difficulty: "Hard",
    question: "If the compound interest on Rs. 1000 for 2 years is Rs. 210, what is the annual interest rate?",
    options: ["10%", "10.5%", "10.75%", "11%"],
    answer: "10%",
  },
  {
    id: 190,
    category: "Aptitude",
    level: 3,
    difficulty: "Hard",
    question: "Which number completes the sequence: 2, 6, 12, 20, 30, ?",
    options: ["36", "40", "42", "44"],
    answer: "42",
  },

  // SQL QUESTIONS
  // Level 1 - Easy
  {
    id: 31,
    category: "SQL",
    level: 1,
    difficulty: "Easy",
    question: "Which SQL command is used to retrieve data from a database?",
    options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
    answer: "SELECT",
  },
  {
    id: 32,
    category: "SQL",
    level: 1,
    difficulty: "Easy",
    question: "Which clause is used to filter records in SQL?",
    options: ["ORDER BY", "GROUP BY", "WHERE", "HAVING"],
    answer: "WHERE",
  },
  {
    id: 33,
    category: "SQL",
    level: 1,
    difficulty: "Easy",
    question: "What does SQL stand for?",
    options: ["Structured Query Language", "Simple Query Language", "Standard Query Language", "System Query Language"],
    answer: "Structured Query Language",
  },
  {
    id: 34,
    category: "SQL",
    level: 1,
    difficulty: "Easy",
    question: "Which SQL command is used to add new records to a table?",
    options: ["ADD", "INSERT", "UPDATE", "CREATE"],
    answer: "INSERT",
  },
  {
    id: 35,
    category: "SQL",
    level: 1,
    difficulty: "Easy",
    question: "What is a primary key?",
    options: ["A unique identifier for each record", "A foreign key reference", "An index on multiple columns", "A constraint for data validation"],
    answer: "A unique identifier for each record",
  },
  {
    id: 56,
    category: "SQL",
    level: 1,
    difficulty: "Easy",
    question: "Which clause is used to sort result sets in SQL?",
    options: ["WHERE", "GROUP BY", "ORDER BY", "HAVING"],
    answer: "ORDER BY",
  },
  {
    id: 57,
    category: "SQL",
    level: 1,
    difficulty: "Easy",
    question: "Which data type is commonly used to store text in SQL?",
    options: ["VARCHAR", "INT", "DATE", "BOOLEAN"],
    answer: "VARCHAR",
  },

  // Level 2 - Medium
  {
    id: 36,
    category: "SQL",
    level: 2,
    difficulty: "Medium",
    question: "Which JOIN returns all records from both tables?",
    options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
    answer: "FULL OUTER JOIN",
  },
  {
    id: 37,
    category: "SQL",
    level: 2,
    difficulty: "Medium",
    question: "What is the purpose of the GROUP BY clause?",
    options: ["To sort data", "To group rows with same values", "To filter data", "To join tables"],
    answer: "To group rows with same values",
  },
  {
    id: 38,
    category: "SQL",
    level: 2,
    difficulty: "Medium",
    question: "Which aggregate function counts the number of rows?",
    options: ["SUM()", "AVG()", "COUNT()", "MAX()"],
    answer: "COUNT()",
  },
  {
    id: 39,
    category: "SQL",
    level: 2,
    difficulty: "Medium",
    question: "What is a foreign key?",
    options: ["A primary key in another table", "A reference to primary key in another table", "An index for faster queries", "A unique constraint"],
    answer: "A reference to primary key in another table",
  },
  {
    id: 40,
    category: "SQL",
    level: 2,
    difficulty: "Medium",
    question: "Which SQL command is used to modify existing records?",
    options: ["MODIFY", "CHANGE", "UPDATE", "ALTER"],
    answer: "UPDATE",
  },
  {
    id: 58,
    category: "SQL",
    level: 2,
    difficulty: "Medium",
    question: "What does the HAVING clause do in SQL?",
    options: ["Filters grouped records", "Sorts records", "Joins tables", "Limits the number of rows"],
    answer: "Filters grouped records",
  },
  {
    id: 59,
    category: "SQL",
    level: 2,
    difficulty: "Medium",
    question: "Which keyword is used to retrieve unique values from a column?",
    options: ["DISTINCT", "UNIQUE", "SINGLE", "DIFFERENT"],
    answer: "DISTINCT",
  },

  // Level 3 - Hard
  {
    id: 41,
    category: "SQL",
    level: 3,
    difficulty: "Hard",
    question: "What is normalization in database design?",
    options: ["Adding indexes", "Organizing data to reduce redundancy", "Creating backups", "Optimizing queries"],
    answer: "Organizing data to reduce redundancy",
  },
  {
    id: 42,
    category: "SQL",
    level: 3,
    difficulty: "Hard",
    question: "Which type of index allows fast lookups but slows down writes?",
    options: ["Clustered", "Non-clustered", "B-tree", "Hash"],
    answer: "B-tree",
  },
  {
    id: 43,
    category: "SQL",
    level: 3,
    difficulty: "Hard",
    question: "What is ACID in database transactions?",
    options: ["Atomicity, Consistency, Isolation, Durability", "Access, Control, Integrity, Data", "Automatic, Consistent, Independent, Durable", "All, Complete, Isolated, Done"],
    answer: "Atomicity, Consistency, Isolation, Durability",
  },
  {
    id: 44,
    category: "SQL",
    level: 3,
    difficulty: "Hard",
    question: "Which SQL feature allows executing a query within another query?",
    options: ["Subquery", "Join", "Union", "View"],
    answer: "Subquery",
  },
  {
    id: 45,
    category: "SQL",
    level: 3,
    difficulty: "Hard",
    question: "What is a stored procedure?",
    options: ["A temporary table", "Precompiled SQL code stored in database", "A database backup", "A user permission"],
    answer: "Precompiled SQL code stored in database",
  },
  {
    id: 60,
    category: "SQL",
    level: 3,
    difficulty: "Hard",
    question: "What does transaction isolation mean in SQL?",
    options: ["How long a transaction runs", "How transactions are isolated from each other", "How data is indexed", "How queries are optimized"],
    answer: "How transactions are isolated from each other",
  },
  {
    id: 61,
    category: "SQL",
    level: 3,
    difficulty: "Hard",
    question: "Which object represents a saved SQL query that can be reused?",
    options: ["Index", "Trigger", "View", "Cursor"],
    answer: "View",
  },

  // WEB DEVELOPMENT QUESTIONS
  // Level 1 - Easy
  {
    id: 46,
    category: "Web Development",
    level: 1,
    difficulty: "Easy",
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyperlink Text Management Language", "Home Tool Markup Language"],
    answer: "Hyper Text Markup Language",
  },
  {
    id: 47,
    category: "Web Development",
    level: 1,
    difficulty: "Easy",
    question: "Which tag is used for the largest heading in HTML?",
    options: ["<h1>", "<h6>", "<head>", "<header>"],
    answer: "<h1>",
  },
  {
    id: 48,
    category: "Web Development",
    level: 1,
    difficulty: "Easy",
    question: "What does CSS stand for?",
    options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
    answer: "Cascading Style Sheets",
  },
  {
    id: 49,
    category: "Web Development",
    level: 1,
    difficulty: "Easy",
    question: "Which property is used to change text color in CSS?",
    options: ["font-color", "text-color", "color", "foreground-color"],
    answer: "color",
  },
  {
    id: 50,
    category: "Web Development",
    level: 1,
    difficulty: "Easy",
    question: "What is JavaScript primarily used for?",
    options: ["Styling web pages", "Creating web page structure", "Adding interactivity to web pages", "Managing databases"],
    answer: "Adding interactivity to web pages",
  },

  // Level 2 - Medium
  {
    id: 51,
    category: "Web Development",
    level: 2,
    difficulty: "Medium",
    question: "Which CSS property is used for positioning elements?",
    options: ["display", "position", "float", "clear"],
    answer: "position",
  },
  {
    id: 52,
    category: "Web Development",
    level: 2,
    difficulty: "Medium",
    question: "What is the purpose of the 'alt' attribute in an image tag?",
    options: ["To specify image size", "To provide alternative text for accessibility", "To set image border", "To define image source"],
    answer: "To provide alternative text for accessibility",
  },
  {
    id: 53,
    category: "Web Development",
    level: 2,
    difficulty: "Medium",
    question: "Which JavaScript method is used to select an element by ID?",
    options: ["getElementById()", "querySelector()", "getElementsByClassName()", "getElementsByTagName()"],
    answer: "getElementById()",
  },
  {
    id: 54,
    category: "Web Development",
    level: 2,
    difficulty: "Medium",
    question: "What is responsive web design?",
    options: ["Designing for mobile first", "Making websites work on all screen sizes", "Using only CSS Grid", "Creating fast loading websites"],
    answer: "Making websites work on all screen sizes",
  },
  {
    id: 55,
    category: "Web Development",
    level: 2,
    difficulty: "Medium",
    question: "Which HTTP method is used to send data to a server?",
    options: ["GET", "POST", "PUT", "DELETE"],
    answer: "POST",
  },

  // Level 3 - Hard
  {
    id: 56,
    category: "Web Development",
    level: 3,
    difficulty: "Hard",
    question: "What is the box model in CSS?",
    options: ["A layout system", "A model describing element dimensions and spacing", "A JavaScript framework", "An HTML structure"],
    answer: "A model describing element dimensions and spacing",
  },
  {
    id: 57,
    category: "Web Development",
    level: 3,
    difficulty: "Hard",
    question: "What is CORS in web development?",
    options: ["Cross-Origin Resource Sharing", "Cascading Origin Resource System", "Client Object Resource Service", "Content Origin Resource Sharing"],
    answer: "Cross-Origin Resource Sharing",
  },
  {
    id: 58,
    category: "Web Development",
    level: 3,
    difficulty: "Hard",
    question: "Which JavaScript feature allows asynchronous operations?",
    options: ["Promises", "Variables", "Functions", "Loops"],
    answer: "Promises",
  },
  {
    id: 59,
    category: "Web Development",
    level: 3,
    difficulty: "Hard",
    question: "What is the purpose of a CDN?",
    options: ["Content Delivery Network for faster content delivery", "Code Development Node", "Client Data Network", "Central Database Node"],
    answer: "Content Delivery Network for faster content delivery",
  },
  {
    id: 60,
    category: "Web Development",
    level: 3,
    difficulty: "Hard",
    question: "What is progressive web app (PWA)?",
    options: ["A mobile app", "A web app that works offline", "A desktop application", "A server-side application"],
    answer: "A web app that works offline",
  },
  // JAVA QUESTIONS
  // Level 1 - Easy
  {
    id: 61,
    category: "Java",
    level: 1,
    difficulty: "Easy",
    question: "What is the main method signature in Java?",
    options: ["public static void main(String[] args)", "public void main(String args)", "static void main(String[] args)", "public static main(String[] args)"],
    answer: "public static void main(String[] args)",
    explanation: "The main method in Java must be public, static, void, and take a String array as parameter."
  },
  {
    id: 62,
    category: "Java",
    level: 1,
    difficulty: "Easy",
    question: "Which keyword is used to create an object in Java?",
    options: ["new", "create", "object", "instance"],
    answer: "new",
    explanation: "The 'new' keyword allocates memory and creates a new object instance."
  },
  {
    id: 63,
    category: "Java",
    level: 1,
    difficulty: "Easy",
    question: "What is the extension of Java source files?",
    options: [".java", ".class", ".jar", ".exe"],
    answer: ".java",
    explanation: "Java source code files have the .java extension and are compiled to .class files."
  },
  {
    id: 64,
    category: "Java",
    level: 1,
    difficulty: "Easy",
    question: "Which of these is not a primitive data type in Java?",
    options: ["int", "float", "String", "boolean"],
    answer: "String",
    explanation: "String is a class in Java, not a primitive data type. Primitives are int, float, boolean, etc."
  },
  {
    id: 65,
    category: "Java",
    level: 1,
    difficulty: "Easy",
    question: "What does JVM stand for?",
    options: ["Java Virtual Machine", "Java Variable Method", "JavaScript Virtual Machine", "Java Visual Model"],
    answer: "Java Virtual Machine",
    explanation: "JVM is the Java Virtual Machine that executes Java bytecode."
  },

  // Level 2 - Medium
  {
    id: 66,
    category: "Java",
    level: 2,
    difficulty: "Medium",
    question: "What is the difference between ArrayList and LinkedList?",
    options: ["ArrayList is synchronized, LinkedList is not", "ArrayList uses array, LinkedList uses nodes", "ArrayList is thread-safe, LinkedList is not", "ArrayList allows duplicates, LinkedList does not"],
    answer: "ArrayList uses array, LinkedList uses nodes",
    explanation: "ArrayList is backed by an array for fast random access, while LinkedList uses doubly-linked nodes for fast insertions/deletions."
  },
  {
    id: 67,
    category: "Java",
    level: 2,
    difficulty: "Medium",
    question: "What is method overloading in Java?",
    options: ["Same method name, different parameters", "Same method name, same parameters", "Different method names, same parameters", "Multiple inheritance"],
    answer: "Same method name, different parameters",
    explanation: "Method overloading allows multiple methods with the same name but different parameter lists."
  },
  {
    id: 68,
    category: "Java",
    level: 2,
    difficulty: "Medium",
    question: "Which exception is thrown when dividing by zero?",
    options: ["NullPointerException", "ArithmeticException", "IOException", "ClassNotFoundException"],
    answer: "ArithmeticException",
    explanation: "ArithmeticException is thrown for arithmetic errors like division by zero."
  },
  {
    id: 69,
    category: "Java",
    level: 2,
    difficulty: "Medium",
    question: "What is the purpose of the 'final' keyword?",
    options: ["To make a variable constant", "To prevent inheritance", "To prevent method overriding", "All of the above"],
    answer: "All of the above",
    explanation: "Final can make variables constant, prevent class inheritance, and prevent method overriding."
  },
  {
    id: 70,
    category: "Java",
    level: 2,
    difficulty: "Medium",
    question: "What is garbage collection in Java?",
    options: ["Manual memory management", "Automatic memory management", "File management", "Thread management"],
    answer: "Automatic memory management",
    explanation: "Garbage collection automatically frees memory by removing objects that are no longer referenced."
  },

  // Level 3 - Hard
  {
    id: 71,
    category: "Java",
    level: 3,
    difficulty: "Hard",
    question: "What is the difference between HashMap and HashTable?",
    options: ["HashMap is synchronized, HashTable is not", "HashTable is synchronized, HashMap is not", "HashMap allows null keys, HashTable does not", "HashTable allows null values, HashMap does not"],
    answer: "HashTable is synchronized, HashMap is not",
    explanation: "HashTable is synchronized and thread-safe, while HashMap is not synchronized but allows null keys and values."
  },
  {
    id: 72,
    category: "Java",
    level: 3,
    difficulty: "Hard",
    question: "What is a deadlock in Java?",
    options: ["When two threads wait for each other", "When a thread crashes", "When memory is full", "When CPU is overloaded"],
    answer: "When two threads wait for each other",
    explanation: "A deadlock occurs when two or more threads are blocked forever, each waiting for the other to release a resource."
  },
  {
    id: 73,
    category: "Java",
    level: 3,
    difficulty: "Hard",
    question: "What is the volatile keyword used for?",
    options: ["To make variables thread-safe", "To prevent optimization", "To ensure visibility of changes", "All of the above"],
    answer: "All of the above",
    explanation: "Volatile ensures that changes to a variable are visible to all threads and prevents compiler optimizations."
  },
  {
    id: 74,
    category: "Java",
    level: 3,
    difficulty: "Hard",
    question: "What is the purpose of the 'transient' keyword?",
    options: ["To make variables serializable", "To prevent serialization", "To make variables static", "To make variables final"],
    answer: "To prevent serialization",
    explanation: "Transient variables are not serialized when an object is converted to a byte stream."
  },
  {
    id: 75,
    category: "Java",
    level: 3,
    difficulty: "Hard",
    question: "What is the difference between equals() and ==?",
    options: ["equals() compares references, == compares values", "== compares references, equals() compares values", "They are the same", "equals() is for primitives, == is for objects"],
    answer: "== compares references, equals() compares values",
    explanation: "== compares object references, while equals() compares the actual content/values of objects."
  },

  // JAVASCRIPT QUESTIONS
  // Level 1 - Easy
  {
    id: 76,
    category: "JavaScript",
    level: 1,
    difficulty: "Easy",
    question: "What is the correct way to declare a variable in JavaScript?",
    options: ["var myVar;", "variable myVar;", "v myVar;", "declare myVar;"],
    answer: "var myVar;",
    explanation: "Variables in JavaScript are declared using var, let, or const keywords."
  },
  {
    id: 77,
    category: "JavaScript",
    level: 1,
    difficulty: "Easy",
    question: "Which operator is used for strict equality in JavaScript?",
    options: ["==", "===", "!=", "!=="],
    answer: "===",
    explanation: "=== checks for both value and type equality, while == only checks value."
  },
  {
    id: 78,
    category: "JavaScript",
    level: 1,
    difficulty: "Easy",
    question: "What does NaN stand for?",
    options: ["Not a Number", "New Array Number", "Null and Nothing", "Number and Null"],
    answer: "Not a Number",
    explanation: "NaN represents 'Not a Number' and is returned when a mathematical operation fails."
  },
  {
    id: 79,
    category: "JavaScript",
    level: 1,
    difficulty: "Easy",
    question: "Which method adds an element to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "push()",
    explanation: "push() adds one or more elements to the end of an array and returns the new length."
  },
  {
    id: 80,
    category: "JavaScript",
    level: 1,
    difficulty: "Easy",
    question: "What is the result of typeof null?",
    options: ["null", "undefined", "object", "boolean"],
    answer: "object",
    explanation: "This is a well-known quirk in JavaScript - typeof null returns 'object'."
  },

  // Level 2 - Medium
  {
    id: 81,
    category: "JavaScript",
    level: 2,
    difficulty: "Medium",
    question: "What is a closure in JavaScript?",
    options: ["A way to close functions", "A function with access to outer scope", "A method to end loops", "A type of loop"],
    answer: "A function with access to outer scope",
    explanation: "A closure is a function that has access to variables in its outer (enclosing) scope."
  },
  {
    id: 82,
    category: "JavaScript",
    level: 2,
    difficulty: "Medium",
    question: "What is the difference between let and var?",
    options: ["let is block-scoped, var is function-scoped", "var is block-scoped, let is function-scoped", "They are the same", "let is for constants, var is for variables"],
    answer: "let is block-scoped, var is function-scoped",
    explanation: "let is block-scoped while var is function-scoped, and let doesn't allow redeclaration."
  },
  {
    id: 83,
    category: "JavaScript",
    level: 2,
    difficulty: "Medium",
    question: "What does the 'this' keyword refer to in JavaScript?",
    options: ["Always the global object", "The object that owns the method", "The function itself", "The parent object"],
    answer: "The object that owns the method",
    explanation: "'this' refers to the object that is executing the current function."
  },
  {
    id: 84,
    category: "JavaScript",
    level: 2,
    difficulty: "Medium",
    question: "What is event bubbling?",
    options: ["Events moving up the DOM tree", "Events moving down the DOM tree", "Events staying in place", "Events being deleted"],
    answer: "Events moving up the DOM tree",
    explanation: "Event bubbling is when an event starts at the target element and bubbles up through parent elements."
  },
  {
    id: 85,
    category: "JavaScript",
    level: 2,
    difficulty: "Medium",
    question: "What is the purpose of the bind() method?",
    options: ["To bind HTML elements", "To set 'this' context permanently", "To bind CSS styles", "To bind event listeners"],
    answer: "To set 'this' context permanently",
    explanation: "bind() creates a new function with 'this' permanently set to the provided value."
  },

  // Level 3 - Hard
  {
    id: 86,
    category: "JavaScript",
    level: 3,
    difficulty: "Hard",
    question: "What is the event loop in JavaScript?",
    options: ["A loop for events", "How JavaScript handles asynchronous operations", "A loop for DOM events", "A loop for user interactions"],
    answer: "How JavaScript handles asynchronous operations",
    explanation: "The event loop is a mechanism that handles asynchronous callbacks in JavaScript."
  },
  {
    id: 87,
    category: "JavaScript",
    level: 3,
    difficulty: "Hard",
    question: "What is a Promise in JavaScript?",
    options: ["A guarantee to do something", "An object representing future completion", "A type of function", "A type of variable"],
    answer: "An object representing future completion",
    explanation: "A Promise represents the eventual completion or failure of an asynchronous operation."
  },
  {
    id: 88,
    category: "JavaScript",
    level: 3,
    difficulty: "Hard",
    question: "What is the difference between call() and apply()?",
    options: ["call() takes arguments separately, apply() takes array", "apply() takes arguments separately, call() takes array", "They are the same", "call() is for functions, apply() is for methods"],
    answer: "call() takes arguments separately, apply() takes array",
    explanation: "call() takes arguments as separate parameters, apply() takes them as an array."
  },
  {
    id: 89,
    category: "JavaScript",
    level: 3,
    difficulty: "Hard",
    question: "What is prototypal inheritance?",
    options: ["Inheritance through classes", "Inheritance through prototypes", "Inheritance through interfaces", "Multiple inheritance"],
    answer: "Inheritance through prototypes",
    explanation: "JavaScript uses prototypal inheritance where objects inherit from other objects."
  },
  {
    id: 90,
    category: "JavaScript",
    level: 3,
    difficulty: "Hard",
    question: "What is the purpose of the Symbol type?",
    options: ["For mathematical operations", "For unique identifiers", "For string operations", "For number operations"],
    answer: "For unique identifiers",
    explanation: "Symbols are unique and immutable primitive values that can be used as object property keys."
  },

  // C PROGRAMMING QUESTIONS
  // Level 1 - Easy
  {
    id: 91,
    category: "C",
    level: 1,
    difficulty: "Easy",
    question: "What is the correct way to include a header file in C?",
    options: ["#include <file.h>", "#include 'file.h'", "#include file.h", "include <file.h>"],
    answer: "#include <file.h>",
    explanation: "Header files are included using #include preprocessor directive with angle brackets for standard headers."
  },
  {
    id: 92,
    category: "C",
    level: 1,
    difficulty: "Easy",
    question: "What is the main function signature in C?",
    options: ["int main()", "void main()", "main()", "int main(void)"],
    answer: "int main()",
    explanation: "The main function in C returns int and can optionally take command line arguments."
  },
  {
    id: 93,
    category: "C",
    level: 1,
    difficulty: "Easy",
    question: "Which operator is used for pointer dereferencing?",
    options: ["&", "*", "#", "@"],
    answer: "*",
    explanation: "The asterisk (*) is used to dereference pointers and access the value they point to."
  },
  {
    id: 94,
    category: "C",
    level: 1,
    difficulty: "Easy",
    question: "What does printf() function do?",
    options: ["Reads input", "Prints output", "Calculates", "Allocates memory"],
    answer: "Prints output",
    explanation: "printf() is used to print formatted output to the console."
  },
  {
    id: 95,
    category: "C",
    level: 1,
    difficulty: "Easy",
    question: "What is the size of int data type in C?",
    options: ["2 bytes", "4 bytes", "8 bytes", "Depends on compiler"],
    answer: "Depends on compiler",
    explanation: "The size of int depends on the compiler and system architecture (usually 4 bytes on 32-bit systems)."
  },

  // Level 2 - Medium
  {
    id: 96,
    category: "C",
    level: 2,
    difficulty: "Medium",
    question: "What is the difference between malloc() and calloc()?",
    options: ["malloc() initializes memory, calloc() does not", "calloc() initializes memory to zero, malloc() does not", "They are the same", "malloc() is for arrays, calloc() is for single variables"],
    answer: "calloc() initializes memory to zero, malloc() does not",
    explanation: "malloc() allocates memory without initialization, calloc() allocates and initializes to zero."
  },
  {
    id: 97,
    category: "C",
    level: 2,
    difficulty: "Medium",
    question: "What is a pointer in C?",
    options: ["A variable that stores memory address", "A function", "A data type", "An array"],
    answer: "A variable that stores memory address",
    explanation: "A pointer is a variable that stores the memory address of another variable."
  },
  {
    id: 98,
    category: "C",
    level: 2,
    difficulty: "Medium",
    question: "What is the purpose of the 'static' keyword?",
    options: ["To make variables global", "To preserve variable value between function calls", "To make variables constant", "To allocate memory"],
    answer: "To preserve variable value between function calls",
    explanation: "Static variables retain their value between function calls and have local scope."
  },
  {
    id: 99,
    category: "C",
    level: 2,
    difficulty: "Medium",
    question: "What is recursion?",
    options: ["A loop", "A function calling itself", "A data structure", "A pointer"],
    answer: "A function calling itself",
    explanation: "Recursion is a programming technique where a function calls itself to solve a problem."
  },
  {
    id: 100,
    category: "C",
    level: 2,
    difficulty: "Medium",
    question: "What is the difference between struct and union?",
    options: ["Struct allocates separate memory, union shares memory", "Union allocates separate memory, struct shares memory", "They are the same", "Struct is for functions, union is for variables"],
    answer: "Struct allocates separate memory, union shares memory",
    explanation: "In struct, each member has its own memory, in union, all members share the same memory location."
  },

  // Level 3 - Hard
  {
    id: 101,
    category: "C",
    level: 3,
    difficulty: "Hard",
    question: "What is a memory leak in C?",
    options: ["Memory that is not freed", "Memory that is corrupted", "Memory that is full", "Memory that is empty"],
    answer: "Memory that is not freed",
    explanation: "A memory leak occurs when dynamically allocated memory is not properly deallocated."
  },
  {
    id: 102,
    category: "C",
    level: 3,
    difficulty: "Hard",
    question: "What is the difference between pass by value and pass by reference?",
    options: ["Pass by value copies data, pass by reference passes address", "Pass by reference copies data, pass by value passes address", "They are the same", "Pass by value is for primitives, pass by reference is for objects"],
    answer: "Pass by value copies data, pass by reference passes address",
    explanation: "Pass by value creates a copy, pass by reference passes the memory address."
  },
  {
    id: 103,
    category: "C",
    level: 3,
    difficulty: "Hard",
    question: "What is a dangling pointer?",
    options: ["A pointer pointing to valid memory", "A pointer pointing to freed memory", "A null pointer", "A pointer to stack memory"],
    answer: "A pointer pointing to freed memory",
    explanation: "A dangling pointer points to memory that has been freed or deallocated."
  },
  {
    id: 104,
    category: "C",
    level: 3,
    difficulty: "Hard",
    question: "What is the purpose of the 'volatile' keyword?",
    options: ["To make variables constant", "To prevent compiler optimization", "To make variables static", "To allocate memory"],
    answer: "To prevent compiler optimization",
    explanation: "Volatile tells the compiler that a variable can be changed unexpectedly, preventing optimization."
  },
  {
    id: 105,
    category: "C",
    level: 3,
    difficulty: "Hard",
    question: "What is a function pointer?",
    options: ["A pointer to a function", "A function that returns a pointer", "A pointer to data", "A pointer to struct"],
    answer: "A pointer to a function",
    explanation: "A function pointer stores the address of a function and can be used to call the function."
  },

  // C++ QUESTIONS
  // Level 1 - Easy
  {
    id: 106,
    category: "C++",
    level: 1,
    difficulty: "Easy",
    question: "What is the correct way to include iostream in C++?",
    options: ["#include <iostream>", "#include 'iostream'", "#include iostream", "include <iostream>"],
    answer: "#include <iostream>",
    explanation: "Standard library headers are included using #include with angle brackets."
  },
  {
    id: 107,
    category: "C++",
    level: 1,
    difficulty: "Easy",
    question: "What is the main function signature in C++?",
    options: ["int main()", "void main()", "main()", "int main(void)"],
    answer: "int main()",
    explanation: "The main function in C++ returns int and can optionally take command line arguments."
  },
  {
    id: 108,
    category: "C++",
    level: 1,
    difficulty: "Easy",
    question: "Which operator is used for output in C++?",
    options: ["<<", ">>", "<", ">"],
    answer: "<<",
    explanation: "The insertion operator (<<) is used with cout for output."
  },
  {
    id: 109,
    category: "C++",
    level: 1,
    difficulty: "Easy",
    question: "What is a class in C++?",
    options: ["A function", "A data type", "A blueprint for objects", "A variable"],
    answer: "A blueprint for objects",
    explanation: "A class is a user-defined data type that serves as a blueprint for creating objects."
  },
  {
    id: 110,
    category: "C++",
    level: 1,
    difficulty: "Easy",
    question: "What does 'new' operator do in C++?",
    options: ["Creates variables", "Allocates memory dynamically", "Deletes memory", "Initializes arrays"],
    answer: "Allocates memory dynamically",
    explanation: "The new operator allocates memory for objects and returns a pointer to the allocated memory."
  },

  // Level 2 - Medium
  {
    id: 111,
    category: "C++",
    level: 2,
    difficulty: "Medium",
    question: "What is inheritance in C++?",
    options: ["Copying objects", "Creating derived classes", "Deleting objects", "Allocating memory"],
    answer: "Creating derived classes",
    explanation: "Inheritance allows a class to inherit properties and methods from another class."
  },
  {
    id: 112,
    category: "C++",
    level: 2,
    difficulty: "Medium",
    question: "What is the difference between struct and class in C++?",
    options: ["No difference", "Struct members are public by default, class members are private", "Class members are public by default, struct members are private", "Struct is for data, class is for functions"],
    answer: "Struct members are public by default, class members are private",
    explanation: "The only difference is default access specifier: struct has public, class has private."
  },
  {
    id: 113,
    category: "C++",
    level: 2,
    difficulty: "Medium",
    question: "What is polymorphism in C++?",
    options: ["Multiple forms", "Multiple classes", "Multiple functions", "Multiple variables"],
    answer: "Multiple forms",
    explanation: "Polymorphism allows objects to be treated as instances of their parent class."
  },
  {
    id: 114,
    category: "C++",
    level: 2,
    difficulty: "Medium",
    question: "What is a constructor in C++?",
    options: ["A destructor", "A function to create objects", "A function called when object is created", "A function to delete objects"],
    answer: "A function called when object is created",
    explanation: "A constructor is a special member function called when an object is instantiated."
  },
  {
    id: 115,
    category: "C++",
    level: 2,
    difficulty: "Medium",
    question: "What is the 'this' pointer in C++?",
    options: ["A pointer to the current object", "A pointer to the parent class", "A pointer to the base class", "A pointer to global variables"],
    answer: "A pointer to the current object",
    explanation: "The 'this' pointer points to the current instance of the class."
  },

  // Level 3 - Hard
  {
    id: 116,
    category: "C++",
    level: 3,
    difficulty: "Hard",
    question: "What is RAII in C++?",
    options: ["Resource Allocation Is Important", "Resource Acquisition Is Initialization", "Random Access Is Important", "Resource Allocation Is Initialization"],
    answer: "Resource Acquisition Is Initialization",
    explanation: "RAII is a programming idiom where resource management is tied to object lifetime."
  },
  {
    id: 117,
    category: "C++",
    level: 3,
    difficulty: "Hard",
    question: "What is a virtual function in C++?",
    options: ["A function that can be overridden", "A function that cannot be overridden", "A pure virtual function", "A static function"],
    answer: "A function that can be overridden",
    explanation: "Virtual functions enable runtime polymorphism and can be overridden in derived classes."
  },
  {
    id: 118,
    category: "C++",
    level: 3,
    difficulty: "Hard",
    question: "What is the diamond problem in C++?",
    options: ["A syntax error", "Multiple inheritance ambiguity", "Memory allocation issue", "Template issue"],
    answer: "Multiple inheritance ambiguity",
    explanation: "The diamond problem occurs in multiple inheritance when a class inherits from two classes that have a common base class."
  },
  {
    id: 119,
    category: "C++",
    level: 3,
    difficulty: "Hard",
    question: "What is a smart pointer in C++?",
    options: ["A pointer that is intelligent", "A wrapper around raw pointers", "A pointer to smart objects", "A pointer with AI"],
    answer: "A wrapper around raw pointers",
    explanation: "Smart pointers automatically manage memory and prevent memory leaks."
  },
  {
    id: 120,
    category: "C++",
    level: 3,
    difficulty: "Hard",
    question: "What is template metaprogramming?",
    options: ["Programming with templates", "Writing programs about templates", "Using templates at runtime", "Template compilation"],
    answer: "Programming with templates",
    explanation: "Template metaprogramming uses templates to perform computations at compile time."
  },

  // DBMS QUESTIONS
  // Level 1 - Easy
  {
    id: 121,
    category: "DBMS",
    level: 1,
    difficulty: "Easy",
    question: "What does DBMS stand for?",
    options: ["Database Management System", "Data Base Management Software", "Database Managing System", "Data Base Manager System"],
    answer: "Database Management System",
    explanation: "DBMS stands for Database Management System, software for creating and managing databases."
  },
  {
    id: 122,
    category: "DBMS",
    level: 1,
    difficulty: "Easy",
    question: "What is a primary key?",
    options: ["A unique identifier for a record", "A foreign key reference", "An index on a table", "A constraint on data"],
    answer: "A unique identifier for a record",
    explanation: "A primary key uniquely identifies each record in a database table."
  },
  {
    id: 123,
    category: "DBMS",
    level: 1,
    difficulty: "Easy",
    question: "What is SQL?",
    options: ["Structured Query Language", "Simple Query Language", "Standard Query Language", "System Query Language"],
    answer: "Structured Query Language",
    explanation: "SQL is a standard language for managing relational databases."
  },
  {
    id: 124,
    category: "DBMS",
    level: 1,
    difficulty: "Easy",
    question: "What is a table in a database?",
    options: ["A collection of databases", "A collection of records", "A collection of columns", "A collection of queries"],
    answer: "A collection of records",
    explanation: "A table is a collection of related data organized in rows and columns."
  },
  {
    id: 125,
    category: "DBMS",
    level: 1,
    difficulty: "Easy",
    question: "What does DDL stand for?",
    options: ["Data Definition Language", "Data Description Language", "Database Definition Language", "Data Declaration Language"],
    answer: "Data Definition Language",
    explanation: "DDL is used to define and modify database structures (CREATE, ALTER, DROP)."
  },

  // Level 2 - Medium
  {
    id: 126,
    category: "DBMS",
    level: 2,
    difficulty: "Medium",
    question: "What is normalization in databases?",
    options: ["Organizing data to reduce redundancy", "Creating indexes", "Backing up data", "Encrypting data"],
    answer: "Organizing data to reduce redundancy",
    explanation: "Normalization is the process of organizing data to minimize redundancy and improve data integrity."
  },
  {
    id: 127,
    category: "DBMS",
    level: 2,
    difficulty: "Medium",
    question: "What is a foreign key?",
    options: ["A key from another table", "A primary key", "An index", "A constraint"],
    answer: "A key from another table",
    explanation: "A foreign key is a field that refers to the primary key of another table."
  },
  {
    id: 128,
    category: "DBMS",
    level: 2,
    difficulty: "Medium",
    question: "What is the difference between WHERE and HAVING?",
    options: ["WHERE filters rows, HAVING filters groups", "HAVING filters rows, WHERE filters groups", "They are the same", "WHERE is for SELECT, HAVING is for UPDATE"],
    answer: "WHERE filters rows, HAVING filters groups",
    explanation: "WHERE filters individual rows before grouping, HAVING filters groups after GROUP BY."
  },
  {
    id: 129,
    category: "DBMS",
    level: 2,
    difficulty: "Medium",
    question: "What is a JOIN in SQL?",
    options: ["Combining tables", "Splitting tables", "Creating tables", "Deleting tables"],
    answer: "Combining tables",
    explanation: "JOIN combines rows from two or more tables based on a related column."
  },
  {
    id: 130,
    category: "DBMS",
    level: 2,
    difficulty: "Medium",
    question: "What is ACID in databases?",
    options: ["Atomicity, Consistency, Isolation, Durability", "Accuracy, Completeness, Integrity, Durability", "Atomicity, Correctness, Isolation, Durability", "Accuracy, Consistency, Integrity, Durability"],
    answer: "Atomicity, Consistency, Isolation, Durability",
    explanation: "ACID are properties that guarantee database transactions are processed reliably."
  },

  // Level 3 - Hard
  {
    id: 131,
    category: "DBMS",
    level: 3,
    difficulty: "Hard",
    question: "What is database indexing?",
    options: ["Creating backups", "Speeding up queries", "Encrypting data", "Normalizing data"],
    answer: "Speeding up queries",
    explanation: "Indexes are data structures that improve the speed of data retrieval operations."
  },
  {
    id: 132,
    category: "DBMS",
    level: 3,
    difficulty: "Hard",
    question: "What is a deadlock in databases?",
    options: ["Database crash", "Two transactions waiting for each other", "Data corruption", "Memory overflow"],
    answer: "Two transactions waiting for each other",
    explanation: "A deadlock occurs when two or more transactions are waiting for each other to release locks."
  },
  {
    id: 133,
    category: "DBMS",
    level: 3,
    difficulty: "Hard",
    question: "What is database sharding?",
    options: ["Creating backups", "Splitting database across servers", "Encrypting data", "Compressing data"],
    answer: "Splitting database across servers",
    explanation: "Sharding is a database architecture pattern that splits large databases across multiple servers."
  },
  {
    id: 134,
    category: "DBMS",
    level: 3,
    difficulty: "Hard",
    question: "What is CAP theorem?",
    options: ["Consistency, Availability, Partition tolerance", "Correctness, Accuracy, Performance", "Concurrency, Atomicity, Persistence", "Cache, Authentication, Permissions"],
    answer: "Consistency, Availability, Partition tolerance",
    explanation: "CAP theorem states that a distributed system can only guarantee 2 out of 3: Consistency, Availability, Partition tolerance."
  },
  {
    id: 135,
    category: "DBMS",
    level: 3,
    difficulty: "Hard",
    question: "What is database replication?",
    options: ["Creating copies of database", "Backing up database", "Migrating database", "Upgrading database"],
    answer: "Creating copies of database",
    explanation: "Replication creates and maintains multiple copies of a database for redundancy and performance."
  },

  // OS QUESTIONS
  // Level 1 - Easy
  {
    id: 136,
    category: "OS",
    level: 1,
    difficulty: "Easy",
    question: "What does OS stand for?",
    options: ["Operating System", "Open Source", "Object System", "Online System"],
    answer: "Operating System",
    explanation: "OS stands for Operating System, software that manages computer hardware and software resources."
  },
  {
    id: 137,
    category: "OS",
    level: 1,
    difficulty: "Easy",
    question: "What is a process in OS?",
    options: ["A program in execution", "A file on disk", "A hardware component", "A network connection"],
    answer: "A program in execution",
    explanation: "A process is an instance of a program that is being executed by the operating system."
  },
  {
    id: 138,
    category: "OS",
    level: 1,
    difficulty: "Easy",
    question: "What is the kernel?",
    options: ["User interface", "Core part of OS", "Application software", "Hardware driver"],
    answer: "Core part of OS",
    explanation: "The kernel is the core part of the operating system that manages system resources."
  },
  {
    id: 139,
    category: "OS",
    level: 1,
    difficulty: "Easy",
    question: "What is virtual memory?",
    options: ["Physical RAM", "Hard disk space used as RAM", "Cache memory", "ROM memory"],
    answer: "Hard disk space used as RAM",
    explanation: "Virtual memory uses hard disk space to extend physical RAM when needed."
  },
  {
    id: 140,
    category: "OS",
    level: 1,
    difficulty: "Easy",
    question: "What is a thread?",
    options: ["A process", "A lightweight process", "A file", "A directory"],
    answer: "A lightweight process",
    explanation: "A thread is a lightweight process that shares memory space with other threads."
  },

  // Level 2 - Medium
  {
    id: 141,
    category: "OS",
    level: 2,
    difficulty: "Medium",
    question: "What is deadlock in OS?",
    options: ["System crash", "Processes waiting for each other", "Memory overflow", "CPU overload"],
    answer: "Processes waiting for each other",
    explanation: "Deadlock occurs when processes are blocked waiting for resources held by each other."
  },
  {
    id: 142,
    category: "OS",
    level: 2,
    difficulty: "Medium",
    question: "What is paging in OS?",
    options: ["Memory allocation technique", "Disk scheduling", "Process scheduling", "File system"],
    answer: "Memory allocation technique",
    explanation: "Paging divides physical memory into fixed-size blocks called pages."
  },
  {
    id: 143,
    category: "OS",
    level: 2,
    difficulty: "Medium",
    question: "What is context switching?",
    options: ["Switching between applications", "Switching between processes", "Switching between threads", "All of the above"],
    answer: "All of the above",
    explanation: "Context switching is the process of saving and restoring state when switching between processes or threads."
  },
  {
    id: 144,
    category: "OS",
    level: 2,
    difficulty: "Medium",
    question: "What is a semaphore?",
    options: ["A signaling mechanism", "A memory location", "A process", "A thread"],
    answer: "A signaling mechanism",
    explanation: "A semaphore is a variable used to control access to shared resources in concurrent programming."
  },
  {
    id: 145,
    category: "OS",
    level: 2,
    difficulty: "Medium",
    question: "What is CPU scheduling?",
    options: ["Managing CPU resources", "Managing memory", "Managing files", "Managing networks"],
    answer: "Managing CPU resources",
    explanation: "CPU scheduling determines which process runs on the CPU and for how long."
  },

  // Level 3 - Hard
  {
    id: 146,
    category: "OS",
    level: 3,
    difficulty: "Hard",
    question: "What is thrashing in OS?",
    options: ["High paging activity", "System crash", "Memory leak", "CPU overload"],
    answer: "High paging activity",
    explanation: "Thrashing occurs when a system spends more time paging than executing processes."
  },
  {
    id: 147,
    category: "OS",
    level: 3,
    difficulty: "Hard",
    question: "What is demand paging?",
    options: ["Loading all pages at once", "Loading pages on demand", "Preloading pages", "Random page loading"],
    answer: "Loading pages on demand",
    explanation: "Demand paging loads pages into memory only when they are needed."
  },
  {
    id: 148,
    category: "OS",
    level: 3,
    difficulty: "Hard",
    question: "What is a race condition?",
    options: ["Fast execution", "Timing-dependent bug", "Memory issue", "Network issue"],
    answer: "Timing-dependent bug",
    explanation: "A race condition occurs when the behavior depends on the relative timing of events."
  },
  {
    id: 149,
    category: "OS",
    level: 3,
    difficulty: "Hard",
    question: "What is the banker's algorithm?",
    options: ["Resource allocation algorithm", "Scheduling algorithm", "Memory management", "File system"],
    answer: "Resource allocation algorithm",
    explanation: "The banker's algorithm prevents deadlock by ensuring safe resource allocation states."
  },
  {
    id: 150,
    category: "OS",
    level: 3,
    difficulty: "Hard",
    question: "What is virtual memory segmentation?",
    options: ["Dividing memory into segments", "Using disk as memory", "Memory protection", "Memory allocation"],
    answer: "Dividing memory into segments",
    explanation: "Segmentation divides memory into logical segments of varying sizes."
  },

  // CN (Computer Networks) QUESTIONS
  // Level 1 - Easy
  {
    id: 151,
    category: "CN",
    level: 1,
    difficulty: "Easy",
    question: "What does CN stand for in computer science?",
    options: ["Computer Networks", "Computer Nodes", "Central Network", "Communication Network"],
    answer: "Computer Networks",
    explanation: "CN stands for Computer Networks, the study of computer communication systems."
  },
  {
    id: 152,
    category: "CN",
    level: 1,
    difficulty: "Easy",
    question: "What is an IP address?",
    options: ["Internet Protocol address", "Internal Program address", "Internet Program address", "Internal Protocol address"],
    answer: "Internet Protocol address",
    explanation: "An IP address is a numerical label assigned to each device connected to a computer network."
  },
  {
    id: 153,
    category: "CN",
    level: 1,
    difficulty: "Easy",
    question: "What is the OSI model?",
    options: ["Operating System Interface", "Open Systems Interconnection", "Online System Interface", "Open Source Interface"],
    answer: "Open Systems Interconnection",
    explanation: "OSI model is a conceptual framework for understanding network communications."
  },
  {
    id: 154,
    category: "CN",
    level: 1,
    difficulty: "Easy",
    question: "What is HTTP?",
    options: ["HyperText Transfer Protocol", "High Transfer Protocol", "Hyper Transfer Text Protocol", "High Text Transfer Protocol"],
    answer: "HyperText Transfer Protocol",
    explanation: "HTTP is the protocol used for transferring hypertext over the internet."
  },
  {
    id: 155,
    category: "CN",
    level: 1,
    difficulty: "Easy",
    question: "What is a router?",
    options: ["A device that forwards data packets", "A device that stores data", "A device that displays data", "A device that processes data"],
    answer: "A device that forwards data packets",
    explanation: "A router is a networking device that forwards data packets between computer networks."
  },

  // Level 2 - Medium
  {
    id: 156,
    category: "CN",
    level: 2,
    difficulty: "Medium",
    question: "What is TCP/IP?",
    options: ["Transmission Control Protocol/Internet Protocol", "Transfer Control Protocol/Internet Protocol", "Transmission Control Protocol/Internal Protocol", "Transfer Control Protocol/Internal Protocol"],
    answer: "Transmission Control Protocol/Internet Protocol",
    explanation: "TCP/IP is the suite of protocols that defines how data is transmitted over the internet."
  },
  {
    id: 157,
    category: "CN",
    level: 2,
    difficulty: "Medium",
    question: "What is the difference between TCP and UDP?",
    options: ["TCP is connection-oriented, UDP is connectionless", "TCP is faster, UDP is slower", "TCP is for files, UDP is for streaming", "TCP is for local, UDP is for internet"],
    answer: "TCP is connection-oriented, UDP is connectionless",
    explanation: "TCP provides reliable, ordered delivery, while UDP provides faster but unreliable delivery."
  },
  {
    id: 158,
    category: "CN",
    level: 2,
    difficulty: "Medium",
    question: "What is DNS?",
    options: ["Domain Name System", "Dynamic Name System", "Domain Network System", "Dynamic Network System"],
    answer: "Domain Name System",
    explanation: "DNS translates domain names to IP addresses."
  },
  {
    id: 159,
    category: "CN",
    level: 2,
    difficulty: "Medium",
    question: "What is a subnet mask?",
    options: ["A mask that divides IP addresses", "A mask that hides IP addresses", "A mask that encrypts IP addresses", "A mask that compresses IP addresses"],
    answer: "A mask that divides IP addresses",
    explanation: "A subnet mask determines which part of an IP address is the network portion."
  },
  {
    id: 160,
    category: "CN",
    level: 2,
    difficulty: "Medium",
    question: "What is the purpose of the transport layer?",
    options: ["Physical connection", "Data transmission", "End-to-end communication", "Network routing"],
    answer: "End-to-end communication",
    explanation: "The transport layer provides end-to-end communication services for applications."
  },

  // Level 3 - Hard
  {
    id: 161,
    category: "CN",
    level: 3,
    difficulty: "Hard",
    question: "What is the three-way handshake in TCP?",
    options: ["SYN, SYN-ACK, ACK", "Hello, Hello-ACK, ACK", "Connect, Connect-ACK, ACK", "Start, Start-ACK, ACK"],
    answer: "SYN, SYN-ACK, ACK",
    explanation: "The three-way handshake establishes a TCP connection: SYN, SYN-ACK, ACK."
  },
  {
    id: 162,
    category: "CN",
    level: 3,
    difficulty: "Hard",
    question: "What is network congestion?",
    options: ["Network slowdown due to overload", "Network security breach", "Network hardware failure", "Network software bug"],
    answer: "Network slowdown due to overload",
    explanation: "Network congestion occurs when too much data is sent through a network, causing delays."
  },
  {
    id: 163,
    category: "CN",
    level: 3,
    difficulty: "Hard",
    question: "What is IPv6?",
    options: ["New version of IP with 128-bit addresses", "New version of IP with 64-bit addresses", "New version of IP with 32-bit addresses", "New version of IP with 256-bit addresses"],
    answer: "New version of IP with 128-bit addresses",
    explanation: "IPv6 uses 128-bit addresses compared to IPv4's 32-bit addresses."
  },
  {
    id: 164,
    category: "CN",
    level: 3,
    difficulty: "Hard",
    question: "What is the purpose of ARP?",
    options: ["Address Resolution Protocol", "Automatic Routing Protocol", "Advanced Routing Protocol", "Address Routing Protocol"],
    answer: "Address Resolution Protocol",
    explanation: "ARP maps IP addresses to MAC addresses in a local network."
  },
  {
    id: 165,
    category: "CN",
    level: 3,
    difficulty: "Hard",
    question: "What is network security?",
    options: ["Protecting network from threats", "Speeding up network", "Expanding network", "Monitoring network"],
    answer: "Protecting network from threats",
    explanation: "Network security involves measures to protect networks from unauthorized access and threats."
  },
  
  // ===== EXPANDED QUESTIONS FOR VARIETY =====
  
  // JAVA - ADDITIONAL Level 1
  {
    id: 200,
    category: "Java",
    level: 1,
    difficulty: "Easy",
    question: "What is an interface in Java?",
    options: ["A class", "A blueprint for a class", "A method", "A variable"],
    answer: "A blueprint for a class"
  },
  {
    id: 201,
    category: "Java",
    level: 1,
    difficulty: "Easy",
    question: "Which of these is NOT a primitive data type in Java?",
    options: ["int", "String", "double", "boolean"],
    answer: "String"
  },
  {
    id: 202,
    category: "Java",
    level: 1,
    difficulty: "Easy",
    question: "What keyword is used for inheritance in Java?",
    options: ["extends", "implements", "inherits", "import"],
    answer: "extends"
  },
  {
    id: 203,
    category: "Java",
    level: 1,
    difficulty: "Easy",
    question: "What is the default value of an integer variable in Java?",
    options: ["0", "null", "undefined", "1"],
    answer: "0"
  },
  {
    id: 204,
    category: "Java",
    level: 1,
    difficulty: "Easy",
    question: "Which method is used to compare two strings in Java?",
    options: ["==", "equals()", "compareTo()", "compare()"],
    answer: "equals()"
  },
  {
    id: 205,
    category: "Java",
    level: 1,
    difficulty: "Easy",
    question: "What is the purpose of the 'final' keyword in Java?",
    options: ["To optimize code", "To prevent modification", "To mark end of method", "To initialize variables"],
    answer: "To prevent modification"
  },
  {
    id: 206,
    category: "Java",
    level: 1,
    difficulty: "Easy",
    question: "How do you create an array in Java?",
    options: ["int arr = new int[5];", "int[] arr = new int[5];", "array int[5] arr;", "new int[5] arr;"],
    answer: "int[] arr = new int[5];"
  },
  {
    id: 207,
    category: "Java",
    level: 1,
    difficulty: "Easy",
    question: "What is a constructor in Java?",
    options: ["A method that returns a value", "A special method used to initialize objects", "A variable type", "A looping construct"],
    answer: "A special method used to initialize objects"
  },
  {
    id: 208,
    category: "Java",
    level: 1,
    difficulty: "Easy",
    question: "Which access modifier makes a variable accessible everywhere?",
    options: ["private", "protected", "public", "default"],
    answer: "public"
  },
  {
    id: 209,
    category: "Java",
    level: 1,
    difficulty: "Easy",
    question: "What does JVM stand for?",
    options: ["Java Virtual Module", "Java Virtual Machine", "Java Verification Method", "Java Version Manager"],
    answer: "Java Virtual Machine"
  },
  
  // JAVA - ADDITIONAL Level 2
  {
    id: 210,
    category: "Java",
    level: 2,
    difficulty: "Medium",
    question: "What is polymorphism in Java?",
    options: ["Using multiple classes", "Ability of an object to take multiple forms", "Creating multiple methods", "Inheriting from multiple classes"],
    answer: "Ability of an object to take multiple forms"
  },
  {
    id: 211,
    category: "Java",
    level: 2,
    difficulty: "Medium",
    question: "What is the difference between ArrayList and LinkedList?",
    options: ["ArrayList is slower", "LinkedList is slower for access", "They are identical", "ArrayList doesn't allow duplicates"],
    answer: "LinkedList is slower for access"
  },
  {
    id: 212,
    category: "Java",
    level: 2,
    difficulty: "Medium",
    question: "What is exception handling in Java?",
    options: ["Preventing errors", "Managing errors gracefully", "Avoiding try-catch blocks", "Testing code"],
    answer: "Managing errors gracefully"
  },
  {
    id: 213,
    category: "Java",
    level: 2,
    difficulty: "Medium",
    question: "What does the 'static' keyword mean in Java?",
    options: ["Variable doesn't change", "Belongs to class, not instance", "Must be initialized", "Is immutable"],
    answer: "Belongs to class, not instance"
  },
  {
    id: 214,
    category: "Java",
    level: 2,
    difficulty: "Medium",
    question: "Which collection does not allow duplicates?",
    options: ["List", "Set", "Queue", "Stack"],
    answer: "Set"
  },
  {
    id: 215,
    category: "Java",
    level: 2,
    difficulty: "Medium",
    question: "What is method overloading?",
    options: ["Creating multiple methods with same name and parameters", "Creating multiple methods with same name but different parameters", "Inheriting a method", "Overriding a method"],
    answer: "Creating multiple methods with same name but different parameters"
  },
  {
    id: 216,
    category: "Java",
    level: 2,
    difficulty: "Medium",
    question: "What is the purpose of 'super' keyword?",
    options: ["Better performance", "Refer to parent class", "Create subclass", "Access static variables"],
    answer: "Refer to parent class"
  },
  {
    id: 217,
    category: "Java",
    level: 2,
    difficulty: "Medium",
    question: "Which type of variable has scope throughout the class?",
    options: ["Local variable", "Instance variable", "Static variable", "Block variable"],
    answer: "Instance variable"
  },
  
  // JAVA - ADDITIONAL Level 3
  {
    id: 218,
    category: "Java",
    level: 3,
    difficulty: "Hard",
    question: "What is the difference between == and equals() in Java?",
    options: ["No difference", "== compares reference, equals() compares value", "equals() is faster", "== is for primitives only"],
    answer: "== compares reference, equals() compares value"
  },
  {
    id: 219,
    category: "Java",
    level: 3,
    difficulty: "Hard",
    question: "What is a marker interface in Java?",
    options: ["Interface with one method", "Interface with no methods", "Abstract interface", "Public interface"],
    answer: "Interface with no methods"
  },
  {
    id: 220,
    category: "Java",
    level: 3,
    difficulty: "Hard",
    question: "What does the volatile keyword do?",
    options: ["Makes variable immutable", "Ensures visibility across threads", "Optimizes memory", "Prevents compilation"],
    answer: "Ensures visibility across threads"
  },
  
  // JAVASCRIPT - ADDITIONAL Level 1
  {
    id: 221,
    category: "JavaScript",
    level: 1,
    difficulty: "Easy",
    question: "What does JavaScript require to run?",
    options: ["JVM", "A web browser", "Compiler", "Server"],
    answer: "A web browser"
  },
  {
    id: 222,
    category: "JavaScript",
    level: 1,
    difficulty: "Easy",
    question: "Which is the correct way to declare a variable?",
    options: ["variable x = 5;", "var x = 5;", "x := 5;", "int x = 5;"],
    answer: "var x = 5;"
  },
  {
    id: 223,
    category: "JavaScript",
    level: 1,
    difficulty: "Easy",
    question: "How do you create a function in JavaScript?",
    options: ["function() {}", "func() {}", "define function() {}", "fun() {}"],
    answer: "function() {}"
  },
  {
    id: 224,
    category: "JavaScript",
    level: 1,
    difficulty: "Easy",
    question: "What is a callback function?",
    options: ["A function called after an event", "A function that calls itself", "A function in a class", "A function that returns nothing"],
    answer: "A function called after an event"
  },
  {
    id: 225,
    category: "JavaScript",
    level: 1,
    difficulty: "Easy",
    question: "What is the difference between null and undefined?",
    options: ["No difference", "null is intentional, undefined is accidental", "undefined is intentional, null is accidental", "Only null exists"],
    answer: "null is intentional, undefined is accidental"
  },
  {
    id: 226,
    category: "JavaScript",
    level: 1,
    difficulty: "Easy",
    question: "Which method is used to parse JSON?",
    options: ["parse()", "JSON.parse()", "parseJSON()", "toJSON()"],
    answer: "JSON.parse()"
  },
  {
    id: 227,
    category: "JavaScript",
    level: 1,
    difficulty: "Easy",
    question: "What is an array in JavaScript?",
    options: ["A single value", "An ordered collection of values", "A function", "A variable type"],
    answer: "An ordered collection of values"
  },
  {
    id: 228,
    category: "JavaScript",
    level: 1,
    difficulty: "Easy",
    question: "How do you add an element to an array?",
    options: ["push()", "add()", "append()", "insert()"],
    answer: "push()"
  },
  
  // JAVASCRIPT - ADDITIONAL Level 2
  {
    id: 229,
    category: "JavaScript",
    level: 2,
    difficulty: "Medium",
    question: "What is closure in JavaScript?",
    options: ["Ending a function", "Function having access to outer scope variables", "Closing a connection", "Ending a loop"],
    answer: "Function having access to outer scope variables"
  },
  {
    id: 230,
    category: "JavaScript",
    level: 2,
    difficulty: "Medium",
    question: "What is the difference between let and var?",
    options: ["No difference", "let has block scope, var has function scope", "var is deprecated", "let only works in functions"],
    answer: "let has block scope, var has function scope"
  },
  {
    id: 231,
    category: "JavaScript",
    level: 2,
    difficulty: "Medium",
    question: "What is hoisting in JavaScript?",
    options: ["Moving variables up", "Variables moving to top of scope before execution", "Lifting elements", "Sorting data"],
    answer: "Variables moving to top of scope before execution"
  },
  {
    id: 232,
    category: "JavaScript",
    level: 2,
    difficulty: "Medium",
    question: "What is the this keyword in JavaScript?",
    options: ["Current object reference", "A function", "A variable type", "A loop construct"],
    answer: "Current object reference"
  },
  {
    id: 233,
    category: "JavaScript",
    level: 2,
    difficulty: "Medium",
    question: "What is a promise in JavaScript?",
    options: ["A guaranteed value", "An object representing asynchronous operation", "A function parameter", "A variable type"],
    answer: "An object representing asynchronous operation"
  },
  {
    id: 234,
    category: "JavaScript",
    level: 2,
    difficulty: "Medium",
    question: "What is the spread operator?",
    options: ["...", ">>>", ">>", "**"],
    answer: "..."
  },
  
  // JAVASCRIPT - ADDITIONAL Level 3
  {
    id: 235,
    category: "JavaScript",
    level: 3,
    difficulty: "Hard",
    question: "What is event bubbling?",
    options: ["Events disappearing", "Events propagating from child to parent", "Events duplicating", "Events being canceled"],
    answer: "Events propagating from child to parent"
  },
  {
    id: 236,
    category: "JavaScript",
    level: 3,
    difficulty: "Hard",
    question: "What is higher-order function?",
    options: ["A function that returns a number", "A function taking/returning functions", "A recursive function", "A class method"],
    answer: "A function taking/returning functions"
  },
  
  // C - ADDITIONAL Level 1
  {
    id: 237,
    category: "C",
    level: 1,
    difficulty: "Easy",
    question: "What is the correct syntax to include a library?",
    options: ["import stdio.h;", "#include <stdio.h>", "include stdio.h;", "#import <stdio.h>"],
    answer: "#include <stdio.h>"
  },
  {
    id: 238,
    category: "C",
    level: 1,
    difficulty: "Easy",
    question: "What keyword is used to create a variable?",
    options: ["var", "variable", "int (for integers)", "const"],
    answer: "int (for integers)"
  },
  {
    id: 239,
    category: "C",
    level: 1,
    difficulty: "Easy",
    question: "What is a pointer in C?",
    options: ["A variable", "A variable storing memory address", "A loop", "A function"],
    answer: "A variable storing memory address"
  },
  {
    id: 240,
    category: "C",
    level: 1,
    difficulty: "Easy",
    question: "How do you declare an array in C?",
    options: ["int arr[10];", "array int[10];", "int arr = new int[10];", "declare int arr[10];"],
    answer: "int arr[10];"
  },
  {
    id: 241,
    category: "C",
    level: 1,
    difficulty: "Easy",
    question: "What is the return type of printf()?",
    options: ["void", "int", "string", "boolean"],
    answer: "int"
  },
  
  // C - ADDITIONAL Level 2
  {
    id: 242,
    category: "C",
    level: 2,
    difficulty: "Medium",
    question: "What is dynamic memory allocation in C?",
    options: ["Automatic memory allocation", "Allocating memory at runtime using malloc", "Stack allocation", "Static allocation"],
    answer: "Allocating memory at runtime using malloc"
  },
  {
    id: 243,
    category: "C",
    level: 2,
    difficulty: "Medium",
    question: "What is the difference between * and &?",
    options: ["No difference", "* dereferences, & gets address", "& dereferences, * gets address", "Both are same"],
    answer: "* dereferences, & gets address"
  },
  
  // C - ADDITIONAL Level 3
  {
    id: 244,
    category: "C",
    level: 3,
    difficulty: "Hard",
    question: "What is a void pointer?",
    options: ["Pointer with no address", "Generic pointer to any data type", "Null pointer", "Invalid pointer"],
    answer: "Generic pointer to any data type"
  },
  
  // C++ - ADDITIONAL Level 1
  {
    id: 245,
    category: "C++",
    level: 1,
    difficulty: "Easy",
    question: "What is C++ primarily used for?",
    options: ["Web development", "System software and game development", "Mobile apps", "Data science"],
    answer: "System software and game development"
  },
  {
    id: 246,
    category: "C++",
    level: 1,
    difficulty: "Easy",
    question: "What is the difference between class and struct in C++?",
    options: ["No difference", "class is private by default, struct is public", "struct is deprecated", "They are identical"],
    answer: "class is private by default, struct is public"
  },
  {
    id: 247,
    category: "C++",
    level: 1,
    difficulty: "Easy",
    question: "How do you define a namespace in C++?",
    options: ["namespace name {}", "define namespace name {}", "namespace: name {}", "create namespace name {}"],
    answer: "namespace name {}"
  },
  
  // C++ - ADDITIONAL Level 2
  {
    id: 248,
    category: "C++",
    level: 2,
    difficulty: "Medium",
    question: "What is operator overloading?",
    options: ["Using multiple operators", "Redefining built-in operators for custom types", "Creating new operators", "Removing operators"],
    answer: "Redefining built-in operators for custom types"
  },
  
  // C++ - ADDITIONAL Level 3
  {
    id: 249,
    category: "C++",
    level: 3,
    difficulty: "Hard",
    question: "What are templates in C++?",
    options: ["HTML templates", "Generic programming mechanism", "Design patterns", "Style guides"],
    answer: "Generic programming mechanism"
  },
  
  // PYTHON - ADDITIONAL Level 1
  {
    id: 250,
    category: "Python",
    level: 1,
    difficulty: "Easy",
    question: "What is Python?",
    options: ["A snake species", "A high-level programming language", "A web browser", "An operating system"],
    answer: "A high-level programming language"
  },
  {
    id: 251,
    category: "Python",
    level: 1,
    difficulty: "Easy",
    question: "How do you create a dictionary in Python?",
    options: ["{}", "[]", "dict()", "{} is correct"],
    answer: "{}"
  },
  {
    id: 252,
    category: "Python",
    level: 1,
    difficulty: "Easy",
    question: "What is a tuple in Python?",
    options: ["Mutable list", "Immutable list", "Dictionary", "A function"],
    answer: "Immutable list"
  },
  {
    id: 253,
    category: "Python",
    level: 1,
    difficulty: "Easy",
    question: "Which function returns the length of a string?",
    options: ["size()", "length()", "len()", "sizeof()"],
    answer: "len()"
  },
  
  // PYTHON - ADDITIONAL Level 2
  {
    id: 254,
    category: "Python",
    level: 2,
    difficulty: "Medium",
    question: "What is list comprehension?",
    options: ["Compressing lists", "Creating lists concisely", "Listing comprehensions", "Understanding lists"],
    answer: "Creating lists concisely"
  },
  {
    id: 255,
    category: "Python",
    level: 2,
    difficulty: "Medium",
    question: "What is lambda in Python?",
    options: ["A Greek letter", "Anonymous function", "A loop", "A variable type"],
    answer: "Anonymous function"
  },
  
  // PYTHON - ADDITIONAL Level 3
  {
    id: 256,
    category: "Python",
    level: 3,
    difficulty: "Hard",
    question: "What is metaclass in Python?",
    options: ["A parent class", "A class of a class", "An abstract class", "An interface"],
    answer: "A class of a class"
  },
  
  // SQL - ADDITIONAL Level 1
  {
    id: 257,
    category: "SQL",
    level: 1,
    difficulty: "Easy",
    question: "What is a table in SQL?",
    options: ["A furniture item", "Structured collection of data in rows and columns", "A list", "A file"],
    answer: "Structured collection of data in rows and columns"
  },
  {
    id: 258,
    category: "SQL",
    level: 1,
    difficulty: "Easy",
    question: "What is a NULL value in SQL?",
    options: ["Zero", "Empty string", "Unknown or missing value", "False"],
    answer: "Unknown or missing value"
  },
  {
    id: 259,
    category: "SQL",
    level: 1,
    difficulty: "Easy",
    question: "How do you remove duplicate rows?",
    options: ["UNIQUE", "DISTINCT", "REMOVE_DUP", "DELETE_DUP"],
    answer: "DISTINCT"
  },
  {
    id: 260,
    category: "SQL",
    level: 1,
    difficulty: "Easy",
    question: "What does DELETE do?",
    options: ["Removes database", "Removes records from a table", "Removes columns", "Removes constraints"],
    answer: "Removes records from a table"
  },
  
  // SQL - ADDITIONAL Level 2
  {
    id: 261,
    category: "SQL",
    level: 2,
    difficulty: "Medium",
    question: "What is the difference between INNER and LEFT JOIN?",
    options: ["INNER is faster", "INNER returns matching records only, LEFT includes all left records", "No difference", "LEFT is deprecated"],
    answer: "INNER returns matching records only, LEFT includes all left records"
  },
  {
    id: 262,
    category: "SQL",
    level: 2,
    difficulty: "Medium",
    question: "What are aggregate functions?",
    options: ["Functions that combine data", "Functions that aggregate tables", "JOIN operations", "SELECT statements"],
    answer: "Functions that combine data"
  },
  
  // SQL - ADDITIONAL Level 3
  {
    id: 263,
    category: "SQL",
    level: 3,
    difficulty: "Hard",
    question: "What is denormalization?",
    options: ["Removing normalization", "Optimizing queries by introducing redundancy", "Normalizing again", "Data corruption"],
    answer: "Optimizing queries by introducing redundancy"
  },
  
  // DBMS - Level 1
  {
    id: 264,
    category: "DBMS",
    level: 1,
    difficulty: "Easy",
    question: "What is DBMS?",
    options: ["Database Menu System", "Database Management System", "Data Base Main System", "Digital Block Management System"],
    answer: "Database Management System"
  },
  {
    id: 265,
    category: "DBMS",
    level: 1,
    difficulty: "Easy",
    question: "What is data redundancy?",
    options: ["Too much data", "Duplicate data", "Missing data", "Corrupted data"],
    answer: "Duplicate data"
  },
  {
    id: 266,
    category: "DBMS",
    level: 1,
    difficulty: "Easy",
    question: "What is data integrity?",
    options: ["Fast data", "Accurate and complete data", "Encrypted data", "Compressed data"],
    answer: "Accurate and complete data"
  },
  
  // DBMS - Level 2
  {
    id: 267,
    category: "DBMS",
    level: 2,
    difficulty: "Medium",
    question: "What is an ER model?",
    options: ["Error Recovery", "Entity-Relationship model", "Extended Record model", "Entry-Record model"],
    answer: "Entity-Relationship model"
  },
  {
    id: 268,
    category: "DBMS",
    level: 2,
    difficulty: "Medium",
    question: "What is normalization?",
    options: ["Making data normal", "Organizing data to reduce redundancy", "Backing up data", "Encrypting data"],
    answer: "Organizing data to reduce redundancy"
  },
  
  // DBMS - Level 3
  {
    id: 269,
    category: "DBMS",
    level: 3,
    difficulty: "Hard",
    question: "What are database transactions?",
    options: ["Database changes", "Set of operations ensuring data consistency", "User actions", "System processes"],
    answer: "Set of operations ensuring data consistency"
  },
  
  // OS - Level 1
  {
    id: 270,
    category: "OS",
    level: 1,
    difficulty: "Easy",
    question: "What is an Operating System?",
    options: ["A software that runs applications", "Hardware component", "Programming language", "Network protocol"],
    answer: "A software that runs applications"
  },
  {
    id: 271,
    category: "OS",
    level: 1,
    difficulty: "Easy",
    question: "What is multitasking?",
    options: ["Doing multiple tasks manually", "CPU running multiple processes simultaneously", "Multiple windows", "Multiple monitors"],
    answer: "CPU running multiple processes simultaneously"
  },
  {
    id: 272,
    category: "OS",
    level: 1,
    difficulty: "Easy",
    question: "What is virtual memory?",
    options: ["Imaginary memory", "RAM", "Extended memory using disk space", "Cached memory"],
    answer: "Extended memory using disk space"
  },
  
  // OS - Level 2
  {
    id: 273,
    category: "OS",
    level: 2,
    difficulty: "Medium",
    question: "What is deadlock?",
    options: ["System crash", "Processes waiting for resources indefinitely", "Slow system", "Power failure"],
    answer: "Processes waiting for resources indefinitely"
  },
  {
    id: 274,
    category: "OS",
    level: 2,
    difficulty: "Medium",
    question: "What is process scheduling?",
    options: ["Planning processes", "Allocating CPU time to processes", "Creating processes", "Terminating processes"],
    answer: "Allocating CPU time to processes"
  },
  
  // OS - Level 3
  {
    id: 275,
    category: "OS",
    level: 3,
    difficulty: "Hard",
    question: "What is thrashing?",
    options: ["System malfunction", "Excessive paging reducing performance", "Disk failure", "Memory leak"],
    answer: "Excessive paging reducing performance"
  },
  
  // CN - Level 1
  {
    id: 276,
    category: "CN",
    level: 1,
    difficulty: "Easy",
    question: "What is a network?",
    options: ["A set of connected computers", "A single computer", "A protocol", "A database"],
    answer: "A set of connected computers"
  },
  {
    id: 277,
    category: "CN",
    level: 1,
    difficulty: "Easy",
    question: "What is TCP/IP?",
    options: ["A data type", "Transmission Control Protocol/Internet Protocol", "A programming language", "A database system"],
    answer: "Transmission Control Protocol/Internet Protocol"
  },
  {
    id: 278,
    category: "CN",
    level: 1,
    difficulty: "Easy",
    question: "What is bandwidth?",
    options: ["Width of a band", "Maximum data transmission rate", "Network cable", "Router speed"],
    answer: "Maximum data transmission rate"
  },
  
  // CN - Level 2
  {
    id: 279,
    category: "CN",
    level: 2,
    difficulty: "Medium",
    question: "What is DNS?",
    options: ["Data Name Server", "Domain Name System", "Direct Network Service", "Database Name Service"],
    answer: "Domain Name System"
  },
  {
    id: 280,
    category: "CN",
    level: 2,
    difficulty: "Medium",
    question: "What is a MAC address?",
    options: ["Apple computer", "Media Access Control address", "Main Address Code", "Mobile Adaptive Connection"],
    answer: "Media Access Control address"
  },
  
  // CN - Level 3
  {
    id: 281,
    category: "CN",
    level: 3,
    difficulty: "Hard",
    question: "What is Quality of Service (QoS)?",
    options: ["Good quality service", "Managing network traffic to ensure performance", "Customer service quality", "Network stability"],
    answer: "Managing network traffic to ensure performance"
  },
];