// Logos
import logoBlue from "./images/tgc_logo_blue.jpg";
import logoRed from "./images/tgc_logo_red.jpg";

// Show Covers
import people from "./images/people.jpg";
import micsAreOpen from "./images/mics-are-open.jpg";
import micsAreOpenSquad from "./images/mics-squad.jpg";
import theCookBook from "./images/the-cook-book-1.jpg";
import daDing from "./images/dading-different.jpg";
import lockdownSession from "./images/lockdown-session.jpg";
import wakeUpCall from "./images/wake-up-call.jpg";
// import goodBanner from "./images/good-tv-banner.jpg";

// Landing Sides
import nairobi from "./images/nairobi.webp";
import nairobi2 from "./images/Deadpool_.webp";
import skyline from "./images/Nairobi-Night-Skyline.jpg";
import silverArrow from "./images/silver-arrow.webp";
import laptop from "./images/laptop.webp";
import party from "./images/dance-club.webp";
import blankLaptop from "./images/laptop-2.jpg";
import trail from "./images/forest.webp";

// Team
import GMoney from "./images/GMoney.jpg";
import GMoney2 from "./images/G-Money-1.webp";

import Andy from "./images/Andy.jpg";
import Kevin from "./images/Kevin.jpg";
import Michael from "./images/Michael.png";
import Ramadhani from "./images/Ramadhani.png";
import Calvin from "./images/Calvin.jpg";
import Neville from "./images/Neville.jpg";
import Grauchi from "./images/Grauchi.jpg";
import Ashley from "./images/ashley.jpg";
import Quellie from "./images/quellie.jpg";
import Shammah from "./images/shammah-avatar.jpg";
// Shop Products
import coffeeMug from "./images/Coffee-Mug-1.jpg";
import coffeeMugWhite from "./images/Coffee-Mug-White.jpg";
import coffeeMugBlack from "./images/Coffee-Mug-Magic.jpg";
import maoBlack from "./images/mics-shirt-black.jpg";
import maoWhite from "./images/mics-shirt-white.jpg";
import coasters from "./images/Round-Coasters-White.jpg";
import coastersRound from "./images/Round-Coasters.jpg";
import bottleNewBlack from "./images/New-Bottles-Black.jpg";
import bottleNewBlue from "./images/New-Bottles-Blue.jpg";
import bottleBlue from "./images/Water-Bottle-Blue.jpg";
import bottleCharcoal from "./images/Water-Bottle-Charcoal.jpg";
import bottleLime from "./images/Water-Bottle-Lime.jpg";
import bottleRed from "./images/Water-Bottle-Red.jpg";
import bottleWhite from "./images/Water-Bottle-White.jpg";

import amaize from "./images/amaize.webp";
import apa from "./images/apa.webp";
import safaricom from "./images/safaricom.webp";
import ciroc from "./images/ciroc.webp";
import artcaffe from "./images/artcaffe.webp";
import prudential from "./images/prudential.webp";
import stanbic from "./images/stanbic.webp";
import ikigai from "./images/ikigai.webp";
import ohcha from "./images/ohcha.webp";
import redbull from "./images/redbull.webp";

export const navLinks = [
  { route: "welcome", url: "/#home" },
  { route: "about", url: "/#about" },
  { route: "services", url: "/#services" },
  { route: "contact us", url: "#contacts" },
  { route: "the good tv", url: "/tv" },
  { route: "shop", url: "/shop" },
  { route: "news", url: "/news" },
  { route: "walk with g", url: "/walk" },
  { route: "team", url: "/team" },
];
export const quotes = [
  {
    id: 1,
    name: "Bernard Kelvin Clive",
    quote: "the investments you make into a brand makes its name worth it",
    img: blankLaptop,
  },
  {
    id: 2,
    name: "Martin Luther",
    quote: "i have a dream",
    img: skyline,
  },
];
export const logos = {
  logoRed,
  logoBlue,
  // goodBanner,
};

