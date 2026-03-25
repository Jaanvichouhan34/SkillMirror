export const webdevCourse = {
  id: 'webdev',
  title: 'Full Stack Master Path',
  icon: '🌐',
  color: '#10b981',
  modules: [
    {
      id: 'web_m1',
      title: '1: Programming Fundamentals',
      xpReward: 100,
      lessons: [
        { id: 'web_m1_l1', title: 'Web Logic Foundations', duration: '10 min', content: [{ type: 'theory', text: 'Understand how computers process instructions and how the web fits into this architecture.' }] }
      ]
    },
    {
      id: 'web_m2',
      title: '2: Control Flow',
      xpReward: 100,
      lessons: [
        { id: 'web_m2_l1', title: 'Branching Logic', duration: '12 min', content: [{ type: 'theory', text: 'Learn to use conditionals and loops to control the user experience on a webpage.' }] }
      ]
    },
    {
      id: 'web_m3',
      title: '3: Functions & Recursion',
      xpReward: 120,
      lessons: [
        { id: 'web_m3_l1', title: 'Modular Design', duration: '15 min', content: [{ type: 'theory', text: 'Master function definitions and the call stack to build scalable web applications.' }] }
      ]
    },
    {
      id: 'web_m4',
      title: '4: Arrays & Strings',
      xpReward: 120,
      lessons: [
        { id: 'web_m4_l1', title: 'Data Structures 101', duration: '15 min', content: [{ type: 'theory', text: 'Learn to handle lists of products, users, and text data using arrays and strings.' }] }
      ]
    },
    {
      id: 'web_m5',
      title: '5: Advanced Data Structures',
      xpReward: 150,
      lessons: [
        { id: 'web_m5_l1', title: 'Stacks & Queues in Web', duration: '20 min', content: [{ type: 'theory', text: 'Implement undo/redo systems with stacks and task management with queues.' }] }
      ]
    },
    {
      id: 'web_m6',
      title: '6: Algorithms (Searching, Sorting)',
      xpReward: 180,
      lessons: [
        { id: 'web_m6_l1', title: 'Efficient Lookups', duration: '20 min', content: [{ type: 'theory', text: 'Learn how to filter and sort thousands of items in a browser efficiently.' }] }
      ]
    },
    {
      id: 'web_m7',
      title: '7: Object-Oriented Programming',
      xpReward: 150,
      lessons: [
        { id: 'web_m7_l1', title: 'Clean Architecture', duration: '20 min', content: [{ type: 'theory', text: 'Use OOP principles to structure complex web apps and manage state.' }] }
      ]
    },
    {
      id: 'web_m8',
      title: '8: HTML & CSS Mastery',
      xpReward: 200,
      lessons: [
        { id: 'web_m8_l1', title: 'Modern UI Layouts', duration: '30 min', content: [{ type: 'theory', text: 'Master Flexbox, Grid, and Semantic HTML to build stunning, accessible user interfaces.' }] }
      ]
    },
    {
      id: 'web_m9',
      title: '9: JavaScript Core & DOM',
      xpReward: 250,
      lessons: [
        { id: 'web_m9_l1', title: 'Interactivity', duration: '30 min', content: [{ type: 'theory', text: 'Use pure JS to manipulate the DOM and react to complex user interactions.' }] }
      ]
    },
    {
      id: 'web_m10',
      title: '10: React Basics & State',
      xpReward: 300,
      lessons: [
        { id: 'web_m10_l1', title: 'Introduction to React', duration: '45 min', content: [{ type: 'theory', text: 'Learn the component-based architecture and state management using React hooks.' }] }
      ]
    },
    {
      id: 'web_m11',
      title: '11: SQL Basics',
      xpReward: 150,
      lessons: [
        { id: 'web_m11_l1', title: 'Relational Foundations', duration: '20 min', content: [{ type: 'theory', text: 'Learn to store app data in structured tables using SQL.' }] }
      ]
    },
    {
      id: 'web_m12',
      title: '12: Advanced SQL & Optimization',
      xpReward: 200,
      lessons: [
        { id: 'web_m12_l1', title: 'Query Performance', duration: '20 min', content: [{ type: 'theory', text: 'Optimize your database queries to handle large-scale web traffic.' }] }
      ]
    },
    {
      id: 'web_m13',
      title: '13: Backend (Node, Express, APIs)',
      xpReward: 350,
      lessons: [
        { id: 'web_m13_l1', title: 'RESTful API Design', duration: '45 min', content: [{ type: 'theory', text: 'Build secure, scalable backends using Node.js and Express.' }] }
      ]
    },
    {
      id: 'web_m14',
      title: '14: Full Stack Project: E-commerce',
      xpReward: 500,
      lessons: [
        { id: 'web_m14_l1', title: 'The Big Build', duration: '120 min', content: [{ type: 'project', title: 'SkillMirror Store', description: 'Create a full-stack e-commerce site from scratch.', features: ['User authentication', 'Dynamic product listing', 'Cart system with persistsence', 'Admin dashboard'] }] }
      ]
    },
    {
      id: 'web_m15',
      title: '15: Interview Prep (DSA + System Design)',
      xpReward: 500,
      lessons: [
        { id: 'web_m15_l1', title: 'Landing the Offer', duration: '60 min', content: [{ type: 'interview', questions: ['Difference between SQL/NoSQL?', 'React Lifecycle hooks?', 'Explain REST vs GraphQL.', 'How to protect from SQL Injection?', 'What is Load Balancing?'] }] }
      ]
    }
  ]
};
