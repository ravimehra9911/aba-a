const MenuData = [
  {
    id: 1,
    name: 'GENERAL CEUs',
    link: '/coursepage',
  },
  {
    id: 2,
    name: 'SUPERVISION CEUs',
    link: '/supervisionCourses',
  },
  {
    id: 3,
    name: 'ETHICAL STANDARD CEUs',
    link: '/ethicalStandardCourses',
  },
  // {
  //   id: 4,
  //   name: 'BUSINESS STANDARD CEUs',
  //   link: '/businessStandardCourses',
  // },
  // {
  //   id: 5,
  //   name: 'EDUCATION STANDARD CEUs',
  //   link: '/educationStandardCourses',
  // },
  // {
  //   id: 6,
  //   name: 'OTHER',
  //   link: '/otherCourses',
  // },
];

const CourseData = [
  {
    id: 1,
    title: 'Building + Maintaining Rapport',
    link: '/generalCourses',
    ceu: '1 General CEU',
    instructor: 'Alberto Maldonado M.A., BCBA',
    date: 'March 2023',
    description:
      'Here you will learn the fundamental schedules of reinforcement and how to implement them in real life! After all, this is APPLIED behavior analysis, right!?',
    price: '5.00',
    reviews: '4.9',
  },
  {
    id: 2,
    title: 'Building + Rapport',
    link: '/generalCourses',
    ceu: '2 General CEU',
    instructor: 'Alberto Maldonado M.A., BCBA',
    date: 'March 2023',
    description:
      'Here you will learn the fundamental schedules of reinforcement and how to implement them in real life! After all, this is APPLIED behavior analysis, right!?',
    price: '9.00',
    reviews: '4.7',
  },
];

export { MenuData, CourseData };
