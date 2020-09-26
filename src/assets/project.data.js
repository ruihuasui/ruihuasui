export const projects = [
  {
    name: "godutch",
    title: "GoDutch",
    time: "July 2019",
    role: "Backend & Frontend",
    img: require('./godutch-demo.png'),
    description: `
      This application was my final project of CS411 course in UIUC. The goal of this project, <a href="https://www.youtube.com/watch?v=kiGEITdZ8eo"><i>GoDutch</i></a>, 
      is to help people better manage their grocery bill and also split the charge with their friends reasonably. 
      It can recognize and store the information from a receipt upon user scanning using <a href="https://en.wikipedia.org/wiki/Optical_character_recognition">OCR</a>. 
      For frequent users, our app could also automatically predict the products that the user frequently purchases from historical data (previous receipts).   
    `,
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
////////////////////////////////////////////////////
  {
    name: "webgames",
    title: "Web Games: Simple2048 and Gobang",
    time: "May 2019",
    role: "Frontend",
    img: require('./web-games-demo.png'),
    description: `
      I implemented these two single-page web games while learning React JS and the basics of web development. 
      Through developing them in 2 weeks I gained the skills and knowledge of Web Design and front-end development
      which helped my future exploration on building insteresting softwares.
    `,
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
