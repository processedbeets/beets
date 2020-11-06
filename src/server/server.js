const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const port = 5000;

let profiles = [
  {
    id: '1',
    title: '15+ years',
    subHeading: 'industry experience',
  },
  {
    id: '2',
    title: '2+ years',
    subHeading: 'React',
  },
  {
    id: '3',
    title: '6+ years',
    subHeading: 'Angular',
  },
  {
    id: '4',
    title: '6+ years',
    subHeading: 'Typescript',
  },
  {
    id: '5',
    title: 'Microsoft Certified',
  },
  {
    id: '6',
    title: 'Web Developer',
  },
  {
    id: '7',
    title: 'Team Lead',
  },
  {
    id: '8',
    title: 'Systems Architect',
  },
  {
    id: '9',
    title: 'UX',
  },
];

const education = [
  {
    id: '1',
    title: 'Bsc Hons. 2:1',
    subHeading: 'Computing Science',
    superHeading: 'Glasgow University',
  },
  {
    id: '2',
    title: 'A, B',
    subHeading: 'Maths, Physics',
    superHeading: 'Scottish Advanced Highers',
  },
  {
    id: '3',
    title: 'A * 5 | B * 1',
    subHeading: 'STEM & English',
    superHeading: 'Scottish Highers',
  },
  {
    id: '4',
    title: 'React Master',
    subHeading: '2020',
    superHeading: 'Ultimate Courses',
  },
  {
    id: '5',
    title: 'Angular Master',
    subHeading: '2019',
    superHeading: 'Ultimate Courses',
  },
  {
    id: '6',
    title: 'Typescript Master',
    subHeading: '2019',
    superHeading: 'Ultimate Courses',
  },
  {
    id: '7',
    title: 'WCF with .Net',
    subHeading: '2013',
    superHeading: 'Microsoft Certification',
  },
  {
    id: '8',
    title: 'Accessing Data with .Net',
    subHeading: '2012',
    superHeading: 'Microsoft Certification',
  },
  {
    id: '9',
    title: 'Web Applications Development',
    subHeading: '2011',
    superHeading: 'Microsoft Certification',
  },
  {
    id: '10',
    title: 'WPF Applications Development',
    subHeading: '2011',
    superHeading: 'Microsoft Certification',
  },
  {
    id: '11',
    title: 'Applications Development Foundation',
    subHeading: '2011',
    superHeading: 'Microsoft Certification',
  },
  {
    id: '12',
    title: '.Net Programming',
    subHeading: '2011',
    superHeading: 'Microsoft Certification',
  },
];

