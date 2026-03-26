export const cppCourse = {
  id: 'cpp',
  title: 'C++ Systems & DSA Mastery',
  icon: '⚙️',
  color: '#00599c',
  modules: [
    {
      id: 'cpp_m1',
      title: '1: Modern C++ Basics',
      xpReward: 100,
      lessons: [
        {
          id: 'cpp_m1_l1',
          title: 'Hello Machine',
          duration: '10 min',
          content: [
            { type: 'theory', text: 'C++ is a high-performance compiled language that offers both low-level memory control and high-level abstractions.' },
            { type: 'code', language: 'cpp', code: '#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << "Engine Start..." << endl;\n  return 0;\n}' },
            { type: 'note', text: 'Every C++ program must have a main() function as its entry point.' },
            { type: 'practice', title: 'Hello C++', problems: ['Print your favorite quote.', 'Declare int age = 20 and print it.'] }
          ]
        }
      ]
    },
    {
      id: 'cpp_m2',
      title: '2: Data Types & Ops',
      xpReward: 100,
      lessons: [
        {
          id: 'cpp_m2_l1',
          title: 'Memory & Types',
          duration: '12 min',
          content: [
            { type: 'theory', text: 'C++ is strongly typed. Common types: int, float, double, char, bool, and string.' },
            { type: 'code', language: 'cpp', code: 'int x = 5;\ndouble y = 1.5;\nbool status = true;\nstring msg = "Active";' }
          ]
        }
      ]
    },
    {
      id: 'cpp_m3',
      title: '3: Control Flow',
      xpReward: 120,
      lessons: [
        {
          id: 'cpp_m3_l1',
          title: 'Conditions & Loops',
          duration: '15 min',
          content: [
            { type: 'theory', text: 'C++ uses if, switch, for, and while for logical flow.' },
            { type: 'code', language: 'cpp', code: 'for(int i=0; i<5; i++) {\n  if(i % 2 != 0) cout << i << " ";\n}' }
          ]
        }
      ]
    },
    { id: 'cpp_m4', title: '4: Functions', xpReward: 120, lessons: [{ id: 'cpp_m4_l1', title: 'Modular Logic', content: [{ type: 'theory', text: 'Break code into reusable functions.' }, { type: 'code', language: 'cpp', code: 'int add(int a, int b) { return a + b; }' }, { type: 'practice', title: 'C++ Functions', problems: ['Write a function for factorial.', 'Check if a number is prime.'] }] }] },
    { id: 'cpp_m5', title: '5: Arrays & Vectors', xpReward: 150, lessons: [{ id: 'cpp_m5_l1', title: 'Sequence Containers', content: [{ type: 'theory', text: 'Vectors are dynamic arrays that grow automatically.' }, { type: 'code', language: 'cpp', code: '#include <vector>\nvector<int> v = {1, 2, 3};\nv.push_back(4);' }] }] },
    { id: 'cpp_m6', title: '6: Pointers Basics', xpReward: 200, lessons: [{ id: 'cpp_m6_l1', title: 'Addresses & Magic', content: [{ type: 'theory', text: 'Pointers store the memory address of another variable.' }, { type: 'code', language: 'cpp', code: 'int x = 10; int* p = &x;' }] }] },
    { id: 'cpp_m7', title: '7: References', xpReward: 150, lessons: [{ id: 'cpp_m7_l1', title: 'Alias Logic', content: [{ type: 'theory', text: 'References are aliases for existing variables, often used in function params.' }] }] },
    { id: 'cpp_m8', title: '8: OOP Foundations', xpReward: 200, lessons: [{ id: 'cpp_m8_l1', title: 'Classes & Objects', content: [{ type: 'theory', text: 'Encapsulate data and behavior into classes.' }, { type: 'code', language: 'cpp', code: 'class Robot { public: void speak(); };' }] }] },
    { id: 'cpp_m9', title: '9: Inheritance', xpReward: 200, lessons: [{ id: 'cpp_m9_l1', title: 'Hierarchies', content: [{ type: 'theory', text: 'Reuse code by creating child classes.' }] }] },
    { id: 'cpp_m10', title: '10: Polymorphism', xpReward: 250, lessons: [{ id: 'cpp_m10_l1', title: 'Virtual Functions', content: [{ type: 'theory', text: 'Determine behavior at runtime using virtual functions.' }] }] },
    { id: 'cpp_m11', title: '11: Memory Management', xpReward: 300, lessons: [{ id: 'cpp_m11_l1', title: 'Heap vs Stack', content: [{ type: 'theory', text: 'Manual memory management using new and delete.' }] }] },
    { id: 'cpp_m12', title: '12: STL Algorithms', xpReward: 250, lessons: [{ id: 'cpp_m12_l1', title: 'Sorting & Searching', content: [{ type: 'theory', text: 'Master the Standard Template Library algorithms.' }] }] },
    { id: 'cpp_m13', title: '13: Templates', xpReward: 250, lessons: [{ id: 'cpp_m13_l1', title: 'Generic Code', content: [{ type: 'theory', text: 'Write once, work with any type.' }] }] },
    { id: 'cpp_m14', title: '14: File I/O', xpReward: 180, lessons: [{ id: 'cpp_m14_l1', title: 'Persistent Data', content: [{ type: 'theory', text: 'Read/write to files using fstream.' }] }] },
    { id: 'cpp_m15', title: '15: OS Simulation', xpReward: 500, lessons: [{ id: 'cpp_m15_l1', title: 'Systems Capstone', content: [{ type: 'project', title: 'Disk Manager', description: 'Simulate a basic file system allocation logic.', features: ['Contiguous allocation sim', 'Index allocation sim', 'User terminal interface', 'Fragmentation stats dashboard'] }] }] }
  ]
};
