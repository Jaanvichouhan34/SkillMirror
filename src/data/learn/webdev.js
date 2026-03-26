export const webdevCourse = {
  id: 'webdev',
  title: 'Full Stack Master Path',
  icon: '🌐',
  color: '#10b981',
  modules: [
    {
      id: 'web_m1',
      title: '1: HTML5 Foundations',
      xpReward: 100,
      lessons: [
        { 
          id: 'web_m1_l1', 
          title: 'The Skeleton of the Web', 
          duration: '10 min', 
          content: [
            { type: 'theory', text: 'HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser.' },
            { type: 'code', language: 'html', code: '<html>\n  <body>\n    <h1>Welcome</h1>\n    <p>This is SkillMirror.</p>\n  </body>\n</html>' },
            { type: 'practice', title: 'HTML Basics', problems: ['Create an <h1> tag with your name.', 'Add a list of three skills.'] }
          ] 
        }
      ]
    },
    {
      id: 'web_m2',
      title: '2: CSS3 Styling',
      xpReward: 100,
      lessons: [
        { 
          id: 'web_m2_l1', 
          title: 'Branding the Browser', 
          duration: '12 min', 
          content: [
            { type: 'theory', text: 'CSS (Cascading Style Sheets) describes how HTML elements are to be displayed on screen, paper, or in other media.' },
            { type: 'code', language: 'css', code: 'h1 {\n  color: #4f9cf9;\n  font-size: 2rem;\n}' },
            { type: 'practice', title: 'CSS Magic', problems: ['Change the background color of the body.', 'Make all paragraphs bold.'] }
          ] 
        }
      ]
    },
    {
      id: 'web_m3',
      title: '3: JavaScript Basics',
      xpReward: 120,
      lessons: [
        { 
          id: 'web_m3_l1', 
          title: 'Adding Interactivity', 
          duration: '15 min', 
          content: [
            { type: 'theory', text: 'JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and much more.' },
            { type: 'code', language: 'js', code: 'const btn = document.querySelector("button");\nbtn.onclick = () => alert("Clicked!");' }
          ] 
        }
      ]
    },
    { id: 'web_m4', title: '4: Responsive Design', xpReward: 120, lessons: [{ id: 'web_m4_l1', title: 'Flexbox & Grid', content: [{ type: 'theory', text: 'Build layouts that work on mobile and desktop using modern CSS techniques.' }] }] },
    { id: 'web_m5', title: '5: DOM Manipulation', xpReward: 150, lessons: [{ id: 'web_m5_l1', title: 'Dynamic UI', content: [{ type: 'theory', text: 'Use JS to add, remove, and change HTML elements on the fly.' }] }] },
    { id: 'web_m6', title: '6: ES6+ Modern JS', xpReward: 180, lessons: [{ id: 'web_m6_l1', title: 'Clean Syntax', content: [{ type: 'theory', text: 'Master arrow functions, destructuring, and modules.' }] }] },
    { id: 'web_m7', title: '7: Bootstrap & Frameworks', xpReward: 150, lessons: [{ id: 'web_m7_l1', title: 'Component Libraries', content: [{ type: 'theory', text: 'Speed up development with pre-built UI components.' }] }] },
    { id: 'web_m8', title: '8: Git & Version Control', xpReward: 200, lessons: [{ id: 'web_m8_l1', title: 'Collaborative Coding', content: [{ type: 'theory', text: 'Learn to track changes and work with teams using Git and GitHub.' }] }] },
    { id: 'web_m9', title: '9: Backend Intro (Node.js)', xpReward: 250, lessons: [{ id: 'web_m9_l1', title: 'Server-side JS', content: [{ type: 'theory', text: 'Run JavaScript on the server to handle data and business logic.' }] }] },
    { id: 'web_m10', title: '10: Express.js APIs', xpReward: 300, lessons: [{ id: 'web_m10_l1', title: 'Building Endpoints', content: [{ type: 'theory', text: 'Create RESTful APIs to communicate with your frontend.' }] }] },
    { id: 'web_m11', title: '11: MongoDB & NoSQL', xpReward: 150, lessons: [{ id: 'web_m11_l1', title: 'Document Databases', content: [{ type: 'theory', text: 'Store flexible, JSON-like data in MongoDB.' }] }] },
    { id: 'web_m12', title: '12: React.js Mastery', xpReward: 200, lessons: [{ id: 'web_m12_l1', title: 'Hooks & State', content: [{ type: 'theory', text: 'The industry-standard library for building high-performance UI.' }] }] },
    { id: 'web_m13', title: '13: Auth & Security', xpReward: 350, lessons: [{ id: 'web_m13_l1', title: 'JWT & Encryption', content: [{ type: 'theory', text: 'Protect user data and implement secure login systems.' }] }] },
    { id: 'web_m14', title: '14: Deployment (Vercel/Cloud)', xpReward: 500, lessons: [{ id: 'web_m14_l1', title: 'Hosting', content: [{ type: 'project', title: 'Portfolio Site', description: 'Deploy your personal developer portfolio to the world.', features: ['Responsive design', 'Project showcase', 'Contact form', 'Domain setup'] }] }] },
    { id: 'web_m15', title: '15: Career & Portfolio', xpReward: 500, lessons: [{ id: 'web_m15_l1', title: 'Project Capstone', content: [{ type: 'interview', questions: ['What is the Virtual DOM in React?', 'Explain Event Bubbling in JS.', 'Difference between local and session storage.', 'What is CORS?', 'How do you optimize web performance?'] }] }] }
  ]
};
