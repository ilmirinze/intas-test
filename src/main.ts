import './style.css'
import { testContent } from './components/testContent/testContent';
import { startscreenText } from './components/startscreen/startscreen';
import { addClassLiActive } from './helpers/addLiActive'
import { result } from './components/result/result';

export function saveData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function getData(key: string) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

export function removeData(key: string) {
    localStorage.removeItem(key);
}

if (!getData('doneArray')) {
    saveData('doneArray', JSON.stringify([false, false, false, false]))
}

const currentLi = getData('activeLi');
const currentPage = getData(`currentPage`);

if (currentPage) {
    let app = document.querySelector<HTMLDivElement>('#app')!;
    app.innerHTML = `<div id='test${currentLi}'></div>`
    const displayCurrentPage = document.querySelector<HTMLDivElement>(`#test${currentLi}`)!;
    if (currentPage === 'testContent') {
        displayCurrentPage.innerHTML = testContent(currentLi);
        addClassLiActive()
    }
    else if (currentPage === 'result') {
        displayCurrentPage.innerHTML = result(currentLi);
        addClassLiActive()
    }
    else {
        displayCurrentPage.innerHTML = startscreenText()

    }
}
else {
    const displayCurrentPage = document.querySelector<HTMLDivElement>('#app')!;
    displayCurrentPage.innerHTML = startscreenText()
}
