  import starterKitImg  from "../../assets/images/starter-kit.png"
  import spaceBook from "../../assets/images/SpaceBook.png"
  import crystalWeather from "../../assets/images/Crystal-Weather.png"
  import fortunesBarrow from "../../assets/images/Fortunes-Barrow.png"
  import tekFleks from "../../assets/images/TekFleks.png"
  import schedulerApp from "../../assets/images/Scheduler-App.png"
  import horiseonDigital from "../../assets/images/horiseon.jpg"
  import comingSoon from "../../assets/images/Coming-soon.png"
  
  export const projects = [
    {
      title: "UE4 2.5D Starter Kit",
      url: "https://www.unrealengine.com/marketplace/en-US/product/2-5d-starter-kit",
      image: starterKitImg ,
      alt: "2.5D Starter kit project, pixel isometric rpg style game image",
      description: "A comprehensive starter kit for creating 2.5D isometric pixel art RPG games in Unreal Engine.",
      technologies: ["Unreal Engine", "Pixel Art", "Isometric", "RPG"],
      featured: true
    },
    {
      title: "SpaceBook NASA blog",
      url: "https://spacebook-5e89d6d6f153.herokuapp.com/",
      image: spaceBook,
      alt: "SpaceBook: Connect with the Cosmos",
      description: "SpaceBook is a platform for space enthusiasts to share their thoughts and discoveries about the cosmos.",
      technologies: ["Node.js", "Express", "Sequelize", "Heroku", "NLP", "BCrypt"],
      featured: false
    },
    {
      title: "Crystal Weather",
      url: "https://ikonicres.github.io/Crystal-Weather/",
      image: crystalWeather,
      alt: "Crystal Weather Preview",
      description: "Crystal Weather is a weather app that provides accurate forecasts and beautiful visuals.",
      technologies: ["JavaScript", "OpenWeatherMap API", "CSS"],
      featured: false
    },
    {
      title: "Fortune's Barrow",
      url: "https://ikonicres.github.io/Fortunes-Barrow/",
      image: fortunesBarrow,
      alt: "Fortune's Barrow Splash Screen",
      description: "Fortune's Barrow is an interactive adventure game set in a dangerous dungeon.",
      technologies: ["HTML5", "JavaScript", "CSS", "GitHub Pages", "Phaser", "Node.js"],
      featured: false
    },
    {
      title: "TekFleks",
      url: "https://tekfleks-c6410a448c68.herokuapp.com/",
      image: tekFleks,
      alt: "TekFleks",
      description: "TekFleks is an e-commerce platform for tech enthusiasts offering a wide range of electronic gadgets.",
      technologies: ["Node.js", "Express", "Sequelize", "Heroku", "BCrypt"],
      featured: false
    },
    {
      title: "Scheduler",
      url: "https://ikonicres.github.io/Scheduler-App/",
      image: schedulerApp,
      alt: "Scheduler App Preview",
      description: "Scheduler is a task management app that helps you organize your daily activities efficiently.",
      technologies: ["JavaScript", "CSS", "LocalStorage"],
      featured: false
    },
    {
      title: "Horiseon Digital Website",
      url: "https://ikonicres.github.io/horiseon-digital-website/",
      image: horiseonDigital,
      alt: "Horiseon project main image",
      description: "Horiseon Digital Website is a marketing website highlighting digital services.",
      technologies: ["HTML", "CSS"],
      featured: false
    },
    {
      title: "Coming Soon",
      description: "More exciting projects are in the works. Stay tuned for updates!",
      image: comingSoon,
      technologies: [],
      date: "TBD",
      featured: false
    }
]
  

