import './style.scss';
import { questions_list } from '../../data/data';
import { saveData, getData } from '../../main';
import { testContent } from '../testContent/testContent';

export const result = (testnumber: number) => {
    document.addEventListener('click', (event: MouseEvent) => {
        if ((event.target as HTMLElement).classList.contains('result__button-element')) {
            const openTest = document.querySelector<HTMLDivElement>('#app')!;
            openTest.innerHTML = testContent(testnumber);
            const doneArray = JSON.parse(getData('doneArray'))
            doneArray[testnumber] = false
            saveData('doneArray', JSON.stringify(doneArray))
        }
    });
    
    saveData('currentPage', 'result')
    const getTime = getData(`timer${testnumber}`)

    const formatTime = (remainingTime: number): string => {
        const minutes = Math.floor(remainingTime / 60000);
        const seconds = Math.floor((remainingTime % 60000) / 1000);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };
    let selectedAnswers = JSON.parse(getData(`selectedAnswers${testnumber}`))
    let selectedAnswersCount = 0
    for (let i = 0; i < selectedAnswers.length; i++) {
        if (selectedAnswers[i] !== null)
            selectedAnswersCount++
    }

    const formattedTime = formatTime(getTime);

    return `
    <div class="result">
        <div>
            <div class="result__header">
                <div class="result__header-exit">Выход</div>
                <div class="result__header-text">${questions_list[testnumber].name}</div>
                <div class="result__header-info">
                    <div class="result__header-info-reset"> Сбросить все ответы </div>
                    <div class="result__header-info-answers">${selectedAnswersCount}/${questions_list[testnumber].questions.length}</div>
                    <div class="result__header-info-timer">${formattedTime}</div>
                </div>
            </div>
            <div class="result__content">
                <div class="result__content-header">
                    <div class="result__content-header-end">Тест завершён</div>
                    <div class="result__content-header-count">Вы ответили на ${selectedAnswersCount} из ${questions_list[testnumber].questions.length} вопросов.</div>
                </div>
                <div class="result__content-answers">
                    <div class="result__content-answers-header">Ваши ответы</div>
                    <div class="result__content-answers-info">
                        ${questions_list[testnumber].questions.map((question, index) => `
                            <div class="result__content-answers-info-element">
                                <div class="result__content-answers-info-element-question">${question.question_number}. ${question.question}</div>
                                <div class="result__content-answers-info-element-your">Ваш ответ: ${selectedAnswers[index] !== null ? question.options[selectedAnswers[index]] : `Не ответили`}</div>
                                <div class="result__content-answers-info-element-right">Правильный ответ: ${question.options[question.correct_option_index]}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
        <div class="result__button">
            <button class = "result__button-element"> Пройти еще раз </button>
        </div>
    </div>`;
};
