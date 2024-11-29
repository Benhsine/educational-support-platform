export const MOCK_COURSES = [
    {
      id: 1,
      title: 'Introduction à la Programmation',
      description: 'Apprenez les bases de la programmation avec Python',
      level: 'Débutant',
      category: 'Informatique',
      resources: {
        videos: ['video1.mp4', 'video2.mp4'],
        pdfs: ['cours1.pdf', 'exercices.pdf'],
        quizzes: ['Quiz 1', 'Quiz 2']
      }
    },
    {
      id: 2,
      title: 'Mathématiques Avancées',
      description: 'Explorez les concepts mathématiques complexes',
      level: 'Avancé',
      category: 'Mathématiques',
      resources: {
        videos: [],
        pdfs: [],
        quizzes: []
      }
    },
    {
      id: 3,
      title: 'Français Langue et Littérature',
      description: 'Maîtrisez la langue française et ses subtilités',
      level: 'Intermédiaire',
      category: 'Langues',
      resources: {
        videos: ['video1.mp4', 'video2.mp4'],
        pdfs: ['cours1.pdf', 'exercices.pdf'],
        quizzes: ['Quiz 1', 'Quiz 2']
      }
    },
    {
        id: 4,
        title: 'Introduction à la Programmation',
        resources: {
          videos: ['video1.mp4', 'video2.mp4'],
          pdfs: ['cours1.pdf', 'exercices.pdf'],
          quizzes: ['Quiz 1', 'Quiz 2']
        }
    },
    
  ];
  export const MOCK_USER = [
    {
    id:1,
    name: 'John arejdal',
    email: 'john.arejdal@example.com',
    role: 'student' // Example: Étudiant, Enseignant, Admin, etc.
    },
    {
        id:2,
        name: 'John sennouni ',
        email: 'john.sennouni@example.com',
        role: 'professor' // Example: Étudiant, Enseignant, Admin, etc.
        },
        {
            id:3,
            name: 'John lhaloui',
            email: 'john.lhaloui@example.com',
            role: 'professor' // Example: Étudiant, Enseignant, Admin, etc.
            },
  ];
  
  export const MOCK_QUIZ = {
    title: 'Quiz on Programming Basics',
    questions: [
      {
        text: 'What does HTML stand for?',
        options: ['HyperText Markup Language', 'Hyperlink Text Machine Language', 'Hyper Text Main Language'],
        correctAnswer: 'HyperText Markup Language',
      },
      {
        text: 'Which language is used for web development?',
        options: ['Python', 'JavaScript', 'C++'],
        correctAnswer: 'JavaScript',
      },
      {
        text: 'What does CSS stand for?',
        options: ['Cascading Style Sheets', 'Color Style System', 'Computer Style Syntax'],
        correctAnswer: 'Cascading Style Sheets',
      },
    ],
  };
  
  export const MOCK_PROGRESS = [
    {
      courseTitle: 'Introduction à la Programmation',
      level: 'Débutant',
      completion: 80 // Percentage of course completed
    },
    {
      courseTitle: 'Mathématiques Avancées',
      level: 'Avancé',
      completion: 45
    },
    {
      courseTitle: 'Français Langue et Littérature',
      level: 'Intermédiaire',
      completion: 100
    }
  ];
  