// Landing Slides
export const landingTemplates = [
  {
    index: 1,
    image: nairobi,
    title: "WE ARE THE-GOOD COMPANY",
    desc: "a creative agency located in Nairobi, Kenya.",
    button: "About Us",
    startAnimation: true,
    url: "#about",
  },
  {
    index: 2,
    image: silverArrow,
    title: "WE BUILD-BRANDS",
    desc: "We specialize in enhancing and building brand equity through tailored strategies & campaigns",
    button: "Learn More",
    startAnimation: "",
    url: "#quote",
  },
  {
    index: 3,
    image: party,
    title: "WE CREATE-EXPERIENCES",
    desc: "We have over 20 years of event management experience. From concept to delivery, we have got you covered.",
    button: "Learn More",
    startAnimation: "",
    url: "tv",
  },
  {
    index: 4,
    image: GMoney2,
    title: "WE ARE-THE INFLUENCE",
    desc: "We have over 20 years of event management experience. From concept to delivery, we have got you covered.",
    button: "Learn More",
    startAnimation: "",
    url: "tv",
  },
  {
    index: 5,
    image: laptop,
    title: "WE CREATE-FOR THE WEB",
    desc: "We design and develop websites and mobile apps to achieve the specific declared goals set by our clients.",
    button: "Learn More",
    startAnimation: "",
    url: "#services",
  },
  {
    index: 6,
    image: people,
    title: "WE ARE-GOOD COMPANY",
    desc: "After all you are the company you keep",
    button: "About Us",
    startAnimation: "",
    url: "team",
  },

  {
    index: 7,
    image: nairobi2,
    title: "WEBSITE-BY BIG O",
    desc: " Made in JS by Steve Shammah.",
    button: "More",
    startAnimation: "",
    url: "team/11",
  },
];

// Shows
export const shows = [
  {
    id: "micsareopen",
    category: "podcast",
    title: "The Mics Are Open",
    hosts: [
      { name: "G Money", id: 1 },
      { name: "Andy", id: 7 },
      { name: "Calvin", id: 6 },
      { name: "Neville", id: 8 },
    ],

    date: "Friday @ 10am",
    cover: micsAreOpenSquad,
    image: micsAreOpen,
    tagline: "The Mics Are Bloodclat Open",
    about:
      "A slightly skewed look at life through the lens of three radio presenters in Nairobi, Kenya. Every week G Money, Calvin and Andy Young chop it up on topics that they probably have no expertise in, but some how it works! The Mics Are Open is a random journey that meanders through three very different lives. These guys are so good, you might even think that they are friends in real life!",
  },
  {
    id: "wakeupcall",
    category: "mixes",
    title: "The Wake Up Call",
    hosts: [{ name: "Dj Grauchi", id: 5 }],
    date: "Saturday @ 9am",
    cover: wakeUpCall,
    image: wakeUpCall,
    tagline: "Do Da Ting",
  },
  {
    id: "lockdown",
    category: "mixes",
    title: "Lockdown Session",
    hosts: [
      { name: "Dj Grauchi", id: 5 },
      { name: "Guest Djs", id: "" },
    ],
    date: "Friday @ 10pm",
    cover: lockdownSession,
    image: lockdownSession,
    tagline: "Lockdown Session In Session",
  },
  {
    id: "selfmade",
    category: "podcast",
    title: "Self Made ",
    hosts: [{ name: "G Money", id: 1 }],
    date: "Wednesday",
    cover: GMoney,
    image: GMoney,
    tagline: "Self Made",
  },
  {
    id: "truth",
    category: "podcast",
    title: "The Truth ",
    hosts: [{ name: "G Money", id: 1 }],
    date: "Thursday",
    cover: GMoney2,
    image: GMoney2,
    tagline: "The Truth",
  },
  {
    id: "thecookbook",
    category: "podcast",
    title: "The Cookbook",
    hosts: [
      { name: "Quellie", id: 10 },
      { name: "Ashley", id: 9 },
    ],
    date: "Wednesday",
    cover: theCookBook,
    image: theCookBook,
    tagline: "Queshley",
  },
  {
    id: "dading",
    category: "podcast",
    title: "DADing Different ",
    hosts: [{ name: "Some Dads", id: "" }],
    date: "Wednesday",
    cover: daDing,
    image: daDing,
    tagline: "A Space For Young Dads ",
  },
  {
    id: "kanairo",
    category: "podcast",
    title: "Kanairo ",
    hosts: [{ name: "Lyrical Jumper", id: "" }],
    date: "Wednesday",
    cover: skyline,
    image: skyline,
    tagline: "Conversations",
  },
];

