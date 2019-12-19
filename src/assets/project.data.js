import { logo } from "./index"

export const projects = [
  {
    name: "opico",
    title: "Opico",
    time: "August 2019 - Present",
    role: "Backend Developer & Research Assistant",
    description: '',
    list: [
      "Collaborated with <a href='http://ranjithakumar.net'>Prof. Ranjitha Kumar</a> on Data Driven Design Research.",
      "Maintained the API service for <a href='https://www.opico.io/'>Opico</a>, a mobile application used to study emoji-first communication in modern society, that allows people to share and discover places through emoji reactions.",
      "Designed and implemented API’s for the new feature <i>Collection</i>, a list of emoji reactions based on the user’s selection, using Feathers JS and PostgreSQL."
    ],
    links: [
      {
        link: 'https://www.opico.io/', 
        name: 'opico.io', 
        img: require('./opico-logo.png')
      }
    ],
  },
  {
    name: "ct",
    title: "ClassTranscribe",
    time: "May 2019 - Present",
    role: "Leading Frontend Developer & Research Assistant",
    description: ``,
    list: [
      ` 
        Designed and developed the frontend of <a href="https://classtranscribe.illinois.edu">ClassTranscribe</a>,
        an educational video website launched by Microsoft Corporation 
        and the University of Illinois as part of the 
        <a href='https://cs.illinois.edu/news/microsoft-and-university-illinois-launch-accessibility-lighthouse-program'>2019 Lighthouse Accessibility Program</a>, 
        using React JS, Bootstrap, and Redux.
      `,
      `
        Built a highly accessible video player that 
        synchronizes playback of two videos with closed captions, 
        audio descriptions, searchable and editable transcriptions, 
        and customizable user preferences.
      `,
      `
        Implemented functionalities that provide streamlined keyboard accessibility 
        throughout the whole website, and followed the 
        <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">Web Content Accessibility Guidelines (WCAG)</a>
        to ensure the website is accessible to users with special needs.
      `,
      `
        Attracted hundreds of active users and the attention from IT Accessibility Specialists 
        of the University of Illinois that will help extend the user group and 
        lead the website to further application.
      `
    ],
    links: [
      {
        link: 'https://classtranscribe.illinois.edu', 
        name: 'classtranscribe.illinois.edu', 
        img: require('./ct-logo.png'),
      },
      {
        link: 'https://github.com/classtranscribe/FrontEnd', 
        name: 'github.com/classtranscribe/FrontEnd', 
        img: null
      },
    ],
  },
  {
    name: "godutch",
    title: "GoDutch",
    time: "July 2019",
    role: "Backend & Frontend",
    description: '',
    list: [
      "Collaborated with 4 team members on building a mobile application that enables people to split shopping bills from supermarkets with friends through parsing images of Walmart electronic receipt.",
      "Implemented the components in Bill-splitting screen and Result screen for frontend using React Native.",
      "Designed the MySQL database tables and relations for GoDutch, built API services for the transactions using Python Flask, and wrote parser functions to OCR responses."
    ],
    links: [
      {
        link: 'https://github.com/WeiliLiu/GoDutch_backend', 
        name: 'github.com/WeiliLiu/GoDutch_backend', 
        img: null,
      },
      {
        link: 'https://github.com/ruihuasui/GoDutch', 
        name: 'github.com/ruihuasui/GoDutch', 
        img: null
      },
    ],
  },
  {
    name: "webgames",
    title: "Web Games: Simple2048 and Gobang",
    time: "May 2019",
    role: " ",
    description: '',
    list: [
      "Implemented a sliding-block-puzzle web game <a href='https://ruihuasui.github.io/react-simple2048/'>Simple2048</a>, compatible with both computer and mobile browsers, via React.",
      "Implemented <a href='https://ruihuasui.github.io/react-gobang/'>Gobang</a>, also called Five in a Row, an abstract strategy board game, for learning basic knowledges about front-end development (using React and Bootstrap).",
    ],
    links: [
      {
        link: 'https://ruihuasui.github.io/react-simple2048/', 
        name: 'ruihuasui.github.io/react-simple2048', 
        img: require('./2048-logo.png'),
      },
      {
        link: 'https://ruihuasui.github.io/react-gobang/', 
        name: 'ruihuasui.github.io/react-gobang', 
        img: require('./gobang-logo.png')
      },
    ],
  },
]

//      •<a href=\"https://dl.acm.org/citation.cfm?id=3316547\">Opico: A Study of Emoji-first Communication in a Mobile Social App<a/>
