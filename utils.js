import crystpal from "./public/assets/crystpal.png"
import stery from "./public/assets/stery.png"
import groshure from "./public/assets/groshure.png"
import dreams from "./public/assets/dreams.png"
import dreamsmobile from "./public/assets/dreamsmobile.png"
import gmobile from "./public/assets/gmobile.png"
import smobile from "./public/assets/smobile.png"
import cmobile from "./public/assets/cmobile.png"
import gsap from "gsap"





export const tl = gsap.timeline()


export const projects = [
    { 
        id:1,
        title: "CryptPal",
        image: crystpal,
        content: "A crypto app that lets you tag along with latest market trends, news and prices.",
        mobileImg: cmobile,
        url: "https://www.behance.net/gallery/138452257/CryptPal" 
    },
    { 
        id:2,
        title: "Stery",
        image: stery,
        content: "Stery is an art platform for finding and purchasing original art by artists all over the world.",
        mobileImg: smobile,
        url: "https://www.behance.net/gallery/136063681/Stery" 
    },
    { 
        id:3,
        title: "Groshure",
        image: groshure,
        content:"A state of art landing page for a groshure delivery app",
        mobileImg: gmobile,
        url: "https://www.figma.com/file/2gavLGb1lPAxI9G7nEVwG5/Odebiyi-Ridwan-Figma-Portfolio?node-id=28%3A90235" 
    },
    { 
        id:4,
        title: "Dreams & Degrees",
        image: dreams,
        content: "A digital empowerment initiatives for females",
        mobileImg: dreamsmobile,
        url: "https://www.figma.com/file/2gavLGb1lPAxI9G7nEVwG5/Odebiyi-Ridwan-Figma-Portfolio?node-id=29%3A100933" 
    },
]