// Team
export const team = [
  {
    userid: 1,
    username: "G Money",
    fullName: "Anthony Gray",
    title: "Chief Executive Officer",
    bio: "Bringing more than 25 years of international experience to the Good Company is something Anthony Gray aka G Money does with aplomb! Having been an integral part of the radio and music industry in the UK, his decade of working in Kenya has given him a unique perspective into what works for the local market. As a media brand himself, he has worked with major local and international brands from Safaricom to Ciroc he has brought his know how to the fore in all his endeavors. As the Head of Presenters of 103.5 Homeboyz Radio, he has used his knowledge to help shape the sound of Nairobi. Whether it’s dropping jams in the hottest clubs or training the next generation of presenters, G Money has always had his finger on the pulse of the next trend. G Money has also had a hand in some of the biggest events in Kenya, whether it’s concert management or club events, his knowledge of event management is highly sought after and he recently works on the hugely successful Chronixx event and most recently Jameson Live. The only question left for us to ask him is “when do you sleep”?",
    image: GMoney,
    social: {
      instagram: "gmoneyizme",
      facebook: "#",
      twitter: "GMONEYizME",
      linkedin: "",
    },
  },
  {
    userid: 2,
    username: "Mike",
    fullName: "Michael Atema",
    title: "Chief Operating Officer",
    bio: "Michael carries a degree in Music Business from The International College of Music. He has worked as a content curator for the past 8 years with Callback Dreams Studios in South Africa. In his time there, he handled the licensing of content for award-winning shows such as; The Hustle, Stripped Down & Creative Union that aired on the following Multichoice channels; M-Net, Vuzu & Mzansi Magic respectively. Michael also handled the Samsung “Kleek” project under Universal music group from 2015 – 2016. Channel O acquired his services as the artist liaison for the Channel O Music Awards in 2013 and 2014 and currently produces his own show on Channel O titled “The Mix Up”. Michael lives and breathes content and is extremely passionate about the industry.",
    image: Michael,
    social: {
      instagram: "thegoodcompanyke",
      facebook: "#",
      twitter: "#",
      linkedin: "",
    },
  },
  {
    userid: 3,
    username: "KO",
    fullName: "Kevin Okeyo",
    title: "Chief Technology Officer",
    bio: "Kevin is a BSc. in Information Technology graduate from the Jomo Kenyatta University of Agriculture and Technology. He worked at AMREF, which is a health- based INGO based in Nairobi before getting into entrepreneurship to co-found an up an coming digital marketing agency that also provided I.T based solutions for their clients. Kevin has also worked with various wildlife conservation organizations as a private consultant on ways of using emerging technologies and their digital assets to complement their efforts in wildlife conservation. Outside of technology, Kevin is also passionate about rugby and plays for a local rugby club, Impala Saracens.",
    image: Kevin,
    social: {
      instagram: "kevinokeyo",
      facebook: "#",
      twitter: "kevinokeyo_",
      linkedin: "",
    },
  },
  {
    userid: 4,
    username: "Ramadahani",
    fullName: "Ramadahani Abubakar",
    title: "Legal Affairs",
    bio: "Ramadhani holds a Bachelor of Laws Degree LLB (Hons) from the Catholic University of Eastern Africa, Kenya, and also holds a Post Graduate Diploma in Law from the Kenya School of Law.He is a Commissioner for Oaths.",
    image: Ramadhani,
    social: {
      instagram: "thegoodcompanyke",
      facebook: "#",
      twitter: "#",
      linkedin: "",
    },
  },
  {
    userid: 5,
    username: "Man Like Grauchi",
    fullName: "Grauchi",
    title: "Lockdown Session's Captain",
    bio: "",
    image: Grauchi,
    social: {
      instagram: "djgrauchi",
      facebook: "#",
      twitter: "djGrauchi",
      linkedin: "",
    },
  },
  {
    userid: 6,
    username: "Big C",
    fullName: "Calvin Wanguku",
    title: "The Mics Are Open Cast",
    bio: "",
    image: Calvin,
    social: {
      instagram: "calvinwanguku",
      facebook: "#",
      twitter: "Only1Calvin",
      linkedin: "",
    },
  },
  {
    userid: 7,
    username: "Andy",
    fullName: "Andy Young",
    title: "The Mics Are Open Cast",
    bio: "",
    image: Andy,
    social: {
      instagram: "andy_young254",
      facebook: "#",
      twitter: "AndyYoung254",
      linkedin: "",
    },
  },
  {
    userid: 8,
    username: "Nev",
    fullName: "Neville",
    title: "The Mics Are Open Cast",
    bio: "",
    image: Neville,
    social: {
      instagram: "thaatneville",
      facebook: "#",
      twitter: "thaatneville",
      linkedin: "",
    },
  },
  {
    userid: 9,
    username: "Ashley",
    fullName: "Ashley Muthui",
    title: "The Cookbook Cast",
    bio: "",
    image: Ashley,
    social: {
      instagram: "ashleymuthui",
      facebook: "#",
      twitter: "ashleymuthui",
      linkedin: "",
    },
  },
  {
    userid: 10,
    username: "Quellie",
    fullName: "Quellie Odero",
    title: "The Cookbook Cast",
    bio: "",
    image: Quellie,
    social: {
      instagram: "quellie_louise",
      facebook: "#",
      twitter: "QuellieO",
      linkedin: "",
    },
  },
  {
    userid: 11,
    username: "Shammah",
    fullName: "Shammah Ranks",
    title: "Big O",
    bio: "I'm not saying I am spiderman but nobody has ever seen me and spiderman in a room together. Web developer behind the application.",
    image: Shammah,
    social: {
      instagram: "steveshammah",
      twitter: "steveshammah_",
      github: "steveshammah/thegoodapp",
      linkedin: "steve-shammah-252b62191",
    },
  },
];

