const employees = [
  {
    "id": 1, "firstName": "Amit", "email": "employee1@example.com", "password": "123",
    "tasks": [
      {
        "title": "Fix login issue",
        "description": "Resolve the bug preventing user login",
        "date": "2025-03-21",
        "category": "Bug Fix",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Design homepage banner",
        "description": "Create a new banner for the homepage",
        "date": "2025-03-22",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": { "active": 2, "newTask": 1, "completed":0, "failed": 0 }
  },
  {
    "id": 2, "firstName": "Priya", "email": "employee2@example.com", "password": "123",
    "tasks": [
      {
        "title": "Database optimization",
        "description": "Optimize database queries for performance",
        "date": "2025-03-20",
        "category": "Database",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Write unit tests",
        "description": "Add unit tests for the authentication module",
        "date": "2025-03-23",
        "category": "Testing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": { "active": 1, "newTask": 1, "completed": 1, "failed": 0 }
  },
  {
    "id": 3, "firstName": "Rajesh", "email": "employee3@example.com", "password": "123",
    "tasks": [
      {
        "title": "Update API docs",
        "description": "Improve API documentation for developers",
        "date": "2025-03-21",
        "category": "Documentation",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Implement caching",
        "description": "Introduce caching for frequently accessed data",
        "date": "2025-03-24",
        "category": "Performance",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": { "active": 1, "newTask": 1, "completed": 1, "failed": 0 }
  },
  {
    "id": 4, "firstName": "Sneha", "email": "employee4@example.com", "password": "123",
    "tasks": [
      {
        "title": "Develop mobile UI",
        "description": "Design and develop UI for mobile app",
        "date": "2025-03-25",
        "category": "UI/UX",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Fix broken links",
        "description": "Identify and fix all broken links on the website",
        "date": "2025-03-22",
        "category": "Maintenance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskNumbers": { "active": 1, "newTask": 1, "completed": 1, "failed": 0 }
  },
  {
    "id": 5, "firstName": "Vikram", "email": "employee5@example.com", "password": "123",
    "tasks": [
      {
        "title": "Enhance security measures",
        "description": "Improve application security with encryption",
        "date": "2025-03-26",
        "category": "Security",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Prepare project report",
        "description": "Compile and submit project progress report",
        "date": "2025-03-27",
        "category": "Reporting",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskNumbers": { "active": 1, "newTask": 1, "completed": 1, "failed": 0 }
  }
];
const admin = [
  {
    "id": 1, "email": "admin@example.com", "password": "123"
  }
];

export { employees, admin };


  
  export const setLocalStorage =()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
  }

  export const getLocalStorage =()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}
   
  }
  