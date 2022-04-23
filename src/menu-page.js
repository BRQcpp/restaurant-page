export function menuPage() 
{
    let content = document.querySelector('.content');
    content.innerHTML = '';

    let header = document.createElement('div');
    header.classList.add('header');
    header.innerText = 'Restaurant Menu';

    let mainContent = document.createElement('div');
    mainContent.classList.add('main-content');

    let menuPos = document.createElement('div');
    menuPos.classList.add('menu-pos');

    let menuPos2 = document.createElement('div');
    menuPos2.classList.add('menu-pos');

    let photo = document.createElement('div');
    photo.classList.add('photo');

    let photoImg = document.createElement('img'); 
    photoImg.setAttribute('src', '../graphics/food1.jpg');
    photoImg.setAttribute('alt', 'image of restaurant');

    let description = document.createElement('div');
    description.classList.add('description');
    description.innerText = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum sed nisi eget mattis. In viverra, arcu at tempor malesuada, arcu sem tincidunt turpis, vel dignissimturpis lectus ornare turpis. Pellentesque condimentum, tellus vitae consectetur vestibulum, magna mi scelerisque';
   
    let photo2 = document.createElement('div');
    photo2.classList.add('photo');

    let photoImg2 = document.createElement('img'); 
    photoImg2.setAttribute('src', '../graphics/food2.jpg');
    photoImg2.setAttribute('alt', 'image of restaurant');

    photo.appendChild(photoImg);
    menuPos.appendChild(photo);
    menuPos.appendChild(description);
    mainContent.appendChild(menuPos);
    photo2.appendChild(photoImg2);
    menuPos2.appendChild(photo2);
    menuPos2.appendChild(description);
    mainContent.appendChild(menuPos);
    mainContent.appendChild(menuPos2);
    content.appendChild(header);
    content.appendChild(mainContent);

    let body = document.querySelector('body');
    body.appendChild(content);
}