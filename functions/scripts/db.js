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

let db_deliverables = [
  {
    uid: "D-736789",
    name: "Deliverable 1",
    description: "This is the first deliverable",
    dueDate: new Date(2022, 7, 30),
    listOfRequirement: [], // array of requirement id
    listOfTasks: [], // array of task id
  },
  {
    uid: "D-736733",
    name: "Deliverable 2",
    description: "This is the second deliverable",
    dueDate: new Date(2022, 7, 30),
    listOfRequirement: [], // array of requirement id
    listOfTasks: [], // array of task id
  },
  {
    uid: "D-732289",
    name: "Deliverable 3",
    description: "This is the third deliverable",
    dueDate: new Date(2022, 7, 30),
    listOfRequirement: [], // array of requirement id
    listOfTasks: [], // array of task id
  },
];

let db_requirements = [
  {
    uid: "R-736789",
    name: "Requirement 1",
    text: "This is the first requirement",
    sorceDocument: "Document 1",
    locationInSourceDocument: "Page 1",
    sourcePage: "Page 1",
    sourceParagraph: "Paragraph 1",
    clientReference: "Client 1",
    clientPage: "Page 1",
    clientParagraph: "Paragraph 1",
    DeliverableId: [],
  },
  {
    uid: "R-736733",
    name: "Requirement 2",
    text: "This is the second requirement",
    sorceDocument: "Document 2",
    locationInSourceDocument: "Page 2",
    sourcePage: "Page 2",
    sourceParagraph: "Paragraph 2",
    clientReference: "Client 2",
    clientPage: "Page 2",
    clientParagraph: "Paragraph 2",
    DeliverableId: [],
  },
  {
    uid: "R-732289",
    name: "Requirement 3",
    text: "This is the third requirement",
    sorceDocument: "Document 3",
    locationInSourceDocument: "Page 3",
    sourcePage: "Page 3",
    sourceParagraph: "Paragraph 3",
    clientReference: "Client 3",
    clientPage: "Page 3",
    clientParagraph: "Paragraph 3",
    DeliverableId: [],
  },
];

let db_tasks = [
  {
    uid: "T-736789",
    name: "Task 1",
    description: "This is the first task",
    resourcewAssigned: [], // array of resource id
    expectedStartDate: new Date(2022, 7, 30),
    expectedEndDate: new Date(2022, 7, 30),
    expectedDuration: 10,
    expectedEffort: 10,
    actualStartDate: new Date(2022, 7, 30),
    actualEndDate: new Date(2022, 7, 30),
    actualDuration: 10,
    effortCompleted: 10,
    actualEffort: 10,
    percentComplete: 10,
    milestone: new Date(2022, 7, 30),
    taskParentId: "T-736789",
  },
  {
    uid: "T-736733",
    name: "Task 2",
    description: "This is the second task",
    resourcewAssigned: [], // array of resource id
    expectedStartDate: new Date(2022, 7, 30),
    expectedEndDate: new Date(2022, 7, 30),
    expectedDuration: 10,
    expectedEffort: 10,
    actualStartDate: new Date(2022, 7, 30),
    actualEndDate: new Date(2022, 7, 30),
    actualDuration: 10,
    effortCompleted: 10,
    actualEffort: 10,
    percentComplete: 10,
    milestone: new Date(2022, 7, 30),
    taskParentId: "T-736733",
  },
  {
    uid: "T-732289",
    name: "Task 3",
    description: "This is the third task",
    resourcewAssigned: [], // array of resource id
    expectedStartDate: new Date(2022, 7, 30),
    expectedEndDate: new Date(2022, 7, 30),
    expectedDuration: 10,
    expectedEffort: 10,
    actualStartDate: new Date(2022, 7, 30),
    actualEndDate: new Date(2022, 7, 30),
    actualDuration: 10,
    effortCompleted: 10,
    actualEffort: 10,
    percentComplete: 10,
    milestone: new Date(2022, 7, 30),
    taskParentId: "T-732289",
  },
];

let db_risks = [
  {
    uid: "R-736789",
    name: "Risk 1",
    category: "Category 1",
    probability: 10,
    impactId: "I-736789",
    mitigation: "Mitigation 1",
    contingency: "Contingency 1",
    riskScore: 10,
    actionBy: new Date(2022, 7, 30),
  },
  {
    uid: "R-736733",
    name: "Risk 2",
    category: "Category 2",
    probability: 10,
    impactId: "I-736733",
    mitigation: "Mitigation 2",
    contingency: "Contingency 2",
    riskScore: 10,
    actionBy: new Date(2022, 7, 30),
  },
  {
    uid: "R-732289",
    name: "Risk 3",
    category: "Category 3",
    probability: 10,
    impactId: "I-732289",
    mitigation: "Mitigation 3",
    contingency: "Contingency 3",
    riskScore: 10,
    actionBy: new Date(2022, 7, 30),
  },
];

