export const pythonCourse = {
  id: 'python',
  title: 'Python Mastery',
  icon: '🐍',
  color: '#3b82f6',
  modules: [
    {
      id: 'py_m1',
      title: 'Programming Fundamentals',
      xpReward: 100,
      lessons: [
        {
          id: 'py_m1_l1',
          title: 'Introduction to Python',
          duration: '10 min',
          content: [
            { type: 'theory', text: 'Python is a high-level, interpreted language known for its simple syntax and broad use in data science and AI.' },
            { type: 'code', language: 'python', code: 'print("Hello Python")' },
            { type: 'practice', title: 'Python Basics', problems: ['Declare an integer x = 5', 'Calculate the area of a rectangle'] }
          ]
        }
      ]
    },
    {
      id: 'py_m2',
      title: 'Control Flow',
      xpReward: 100,
      lessons: [
        {
          id: 'py_m2_l1',
          title: 'If, For, While',
          duration: '12 min',
          content: [
            { type: 'theory', text: 'Control the flow of your program using logical blocks and repetitive cycles.' },
            { type: 'code', language: 'python', code: 'if x > 10: print("High")' }
          ]
        }
      ]
    },
    {
      id: 'py_m3',
      title: 'Functions & Recursion',
      xpReward: 120,
      lessons: [
        {
          id: 'py_m3_l1',
          title: 'Modular Code in Python',
          duration: '15 min',
          content: [
            { type: 'theory', text: 'Define functions using the "def" keyword to create reusable logic.' },
            { type: 'code', language: 'python', code: 'def add(a, b): return a + b' }
          ]
        }
      ]
    },
    {
      id: 'py_m4',
      title: 'Lists & Strings',
      xpReward: 120,
      lessons: [
        {
          id: 'py_m4_l1',
          title: 'Data Collections in Python',
          duration: '15 min',
          content: [
            { type: 'theory', text: 'Lists are versatile sequences, and strings are immutable sequences of characters.' },
            { type: 'code', language: 'python', code: 'fruits = ["apple", "banana"]\nprint(fruits[0])' }
          ]
        }
      ]
    },
    {
      id: 'py_m5',
      title: 'Data Structures (Stack, Queue)',
      xpReward: 150,
      lessons: [
        {
          id: 'py_m5_l1',
          title: 'Using Lists as Stacks',
          duration: '20 min',
          content: [
            { type: 'theory', text: 'Implement LIFO and FIFO behavior using basic Python lists or the collections module.' }
          ]
        }
      ]
    },
    {
      id: 'py_m6',
      title: 'Search & Sort Algorithms',
      xpReward: 180,
      lessons: [
        {
          id: 'py_m6_l1',
          title: 'Optimizing Lookups',
          duration: '20 min',
          content: [
            { type: 'theory', text: 'Implement binary search and sorting algorithms like Bubble Sort in pure Python.' }
          ]
        }
      ]
    },
    {
      id: 'py_m7',
      title: 'OOP in Python',
      xpReward: 150,
      lessons: [
        {
          id: 'py_m7_l1',
          title: 'Classes, Objects, Inheritance',
          duration: '20 min',
          content: [
            { type: 'theory', text: 'Python supports all core OOP principles with a very clean, simple syntax.' },
            { type: 'code', language: 'python', code: 'class Robot:\n  def talk(self): print("Hi")' }
          ]
        }
      ]
    },
    {
      id: 'py_m8',
      title: 'File I/O & Exceptions',
      xpReward: 120,
      lessons: [
        {
          id: 'py_m8_l1',
          title: 'Files & Try/Except',
          duration: '15 min',
          content: [
            { type: 'theory', text: 'Read/write to text files and handle runtime errors gracefully.' }
          ]
        }
      ]
    },
    {
      id: 'py_m9',
      title: 'Advanced Data (Sets, Dicts)',
      xpReward: 150,
      lessons: [
        {
          id: 'py_m9_l1',
          title: 'Powerful Built-ins',
          duration: '20 min',
          content: [
            { type: 'theory', text: 'Dictionaries for key-value lookups and Sets for unique element operations.' }
          ]
        }
      ]
    },
    {
      id: 'py_m10',
      title: 'Decorators & Generators',
      xpReward: 200,
      lessons: [
        {
          id: 'py_m10_l1',
          title: 'Functional Magic',
          duration: '20 min',
          content: [
            { type: 'theory', text: 'Modify function behavior with decorators and handle large data streams with generators.' }
          ]
        }
      ]
    },
    {
      id: 'py_m11',
      title: 'Regular Expressions (Regex)',
      xpReward: 180,
      lessons: [
        {
          id: 'py_m11_l1',
          title: 'Pattern Matching',
          duration: '20 min',
          content: [
            { type: 'theory', text: 'Powerful text processing using the "re" module to find and manipulate strings.' }
          ]
        }
      ]
    },
    {
      id: 'py_m12',
      title: 'Web Scraping (BeautifulSoup)',
      xpReward: 200,
      lessons: [
        {
          id: 'py_m12_l1',
          title: 'Pulling Data from the Web',
          duration: '25 min',
          content: [
            { type: 'theory', text: 'Learn to extract information from HTML pages programmatically.' }
          ]
        }
      ]
    },
    {
      id: 'py_m13',
      title: 'Introduction to Flask/APIs',
      xpReward: 250,
      lessons: [
        {
          id: 'py_m13_l1',
          title: 'Your First Web Server',
          duration: '30 min',
          content: [
            { type: 'theory', text: 'Use Flask to build lightweight web APIs and routes.' }
          ]
        }
      ]
    },
    {
      id: 'py_m14',
      title: 'Working with Data (Pandas/JSON)',
      xpReward: 300,
      lessons: [
        {
          id: 'py_m14_l1',
          title: 'Processing Large Datasets',
          duration: '30 min',
          content: [
            { type: 'theory', text: 'Use Pandas to analyze tabular data and perform high-speed calculations.' }
          ]
        }
      ]
    },
    {
      id: 'py_m15',
      title: 'Capstone: Automating the Web',
      xpReward: 500,
      lessons: [
        {
          id: 'py_m15_l1',
          title: 'AI Stock Monitor',
          duration: '60 min',
          content: [
            { type: 'project', title: 'Automated Insight App', description: 'Build a Python script that scrapes financial news, analyzes sentiment, and sends you a summary.', features: ['Web scraping with BeautifulSoup', 'Sentiment analysis with TextBlob', 'Email notification system', 'Data logging with CSV'] }
          ]
        }
      ]
    }
  ]
};
