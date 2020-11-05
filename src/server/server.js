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
    id: '5',
    title: 'Web Developer',
  },
  {
    id: '5',
    title: 'Team Lead',
  },
  {
    id: '5',
    title: 'Systems Architect',
  },
  {
    id: '5',
    title: 'UX',
  },
];

const education = [
   {
    id: '1',
    title: 'Bsc Hons. 2:1',
    subHeading: 'Computing Science',
    superHeading: 'Glasgow University'
  },
   {
    id: '1',
    title: 'A, B',
    subHeading: 'Maths, Physics',
    superHeading: 'Scottish Advanced Highers'
  },
   {
    id: '1',
    title: 'A * 5 | B * 1',
    subHeading: 'STEM & English',
    superHeading: 'Scottish Highers'
  },
   {
    id: '1',
    title: 'React Master',
    subHeading: '2020',
    superHeading: 'Ultimate Courses'
  },
   {
    id: '1',
    title: 'Angular Master',
    subHeading: '2019',
    superHeading: 'Ultimate Courses'
  },
   {
    id: '1',
    title: 'Typescript Master',
    subHeading: '2019',
    superHeading: 'Ultimate Courses'
  },
   {
    id: '1',
    title: 'WCF with .Net',
    subHeading: '2013',
    superHeading: 'Microsoft Certification'
  },
   {
    id: '1',
    title: 'Accessing Data with .Net',
    subHeading: '2012',
    superHeading: 'Microsoft Certification'
  },
   {
    id: '1',
    title: 'Web Applications Development',
    subHeading: '2011',
    superHeading: 'Microsoft Certification'
  },
   {
    id: '1',
    title: 'WPF Applications Development',
    subHeading: '2011',
    superHeading: 'Microsoft Certification'
  },
   {
    id: '1',
    title: 'Applications Development Foundation',
    subHeading: '2011',
    superHeading: 'Microsoft Certification'
  },
   {
    id: '1',
    title: '.Net Programming',
    subHeading: '2011',
    superHeading: 'Microsoft Certification'
  },
]

const jobs = [
   {
    id: '1',
    title: 'Processed Beets',
    subHeading: `Jun '19 - Oct '19 Sep '20...`,
    superHeading: 'Contract Frontend Developer'
  },
   {
    id: '2',
    title: 'Screenmedia',
    subHeading: `Jan '19 - Jun '19 Oct '19 - Sep '20`,
    superHeading: 'Contract Frontend Developer'
  },
   {
    id: '3',
    title: `Aggreko`,
    subHeading: `Oct '18 - Jan '19`,
    superHeading: 'Contract Web Developer'
  },
   {
    id: '4',
    title: `Usepaq`,
    superHeading: 'Contract Architect, Lead Dev, & Project Manager',
    subHeading: `Apr '17 - Oct '17`
  },
   {
    id: '5',
    title: `City Facilities Management`,
    superHeading: 'Contract Web Developer',
    subHeading: `Apr '16 - Apr '17`
  },
   {
    id: '6',
    title: `Coder Dojo Scotland`,
    superHeading: 'Volunteer Mentor',
    subHeading: `Mar '15 - Mar '17`
  },
   {
    id: '7',
    title: `Genentech`,
    superHeading: 'Contract Web Developer',
    subHeading: `Oct '14 - Mar '16`
  },
   {
    id: '8',
    title: `Smart Metering Systems`,
    superHeading: 'Senior Software Engineer',
    subHeading: `Jul '13 - Nov '14`
  },
   {
    id: '9',
    title: `Objective Associates`,
    superHeading: 'Senior Software Engineer',
    subHeading: `Nov '11 - Jul '13`
  },
   {
    id: '10',
    title: `Response / Inisoft`,
    superHeading: 'Software Engineer',
    subHeading: `Jan '09 - Nov '11`
  },
   {
    id: '11',
    title: `The Solutionworks`,
    superHeading: 'Software Engineer',
    subHeading: `Jun '05 - Jan '09`
  },

]


app.get('/api/profiles', (req, res) => {
  res.send(profiles);
});

app.get('/api/education', (req, res) => {
  res.send(education);
})

app.get('/api/jobs', (req, res) => {
  res.send(jobs);
})

app.listen(port, () => console.log(`Server listening on port ${port}`));