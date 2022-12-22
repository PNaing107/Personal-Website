// const button = document.querySelector('.button-34');
// const modalContainer = document.querySelector('#modal-container');
// const body=document.querySelector('body');

// button.addEventListener('click', () => {
//     modalContainer.removeAttribute('class');
//     modalContainer.classList.add('four');
//     body.classList.add('modal-active');
// })

// modalContainer.addEventListener('click', () => {
//     modalContainer.classList.add('out');
//     body.classList.remove('modal-active');
// })

// Bootcamp Braindump Post Renderer
const posts = [
    {
        id: '01',
        title: 'HTML and CSS',
        link: './week1.html'
    },
    {
        id: '02',
        title: 'Building a Portfolio Website',
        link: './week1.html'
    },
    {
        id: '03',
        title: 'Introduction to Programming',
        link: './week1.html'
    },
    {
        id: '04',
        title: 'Programming Best Practices',
        link: './week1.html'
    },
    {
        id: '05',
        title: 'Building a Collection App',
        link: './week1.html'
    },
    {
        id: '06',
        title: 'Introduction to Javascript',
        link: './week1.html'
    },
    {
        id: '07',
        title: 'Building a Game with Javascript',
        link: './week1.html'
    },
    {
        id: '08',
        title: 'Frontend Tools',
        link: './week1.html'
    },
    {
        id: '09',
        title: 'Building a Frontend with React & Bootstrap',
        link: './week1.html'
    },
    {
        id: '10',
        title: 'Advanced Programming Principles',
        link: './week1.html'
    },
    {
        id: '11',
        title: 'Building a Backend with PHP',
        link: './week1.html'
    },
    {
        id: '12',
        title: 'MVC & PHP Frameworks',
        link: './week1.html'
    },
    {
        id: '13',
        title: 'Working with Legacy Code & Green Software Development',
        link: './week1.html'
    },
    {
        id: '14',
        title: 'Node.js',
        link: './week1.html'
    },
    {
        id: '15',
        title: 'Levelling Up React',
        link: './week1.html'
    },
    {
        id: '16',
        title: 'Showcase Project',
        link: './week1.html'
    }
];

const select = document.querySelector('select');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const link = document.querySelector('a');

select.addEventListener('change', (ev) => {
    let week = ev.target.value;
    h3.innerText = posts[week - 1]['id'];
    h2.innerText = posts[week - 1]['title'];
    link.setAttribute('href', posts[week - 1]['link']);
});
