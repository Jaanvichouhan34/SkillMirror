export const sqlCourse = {
  id: 'sql',
  title: 'SQL & Database Mastery',
  icon: '🗄️',
  color: '#00f2ff',
  modules: [
    {
      id: 'sql_m1',
      title: 'SQL Basics & Architecture',
      xpReward: 100,
      lessons: [
        {
          id: 'sql_m1_l1',
          title: 'Introduction to RDBMS',
          duration: '10 min',
          content: [
            { type: 'theory', text: 'Relational Database Management Systems (RDBMS) store data in tables with predefined schemas. SQL is the bridge to interact with this data.' },
            { type: 'why', title: 'Why SQL?', points: ['Industry standard for data storage', 'Essential for Backend & Data roles', 'ACID compliance for reliability'] },
            { type: 'code', language: 'sql', label: 'Basic SELECT', code: 'SELECT * FROM users;' },
            { type: 'practice', title: 'Basic Retrieval', problems: ['Select all teachers from the school table', 'Fetch name and grade from students where grade > 90'] },
            { type: 'interview', questions: ['What is RDBMS?', 'Difference between SQL and NoSQL?', 'What is a Primary Key?', 'What is a Foreign Key?', 'What are the types of SQL commands?'] },
            { type: 'quiz', questions: [
              { q: 'Which is a valid SQL command?', options: ['GET', 'SELECT', 'FETCH', 'RECEIVE'], correct: 1, explanation: 'SELECT is used to query data.' },
              { q: 'Primary key must be?', options: ['NULL', 'Unique & Not Null', 'Duplicate', 'Zero'], correct: 1, explanation: 'Primary keys must uniquely identify a row.' }
            ]}
          ]
        }
      ]
    },
    {
      id: 'sql_m2',
      title: 'Filtering & Sorting Data',
      xpReward: 100,
      lessons: [
        {
          id: 'sql_m2_l1',
          title: 'WHERE & ORDER BY',
          duration: '12 min',
          content: [
            { type: 'theory', text: 'Filter data using WHERE and sort it using ORDER BY to find exactly what you need.' },
            { type: 'code', language: 'sql', code: 'SELECT * FROM students WHERE age > 20 ORDER BY name ASC;' },
            { type: 'practice', title: 'Filtering', problems: ['Find users from "London"', 'Sort products by price descending'] },
            { type: 'quiz', questions: [{ q: 'Keyword for sorting?', options: ['SORT', 'ORDER BY', 'GROUP BY', 'DESC'], correct: 1, explanation: 'ORDER BY sorts data.' }] }
          ]
        }
      ]
    },
    {
      id: 'sql_m3',
      title: 'Aggregate Functions',
      xpReward: 120,
      lessons: [
        {
          id: 'sql_m3_l1',
          title: 'SUM, AVG, MIN, MAX, COUNT',
          duration: '10 min',
          content: [
            { type: 'theory', text: 'Aggregate functions perform calculations on multiple rows to get a single result.' },
            { type: 'code', language: 'sql', code: 'SELECT COUNT(*), AVG(price), SUM(stock) FROM inventory;' },
            { type: 'practice', title: 'Aggregates', problems: ['Find total count of orders', 'Calculate average employee salary', 'Find the maximum product price'] }
          ]
        }
      ]
    },
    {
      id: 'sql_m4',
      title: 'JOINS: Linking Tables',
      xpReward: 150,
      lessons: [
        {
          id: 'sql_m4_l1',
          title: 'INNER JOIN & LEFT JOIN',
          duration: '15 min',
          content: [
            { type: 'theory', text: 'JOINS allow you to combine data from two or more tables based on a related column.' },
            { type: 'code', language: 'sql', label: 'Inner Join Example', code: 'SELECT orders.id, users.name \nFROM orders \nINNER JOIN users ON orders.user_id = users.id;' },
            { type: 'practice', title: 'Joining Data', problems: ['Join products with categories', 'List all users and their orders (even if no orders)', 'Find employees and their department names'] }
          ]
        }
      ]
    },
    {
      id: 'sql_m5',
      title: 'Advanced JOINS & UNIONS',
      xpReward: 150,
      lessons: [
        {
          id: 'sql_m5_l1',
          title: 'RIGHT JOIN & FULL JOIN',
          duration: '15 min',
          content: [
            { type: 'theory', text: 'Complex joins help in handling missing data across related tables.' },
            { type: 'code', language: 'sql', code: 'SELECT * FROM A FULL OUTER JOIN B ON A.id = B.id;' }
          ]
        }
      ]
    },
    {
      id: 'sql_m6',
      title: 'Subqueries & Nested Queries',
      xpReward: 180,
      lessons: [
        {
          id: 'sql_m6_l1',
          title: 'Queries within Queries',
          duration: '15 min',
          content: [
            { type: 'theory', text: 'Subqueries allow for advanced logic by using the result of one query in another.' },
            { type: 'code', language: 'sql', code: 'SELECT name FROM employees \nWHERE salary > (SELECT AVG(salary) FROM employees);' }
          ]
        }
      ]
    },
    {
      id: 'sql_m7',
      title: 'Data Manipulation (DML)',
      xpReward: 120,
      lessons: [
        {
          id: 'sql_m7_l1',
          title: 'INSERT, UPDATE, DELETE',
          duration: '12 min',
          content: [
            { type: 'theory', text: 'DML commands are used to modify the data within existing table structures.' },
            { type: 'code', language: 'sql', code: 'INSERT INTO users (name, email) VALUES ("Sam", "sam@xyz.com");\nUPDATE users SET status = "active" WHERE id = 1;' }
          ]
        }
      ]
    },
    {
      id: 'sql_m8',
      title: 'Data Definition (DDL)',
      xpReward: 120,
      lessons: [
        {
          id: 'sql_m8_l1',
          title: 'CREATE, ALTER, DROP',
          duration: '12 min',
          content: [
            { type: 'theory', text: 'DDL commands define the schema of your database.' },
            { type: 'code', language: 'sql', code: 'CREATE TABLE posts (id INT PRIMARY KEY, title VARCHAR(100));' }
          ]
        }
      ]
    },
    {
      id: 'sql_m9',
      title: 'Constraints & Keys',
      xpReward: 150,
      lessons: [
        {
          id: 'sql_m9_l1',
          title: 'Primary, Foreign, Unique, Check',
          duration: '15 min',
          content: [
            { type: 'theory', text: 'Constraints ensure data integrity and define relationships between tables.' }
          ]
        }
      ]
    },
    {
      id: 'sql_m10',
      title: 'Views & Stored Procedures',
      xpReward: 180,
      lessons: [
        {
          id: 'sql_m10_l1',
          title: 'Virtual Tables & Functions',
          duration: '15 min',
          content: [
            { type: 'theory', text: 'Views simplify complex queries, and procedures allow for modular, reusable SQL code.' }
          ]
        }
      ]
    },
    {
      id: 'sql_m11',
      title: 'Database Normalization',
      xpReward: 200,
      lessons: [
        {
          id: 'sql_m11_l1',
          title: '1NF, 2NF, 3NF & BCNF',
          duration: '20 min',
          content: [
            { type: 'theory', text: 'Normalization organizes data to minimize redundancy and dependency.' }
          ]
        }
      ]
    },
    {
      id: 'sql_m12',
      title: 'Transactions (ACID)',
      xpReward: 250,
      lessons: [
        {
          id: 'sql_m12_l1',
          title: 'Atomicity, Consistency, Isolation, Durability',
          duration: '20 min',
          content: [
            { type: 'theory', text: 'Transactions guarantee that a series of operations either all succeed or all fail.' }
          ]
        }
      ]
    },
    {
      id: 'sql_m13',
      title: 'Indexes & Optimization',
      xpReward: 200,
      lessons: [
        {
          id: 'sql_m13_l1',
          title: 'Clustered vs Non-Clustered Indexes',
          duration: '20 min',
          content: [
            { type: 'theory', text: 'Indexes speed up retrieval but can slow down writes. Use them strategically.' }
          ]
        }
      ]
    },
    {
      id: 'sql_m14',
      title: 'Window Functions',
      xpReward: 300,
      lessons: [
        {
          id: 'sql_m14_l1',
          title: 'RANK, ROW_NUMBER, LEAD, LAG',
          duration: '25 min',
          content: [
            { type: 'theory', text: 'Window functions perform calculations across a set of table rows that are related to the current row.' }
          ]
        }
      ]
    },
    {
      id: 'sql_m15',
      title: 'Capstone: Database Design Project',
      xpReward: 500,
      lessons: [
        {
          id: 'sql_m15_l1',
          title: 'Building a Scalable System',
          duration: '60 min',
          content: [
            { type: 'project', title: 'Social Media Schema', description: 'Design a full database for a social platform with users, followers, posts, and feeds.', features: ['Handle self-joins for followers', 'Optimize feed retrieval', 'Implement transactional safety for likes', 'Use views for analytics'] }
          ]
        }
      ]
    }
  ]
};
