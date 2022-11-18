let db_skills = [
  {
    uid: "skill-1",
    type: "HTML",
    value: 90,
    level: "Intermediate",
  },
  {
    uid: "skill-2",
    type: "CSS",
    value: 90,
    level: "Intermediate",
  },
  {
    uid: "skill-3",
    type: "JS",
    value: 50,
    level: "Intermediate",
  },
  {
    uid: "skill-4",
    type: "TS",
    value: 50,
    level: "Intermediate",
  },
  {
    uid: "skill-5",
    type: "Bootstrap",
    value: 10,
    level: "Intermediate",
  },
  {
    uid: "skill-6",
    type: "Scss",
    value: 10,
    level: "Intermediate",
  },
];

let db_availibilityCalendar = [
  {
    uid: "availibility-1",
    dataUnavailable: [Date(2020, 1, 1), Date(2020, 1, 2), Date(2020, 1, 3)],
    type: "holiday",
  },
  {
    uid: "availibility-2",
    dataUnavailable: [Date(2020, 2, 1), Date(2020, 2, 2), Date(2020, 2, 3)],
    type: "thanks giving week",
  },
  {
    uid: "availibility-3",
    dataUnavailable: [Date(2020, 3, 1), Date(2020, 3, 2), Date(2020, 3, 3)],
    type: "christmas week",
  },
];

/* Model db_resource

{
    uid,
    name,
    title,
    availabilityCalender,
    skills,
    payRate,
    updateDate
  }
*/

let db_resources = [
  {
    uid: "R-736789",
    name: "Jonathan Chua",
    title: "Project Manager",
    availabilityCalender: [], // array of dates
    skills: [], // arrray of skills id
    payRate: 100,
    updateDate: new Date(2022, 7, 30),
  },
  {
    uid: "R-736733",
    name: "Parth Savaj",
    title: "Software Engineer",
    availabilityCalender: [], // array of dates
    skills: [], // arrray of skills id
    payRate: 100,
    updateDate: new Date(2022, 7, 30),
  },
  {
    uid: "R-732289",
    name: "Alondra Gonzalez",
    title: "Software Designer",
    availabilityCalender: [], // array of dates
    skills: [], // arrray of skills id
    payRate: 100,
    updateDate: new Date(2022, 7, 30),
  },
  {
    uid: "R-736778",
    name: "Jeel Patel",
    title: "Sftware Tester",
    availabilityCalender: [], // array of dates
    skills: [], // arrray of skills id
    payRate: 100,
    updateDate: new Date(2022, 7, 30),
  },
  {
    uid: "R-709789",
    name: "Sari Ajina",
    title: "Software Developer",
    availabilityCalender: [], // array of dates
    skills: [], // arrray of skills id
    payRate: 100,
    updateDate: new Date(2022, 7, 30),
  },
  {
    uid: "R-736589",
    name: "Mrunal Prakash Gavali",
    title: "Software Designer",
    availabilityCalender: [], // array of dates
    skills: [], // arrray of skills id
    payRate: 100,
    updateDate: new Date(2022, 7, 30),
  },
];
