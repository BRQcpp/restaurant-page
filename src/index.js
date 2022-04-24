import { mainPage } from "./main-page.js";
import { menuPage } from "./menu-page";
import { contactPage } from "./contact-page.js";

mainPage();

document.querySelector('#main').addEventListener('click', () => { clearContent(); mainPage() })
document.querySelector('#menu').addEventListener('click', () => { clearContent(); menuPage() })
document.querySelector('#contact').addEventListener('click', () => { clearContent(); contactPage() })

function clearContent() 
{
    let mainContent = document.querySelector('.main-content');
    let footer = document.querySelector('.footer');
    mainContent.innerHTML = '';
    footer.innerHTML = '';
}