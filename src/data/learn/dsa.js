export const dsaCourse = {
  id: 'dsa',
  title: 'DSA: Zero to Advanced Mastery',
  icon: '🏆',
  color: '#f87171',
  modules: [
    { 
      id: 'dsa_m1', 
      title: 'Module 1: Arrays (Basic → Advanced)', 
      xpReward: 150, 
      lessons: [
        { 
          id: 'dsa_m1_l1', 
          title: 'Mastering Arrays', 
          duration: '15 min',
          content: [
            { type: 'theory', text: 'Arrays are linear data structures where elements are stored in contiguous memory locations. Basic operations include access (O(1)), search (O(n)), and insertion/deletion (O(n)).' },
            { type: 'code', language: 'java', code: 'int[] arr = {1, 2, 3, 4, 5};\nint max = arr[0];\nfor(int x : arr) if(x > max) max = x;\nSystem.out.println("Max is: " + max);' },
            { type: 'note', text: 'Important: Array indices start from 0. Accessing an index beyond length-1 results in an error.' },
            { type: 'practice', title: 'Array Challenge', problems: ['Find the second largest element in an array.', 'Reverse an array in-place.'] }
          ] 
        }
      ] 
    },
    { 
      id: 'dsa_m2', 
      title: 'Module 2: String Manipulation', 
      xpReward: 150, 
      lessons: [
        { 
          id: 'dsa_m2_l1', 
          title: 'String Mastery', 
          duration: '15 min',
          content: [
            { type: 'theory', text: 'Strings are sequences of characters. In many languages like Java and Python, strings are immutable, meaning any modification creates a new string object.' },
            { type: 'code', language: 'python', code: 's = "SkillMirror"\nprint(s[::-1]) # Reverse string\nprint(s.lower()) # Lowercase' },
            { type: 'practice', title: 'String Tasks', problems: ['Check if a string is a palindrome.', 'Identify the first non-repeating character.'] }
          ] 
        }
      ] 
    },
    { 
      id: 'dsa_m3', 
      title: 'Module 3: Recursion Fundamentals', 
      xpReward: 200, 
      lessons: [
        { 
          id: 'dsa_m3_l1', 
          title: 'Thinking Recursively', 
          duration: '20 min',
          content: [
            { type: 'theory', text: 'Recursion is a method where a function calls itself. Every recursive function must have a base case to prevent infinite loops and a recursive step that moves closer to the base case.' },
            { type: 'code', language: 'js', code: 'function factorial(n) {\n  if (n <= 1) return 1; // Base case\n  return n * factorial(n - 1); // Recursive step\n}' },
            { type: 'note', text: 'Caution: Excessive recursion can lead to a Stack Overflow error.' },
            { type: 'practice', title: 'Recursion', problems: ['Write a recursive function for Fibonacci numbers.', 'Sum all digits of a number using recursion.'] }
          ] 
        }
      ] 
    },
    { id: 'dsa_m4', title: 'Module 4: Backtracking', xpReward: 250, lessons: [{ id: 'dsa_m4_l1', title: 'Exhaustive Search', content: [{ type: 'theory', text: 'Backtracking is an algorithmic technique for solving problems recursively by trying to build a solution incrementally, removing those solutions that fail to satisfy the constraints.' }, { type: 'code', language: 'python', code: 'def solve(n):\n  if n == 0: return True\n  # Attempt solution\n  # If fails, backtrack' }, { type: 'practice', title: 'N-Queens', problems: ['Implement N-Queens solver.', 'Generate all permutations of a string.'] }] }] },
    { id: 'dsa_m5', title: 'Module 5: Complexity Analysis', xpReward: 100, lessons: [{ id: 'dsa_m5_l1', title: 'Big O Notation', content: [{ type: 'theory', text: 'Big O notation describes the upper bound of the time or space required by an algorithm as a function of the input size.' }, { type: 'note', text: 'O(1) < O(log n) < O(n) < O(n log n) < O(n^2)' }, { type: 'practice', title: 'Analyze', problems: ['Find the complexity of binary search.', 'What is the space complexity of a recursive call stack?'] }] }] },
    { id: 'dsa_m6', title: 'Module 6: Searching Techniques', xpReward: 150, lessons: [{ id: 'dsa_m6_l1', title: 'Linear vs Binary', content: [{ type: 'theory', text: 'Binary search is significantly faster (O(log n)) but requires the array to be sorted.' }, { type: 'code', language: 'cpp', code: 'int low = 0, high = n-1;\nwhile(low <= high) {\n  int mid = low + (high-low)/2;\n  if(arr[mid] == target) return mid;\n}' }, { type: 'practice', title: 'Search', problems: ['Implement binary search.', 'Find the lower bound of an element.'] }] }] },
    { id: 'dsa_m7', title: 'Module 7: Sorting Algorithms', xpReward: 180, lessons: [{ id: 'dsa_m7_l1', title: 'Efficient Sorting', content: [{ type: 'theory', text: 'Merge Sort and Quick Sort use divide-and-conquer to achieve O(n log n) performance.' }, { type: 'code', language: 'js', code: 'const sorted = arr.sort((a,b) => a-b);' }, { type: 'practice', title: 'Sort', problems: ['Implement Quick Sort.', 'What is stable sorting?'] }] }] },
    { id: 'dsa_m8', title: 'Module 8: Binary Search (Advanced)', xpReward: 250, lessons: [{ id: 'dsa_m8_l1', title: 'Search on Answer', content: [{ type: 'theory', text: 'Advanced BS involves finding the optimal value in a monotonic search space.' }, { type: 'practice', title: 'Aggressive Cows', problems: ['Solve the Aggressive Cows problem.', 'Painter Partition problem.'] }] }] },
    { id: 'dsa_m9', title: 'Module 9: Two Pointers', xpReward: 200, lessons: [{ id: 'dsa_m9_l1', title: 'Pointer Logic', content: [{ type: 'theory', text: 'Two pointers technique involves using two indices to traverse an array, often from opposite ends or at different speeds.' }, { type: 'code', language: 'python', code: 'i, j = 0, len(arr)-1\nwhile i < j:\n  # Logic here\n  i += 1; j -= 1' }, { type: 'practice', title: 'Two Sum', problems: ['Find Two Sum in sorted array.', 'Remove duplicates from sorted array.'] }] }] },
    { id: 'dsa_m10', title: 'Module 10: Sliding Window', xpReward: 250, lessons: [{ id: 'dsa_m10_l1', title: 'Window Mastery', content: [{ type: 'theory', text: 'Sliding window optimizes nested loops for range queries into a single pass.' }, { type: 'practice', title: 'Max Subarray', problems: ['Maximum sum subarray of size K.', 'Smallest subarray with sum > S.'] }] }] },
    { id: 'dsa_m11', title: 'Module 11: Prefix Sum', xpReward: 150, lessons: [{ id: 'dsa_m11_l1', title: 'Precomputing', content: [{ type: 'theory', text: 'Prefix sums allow O(1) time range sum queries after O(n) preprocessing.' }, { type: 'code', language: 'java', code: 'prefix[i] = prefix[i-1] + arr[i];' }, { type: 'practice', title: 'Range Sum', problems: ['Range Sum Query implementation.', 'Equilibrium index of an array.'] }] }] },
    { id: 'dsa_m12', title: 'Module 12: Hashing', xpReward: 200, lessons: [{ id: 'dsa_m12_l1', title: 'Maps & Sets', content: [{ type: 'theory', text: 'Hash tables provide average O(1) time for search, insert, and delete.' }, { type: 'practice', title: 'Hashing', problems: ['Count frequency of elements.', 'Check if array contains duplicates.'] }] }] },
    { id: 'dsa_m13', title: 'Module 13: Stacks', xpReward: 250, lessons: [{ id: 'dsa_m13_l1', title: 'LIFO Structure', content: [{ type: 'theory', text: 'Stack is a Last-In-First-Out structure used in function calls and expression parsing.' }, { type: 'code', language: 'js', code: 'stack.push(x);\nval = stack.pop();' }, { type: 'practice', title: 'Valid Parentheses', problems: ['Check for valid parentheses.', 'Implement Min Stack.'] }] }] },
    { id: 'dsa_m14', title: 'Module 14: Queues', xpReward: 200, lessons: [{ id: 'dsa_m14_l1', title: 'FIFO Structure', content: [{ type: 'theory', text: 'Queue is a First-In-First-Out structure used in BFS and scheduling.' }, { type: 'practice', title: 'Queue', problems: ['Implement Queue using Stacks.', 'First non-repeating character in stream.'] }] }] },
    { id: 'dsa_m15', title: 'Module 15: Linked Lists', xpReward: 300, lessons: [{ id: 'dsa_m15_l1', title: 'Nodes & Pointers', content: [{ type: 'theory', text: 'Linked lists consist of nodes where each node points to the next, allowing O(1) insert at head.' }, { type: 'code', language: 'cpp', code: 'struct Node {\n  int val;\n  Node* next;\n};' }, { type: 'practice', title: 'Cycle Detection', problems: ['Reverse a linked list.', 'Detect a cycle in a linked list.'] }] }] },
    { id: 'dsa_m16', title: 'Module 16: Binary Trees', xpReward: 200, lessons: [{ id: 'dsa_m16_l1', title: 'Tree Basics', content: [{ type: 'theory', text: 'A tree where each node has at most two children.' }, { type: 'practice', title: 'Trees', problems: ['Calculate height of a tree.', 'Check if two trees are identical.'] }] }] },
    { id: 'dsa_m17', title: 'Module 17: Tree Traversals', xpReward: 250, lessons: [{ id: 'dsa_m17_l1', title: 'DFS & BFS', content: [{ type: 'theory', text: 'Inorder, Preorder, and Postorder (DFS) vs Level Order (BFS).' }, { type: 'code', language: 'java', code: 'void inorder(Node root) {\n  if(root == null) return;\n  inorder(root.left);\n  System.out.println(root.val);\n  inorder(root.right);\n}' }, { type: 'practice', title: 'Traverse', problems: ['Implement Level Order Traversal.', 'Zigzag traversal.'] }] }] },
    { id: 'dsa_m18', title: 'Module 18: Binary Search Trees', xpReward: 250, lessons: [{ id: 'dsa_m18_l1', title: 'Ordering Trees', content: [{ type: 'theory', text: 'A BST has left < root < right property, enabling O(log n) search.' }, { type: 'practice', title: 'BST', problems: ['Search in a BST.', 'Validate BST.'] }] }] },
    { id: 'dsa_m19', title: 'Module 19: Heaps', xpReward: 300, lessons: [{ id: 'dsa_m19_l1', title: 'Priority Queue', content: [{ type: 'theory', text: 'Heaps are binary trees used to efficiently find the max or min element (O(1)).' }, { type: 'code', language: 'python', code: 'import heapq\nheapq.heappush(pq, x)' }, { type: 'practice', title: 'Kth Element', problems: ['Find Kth largest element.', 'Merge K sorted lists.'] }] }] },
    { id: 'dsa_m20', title: 'Module 20: Greedy Algorithms', xpReward: 250, lessons: [{ id: 'dsa_m20_l1', title: 'Best Local Choice', content: [{ type: 'theory', text: 'Greedy makes the choice that looks best at the moment, hoping it leads to global optimum.' }, { type: 'practice', title: 'Fractional Knapsack', problems: ['Fractional Knapsack.', 'Activity Selection.'] }] }] },
    { id: 'dsa_m21', title: 'Module 21: Graphs Dasar', xpReward: 200, lessons: [{ id: 'dsa_m21_l1', title: 'Adjacency List', content: [{ type: 'theory', text: 'Graphs represent connections between nodes using adjacency lists or matrices.' }, { type: 'code', language: 'cpp', code: 'vector<int> adj[V];' }, { type: 'practice', title: 'Graphs', problems: ['Represent graph using adjacency list.', 'Detect cycle in undirected graph.'] }] }] },
    { id: 'dsa_m22', title: 'Module 22: Graph Traversals', xpReward: 300, lessons: [{ id: 'dsa_m22_l1', title: 'BFS & DFS', content: [{ type: 'theory', text: 'BFS uses a queue; DFS uses recursion/stack.' }, { type: 'practice', title: 'Search', problems: ['Implement BFS.', 'Implement DFS.'] }] }] },
    { id: 'dsa_m23', title: 'Module 23: Shortest Path', xpReward: 350, lessons: [{ id: 'dsa_m23_l1', title: 'Dijkstra', content: [{ type: 'theory', text: 'Finding minimum distance from source to all other nodes.' }, { type: 'practice', title: 'Path', problems: ['Implement Dijkstra.', 'Bellman-Ford algorithm.'] }] }] },
    { id: 'dsa_m24', title: 'Module 24: Union Find', xpReward: 300, lessons: [{ id: 'dsa_m24_l1', title: 'Disjoint Sets', content: [{ type: 'theory', text: 'Highly efficient for tracking connected components.' }, { type: 'code', language: 'cpp', code: 'int find(int i) {\n  if(parent[i] == i) return i;\n  return find(parent[i]);\n}' }, { type: 'practice', title: 'Union', problems: ['Detect cycle using Union Find.', 'Number of Islands.'] }] }] },
    { id: 'dsa_m25', title: 'Module 25: Topological Sort', xpReward: 300, lessons: [{ id: 'dsa_m25_l1', title: 'Dependency Order', content: [{ type: 'theory', text: 'Arranging tasks in order of dependency for Directed Acyclic Graphs.' }, { type: 'practice', title: 'Sort', problems: ['Implement Kahn\'s algorithm.', 'Course Schedule problem.'] }] }] },
    { id: 'dsa_m26', title: 'Module 26: Dynamic Programming (1D)', xpReward: 400, lessons: [{ id: 'dsa_m26_l1', title: 'Memoization', content: [{ type: 'theory', text: 'Storing results of subproblems to avoid redundant calculations.' }, { type: 'code', language: 'js', code: 'if(memo[n] !== -1) return memo[n];' }, { type: 'practice', title: 'Climbing Stairs', problems: ['Climbing Stairs.', 'House Robber.'] }] }] },
    { id: 'dsa_m27', title: 'Module 27: Dynamic Programming (2D)', xpReward: 500, lessons: [{ id: 'dsa_m27_l1', title: 'Matrix DP', content: [{ type: 'theory', text: 'Solving subproblems that depend on two variables (e.g., grid paths).' }, { type: 'practice', title: 'Grids', problems: ['Unique Paths in a grid.', 'Longest Common Subsequence.'] }] }] },
    { id: 'dsa_m28', title: 'Module 28: Bit Manipulation', xpReward: 200, lessons: [{ id: 'dsa_m28_l1', title: 'Binary Tricks', content: [{ type: 'theory', text: 'Using XOR, AND, OR for fast bit-level arithmetic.' }, { type: 'code', language: 'python', code: 'x = x ^ x # Equals 0' }, { type: 'practice', title: 'Bits', problems: ['Count set bits.', 'Check if number is power of 2.'] }] }] },
    { id: 'dsa_m29', title: 'Module 29: Tries', xpReward: 300, lessons: [{ id: 'dsa_m29_l1', title: 'Prefix Tree', content: [{ type: 'theory', text: 'Efficient for prefix searches in a dictionary.' }, { type: 'practice', title: 'Trie', problems: ['Implement Trie.', 'Search suggestions system.'] }] }] },
    { id: 'dsa_m30', title: 'Module 30: Advanced Interviews', xpReward: 600, lessons: [{ id: 'dsa_m30_l1', title: 'The FAANG Level', content: [{ type: 'theory', text: 'Combining multiple techniques (e.g., DP on Trees, Segment Trees).' }, { type: 'interview', questions: ['How does Git use DAGs?', 'Design a Cache system.', 'Explain LRU Cache implementation.', 'How would you find common friends in a billion-user network?'] }] }] }
  ]
};
