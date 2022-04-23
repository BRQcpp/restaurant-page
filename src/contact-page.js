export function contactPage() 
{
    let content = document.querySelector('.content');
    content.innerHTML = '';

    let header = document.createElement('div');
    header.classList.add('header');
    header.innerText = 'Restaurant contact';

    let mainContent = document.createElement('div');
    mainContent.classList.add('main-content');

    let contact = document.createElement('div');
    contact.classList.add('contact');
    contact.innerText = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum sed nisi eget mattis. In viverra, arcu at tempor malesuada, arcu sem tincidunt turpis, vel dignissimturpis lectus ornare turpis. Pellentesque condimentum, tellus vitae consectetur vestibulum, magna mi scelerisque';

    mainContent.appendChild(contact);
    content.appendChild(header);
    content.appendChild(mainContent);

    let body = document.querySelector('body');
    body.appendChild(content);
}


