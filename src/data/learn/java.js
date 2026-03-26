export const javaCourse = {
  id: 'java',
  title: 'Java Masterclass',
  icon: '☕',
  color: '#ED8B00',
  modules: [
    {
      id: 'java_m1',
      title: 'Java Basics & JVM',
      xpReward: 100,
      lessons: [
        {
          id: 'java_m1_l1',
          title: 'Introduction to Java',
          duration: '15 min',
          content: [
            { type: 'theory', text: 'Java is an object-oriented, platform-independent language that runs on the JVM.' },
            { type: 'code', language: 'java', code: 'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello World");\n  }\n}' },
            { type: 'practice', title: 'Basic Java', problems: ['Print your name', 'Perform 10 * 5'] }
          ]
        }
      ]
    },
    {
      id: 'java_m2',
      title: 'Control Flow: If & Loops',
      xpReward: 100,
      lessons: [
        {
          id: 'java_m2_l1',
          title: 'Making Decisions',
          duration: '12 min',
          content: [
            { type: 'theory', text: 'Use if-else and switch for logic, and for/while loops for repetition.' },
            { type: 'code', language: 'java', code: 'if (age > 18) { System.out.println("Adult"); }' }
          ]
        }
      ]
    },
    {
      id: 'java_m3',
      title: 'Methods & Recursion',
      xpReward: 120,
      lessons: [
        {
          id: 'java_m3_l1',
          title: 'Modular Code',
          duration: '15 min',
          content: [
            { type: 'theory', text: 'Methods allow you to reuse code and organize logic into smaller blocks.' },
            { type: 'code', language: 'java', code: 'public static int add(int a, int b) { return a + b; }' }
          ]
        }
      ]
    },
    {
      id: 'java_m4',
      title: 'Arrays & Strings',
      xpReward: 120,
      lessons: [
        {
          id: 'java_m4_l1',
          title: 'Data Collections',
          duration: '15 min',
          content: [
            { type: 'theory', text: 'Arrays store multiple values of the same type, and Strings are objects for text manipulation.' },
            { type: 'code', language: 'java', code: 'int[] arr = {1, 2, 3};\nString message = "Hello";' }
          ]
        }
      ]
    },
    {
      id: 'java_m5',
      title: 'OOP: Classes & Objects',
      xpReward: 150,
      lessons: [
        {
          id: 'java_m5_l1',
          title: 'Blueprint for Objects',
          duration: '20 min',
          content: [
            { type: 'theory', text: 'Classes are templates for creating objects, the core of Java OOP.' },
            { type: 'code', language: 'java', code: 'class Car { String model; void drive() {} }' }
          ]
        }
      ]
    },
    {
      id: 'java_m6',
      title: 'OOP: Inheritance & Polymorphism',
      xpReward: 150,
      lessons: [
        {
          id: 'java_m6_l1',
          title: 'Reusability & Overriding',
          duration: '20 min',
          content: [
            { type: 'theory', text: 'Inheritance allows a class to inherit properties from another. Polymorphism allows methods to behave differently.' }
          ]
        }
      ]
    },
    {
      id: 'java_m7',
      title: 'OOP: Abstraction & Interface',
      xpReward: 150,
      lessons: [
        {
          id: 'java_m7_l1',
          title: 'Hiding Complexity',
          duration: '15 min',
          content: [
            { type: 'theory', text: 'Abstract classes and Interfaces define "what" should be done without specifying "how".' }
          ]
        }
      ]
    },
    {
      id: 'java_m8',
      title: 'Exception Handling',
      xpReward: 120,
      lessons: [
        {
          id: 'java_m8_l1',
          title: 'Try, Catch, Finally',
          duration: '15 min',
          content: [
            { type: 'theory', text: 'Gracefully handle errors like DivisionByZero or NullPointer using exceptions.' }
          ]
        }
      ]
    },
    {
      id: 'java_m9',
      title: 'Collections Framework (Lists)',
      xpReward: 180,
      lessons: [
        {
          id: 'java_m9_l1',
          title: 'ArrayList vs LinkedList',
          duration: '20 min',
          content: [
            { type: 'theory', text: 'The Collections Framework provides pre-built data structures like dynamic arrays and linked lists.' }
          ]
        }
      ]
    },
    {
      id: 'java_m10',
      title: 'Sets, Maps & Queues',
      xpReward: 180,
      lessons: [
        {
          id: 'java_m10_l1',
          title: 'Key-Value Pairs',
          duration: '20 min',
          content: [
            { type: 'theory', text: 'Maps store data as key-value pairs, while Sets ensure uniqueness.' }
          ]
        }
      ]
    },
    {
      id: 'java_m11',
      title: 'Generics & Enums',
      xpReward: 200,
      lessons: [
        {
          id: 'java_m11_l1',
          title: 'Type Safety',
          duration: '15 min',
          content: [
            { type: 'theory', text: 'Generics allow you to create classes/methods that work with different types while ensuring compile-time safety.' }
          ]
        }
      ]
    },
    {
      id: 'java_m12',
      title: 'Multithreading & Concurrency',
      xpReward: 250,
      lessons: [
        {
          id: 'java_m12_l1',
          title: 'Parallelism in Java',
          duration: '25 min',
          content: [
            { type: 'theory', text: 'Run multiple parts of a program simultaneously using Threads and the Executor framework.' }
          ]
        }
      ]
    },
    {
      id: 'java_m13',
      title: 'Java I/O & Streams',
      xpReward: 150,
      lessons: [
        {
          id: 'java_m13_l1',
          title: 'File & Data Streams',
          duration: '15 min',
          content: [
            { type: 'theory', text: 'Read and write from files or console using Input/Output streams.' }
          ]
        }
      ]
    },
    {
      id: 'java_m14',
      title: 'JDBC & Databases',
      xpReward: 300,
      lessons: [
        {
          id: 'java_m14_l1',
          title: 'Connecting to SQL',
          duration: '25 min',
          content: [
            { type: 'theory', text: 'Connect Java apps to databases like MySQL/PostgreSQL using the JDBC API.' }
          ]
        }
      ]
    },
    {
      id: 'java_m15',
      title: 'Capstone: Enterprise Project',
      xpReward: 500,
      lessons: [
        {
          id: 'java_m15_l1',
          title: 'Banking Management System',
          duration: '60 min',
          content: [
            { type: 'project', title: 'SafeBank App', description: 'Apply OOP, Collections, and File I/O to create a secure banking console app.', features: ['Multiple user accounts', 'Transaction history logs', 'Secure password storage', 'Database persistence'] }
          ]
        }
      ]
    }
  ]
};