// Services
export const services = [
  {
    title: "Brand Equity Development",
    content:
      "Your brand isn’t static, or at least it shouldn’t be. Without continual analysis and strategy, your brand can easily lose its shine and that means reduced profits. At the core of what we do is an open and honest brand analysis complete with best practice brand strategy. A brand is not a product or a promise or a feeling. It’s the sum of all the experiences you have with a company. We act before you need to.",
  },
  {
    title: "Marketing",
    content:
      "The consumer is ever changing, every day there is a new challenge and a new way of communicating with your customers and potential customers. At the Good Company, we believe that marketing never stops even when the campaign is over. We provide joined-up marketing concepts and solutions and analysis. In this digital age, you are the company you keep.",
  },
  {
    title: "Talent Management",
    content:
      "Hard work beats talent, especially when talent doesn’t work hard. At the Good Company, we want our talent to hone their “talent” while we manage. With some of Kenya’s top sports and media personalities on our book, we offer career development assistance and financial management advice, to make sure that your finances last longer than your career (Roster available on request)",
  },
  {
    title: "Event Planning and Execution",
    content:
      "A successful event doesn’t happen by accident but is the result of meticulous planning. At the Good Company we have over 20 years of event management experience. From concept to delivery, we have got you covered.",
  },
  {
    title: "Web Development",
    content:
      "One of the reasons we created the Good Company was because we had such negative experience with developers that when we found some great ones, we gave them jobs and put them on the board. We offer timely web solutions that work, after all that’s all you really need.",
  },
  {
    title: "App Development",
    content:
      "Does you business need an app? Do you need an app. This is a question we can help you answer. Apps aren’t for everyone, but if you need one , then talk to us.",
  },
  {
    title: "Radio Production",
    content:
      "With radio production experience spanning more than 20 years, the Good Company is in a unique position to provide broadcast strategy, analysis and execution in this digital era. Media is ever changing and the good company has been at the forefront go the changes in broadcasting both locally and internationally. Whether you need data driven output analysis, newsroom training, feature development or day part segmentation ideas, the Good company is your one stop shop for all things radio related.",
  },
];

