import locationImage from './graphics/location.png';
import './style-contact.css';

export function contactPage() 
{
    let mainContent = document.querySelector('.main-content');

    let contactSection = document.createElement('div');
    contactSection.classList.add('contact-section');

    let contact1 = document.createElement('div');
    contact1.classList.add('contact');
    contact1.textContent = 'Phone: 123 456 789';

    let contact2 = document.createElement('div');
    contact2.classList.add('contact');
    contact2.textContent = 'Email: fakeemail@fakedomain.com';

    let contact3 = document.createElement('div');
    contact3.classList.add('contact');
    contact3.textContent = 'Address: Real City, Real Street 94b';

    let location = document.createElement('div');
    location.classList.add('location');

    let textHeading = document.createElement('div');
    textHeading.classList.add('text-heading');
    textHeading.textContent = 'Our location';

    let imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    let locationImg = new Image();
    locationImg.src = locationImage;
    locationImg.setAttribute('alt', 'Image of location of the restaurant');
    locationImg.classList.add('location-img');

    contactSection.appendChild(contact1);
    contactSection.appendChild(contact2);
    contactSection.appendChild(contact3);

    imgContainer.appendChild(locationImg);

    location.appendChild(textHeading);
    location.appendChild(imgContainer);

    mainContent.appendChild(contactSection);
    mainContent.appendChild(location);
}


