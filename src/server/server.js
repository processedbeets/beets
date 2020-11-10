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
  {
    id: '10',
    title: 'Strengthen teams through knowledge sharing',
  },
  {
    id: '11',
    title: 'Maintainability through simplicity',
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
      `React & Angular development`,
      `Upgraded from Angular 7 --> 10`,
      `Introduced 90%+ code-coverage`,
      `Animated UX`,
      `Created code-walkthrough videos for on-boarding`,
      `Introduced efficient peer review process`,
    ],
  },
  {
    id: '3',
    title: 'Processed Beets',
    subHeading: `Jun '19 - Oct '19`,
    superHeading: 'Contract Frontend Developer',
    content: [
      'Built tools in React, & Redux',
      `Improved business efficiency`,
      `Full Jest test suite`,
    ],
  },
  {
    id: '4',
    title: 'Screenmedia',
    subHeading: `Jan '19 - Jun '19`,
    superHeading: 'Contract Frontend Developer',
    content: [
      `Architect multi-app Payroll solution in Angular 7, Nx Workspaces`,
      `Team lead`,
      `State-aware using NgRx`,
      `Design for SASS: BEM, & ITCSS`,
      `Built Dev Ops solution - Microsoft Dev Ops`,
    ],
  },
  {
    id: '5',
    title: `Aggreko`,
    subHeading: `Oct '18 - Jan '19`,
    superHeading: 'Contract Web Developer',
    content: [
      `Built .Net Core 2 application (Azure)`,
      `Converted MVC --> Angular 7`,
      `Organised & taught Angular 7 workshops for team`,
    ],
  },
  {
    id: '6',
    title: `Usepaq`,
    superHeading: 'Contract Architect, Lead Dev, & Project Manager',
    subHeading: `Apr '17 - Oct '17`,
    content: [
      `'Greenfield' healthcare app with Angular 4, .Net Core 2, & Azure`,
      `Built unique javascript tools`,
      `Delivered to aggressive timescales`,
    ],
  },
  {
    id: '7',
    title: `City Facilities Management`,
    superHeading: 'Contract Web Developer',
    subHeading: `Apr '16 - Apr '17`,
    content: [
      `React & Angular JS apps`,
      `Delivered large scale projects`,
      `Mentor other developers`,
      `Full app rewrites`,
    ],
  },
  {
    id: '8',
    title: `Coder Dojo Scotland`,
    superHeading: 'Volunteer Mentor',
    subHeading: `Mar '15 - Mar '17`,
    content: [
      `Encourage kids through technology`,
      `Fortnightly sessions - Raspberry Pi, Python, & Unity`,
      `Run workshops at schools`,
      `Required to explain complex computing ideas to kids`,
    ],
  },
  {
    id: '9',
    title: `Genentech`,
    superHeading: 'Contract Web Developer',
    subHeading: `Oct '14 - Mar '16`,
    content: [
      `Redesign full apps. Responsive UX`,
      `Built javascript spreadsheet plugin`,
      `T4 Templating for automatic code creation`,
      `Introduced consistent pattern adoption`,
      `Created complex D3 graphs`,
    ],
  },
  {
    id: '10',
    title: `Smart Metering Systems`,
    superHeading: 'Senior Software Engineer',
    subHeading: `Jul '13 - Nov '14`,
    content: [
      `Rewrote daily data export process: From 2 hours --> 10 seconds`,
      `DB query optimisation`,
      `Implement continuous integration`,
      `Improved scalability`,
    ],
  },
  {
    id: '11',
    title: `Objective Associates`,
    superHeading: 'Senior Software Engineer',
    subHeading: `Nov '11 - Jul '13`,
    content: [
      `Lead Developer on flagship product`,
      `Architect`,
      `Built proprietary JS framework`,
      `Introduced build automation`,
    ],
  },
  {
    id: '12',
    title: `Response / Inisoft`,
    superHeading: 'Software Engineer',
    subHeading: `Jan '09 - Nov '11`,
    content: [
      `Built web app for phone system integration`,
      `UX & DB designer`,
      `Integrate with complex low-level hardware`,
    ],
  },
  {
    id: '13',
    title: `The Solutionworks`,
    superHeading: 'Software Engineer',
    subHeading: `Jun '05 - Jan '09`,
    content: [
      `Project & support manager`,
      `DB optimisations`,
      `Demoed at industry exhibitions`,
      `Frequent on-site deployments`,
      `Reduce SLAs on support calls`,
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