// Products
export const products = [
  {
    id: 1,
    name: "Coffee Mug - Black Inside",
    img: coffeeMug,
    price: 750,
    details: "The Mics Are Open Coffee Mug - Black Inside",
    by: "The Mics Are Open",
    new: false,
    soldOut: true,
    discount: 0,
  },
  {
    id: 2,
    name: "Coffee Mug - White Inside",
    img: coffeeMugWhite,
    price: 700,
    details: "The Mics Are Open Coffee Mug - White Inside",
    by: "The Mics Are Open",
    new: false,
    soldOut: false,
    discount: 15,
  },
  {
    id: 4,
    name: "Coffee Mug - Black",
    img: coffeeMugBlack,
    price: 700,
    details: "The Mics Are Open Coffee Mug - Black",
    by: "The Mics Are Open",
    new: true,
    soldOut: false,
    discount: 0,
  },
  {
    id: 5,
    name: "Mics Are Open Tee - Black",
    img: maoBlack,
    price: 1200,
    details: "The Mics Are Open T/Shirt",
    by: "The Mics Are Open",
    new: false,
    soldOut: false,
  },
  {
    id: 6,
    name: "Mics Are Open Tee - White",
    img: maoWhite,
    price: 1100,
    details: "The Mics Are Open T/Shirt",
    by: "The Mics Are Open",
    new: false,
    soldOut: false,
    discount: 0,
  },
  {
    id: 7,
    name: "Water Bottle - Black",
    img: bottleNewBlack,
    price: 1000,
    details: "The Mics Are Open Water Bottle - Black",
    by: "The Mics Are Open",
    new: true,
    soldOut: false,
    discount: 0,
  },
  {
    id: 8,
    name: "Water Bottle - Blue",
    img: bottleNewBlue,
    price: 1000,
    details: "The Mics Are Open Water Bottle - Blue",
    by: "The Mics Are Open",
    new: true,
    soldOut: false,
  },
  {
    id: 9,
    name: "Water Bottle - Charcoal",
    img: bottleCharcoal,
    price: 1000,
    details: "The Mics Are Open Water Bottle - Charcoal",
    by: "The Mics Are Open",
    new: false,
    soldOut: false,
    discount: 0,
  },
  {
    id: 10,
    name: "Water Bottle - Blue",
    img: bottleBlue,
    price: 950,
    details: "The Mics Are Open Water Bottle - Blue",
    by: "The Mics Are Open",
    new: false,
    soldOut: false,
    discount: 0,
  },

  {
    id: 11,
    name: "Water Bottle - Lime",
    img: bottleLime,
    price: 950,
    details: "The Mics Are Open Water Bottle - Lime",
    by: "The Mics Are Open",
    new: false,
    soldOut: false,
    discount: 0,
  },
  {
    id: 12,
    name: "Water Bottle - Red",
    img: bottleRed,
    price: 950,
    details: "The Mics Are Open Water Bottle - Red",
    by: "The Mics Are Open",
    new: false,
    soldOut: false,
    discount: 0,
  },
  {
    id: 13,
    name: "Water Bottle - White",
    img: bottleWhite,
    price: 950,
    details: "The Mics Are Open Water Bottle - White",
    by: "The Mics Are Open",
    new: false,
    soldOut: false,
    discount: 0,
  },
  {
    id: 14,
    name: "Coaster - Round",
    img: coasters,
    price: 1000,
    details: "The Mics Are Open Caster - Round",
    new: false,
    soldOut: false,
    discount: 10,
  },
  {
    id: 15,
    name: "Coaster - Rounded Edges",
    img: coastersRound,
    price: 1100,
    details: "The Mics Are Open Caster - Rounded Edges",
    by: "The Mics Are Open",
    new: true,
    soldOut: false,
    discount: 0,
  },
];
export const productsImages = {
  coffeeMug,
  coffeeMugWhite,
  coffeeMugBlack,
  maoBlack,
  maoWhite,
  coasters,
  coastersRound,
  bottleNewBlack,
  bottleNewBlue,
  bottleBlue,
  bottleCharcoal,
  bottleLime,
  bottleRed,
  bottleWhite,
};

// Partners
export const partners = [
  { url: amaize, title: "AMAIZE" },
  { url: apa, title: "APA INSURANCE" },
  { url: safaricom, title: "SAFARICOM PLC" },
  { url: ciroc, title: "CIROC" },
  { url: artcaffe, title: "ARTCAFFE" },
  { url: prudential, title: "PRUDENTIAL" },
  { url: stanbic, title: "STANBIC BANK" },
  { url: ikigai, title: "IKIGAI" },
  { url: ohcha, title: "OHCHA NOODLES BAR" },
  { url: redbull, title: "REDBULL" },
];

