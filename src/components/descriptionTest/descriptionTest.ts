import './style.scss';
import { questions_list } from "../../data/data";
import { waitForElm } from '../../helpers/awaitElement';
import { startscreenText } from '../startscreen/startscreen';
import { testContent } from '../testContent/testContent';
import { getData, removeData, saveData } from '../../main';
import { removeClassLiActive } from '../../helpers/removeLiBg';
import { result } from '../result/result';

waitForElm(".navbar__menu").then((elm: any) => {
    let testnumber = 0
    for (let i = 0; i < elm.children.length; i++) {
        elm.children[i].addEventListener('click', function () {
            if (!elm.children[i].className.includes('navbar__menu-active')) {
                removeClassLiActive()
                testnumber = i
                let description = document.querySelector<HTMLDivElement>('#app')!;
                const checkDone = JSON.parse(getData('doneArray'))
                elm.children[i].classList.add('navbar__menu-active');
                saveData('activeLi', i.toString())
                if (checkDone[i] === true) {
                    description.innerHTML = result(testnumber)
                }
                else {
                    removeData('currentPage')
                    description.innerHTML = `
                    <div class = "description">` + `
                        <div class="description__header">
                            <div class="description__header-text">Описание</div>
                        </div>
                        ` + `<div class = "description-text">` + questions_list[i].description + `</div> 
                        <div class="description__buttons"> 
                            <button class="description__buttons-start">Начать</button>
                            <button class="description__buttons-cancel">Отмена</button>
                        </div> 
                    </div>`
                    const startButton = document.querySelector<HTMLDivElement>('.description__buttons-start')!;
                    startButton.addEventListener('click', function () {
                        const description = document.querySelector<HTMLDivElement>('#app')!;
                        description.innerHTML = testContent(testnumber)
                        saveData(testnumber.toString(), true)
                    })
                    const cancelButton = document.querySelector<HTMLDivElement>('.description__buttons-cancel')!;
                    cancelButton.addEventListener('click', function () {
                        removeClassLiActive()
                        const description = document.querySelector<HTMLDivElement>('#app')!;
                        description.innerHTML = startscreenText()
                    })
                }
            }
        })
    }
});