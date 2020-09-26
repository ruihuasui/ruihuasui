export const researches = [
  {
    name: "ct",
    title: "ClassTranscribe",
    time: "May 2019 - Present",
    role: "Leading Frontend Developer & Research Assistant",
    img: require('../assets/ct-demo.png'),
    description: `
      <a href="https://classtranscribe.illinois.edu"><i>ClassTranscribe</i></a>, aka "Netflix for learning" - is a new education 
      video-based application developed at University of Illinois, 
      with features that are focused on 
      i) Improving learning outcomes for university students and 
      ii) Providing equitable access and support for non-native speaking students 
      and students with disabilities (including motor, cognitive, vision, and hearing).
    `,
    list: [
      `Supervisor: <a href='https://cs.illinois.edu/about/people/faculty/angrave'>Prof. Lawrence Angrave</a>.`,
      ` 
        Designed and developed the entire front-end of <a href="https://classtranscribe.illinois.edu"><i>ClassTranscribe</i></a> using 
        React JS + Redux JS. ClassTranscribe an educational video website supported by personnel and 
        awards from NCSA, Microsoft Corp, and Gies College of Business at the University of Illinois.
      `,
      `
        Implemented a client-side ePub file generator and a online video-to-ePub 
        generating platform. The ePub file generator can convert the lecture videos on 
        ClassTranscribe into markdown-based ePub books; 
        and the platform allows Instructors to manage chapter breakpoints, 
        create audio descriptions to images, and embed mathematical equations and formulas.
      `,
      `
        Created a highly accessible video player that synchronizes playback of 
        two videos with closed captions, audio descriptions, searchable and editable 
        transcriptions, and customizable user preferences.
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
////////////////////////////////////////////////////
  {
    name: "contact-tracing",
    title: "Contact Tracer",
    time: "June 2020 - Present",
    role: "Research Assistant & iOS Developer",
    img: require('./contact-tracing.jpg'),
    description: `
      COVID-19 has affected billions of lives worldwide. Across many countries, 
      governments have to decide between maintaining stringent restrictions on movement 
      of people and opening up the economy. The goal of our team is to 
      use <a href="https://en.wikipedia.org/wiki/Bluetooth_Low_Energy">Bluetooth Low Energy (BLE)</a> 
      System to build a accurate distance estimiate model that can improve contact tracing applications.
      
    `,
    list: [
      `Supervisor: <a href='http://sundaram.cs.illinois.edu/'>Prof. Hari Sundaram</a>.`,
      `
        Designed a Bluetooth Low Energy (BLE) system for iOS devices to broadcasting and scanning 
        the iBeacon packets for distance measurement that is used by contact tracing.
      `,
      `
        Built the proto version of the contact tracing application for iOS using SwiftUI, 
        which allows users to discover the nearby iBeacon packets using the BLE system.
      `,
      `
        Collected beacon/BLE packets through the designed BLE system to train 
        <a href="https://arxiv.org/abs/1708.08144">Packet Reception Probability (PRP)</a> model that improves accuracy of distance measurement.
      `
    ],
    links: [],
  },
////////////////////////////////////////////////////
  {
    name: "opico",
    title: "Opico",
    time: "August 2019 - May 2020",
    role: "Backend Developer & Research Assistant",
    img: require('./opico-demo.png'),
    description: `
      In the last two decades, Emoji have become a mainstay of digital communication, 
      allowing ordinary people to convey ideas, concepts, and emotions with just a few Unicode characters. 
      To investigate the properties of <a href="http://ranjithakumar.net/resources/opico.pdf">emoji-first communication</a>, 
      I am working in Data Driven Design Research to modify and maintain <a href='https://www.opico.io/'><i>Opico</i></a>, a social media mobile app that allows users to create reactions --- 
      sequences of between one and five emoji --- 
      and share them with a network of friends.
    `,
    list: [
      `Supervisor: <a href='http://ranjithakumar.net'>Prof. Ranjitha Kumar</a>.`,
      `
        Maintained the API services for <a href='https://www.opico.io/'><i>Opico</i></a>, 
        a mobile social media application used to 
        study <a href="http://ranjithakumar.net/resources/opico.pdf">emoji-first communication</a> 
        in modern society, that allows people to share and discover places through emoji reactions.
      `,
      `
        Built backend services for the new feature <i>Collection</i>, 
        enable user to group their emoji reactions, using Feathers JS and PostgreSQL. 
        This feature could help us further study the context that the emojis are being used.
      `,
      `Analyzed the collected data and studied the implications of emoji-first communication for future social communications platforms.`
    ],
    links: [
      {
        link: 'https://www.opico.io/', 
        name: 'opico.io', 
        img: require('./opico-logo.png')
      }
    ],
  },
]