// About
export const about = {
  title: "A Creative Agency Focused On Vision, Brand And People.",
  text: "We specialize in enhancing and building brand equity through tailored campaigns. We as a company share a common purpose and are united towards focusing our talents and organizing our various skills and resources to achieve the specific declared goals set by our clients. After all, you are the company you keep.",
};

// News
export const news = [
  {
    id: 10,
    title: "4 Reasons Why UX Design is Good FOr Business",
    datePosted: ["12", "02", "2022"],
    author: "TGC",
    content:
      "Bringing more than 25 years of international experience to the Good Company is something Anthony Gray aka G Money does with aplomb! Having been an integral part of the radio and music industry in the UK, his decade of working in Kenya has given him a unique perspective into what works for the local market. As a media brand himself, he has worked with major local and international brands from Safaricom to Ciroc he has brought his know how to the fore in all his endeavors. As the Head of Presenters of 103.5 Homeboyz Radio, he has used his knowledge to help shape the sound of Nairobi. Whether it’s dropping jams in the hottest clubs or training the next generation of presenters, G Money has always had his finger on the pulse of the next trend. G Money has also had a hand in some of the biggest events in Kenya, whether it’s concert management or club events, his knowledge of event management is highly sought after and he recently works on the hugely successful Chronixx event and most recently Jameson Live. The only question left for us to ask him is “when do you sleep”?",
    image: blankLaptop,
  },
  {
    id: 11,
    title: "Brand Equity",
    datePosted: ["07", "02", "2022"],
    author: "TGC",
    content:
      "Bringing more than 25 years of international experience to the Good Company is something Anthony Gray aka G Money does with aplomb! Having been an integral part of the radio and music industry in the UK, his decade of working in Kenya has given him a unique perspective into what works for the local market. As a media brand himself, he has worked with major local and international brands from Safaricom to Ciroc he has brought his know how to the fore in all his endeavors. As the Head of Presenters of 103.5 Homeboyz Radio, he has used his knowledge to help shape the sound of Nairobi. Whether it’s dropping jams in the hottest clubs or training the next generation of presenters, G Money has always had his finger on the pulse of the next trend. G Money has also had a hand in some of the biggest events in Kenya, whether it’s concert management or club events, his knowledge of event management is highly sought after and he recently works on the hugely successful Chronixx event and most recently Jameson Live. The only question left for us to ask him is “when do you sleep”?",
    image: GMoney,
  },
  {
    id: 12,
    title: "What is Brand Equity and Why Is It Valuable In Business?",
    datePosted: ["12", "02", "2022"],
    author: "TGC",
    content:
      "Bringing more than 25 years of international experience to the Good Company is something Anthony Gray aka G Money does with aplomb! Having been an integral part of the radio and music industry in the UK, his decade of working in Kenya has given him a unique perspective into what works for the local market. As a media brand himself, he has worked with major local and international brands from Safaricom to Ciroc he has brought his know how to the fore in all his endeavors. As the Head of Presenters of 103.5 Homeboyz Radio, he has used his knowledge to help shape the sound of Nairobi. Whether it’s dropping jams in the hottest clubs or training the next generation of presenters, G Money has always had his finger on the pulse of the next trend. G Money has also had a hand in some of the biggest events in Kenya, whether it’s concert management or club events, his knowledge of event management is highly sought after and he recently works on the hugely successful Chronixx event and most recently Jameson Live. The only question left for us to ask him is “when do you sleep”?",
    image: micsAreOpenSquad,
  },
];

//Footer
export const footerDetails = [
  {
    id: 1,
    title: "Let's Talk About Your Project",
    text: " What are your hopes for your project? What are your fears? How do you move from concept to actuality? We are here to help you with that. Whether your brand needs a spring clean or an overhaul. Let us do the heavy lifting.",
  },
  {
    id: 2,
    title: "Have Any Query?",
    text: "  Our dedicated staff are always ready to help. We appreciate your business and want you to bring us loads more! We welcome you to contact us for more information about any of our products or services.",
  },
  {
    id: 3,
    title: "Where We Are Located",
    text: " Second Floor, 90 JGO James Gichuru Road Lavington Nairobi, KE",
  },
];

// Walk Page Image
export const forest = trail;
