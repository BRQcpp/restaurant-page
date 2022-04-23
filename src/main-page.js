export function mainPage() 
{
    let content = document.querySelector('.content');
    content.innerHTML = '';

    let header = document.createElement('div');
    header.classList.add('header');
    header.innerText = 'Restaurant Page';

    let mainContent = document.createElement('div');
    mainContent.classList.add('main-content');

    let photo = document.createElement('div');
    photo.classList.add('photo');

    let photoImg = document.createElement('img'); 
    photoImg.setAttribute('src', '../graphics/restaurant.jpg');
    photoImg.setAttribute('alt', 'image of restaurant');

    let description = document.createElement('div');
    description.classList.add('description');
    description.innerText = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum sed nisi eget mattis. In viverra, arcu at tempor malesuada, arcu sem tincidunt turpis, vel dignissimturpis lectus ornare turpis. Pellentesque condimentum, tellus vitae consectetur vestibulum, magna mi scelerisque';

    photo.appendChild(photoImg);
    mainContent.appendChild(photo);
    mainContent.appendChild(description);
    content.appendChild(header);
    content.appendChild(mainContent);
}


