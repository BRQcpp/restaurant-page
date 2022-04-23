import { mainPage } from "./main-page.js";
import { menuPage } from "./menu-page";
import { contactPage } from "./contact-page.js";

mainPage();

document.querySelector('#main').addEventListener('click', () => { mainPage() })
document.querySelector('#menu').addEventListener('click', () => { menuPage() })
document.querySelector('#contact').addEventListener('click', () => { contactPage() })