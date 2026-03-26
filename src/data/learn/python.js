export const pythonCourse = {
  id: 'python',
  title: 'Python Mastery',
  icon: '🐍',
  color: '#3b82f6',
  modules: [
    {
      id: 'py_m1',
      title: '1: Getting Started',
      xpReward: 100,
      lessons: [
        {
          id: 'py_m1_l1',
          title: 'Introduction to Python',
          duration: '10 min',
          content: [
            { type: 'theory', text: 'Python is a high-level, interpreted language known for its simple syntax and broad use in data science, AI, and backend development.' },
            { type: 'code', language: 'python', code: 'print("Hello SkillMirror!")\nx = 5\ny = "Python"\nprint(f"{y} level: {x}")' },
            { type: 'note', text: 'Python uses indentation to define code blocks, unlike curly braces in C++ or Java.' },
            { type: 'practice', title: 'First Script', problems: ['Print your name.', 'Create a variable for your age and print it.'] }
          ]
        }
      ]
    },
    {
      id: 'py_m2',
      title: '2: Control Flow',
      xpReward: 100,
      lessons: [
        {
          id: 'py_m2_l1',
          title: 'If, For, While',
          duration: '12 min',
          content: [
            { type: 'theory', text: 'Control the flow of your program using if-else logic and loops for repetition.' },
            { type: 'code', language: 'python', code: 'for i in range(5):\n  if i % 2 == 0:\n    print(f"{i} is even")' },
            { type: 'practice', title: 'Logic Gate', problems: ['Write a loop that prints numbers 1 to 10.', 'Check if a number is positive, negative, or zero.'] }
          ]
        }
      ]
    },
    {
      id: 'py_m3',
      title: '3: Functions',
      xpReward: 120,
      lessons: [
        {
          id: 'py_m3_l1',
          title: 'Modular Logic',
          duration: '15 min',
          content: [
            { type: 'theory', text: 'Functions help you reuse code and keep it organized. Use the def keyword.' },
            { type: 'code', language: 'python', code: 'def greet(name):\n  return f"Hello, {name}!"\n\nprint(greet("Learner"))' },
            { type: 'practice', title: 'Function Tasks', problems: ['Create a function to calculate square of a number.', 'Write a function that returns the larger of two numbers.'] }
          ]
        }
      ]
    },
    { id: 'py_m4', title: '4: Data Structures', xpReward: 120, lessons: [{ id: 'py_m4_l1', title: 'Lists & Tuples', content: [{ type: 'theory', text: 'Lists are mutable ordered sequences; Tuples are immutable.' }, { type: 'code', language: 'python', code: 'fruits = ["apple", "mango"]\nfruits.append("orange")' }, { type: 'practice', title: 'List Fun', problems: ['Add three items to a list.', 'Access the last element of a tuple.'] }] }] },
    { id: 'py_m5', title: '5: Dictionaries', xpReward: 150, lessons: [{ id: 'py_m5_l1', title: 'Key-Value Pairs', content: [{ type: 'theory', text: 'Dictionaries store data in key:value format for O(1) lookups.' }, { type: 'code', language: 'python', code: 'user = {"name": "Mohit", "role": "Dev"}\nprint(user["name"])' }, { type: 'practice', title: 'Dict Task', problems: ['Create a dictionary of word counts.', 'Merge two dictionaries.'] }] }] },
    { id: 'py_m6', title: '6: File Handling', xpReward: 180, lessons: [{ id: 'py_m6_l1', title: 'Read & Write', content: [{ type: 'theory', text: 'Interact with the file system using open(), read(), and write().' }, { type: 'code', language: 'python', code: 'with open("test.txt", "w") as f:\n  f.write("SkillMirror Data")' }] }] },
    { id: 'py_m7', title: '7: OOP - Part 1', xpReward: 150, lessons: [{ id: 'py_m7_l1', title: 'Classes & Objects', content: [{ type: 'theory', text: 'Blueprints for creating objects with data and behavior.' }, { type: 'code', language: 'python', code: 'class Car:\n  def __init__(self, brand):\n    self.brand = brand' }] }] },
    { id: 'py_m8', title: '8: OOP - Part 2', xpReward: 200, lessons: [{ id: 'py_m8_l1', title: 'Inheritance', content: [{ type: 'theory', text: 'Create child classes that inherit properties from parents.' }] }] },
    { id: 'py_m9', title: '9: Exception Handling', xpReward: 120, lessons: [{ id: 'py_m9_l1', title: 'Try & Except', content: [{ type: 'theory', text: 'Prevent crashes by handling errors gracefully.' }, { type: 'code', language: 'python', code: 'try:\n  1/0\nexcept ZeroDivisionError:\n  print("Oops!")' }] }] },
    { id: 'py_m10', title: '10: Standard Library', xpReward: 150, lessons: [{ id: 'py_m10_l1', title: 'OS & Sys', content: [{ type: 'theory', text: 'Use built-in modules like os, sys, and datetime.' }] }] },
    { id: 'py_m11', title: '11: NumPy Basics', xpReward: 200, lessons: [{ id: 'py_m11_l1', title: 'Numerical Python', content: [{ type: 'theory', text: 'The foundation of data science in Python.' }] }] },
    { id: 'py_m12', title: '12: Pandas Foundations', xpReward: 250, lessons: [{ id: 'py_m12_l1', title: 'DataFrames', content: [{ type: 'theory', text: 'Manipulate tabular data with ease.' }] }] },
    { id: 'py_m13', title: '13: Web Scraping', xpReward: 200, lessons: [{ id: 'py_m13_l1', title: 'BeautifulSoup', content: [{ type: 'theory', text: 'Extract data from websites programmatically.' }] }] },
    { id: 'py_m14', title: '14: APIs with Requests', xpReward: 180, lessons: [{ id: 'py_m14_l1', title: 'HTTP Methods', content: [{ type: 'theory', text: 'Interact with web services using GET and POST.' }] }] },
    { id: 'py_m15', title: '15: Capstone Project', xpReward: 500, lessons: [{ id: 'py_m15_l1', title: 'Final Build', content: [{ type: 'project', title: 'Weather Bot', description: 'Build a bot that fetches weather data and saves it to a file.', features: ['Fetch from OpenWeather API', 'Filter JSON data', 'Error handling', 'Daily scheduling'] }] }] }
  ]
};
