export const javascriptCourse = {
  id: 'javascript',
  title: 'JavaScript Elite',
  icon: '🟨',
  color: '#f7df1e',
  modules: [
    {
      id: 'js_m1',
      title: '1: JS Foundations',
      xpReward: 100,
      lessons: [
        {
          id: 'js_m1_l1',
          title: 'The Language of the Web',
          duration: '10 min',
          content: [
            { type: 'theory', text: 'JavaScript is a high-level, just-in-time compiled language that conforms to the ECMAScript specification. It is the core of web interactivity.' },
            { type: 'code', language: 'javascript', code: 'console.log("Welcome to SkillMirror!");\nlet score = 0;\nconst level = 1;' },
            { type: 'note', text: 'Variables defined with "let" can be reassigned, while "const" cannot.' },
            { type: 'practice', title: 'Basics', problems: ['Declare a variable for your name.', 'Log a welcome message to the console.'] }
          ]
        }
      ]
    },
    {
      id: 'js_m2',
      title: '2: Data Types',
      xpReward: 100,
      lessons: [
        {
          id: 'js_m2_l1',
          title: 'Primitives & Beyond',
          duration: '12 min',
          content: [
            { type: 'theory', text: 'JS has 7 primitive types: string, number, bigint, boolean, undefined, symbol, and null. Objects are non-primitive.' },
            { type: 'code', language: 'javascript', code: 'let name = "SkillMirror"; // String\nlet xp = 450; // Number\nlet isActive = true; // Boolean' },
            { type: 'practice', title: 'Type Check', problems: ['Use typeof to check a number.', 'Create an object representing a user.'] }
          ]
        }
      ]
    },
    {
      id: 'js_m3',
      title: '3: Control Flow',
      xpReward: 120,
      lessons: [
        {
          id: 'js_m3_l1',
          title: 'Decisions & Loops',
          duration: '15 min',
          content: [
            { type: 'theory', text: 'Master if/else, switch, and for/while loops to drive your app logic.' },
            { type: 'code', language: 'javascript', code: 'for(let i=0; i<3; i++) {\n  console.log(`Step ${i}`);\n}' }
          ]
        }
      ]
    },
    { id: 'js_m4', title: '4: Functions', xpReward: 120, lessons: [{ id: 'js_m4_l1', title: 'Arrows & Expressions', content: [{ type: 'theory', text: 'Functions are blocks of code designed to perform a particular task.' }, { type: 'code', language: 'javascript', code: 'const square = (n) => n * n;' }, { type: 'practice', title: 'JS Functions', problems: ['Write a function to greet a user.', 'Create an arrow function to add two numbers.'] }] }] },
    { id: 'js_m5', title: '5: Arrays Mastery', xpReward: 150, lessons: [{ id: 'js_m5_l1', title: 'Higher Order Methods', content: [{ type: 'theory', text: 'Use map, filter, and reduce to transform data efficiently.' }, { type: 'code', language: 'javascript', code: 'const nums = [1, 2, 3];\nconst doubled = nums.map(n => n * 2);' }] }] },
    { id: 'js_m6', title: '6: Objects & JSON', xpReward: 180, lessons: [{ id: 'js_m6_l1', title: 'Storing Complex Data', content: [{ type: 'theory', text: 'Objects allow you to store collections of data as key-value pairs.' }] }] },
    { id: 'js_m7', title: '7: The DOM', xpReward: 150, lessons: [{ id: 'js_m7_l1', title: 'Querying Elements', content: [{ type: 'theory', text: 'JavaScript can change all the HTML elements and CSS styles in the page.' }, { type: 'code', language: 'javascript', code: 'document.getElementById("app").innerHTML = "Hello!";' }] }] },
    { id: 'js_m8', title: '8: Events', xpReward: 120, lessons: [{ id: 'js_m8_l1', title: 'Listener Logic', content: [{ type: 'theory', text: 'React to clicks, typing, and other user actions.' }, { type: 'code', language: 'javascript', code: 'window.addEventListener("click", () => console.log("Tap!"));' }] }] },
    { id: 'js_m9', title: '9: Asynchronous JS', xpReward: 250, lessons: [{ id: 'js_m9_l1', title: 'Promises & Await', content: [{ type: 'theory', text: 'Handle tasks that take time, like network requests, without blocking the main thread.' }, { type: 'code', language: 'javascript', code: 'const data = await fetch("api/v1");' }] }] },
    { id: 'js_m10', title: '10: Error Handling', xpReward: 150, lessons: [{ id: 'js_m10_l1', title: 'Try, Catch, Finally', content: [{ type: 'theory', text: 'Gracefully handle unexpected issues in your code execution.' }] }] },
    { id: 'js_m11', title: '11: ES6+ Features', xpReward: 200, lessons: [{ id: 'js_m11_l1', title: 'Modern Syntax', content: [{ type: 'theory', text: 'Master destructuring, spread/rest operators, and template literals.' }] }] },
    { id: 'js_m12', title: '12: Classes & OOP', xpReward: 200, lessons: [{ id: 'js_m12_l1', title: 'Prototypes & Classes', content: [{ type: 'theory', text: 'Understand how JS handles objects and inheritance.' }] }] },
    { id: 'js_m13', title: '13: Browser Storage', xpReward: 180, lessons: [{ id: 'js_m13_l1', title: 'Local Storage', content: [{ type: 'theory', text: 'Save data on the user\'s computer so it persists after a refresh.' }] }] },
    { id: 'js_m14', title: '14: Regex & Patterns', xpReward: 220, lessons: [{ id: 'js_m14_l1', title: 'String Searching', content: [{ type: 'theory', text: 'Use regular expressions for complex text matching and validation.' }] }] },
    { id: 'js_m15', title: '15: Testing with Jest', xpReward: 300, lessons: [{ id: 'js_m15_l1', title: 'Logic Verification', content: [{ type: 'project', title: 'Unit Tester', description: 'Write tests for a calculator application to ensure mathematical accuracy.', features: ['Test addition/subtraction', 'Handle edge cases (division by zero)', 'Mock data inputs', 'Generate coverage reports'] }] }] }
  ]
};
