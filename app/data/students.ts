// Sample student records used across the website.
// NOTE: All names, IDs, and emails below are FICTIONAL and for demonstration only.
// The pages read from this single list and pass each record to <StudentCard> through props.

export interface Student {
  id: number
  name: string
  studentId: string
  course: string
  yearLevel: number
  avatar: string
  email: string
  section: string
}

export const students: Student[] = [
  {
    id: 1,
    name: 'Andrea Villanueva',
    studentId: '2023-00142',
    course: 'BS Information Technology',
    yearLevel: 3,
    avatar: '/images/avatars/avatar-1.svg',
    email: 'andrea.villanueva@example.edu',
    section: 'BSIT 3-A'
  },
  {
    id: 2,
    name: 'Carlo Mendoza',
    studentId: '2024-00387',
    course: 'BS Computer Science',
    yearLevel: 2,
    avatar: '/images/avatars/avatar-2.svg',
    email: 'carlo.mendoza@example.edu',
    section: 'BSCS 2-B'
  },
  {
    id: 3,
    name: 'Bianca Ramos',
    studentId: '2022-00056',
    course: 'BS Information Systems',
    yearLevel: 4,
    avatar: '/images/avatars/avatar-3.svg',
    email: 'bianca.ramos@example.edu',
    section: 'BSIS 4-A'
  },
  {
    id: 4,
    name: 'Daniel Santos',
    studentId: '2025-00611',
    course: 'BS Information Technology',
    yearLevel: 1,
    avatar: '/images/avatars/avatar-4.svg',
    email: 'daniel.santos@example.edu',
    section: 'BSIT 1-C'
  },
  {
    id: 5,
    name: 'Erika Castillo',
    studentId: '2023-00219',
    course: 'BS Computer Science',
    yearLevel: 3,
    avatar: '/images/avatars/avatar-5.svg',
    email: 'erika.castillo@example.edu',
    section: 'BSCS 3-A'
  },
  {
    id: 6,
    name: 'Francis Lim',
    studentId: '2024-00450',
    course: 'BS Information Systems',
    yearLevel: 2,
    avatar: '/images/avatars/avatar-6.svg',
    email: 'francis.lim@example.edu',
    section: 'BSIS 2-A'
  }
]
