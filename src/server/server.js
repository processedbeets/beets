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
    subHeading: 'Software Engineer',
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