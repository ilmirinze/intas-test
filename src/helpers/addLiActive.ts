import { getData } from '../main';
import { waitForElm } from './awaitElement';

export const addClassLiActive = () => {
    waitForElm(".navbar__menu").then((elm: any) => {
        elm.children[getData('activeLi')].classList.add('navbar__menu-active');
        let active = document.querySelector('.navbar') as HTMLDivElement;
        active.classList.toggle('active');
    })
}