let db_impacts = [
  {
    uid: "I-736789",
    value: 10,
  },
  {
    uid: "I-736733",
    value: 10,
  },
  {
    uid: "I-732289",
    value: 10,
  },
];

var db_actionItems = [
  {
    uid: "AI-736789",
    name: "Replace Antenna Module#455",
    description:
      "The antenna cannot achieve the minimum gains we need to fulfill one of the requirements",
    dateCreated: new Date(2022, 6, 15),
    dateAssigned: new Date(2022, 6, 28),
    resource: 1,
    expectedComp: new Date(2023, 1, 15),
    actualComp: null,
    status: 3,
    statusDescription:
      "Currently 75% complete with the prototype using the new module.",
    updateDate: new Date(2022, 7, 30),
  },
  {
    uid: "AI-774577",
    name: "Optimize Tracking Software",
    description:
      "The polling frequency needs to increase now that the system can reach more towers.",
    dateCreated: new Date(2022, 8, 15),
    dateAssigned: new Date(2022, 8, 16),
    resource: 0,
    expectedComp: new Date(2023, 1, 20),
    actualComp: null,
    status: 3,
    statusDescription:
      "The drivers are causing the software to freeze at increase polling rates.",
    updateDate: new Date(2022, 8, 12),
  },
  {
    uid: "AI-444573",
    name: "Replace existing memory",
    description:
      "The memory modules speeds are inadequate to meet minimum load speeds",
    dateCreated: new Date(2022, 8, 25),
    dateAssigned: new Date(2022, 8, 26),
    resource: 2,
    expectedComp: new Date(2023, 1, 5),
    actualComp: null,
    status: 1,
    statusDescription:
      "We were able to secure enough for the prototype but not for the entire deliverable",
    updateDate: new Date(2022, 9, 12),
  },
  {
    uid: "AI-124593",
    name: "Replace logic board",
    description:
      "the current logic board cannot support faster memory modules.",
    dateCreated: new Date(2022, 8, 25),
    dateAssigned: new Date(2022, 8, 26),
    resource: 3,
    expectedComp: new Date(2023, 1, 4),
    actualComp: null,
    status: 4,
    statusDescription:
      "We were able to secure enough for the prototype but not for the entire deliverable",
    updateDate: new Date(2022, 9, 12),
  },
];

const db_status = [
  {
    uid: 1,
    name: "In Progress",
  },
  {
    uid: 2,
    name: "Completed",
  },
  {
    uid: 3,
    name: "Delayed",

  },

];

const db_decision = [
  {
    uid: "D-736789",
    decisionName: "Decision 1",
    decisionDescription: "This is the first decision",
    priorityId: ["P-736789", "P-736733", "P-736733"],
    impactId: ["I-736789", "I-736733", "I-736733"],
    dateCreated: new Date(2022, 7, 30),
    dateNeeded: new Date(2022, 7, 30),
    dateMade: new Date(2022, 7, 30),
    resource: ["R-736789", "R-736733", "R-736733"],
    expectedCompletionDate: new Date(2022, 7, 30),
    actualCompletionDate: new Date(2022, 7, 30),
    statusId:[1,2,3],
    statusDescription:"This is the status description",
    updateDate: new Date(2022, 7, 30),
  },
  {
    uid: "D-736733",
    decisionName: "Decision 2",
    decisionDescription: "This is the second decision",
    priorityId: ["P-736789", "P-736733", "P-736733"],
    impactId: ["I-736789", "I-736733", "I-736733"],
    dateCreated: new Date(2022, 7, 30),
    dateNeeded: new Date(2022, 7, 30),
    dateMade: new Date(2022, 7, 30),
    resource: ["R-736789", "R-736733", "R-736733"],
    expectedCompletionDate: new Date(2022, 7, 30),
    actualCompletionDate: new Date(2022, 7, 30),
    statusId:[1,2,3],
    statusDescription:"This is the status description",
    updateDate: new Date(2022, 7, 30),
  },
  {
    uid: "D-732289",
    decisionName: "Decision 3",
    decisionDescription: "This is the third decision",
    priorityId: ["P-736789", "P-736733", "P-736733"],
    impactId: ["I-736789", "I-736733", "I-736733"],
    dateCreated: new Date(2022, 7, 30),
    dateNeeded: new Date(2022, 7, 30),
    dateMade: new Date(2022, 7, 30),
    resource: ["R-736789", "R-736733", "R-736733"],
    expectedCompletionDate: new Date(2022, 7, 30),
    actualCompletionDate: new Date(2022, 7, 30),
    statusId:[1,2,3],
    statusDescription:"This is the status description",
    updateDate: new Date(2022, 7, 30),
  },
];

