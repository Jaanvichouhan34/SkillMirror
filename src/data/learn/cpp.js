export const cppCourse = {
  id: 'cpp',
  title: 'C++ Systems & DSA Mastery',
  icon: '⚙️',
  color: '#00599c',
  modules: [
    {
      id: 'cpp_m1',
      title: 'Programming Fundamentals in C++',
      xpReward: 100,
      lessons: [
        {
          id: 'cpp_m1_l1',
          title: 'Hello Modern C++',
          duration: '10 min',
          content: [
            { type: 'theory', text: 'C++ is a high-performance compiled language that offers lower-level memory management and high-level abstractions like classes and templates.' },
            { type: 'code', language: 'cpp', label: 'C++ Hello', code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Elite C++ Activated!" << endl;\n    return 0;\n}' }
          ]
        }
      ]
    },
    {
      id: 'cpp_m2',
      title: 'Control Flow & Vectors',
      xpReward: 100,
      lessons: [
        {
          id: 'cpp_m2_l1',
          title: 'Loops and Dynamic Arrays',
          duration: '12 min',
          content: [
            { type: 'theory', text: 'Use vectors instead of C-style arrays for dynamic sizing and better safety.' },
            { type: 'code', language: 'cpp', code: 'vector<int> nums = {1, 2, 3};\nfor(int n : nums) cout << n;' }
          ]
        }
      ]
    },
    {
      id: 'cpp_m3',
      title: 'Functions & Recursion',
      xpReward: 120,
      lessons: [
        {
          id: 'cpp_m3_l1',
          title: 'Function Overloading',
          duration: '15 min',
          content: [
            { type: 'theory', text: 'C++ allows you to define multiple functions with the same name if they have different parameters.' }
          ]
        }
      ]
    },
    {
      id: 'cpp_m4',
      title: 'Arrays & Advanced Strings',
      xpReward: 120,
      lessons: [
        {
          id: 'cpp_m4_l1',
          title: 'std::string Power',
          duration: '15 min',
          content: [
            { type: 'theory', text: 'The C++ String class provides powerful manipulation methods that C-strings lack.' }
          ]
        }
      ]
    },
    {
      id: 'cpp_m5',
      title: 'Data Structures: Stack & Queue',
      xpReward: 150,
      lessons: [
        {
          id: 'cpp_m5_l1',
          title: 'STL Containers',
          duration: '20 min',
          content: [
            { type: 'theory', text: 'Master stack and queue implementations using the Standard Template Library (STL).' }
          ]
        }
      ]
    },
    {
      id: 'cpp_m6',
      title: 'Search & Sort Algorithms',
      xpReward: 180,
      lessons: [
        {
          id: 'cpp_m6_l1',
          title: 'Big-O & Efficiency',
          duration: '20 min',
          content: [
            { type: 'theory', text: 'Analyze the complexity of sorting algorithms and implement them in C++.' }
          ]
        }
      ]
    },
    {
      id: 'cpp_m7',
      title: 'Object-Oriented C++ (OOP)',
      xpReward: 200,
      lessons: [
        {
          id: 'cpp_m7_l1',
          title: 'Constructors & Destructors',
          duration: '20 min',
          content: [
            { type: 'theory', text: 'Classes in C++ manage resources using constructors and automatically clean up with destructors.' },
            { type: 'code', language: 'cpp', code: 'class MyClass {\n  MyClass() { cout << "Object Created"; }\n};' }
          ]
        }
      ]
    },
    {
      id: 'cpp_m8',
      title: 'Pointers & Memory Control',
      xpReward: 250,
      lessons: [
        {
          id: 'cpp_m8_l1',
          title: 'Raw Pointers & References',
          duration: '20 min',
          content: [
            { type: 'theory', text: 'Manage memory addresses directly for maximum performance control.' }
          ]
        }
      ]
    },
    {
      id: 'cpp_m9',
      title: 'Dynamic Memory (new/delete)',
      xpReward: 200,
      lessons: [
        {
          id: 'cpp_m9_l1',
          title: 'Heap Allocation',
          duration: '20 min',
          content: [
            { type: 'theory', text: 'Avoid stack overflow by allocating large objects on the heap using new.' }
          ]
        }
      ]
    },
    {
      id: 'cpp_m10',
      title: 'Templates & Generic Programming',
      xpReward: 200,
      lessons: [
        {
          id: 'cpp_m10_l1',
          title: 'Function & Class Templates',
          duration: '20 min',
          content: [
            { type: 'theory', text: 'Write code that works with any data type using templates.' }
          ]
        }
      ]
    },
    {
      id: 'cpp_m11',
      title: 'Exception Handling in C++',
      xpReward: 150,
      lessons: [
        {
          id: 'cpp_m11_l1',
          title: 'Try, Catch, Throw',
          duration: '15 min',
          content: [
            { type: 'theory', text: 'Modern C++ uses exceptions to handle error conditions in a structured way.' }
          ]
        }
      ]
    },
    {
      id: 'cpp_m12',
      title: 'Standard Template Library (STL)',
      xpReward: 250,
      lessons: [
        {
          id: 'cpp_m12_l1',
          title: 'Iterators, Algorithms, Functors',
          duration: '25 min',
          content: [
            { type: 'theory', text: 'STL is the backbone of professional C++ development, providing high-efficiency tools.' }
          ]
        }
      ]
    },
    {
      id: 'cpp_m13',
      title: 'File Streams (fstream)',
      xpReward: 180,
      lessons: [
        {
          id: 'cpp_m13_l1',
          title: 'Disk I/O in C++',
          duration: '15 min',
          content: [
            { type: 'theory', text: 'Read and write from permanent storage using input and output file streams.' }
          ]
        }
      ]
    },
    {
      id: 'cpp_m14',
      title: 'Concurrency & Threads',
      xpReward: 300,
      lessons: [
        {
          id: 'cpp_m14_l1',
          title: 'Parallel C++',
          duration: '25 min',
          content: [
            { type: 'theory', text: 'Utilize multi-core processors with std::thread and mutexes for synchronization.' }
          ]
        }
      ]
    },
    {
      id: 'cpp_m15',
      title: 'Capstone: Operating System Basics',
      xpReward: 600,
      lessons: [
        {
          id: 'cpp_m15_l1',
          title: 'Memory Management Project',
          duration: '60 min',
          content: [
            { type: 'project', title: 'Virtual Memory Simulator', description: 'Build a C++ program that simulates memory paging and allocation logic.', features: ['Simulate least-recently-used (LRU) paging', 'Implement a custom heap memory allocator', 'Handle concurrent memory requests', 'Visualize memory fragmentation stats'] }
          ]
        }
      ]
    }
  ]
};
