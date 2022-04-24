import mealPhoto from './graphics/meal.png';
import mealPhoto2 from './graphics/meal2.png';
import './style-menu.css';

export function menuPage() 
{
    let mainContent = document.querySelector('.main-content');

    let dishMenu = document.createElement('div');
    dishMenu.classList.add('dish-menu');

    let dishMenuPos = document.createElement('div');
    dishMenuPos.classList.add('dish-menu-pos');

    let dmpTextContent = document.createElement('div');
    dmpTextContent.classList.add('d-m-pos-text-content');

    let textHeading = document.createElement('div');
    textHeading.classList.add('text-heading');
    textHeading.textContent = 'Position 1';

    let textDescription = document.createElement('div');
    textDescription.classList.add('text-description');
    textDescription.textContent = 'Aenean ac nisi rhoncus, accumsan quam a, suscipit odio. Phasellus tincidunt in velit ac finibus. Integer sollicitudin sem a nisl tempus, at elementum nunc pretium. Mauris eu libero tincidunt, aliquam felis et, ultrices est. Nulla vel sem eget lectus aliquam vehicula non sit amet metus. Suspendisse potenti. Donec mattis eros vitae ultricies luctus. Donec eget massa sit amet augue volutpat consectetur vel id dui. Maecenas sollicitudin gravida libero sed iaculis. Morbi id malesuada urna, eget pulvinar nisi. Maecenas aliquet est in mauris mattis, sed luctus metus dapibus. Donec euismod felis in auctor cursus. Donec tincidunt sagittis mi sit amet lacinia.';

    let dmpImgContainer = document.createElement('div');
    dmpImgContainer.classList.add('d-m-pos-img-container');

    let dmpImg = new Image();
    dmpImg.src = mealPhoto;
    dmpImg.classList.add('d-m-pos-img');
    dmpImg.setAttribute('alt', 'image of a dish');

    dmpTextContent.appendChild(textHeading);
    dmpTextContent.appendChild(textDescription);
    dmpImgContainer.appendChild(dmpImg);
    dishMenuPos.appendChild(dmpTextContent);
    dishMenuPos.appendChild(dmpImgContainer);

    let dishMenuPos2 = dishMenuPos.cloneNode(true);
    dishMenuPos2.querySelector('.text-heading').textContent = 'Position 2';
    dishMenuPos2.querySelector('.d-m-pos-img').src = mealPhoto2;

    dishMenu.appendChild(dishMenuPos);
    dishMenu.appendChild(dishMenuPos2);


    let footer = document.querySelector('.footer');

    let attribute = document.createElement('div');
    attribute.classList.add('attribute');
    let attributeA = document.createElement('a');
    attributeA.setAttribute('href', 'https://www.freepik.com/photos/chicken-steak');
    attributeA.textContent = 'Chicken steak photo created by timolina - www.freepik.com';
    attribute.appendChild(attributeA);
    footer.appendChild(attribute);

    let attribute2 = attribute.cloneNode(true);
    attribute2.querySelector('a').setAttribute('href', 'https://www.freepik.com/photos/penne-pasta');
    attribute2.querySelector('a').textContent = 'Penne pasta photo created by timolina - www.freepik.com';

    footer.appendChild(attribute);
    footer.appendChild(attribute2);

    mainContent.appendChild(dishMenu);
}