const db_priority = [
  {
    uid: "P-736789",
    value: 10,
  },
  {
    uid: "P-736733",
    value: 10,
  },
  {
    uid: "P-732289",
    value: 10,
  },
];  

const db_impact = [
  {
    uid: "I-736789",
    value: 10,
  },
  {
    uid: "I-736733",
    value: 10,
  },
  {
    uid: "I-732289",
    value: 10,
  },

];

const db_referenceDocument = [
  {
    uid: "RD-736789",
    decisionId  : ["D-736789", "D-736733", "D-736733"]
  },
  {
    uid: "RD-736733",
    decisionId  : ["D-736789", "D-736733", "D-736733"]
  },
  {
    uid: "RD-732289",
    decisionId  : ["D-736789", "D-736733", "D-736733"]
  },
];

const db_meetingNotes = [
  {
    uid: "MN-736789",
    decisionId  : ["D-736789", "D-736733", "D-736733"]
  },
  {

    uid: "MN-736733",
    decisionId  : ["D-736789", "D-736733", "D-736733"]
  },

  {
    uid: "MN-732289",
    decisionId  : ["D-736789", "D-736733", "D-736733"]
  },
];

const db_severity = [
  {
    uid: "S-736789",
    value: 10,
  },
  {
    uid: "S-736733",
    value: 10,
  },
  {
    uid: "S-732289",
    value: 10,
  },
];

const db_issues = [
  {
    uid: "I-736789",
    issueName: "Issue 1",
    issueDescription: "This is the first issue",
    priorityId: ["P-736789", "P-736733", "P-736733"],
    severityId: ["S-736789", "S-736733", "S-736733"],
    dateRaised: new Date(2022, 7, 30),
    dateAssigned: new Date(2022, 7, 30),
    expectedCompletionDate: new Date(2022, 7, 30),
    actualCompletionDate: new Date(2022, 7, 30),
    statusId:[1,2,3],
    statusDescription:"This is the status description",
    updateDate: new Date(2022, 7, 30),
  },
  {
    uid: "I-736733",
    issueName: "Issue 2",
    issueDescription: "This is the second issue",
    priorityId: ["P-736789", "P-736733", "P-736733"],
    severityId: ["S-736789", "S-736733", "S-736733"],
    dateRaised: new Date(2022, 7, 30),
    dateAssigned: new Date(2022, 7, 30),
    expectedCompletionDate: new Date(2022, 7, 30),
    actualCompletionDate: new Date(2022, 7, 30),
    statusId:[1,2,3],
    statusDescription:"This is the status description",
    updateDate: new Date(2022, 7, 30),
  },
  {
    uid: "I-732289",
    issueName: "Issue 3",
    issueDescription: "This is the third issue",

    priorityId: ["P-736789", "P-736733", "P-736733"],
    severityId: ["S-736789", "S-736733", "S-736733"],
    dateRaised: new Date(2022, 7, 30),
    dateAssigned: new Date(2022, 7, 30),
    expectedCompletionDate: new Date(2022, 7, 30),
    actualCompletionDate: new Date(2022, 7, 30),
    statusId:[1,2,3],
    statusDescription:"This is the status description",
    updateDate: new Date(2022, 7, 30),
  },
];

const db_predecessor_successorTasks = [
  {
    uid: "PST-736789",
    predecessorTaskId: ["T-736789", "T-736733", "T-736733"],
    successorTaskId: ["T-736789", "T-736733", "T-736733"],
  },
  {
    uid: "PST-736733",
    predecessorTaskId: ["T-736789", "T-736733", "T-736733"],
    successorTaskId: ["T-736789", "T-736733", "T-736733"],
  },
  {
    uid: "PST-732289",
    predecessorTaskId: ["T-736789", "T-736733", "T-736733"],
    successorTaskId: ["T-736789", "T-736733", "T-736733"],
  },
];