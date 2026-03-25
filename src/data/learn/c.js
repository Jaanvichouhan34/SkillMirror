export const cCourse = {
  id: 'c',
  title: 'Mastering C Programming',
  icon: '🔤',
  color: '#a8b9cc',
  modules: [
    {
      id: 'c_m1',
      title: 'C Fundamentals',
      xpReward: 100,
      lessons: [
        {
          id: 'c_m1_l1',
          title: 'Hello C Language',
          duration: '10 min',
          content: [
            { type: 'theory', text: 'C is a general-purpose, procedural programming language that provides low-level access to memory.' },
            { type: 'code', language: 'c', code: '#include <stdio.h>\nint main() {\n  printf("Hello C world!\\n");\n  return 0;\n}' },
            { type: 'practice', title: 'Basic C', problems: ['Print your favorite quote', 'Calculate 25 / 5'] }
          ]
        }
      ]
    },
    {
      id: 'c_m2',
      title: 'Control Flow: Logic & Loops',
      xpReward: 100,
      lessons: [
        {
          id: 'c_m2_l1',
          title: 'Loops and Conditions',
          duration: '12 min',
          content: [
            { type: 'theory', text: 'Use if-else, for loops, and while loops to control the flow of your C program.' },
            { type: 'code', language: 'c', code: 'if (x > 10) { printf("Greater"); }' }
          ]
        }
      ]
    },
    {
      id: 'c_m3',
      title: 'Functions & SCOPE',
      xpReward: 120,
      lessons: [
        {
          id: 'c_m3_l1',
          title: 'Modular Programming',
          duration: '15 min',
          content: [
            { type: 'theory', text: 'Break down your program into reusable functions for clarity and efficiency.' },
            { type: 'code', language: 'c', code: 'int add(int a, int b) { return a + b; }' }
          ]
        }
      ]
    },
    {
      id: 'c_m4',
      title: 'Storage Classes',
      xpReward: 120,
      lessons: [
        {
          id: 'c_m4_l1',
          title: 'Static, Extren, Auto, Register',
          duration: '15 min',
          content: [
            { type: 'theory', text: 'Storage classes in C determine the visibility and lifetime of variables.' }
          ]
        }
      ]
    },
    {
      id: 'c_m5',
      title: 'Arrays & Strings',
      xpReward: 120,
      lessons: [
        {
          id: 'c_m5_l1',
          title: 'Flat Data Structures',
          duration: '15 min',
          content: [
            { type: 'theory', text: 'Arrays store multiple elements of the same type, and strings are just null-terminated character arrays in C.' }
          ]
        }
      ]
    },
    {
      id: 'c_m6',
      title: 'Pointers Demystified',
      xpReward: 200,
      lessons: [
        {
          id: 'c_m6_l1',
          title: 'Memory Addresses',
          duration: '20 min',
          content: [
            { type: 'theory', text: 'A pointer stores the memory address of another variable. This is where C becomes incredibly powerful.' },
            { type: 'code', language: 'c', code: 'int x = 10; int *p = &x;\nprintf("%d", *p);' }
          ]
        }
      ]
    },
    {
      id: 'c_m7',
      title: 'Dynamic Memory Allocation',
      xpReward: 200,
      lessons: [
        {
          id: 'c_m7_l1',
          title: 'Malloc, Calloc, Free',
          duration: '20 min',
          content: [
            { type: 'theory', text: 'Allocate memory at runtime using free and realloc to handle growing data.' }
          ]
        }
      ]
    },
    {
      id: 'c_m8',
      title: 'Structures & Unions',
      xpReward: 150,
      lessons: [
        {
          id: 'c_m8_l1',
          title: 'User-Defined Data Types',
          duration: '15 min',
          content: [
            { type: 'theory', text: 'Structures allow you to group variables of different types under a single name.' }
          ]
        }
      ]
    },
    {
      id: 'c_m9',
      title: 'File Handling Basics',
      xpReward: 150,
      lessons: [
        {
          id: 'c_m9_l1',
          title: 'Read & Write to Disk',
          duration: '15 min',
          content: [
            { type: 'theory', text: 'Use FILE pointers to read from and write to permanent storage.' }
          ]
        }
      ]
    },
    {
      id: 'c_m10',
      title: 'Preprocessors & Macros',
      xpReward: 120,
      lessons: [
        {
          id: 'c_m10_l1',
          title: '#define & Macros',
          duration: '15 min',
          content: [
            { type: 'theory', text: 'Use the preprocessor for constants and code snippets that improve compilation control.' }
          ]
        }
      ]
    },
    {
      id: 'c_m11',
      title: 'Algorithms: Searching',
      xpReward: 180,
      lessons: [
        {
          id: 'c_m11_l1',
          title: 'Linear & Binary Search',
          duration: '20 min',
          content: [
            { type: 'theory', text: 'Implementing basic searching algorithms in C to optimize data retrieval.' }
          ]
        }
      ]
    },
    {
      id: 'c_m12',
      title: 'Algorithms: Sorting',
      xpReward: 180,
      lessons: [
        {
          id: 'c_m12_l1',
          title: 'Bubble & Selection Sort',
          duration: '20 min',
          content: [
            { type: 'theory', text: 'Learn to organize arrays efficiently using sorting algorithms.' }
          ]
        }
      ]
    },
    {
      id: 'c_m13',
      title: 'Linked List in C',
      xpReward: 250,
      lessons: [
        {
          id: 'c_m13_l1',
          title: 'Single Linked List',
          duration: '25 min',
          content: [
            { type: 'theory', text: 'Build your first dynamic data structure using pointers and structures.' }
          ]
        }
      ]
    },
    {
      id: 'c_m14',
      title: 'Stacks & Queues',
      xpReward: 200,
      lessons: [
        {
          id: 'c_m14_l1',
          title: 'LIFO & FIFO',
          duration: '25 min',
          content: [
            { type: 'theory', text: 'Implement stack and queue data structures to manage task flows.' }
          ]
        }
      ]
    },
    {
      id: 'c_m15',
      title: 'Capstone: File Manager System',
      xpReward: 500,
      lessons: [
        {
          id: 'c_m15_l1',
          title: 'Simple OS Components',
          duration: '60 min',
          content: [
            { type: 'project', title: 'File System Emulator', description: 'Create a C program that mimics basic file commands like list, delete, and copy.', features: ['Handle file input/output streams', 'Dynamic memory management for file paths', 'Error handling for disk failures', 'Implementation of XOR encryption/decryption for files'] }
          ]
        }
      ]
    }
  ]
};
