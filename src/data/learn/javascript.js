export const javascriptCourse = {
  id: 'javascript',
  title: 'JavaScript Elite',
  icon: '🟨',
  color: '#f7df1e',
  modules: [
    {
      id: 'js_m1',
      title: 'JavaScript Foundations',
      xpReward: 100,
      lessons: [
        {
          id: 'js_m1_l1',
          title: 'Hello JS',
          duration: '10 min',
          content: [
            { type: 'theory', text: 'JavaScript is the core language of the web, powering interactive experiences everywhere.' },
            { type: 'code', language: 'javascript', code: 'console.log("Elite JS Active");' },
            { type: 'practice', title: 'JS Basics', problems: ['Log your favorite color', 'Declare let x = 100'] }
          ]
        }
      ]
    },
    {
      id: 'js_m2',
      title: 'Control Flow & Logic',
      xpReward: 100,
      lessons: [
        {
          id: 'js_m2_l1',
          title: 'Conditions & Loops',
          duration: '12 min',
          content: [
            { type: 'theory', text: 'Use if statements, template literals, and basic loops for logic.' },
            { type: 'code', language: 'javascript', code: 'if (isHappy) console.log("Smile")' }
          ]
        }
      ]
    },
    {
      id: 'js_m3',
      title: 'Functions & SCOPE',
      xpReward: 120,
      lessons: [
        {
          id: 'js_m3_l1',
          title: 'Arrow Functions & Closures',
          duration: '15 min',
          content: [
            { type: 'theory', text: 'Functions are first-class citizens in JS. Master arrow functions and variable scope.' },
            { type: 'code', language: 'javascript', code: 'const add = (a, b) => a + b;' }
          ]
        }
      ]
    },
    {
      id: 'js_m4',
      title: 'Arrays & Object Literals',
      xpReward: 120,
      lessons: [
        {
          id: 'js_m4_l1',
          title: 'Mapping & Filtering',
          duration: '15 min',
          content: [
            { type: 'theory', text: 'Manipulate lists and store complex data using arrays and objects.' },
            { type: 'code', language: 'javascript', code: 'const user = { name: "Dev", age: 25 };' }
          ]
        }
      ]
    },
    {
      id: 'js_m5',
      title: 'ES6+ Advanced Syntax',
      xpReward: 180,
      lessons: [
        {
          id: 'js_m5_l1',
          title: 'Destructuring & Spread',
          duration: '15 min',
          content: [
            { type: 'theory', text: 'Modern JS syntax like destructuring, spread operators, and rest parameters make code cleaner.' }
          ]
        }
      ]
    },
    {
      id: 'js_m6',
      title: 'DOM & Event Handling',
      xpReward: 150,
      lessons: [
        {
          id: 'js_m6_l1',
          title: 'Making the Browser Alive',
          duration: '20 min',
          content: [
            { type: 'theory', text: 'The Document Object Model (DOM) is a programming interface for HTML. Events let you react to user actions.' }
          ]
        }
      ]
    },
    {
      id: 'js_m7',
      title: 'Async JS: Promises & Await',
      xpReward: 200,
      lessons: [
        {
          id: 'js_m7_l1',
          title: 'Handling Latency',
          duration: '20 min',
          content: [
            { type: 'theory', text: 'JavaScript is single-threaded. Promises and async/await help handle network requests without freezing the UI.' }
          ]
        }
      ]
    },
    {
      id: 'js_m8',
      title: 'Fetch API & AJAX',
      xpReward: 180,
      lessons: [
        {
          id: 'js_m8_l1',
          title: 'Communicating with Servers',
          duration: '20 min',
          content: [
            { type: 'theory', text: 'Learn to use the Fetch API to pull data from public web services.' }
          ]
        }
      ]
    },
    {
      id: 'js_m9',
      title: 'Object-Oriented JS (OOP)',
      xpReward: 200,
      lessons: [
        {
          id: 'js_m9_l1',
          title: 'Classes & Prototypes',
          duration: '20 min',
          content: [
            { type: 'theory', text: 'JavaScript uses prototype-based inheritance, but modern classes provide a clearer syntax.' }
          ]
        }
      ]
    },
    {
      id: 'js_m10',
      title: 'Modules (Import/Export)',
      xpReward: 150,
      lessons: [
        {
          id: 'js_m10_l1',
          title: 'Better Code Organization',
          duration: '15 min',
          content: [
            { type: 'theory', text: 'Organize your code across multiple files using ES Modules.' }
          ]
        }
      ]
    },
    {
      id: 'js_m11',
      title: 'Error Handling (Try/Catch)',
      xpReward: 120,
      lessons: [
        {
          id: 'js_m11_l1',
          title: 'Bulletproof Code',
          duration: '15 min',
          content: [
            { type: 'theory', text: 'Handle runtime errors gracefully and prevent your web apps from crashing.' }
          ]
        }
      ]
    },
    {
      id: 'js_m12',
      title: 'Unit Testing with Jest',
      xpReward: 200,
      lessons: [
        {
          id: 'js_m12_l1',
          title: 'Testing Logic',
          duration: '25 min',
          content: [
            { type: 'theory', text: 'Learn to write tests to ensure your utility functions work as expected.' }
          ]
        }
      ]
    },
    {
      id: 'js_m13',
      title: 'Browser APIs (Storage)',
      xpReward: 180,
      lessons: [
        {
          id: 'js_m13_l1',
          title: 'Local & Session Storage',
          duration: '20 min',
          content: [
            { type: 'theory', text: 'Persist user data across refreshes using localStorage.' }
          ]
        }
      ]
    },
    {
      id: 'js_m14',
      title: 'Introduction to TypeScript',
      xpReward: 250,
      lessons: [
        {
          id: 'js_m14_l1',
          title: 'Typed JavaScript',
          duration: '30 min',
          content: [
            { type: 'theory', text: 'Add static typing to JavaScript for larger, more maintainable codebases.' }
          ]
        }
      ]
    },
    {
      id: 'js_m15',
      title: 'Capstone: Dynamic Web App',
      xpReward: 500,
      lessons: [
        {
          id: 'js_m15_l1',
          title: 'Real-time Dashboard',
          duration: '60 min',
          content: [
            { type: 'project', title: 'Crypto Monitor', description: 'Build a dashboard that displays live crypto prices using WebSockets or Fetch.', features: ['Live data fetching', 'Chart.js integration', 'Search and filter coins', 'Mobile responsive layout'] }
          ]
        }
      ]
    }
  ]
};
