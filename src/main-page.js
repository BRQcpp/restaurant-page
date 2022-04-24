import { text } from 'body-parser';
import restaurantPhoto from './graphics/restaurant.jpg';
import './style-main.css';

export function mainPage() 
{
    let mainContent = document.querySelector('.main-content');
    let imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    let mainImg = new Image();
    mainImg.src = restaurantPhoto;
    mainImg.classList.add('main-image');
    mainImg.setAttribute('alt', 'photo of a restaurant');

    imgContainer.append(mainImg);

    let description = document.createElement('div');
    description.classList.add('description');

    let textHeading = document.createElement('div');
    textHeading.classList.add('text-heading');
    textHeading.textContent = 'About us'

    let descriptionContent = document.createElement('div');
    descriptionContent.classList.add('description-content');
    descriptionContent.textContent = 'Aenean ac nisi rhoncus, accumsan quam a, suscipit odio. Phasellus tincidunt in velit ac finibus. Sed eu elit in felis tristique posuere nec a tellus. Quisque dignissim ipsum in lectus scelerisque, vitae interdum eros eleifend. Integer sollicitudin sem a nisl tempus, at elementum nunc pretium. Mauris eu libero tincidunt, aliquam felis et, ultrices est. Nulla vel sem eget lectus aliquam vehicula non sit amet metus. Suspendisse potenti. Donec mattis eros vitae ultricies luctus. Donec eget massa sit amet augue volutpat consectetur vel id dui. Maecenas sollicitudin gravida libero sed iaculis. Morbi id malesuada urna, eget pulvinar nisi. Maecenas aliquet est in mauris mattis, sed luctus metus dapibus. Donec euismod felis in auctor cursus. Donec tincidunt sagittis mi sit amet lacinia.';

    description.appendChild(textHeading);
    description.appendChild(descriptionContent);

    mainContent.appendChild(imgContainer);
    mainContent.appendChild(description);

    let attribute = document.createElement('div');
    attribute.classList.add('attribute');
    let attributeA = document.createElement('a');
    attributeA.setAttribute('href', 'https://www.freepik.com/photos/restaurant-interior');
    attributeA.textContent = 'Restaurant interior photo created by wirestock - www.freepik.com';

    let footer = document.querySelector('.footer');
    attribute.appendChild(attributeA);
    footer.appendChild(attribute);
}
