var marked = require('marked');

var arts = [
  {
    name: 'Old portfolio page banner pic',
    image: '/assets/arts/00.jpg',
  },
  {
    name: 'stage curtain for Live For Life',
    image: '/assets/arts/01.jpg',
  },
  {
    name: 'EECS postcard winter collection',
    image: '/assets/arts/02.jpg',
  },
  {
    name: 'Ticket pic for Shanghai Comicon',
    image: '/assets/arts/03.jpg',
  },
  {
    name: 'A recreation of Peking University library',
    image: '/assets/arts/04.jpg',
  },
  {
    name: 'Starry night',
    image: '/assets/arts/05.jpg',
  },
  {
    image: '/assets/arts/07.jpg'
  },
  {
    image: '/assets/arts/08.jpg'
  },
  {
    image: '/assets/arts/09.jpg'
  },
  {
    image: '/assets/arts/10.jpg'
  },
  {
    image: '/assets/arts/11.jpg'
  },
  {
    image: '/assets/arts/12.jpg'
  },
  {
    name: 'Self portrait',
    image: '/assets/arts/06.png',
  },
  {
    image: '/assets/arts/13.jpg'
  },
];

var techs = [
  {
    name: 'FYI: Find Your Instructor',
    image: '/assets/techs/00.jpg',
    desc: 'At the beginning of 2014, I started to work on FYI (Find Your Instructor) with my friends. FYI is a website providing information of professors and schools for CS undergrads who want to apply for graduate schools in the US.'
          + '\n\nThe website is powered by Node.js + MongoDB. Professor data are crawled from sources including university websites, wikipedia and their personal webistes.',
    color: '#22cde7'
  },
  {
    name: 'Shake It',
    image: '/assets/techs/01.jpg',
    desc: 'Shake It is a gesture based tinder style coupon recommendation web app.'
          + '\n\nThe app has a collaborative filtering recommendation system based on user actions including starring, sharing or ignoring the coupons.'
          + '![Screenshot1](/assets/techs/shakeit_0.png)'
          + '![Screenshot1](/assets/techs/shakeit_1.png)',
    color: '#22b2e7'
  },
  {
    name: 'Strata: Scalable 2D Barcode',
    image: '/assets/techs/02.jpg',
    desc: 'Strata is a novel scalable 2D barcode design. When scanning the barcode, user could get different layers of information based on their distance between the scanning device and the barcode.'
          + '\n\nThis project is a collaborative work with [MSRA](http://research.microsoft.com/en-us/labs/asia/) and [Yale University](http://www.yale.edu) and is accepted to [ACM MobiCom 2014](http://www.sigmobile.org/mobicom/2014/).'
          + '\n\n[Read Paper](/assets/strata.pdf)',
    color: '#e88822'
  },
  {
    name: 'TeamGO',
    image: '/assets/techs/03.jpg',
    desc: 'TeamGo is a popular mobile app in Peking University which enables students to team up and hang out with new friends.'
          + ' The initial UI was very complicated and I redesigned the entire interface to make it more intuitive.'
          + '\n\n[Download the App](http://theteamgo.com/)'
          + '![Screenshot1](/assets/techs/teamgo_0.png)'
          + '![Screenshot1](/assets/techs/teamgo_1.png)',
    color: '#22e7ba'
  },
  {
    name: 'CS Classics',
    image: '/assets/techs/04.jpg',
    desc: 'I am very proud to be the only CS student in the department who has actually hand-coded a processor, part of an operating system and a compiler. '
          + '\n\nFor the processor, I implemented a multi-cycle [UniCore](http://mprc.pku.edu.cn/eng/index.html) processor with pipelining in Verilog.'
          + '\n\nFor the operating system, JOS is a teaching operating system used in [MIT CS 6.828](http://pdos.csail.mit.edu/6.828/2011/index.html). It has a basic framework of a UNIX-like operating system in C and I have to write all the core functions myself including virtual memory, multiprocessing, interruption and system call, etc.'
          + '\n\nFor the complier, the course is from [UCLA CS 132](http://web.cs.ucla.edu/~palsberg/course/cs132/project.html). MiniJava is a subset of Java including all the core features like different variable types, arrays, function, class and class derivation, etc. Given a grammar tree, I implemented a compiler in Java which is able to compile MiniJava code to runnable MIPS assembly.',
    color: '#67bf99'
  },
  {
    name: 'Old homepage from 2005',
    image: '/assets/techs/06.jpg',
    desc: 'I designed and wrote my first homepage flylinda.com with HTML, CSS and a little ASP when I was 12. That little site provided free tutorials for web designers and charged services as well so that I could afford the server rent myself. Flylinda.com once reached a daily IP of 2000.'
          + ' Sadly I failed to keep the domain and most of the source code. The only thing I have now is a couple screenshots (and really precious memory).'
          + '![Screenshot1](/assets/techs/old_hp_0.png)'
          + '![Screenshot1](/assets/techs/old_hp_1.png)',
    color: '#9468bf'
  },
].map(function(p) {
  p.desc = marked(p.desc);
  return p;
});

var links = [
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/pub/hannah-xue/83/ba/6a5',
  },
  {
    name: 'facebook',
    url: 'https://www.facebook.com/yqing.xue',
  },
  {
    name: 'instagram',
    url: 'https://instagram.com/hanaxue',
  },
  {
    name: 'github',
    url: 'https://github.com/hanax',
  },
];

var about = [
  {
    desc: '',
    resume: '/assets/Hannah_Xue_Resume.pdf',
  }
]

module.exports = {
  arts: arts,
  techs: techs,
  about: about,
  links: links,
};
