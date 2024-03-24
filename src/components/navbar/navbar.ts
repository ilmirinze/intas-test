import './style.scss';
import { questions_list } from "../../data/data";

document.addEventListener("DOMContentLoaded", function () {
    const appElement = document.querySelector<HTMLDivElement>('#navbar')!;
    const navbar = document.createElement('div');
    navbar.classList.add('navbar');
    navbar.innerHTML = `
    <div class="navbar__header">
      <div class="navbar__header-hamburger">&#9776</div>
      <div class="navbar__header-arrow"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.04754 13.0623L7.35387 13.774C7.06015 14.0753 6.5852 14.0753 6.29461 13.774L0.220288 7.545C-0.0734293 7.24365 -0.0734293 6.75636 0.220288 6.45821L6.29461 0.226013C6.58833 -0.0753378 7.06327 -0.0753378 7.35387 0.226013L8.04754 0.937715C8.34438 1.24227 8.33813 1.73918 8.03504 2.03733L4.26984 5.71766H13.2501C13.6657 5.71766 14 6.06068 14 6.48706V7.51294C14 7.93932 13.6657 8.28235 13.2501 8.28235H4.26984L8.03504 11.9627C8.34126 12.2608 8.34751 12.7577 8.04754 13.0623Z" fill="#8EACBB"/>
      </svg>
      </div>
      <div class="navbar__header-title">ТЕСТЫ</div>
    </div>
    <ul class="navbar__menu">
    </ul>
  `;

    const headerMenu = navbar.querySelector('.navbar__menu') as HTMLDivElement;
    for (let i = 0; i < questions_list.length; i++) {
        let li = document.createElement('li')
        li.textContent = questions_list[i].name
        headerMenu.appendChild(li)
    }

    const arrow = navbar.querySelector('.navbar__header-arrow') as HTMLDivElement;
    arrow.addEventListener('click', function () {
        navbar.classList.remove('active');
    });

    const hamburger = navbar.querySelector('.navbar__header-hamburger') as HTMLDivElement;
    hamburger.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });

    appElement.appendChild(navbar);
});