const jobs = [
  {
    id: '1',
    title: 'Processed Beets',
    subHeading: `Sep '20...`,
    superHeading: 'Contract Frontend Developer',
    content: ['Built company portfolio website in React'],
  },
  {
    id: '2',
    title: 'Screenmedia',
    subHeading: `Oct '19 - Sep '20`,
    superHeading: 'Contract Frontend Developer',
    content: [
      `Assisted with React application development amongst the team`,
      `Upgraded the solution from Angular 7 --> 10`,
      `Introduced 90%+ code-coverage on all app and library tests`,
      `Built a smoother UX with animations`,
      `Introduced on-boarding of new team members with code-walkthrough videos`,
    ],
  },
  {
    id: '3',
    title: 'Processed Beets',
    subHeading: `Jun '19 - Oct '19`,
    superHeading: 'Contract Frontend Developer',
    content: [
      'Built suite of tools using React, Redux, and React Router',
      `Produced several ‘greenfield’ applications to improve business efficiency, including accounts tracking`,
      `Built full Jest test suite`,
    ],
  },
  {
    id: '4',
    title: 'Screenmedia',
    subHeading: `Jan '19 - Jun '19`,
    superHeading: 'Contract Frontend Developer',
    content: [
      `Architected and built enterprise-level multi-app Payroll solution in Angular 7, Nx Workspaces`,
      `Lead team`,
      `Built all apps to be state-aware using NgRx, for a deterministic experience`,
      `Added proper design methodologies for SASS: BEM, & ITCSS`,
      `Built and maintained smoother pipelines for building and releasing within Microsoft Dev Ops`,
    ],
  },
  {
    id: '5',
    title: `Aggreko`,
    subHeading: `Oct '18 - Jan '19`,
    superHeading: 'Contract Web Developer',
    content: [
      `Enhanced existing .Net Core 2 application (hosted on Azure)`,
      `Converted MVC application to Angular 7`,
      `Organised and taught workshops to the development team in Angular 7`,
    ],
  },
  {
    id: '6',
    title: `Usepaq`,
    superHeading: 'Contract Architect, Lead Dev, & Project Manager',
    subHeading: `Apr '17 - Oct '17`,
    content: [
      `Built 'greenfield' application with Angular 4, .Net Core 2, & Azure`,
      `Built proprietary and unique tools`,
      `Delivered to aggressive timescales`,
    ],
  },
  {
    id: '7',
    title: `City Facilities Management`,
    superHeading: 'Contract Web Developer',
    subHeading: `Apr '16 - Apr '17`,
    content: [
      `Built React & Angular JS Apps`,
      `Delivered large scale projects to tight schedules`,
      `Mentor other developers`,
      `Adapt to fast changing requirements`,
      `Complete system rewrites`,
    ],
  },
  {
    id: '8',
    title: `Coder Dojo Scotland`,
    superHeading: 'Volunteer Mentor',
    subHeading: `Mar '15 - Mar '17`,
    content: [
      `Educate children in the exciting world of technology`,
      `Mentor at bi-monthly sessions - teaching Raspberry Pi, Python, & Makey-Makey`,
      `Speak at schools and run workshops to get kids enthused`,
    ],
  },
  {
    id: '9',
    title: `Genentech`,
    superHeading: 'Contract Web Developer',
    subHeading: `Oct '14 - Mar '16`,
    content: [
      `Redesigned entire system. Introduced modern look & feel. Responsive`,
      `Created CDN to centralise and share all JS & CSS across projects`,
      `Introduced T4 Templating for automatic code creation`,
      `Pushed for stricter coding standards & pattern adoptions`,
      `Created complex JS Graphs using D3`,
      `Built simple & fast, editable JS/HTML table Plugin`,
      `Adhered to strict FDA regulations`,
    ],
  },
  {
    id: '10',
    title: `Smart Metering Systems`,
    superHeading: 'Senior Software Engineer',
    subHeading: `Jul '13 - Nov '14`,
    content: [
      `Rewrote & optimised complex data export process. From 2 hours --> 10 seconds`,
      `DB performance tuning & complex query optimisation`,
      `UX Designer`,
      `Implement deployment strategy & continuous integration using Octopus Deploy`,
      `Improved scalability through better handling of large quantities of data`,
    ],
  },
  {
    id: '11',
    title: `Objective Associates`,
    superHeading: 'Senior Software Engineer',
    subHeading: `Nov '11 - Jul '13`,
    content: [
      `Lead Developer for flagship product`,
      `Systems Architect`,
      `Co-wrote proprietary Javascript framework`,
      `Implement automated build solution`,
      `Streamlined deployment`,
    ],
  },
  {
    id: '12',
    title: `Response / Inisoft`,
    superHeading: 'Software Engineer',
    subHeading: `Jan '09 - Nov '11`,
    content: [
      `Produce web solution replacing multi-stage spreadsheet process`,
      `UX Designer`,
      `Drive modernisation of product`,
      `Integrate with complex low-level hardware`,
      `DB Designer`,
    ],
  },
  {
    id: '13',
    title: `The Solutionworks`,
    superHeading: 'Software Engineer',
    subHeading: `Jun '05 - Jan '09`,
    content: [
      `Project Manager`,
      `Requirements gathering`,
      `Designing & implementing key features`,
      `Support Manager`,
      `Improve support call performance among the team`,
    ],
  },
];

app.get('/api/profiles', (req, res) => {
  res.send(profiles);
});

app.get('/api/education', (req, res) => {
  res.send(education);
});

app.get('/api/jobs', (req, res) => {
  res.send(jobs);
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
