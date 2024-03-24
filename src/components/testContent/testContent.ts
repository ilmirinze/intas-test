import './style.scss';
import { questions_list } from '../../data/data';
import { result } from '../result/result';
import { saveData, getData } from '../../main';

export const testContent = (testnumber: number): string => {
    let selectedAnswers: number[] | null[] = [null, null, null, null, null];
    let timerInterval: number;
    let startTime: number;
    const duration = 5 * 60 * 1000;
    saveData('currentPage', 'testContent')
    const resetAnswers = (): void => {
        questions_list[testnumber].questions.forEach(question => {
            document.querySelectorAll<HTMLInputElement>(`input[name="question${question.question_number}"]`).forEach(input => {
                input.checked = false;
            });
        });
        updateAnswerCount();
    };

    const updateAnswerCount = (): void => {
        const selectedCount = getSelectedCount();
        const totalQuestions = questions_list[testnumber].questions.length;
        const answerCountElement = document.querySelector('.testContent__header-info-answers');
        if (answerCountElement) {
            answerCountElement.textContent = `${selectedCount}/${totalQuestions}`;
        }
    };

    const getSelectedCount = (): number => {
        let count = 0;
        questions_list[testnumber].questions.forEach(question => {
            const inputs = document.querySelectorAll<HTMLInputElement>(`input[name="question${question.question_number}"]:checked`);
            count += inputs.length;
        });
        return count;
    };


    const handleTimeUp = (): void => {
        clearInterval(timerInterval)
        saveData(`timer${testnumber}`, 0);
        saveData(`selectedAnswers${testnumber}`, JSON.stringify(selectedAnswers))
        const openResult = document.querySelector<HTMLDivElement>(`#test${testnumber}`)!;
        openResult.innerHTML = result(testnumber);
    };
    const test = document.querySelector<HTMLDivElement>(`#test${testnumber}`)!;

    const startTimer = (): void => {
        
        startTime = Date.now();
        timerInterval = setInterval(() => {
            const elapsedTime = Date.now() - startTime;
            const remainingTime = duration - elapsedTime;

            if (remainingTime <= 0) {
                clearInterval(timerInterval);
                handleTimeUp();
            } else {
                const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
                const timerElement = test.querySelector('.testContent__header-info-timer');
                if (timerElement) {
                    timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
                }
            }

        }, 500);
    };



    test.addEventListener('click', (event: MouseEvent) => {
        if ((event.target as HTMLElement).classList.contains('testContent__header-info-reset')) {
            resetAnswers();
            selectedAnswers = [null, null, null, null, null];
        }
    });

    test.addEventListener('change', (event: Event) => {
        const target = event.target as HTMLInputElement;
        if (target.type === 'radio') {
            updateAnswerCount();
        }
    });

    test.addEventListener('click', (event: MouseEvent) => {
        if ((event.target as HTMLElement).classList.contains('testContent__header-info-reset')) {
            resetAnswers();
        }
    });

    test.addEventListener('click', (event: MouseEvent) => {
        if ((event.target as HTMLElement).classList.contains('testContent__header-exit')) {
            const modal = document.querySelector<HTMLDivElement>('.modal')!;
            modal.style.display = 'block'
        }
    });

    test.addEventListener('click', (event: MouseEvent) => {
        if ((event.target as HTMLElement).classList.contains('testContent__button-element')) {
            const remainingTime = getRemainingTime();
            saveData(`timer${testnumber}`, remainingTime);
            saveData(`selectedAnswers${testnumber}`, JSON.stringify(selectedAnswers))
            const openResult = document.querySelector<HTMLDivElement>(`#test${testnumber}`)!;
            openResult.innerHTML = result(testnumber);
            const doneArray = JSON.parse(getData('doneArray'))
            doneArray[testnumber] = true
            clearInterval(timerInterval)
            saveData('doneArray', JSON.stringify(doneArray))
        }
    });

    test.addEventListener('change', (event: Event) => {
        const target = event.target as HTMLInputElement;
        if (target && target.type === 'radio') {
            const nameAttribute = target.getAttribute('name');
            if (nameAttribute) {
                const questionNumber = parseInt(nameAttribute.replace('question', ''));
                const selectedOptionIndex = parseInt(target.value);
                selectedAnswers[questionNumber - 1] = selectedOptionIndex;
            }
        }
    });

    const getRemainingTime = (): number => {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = duration - elapsedTime;
        return remainingTime;
    };

    startTimer();

    return `
    <div class="testContent">
        <div>
            <div class="testContent__header">
                <div class="testContent__header-exit">Выход</div>
                <div class="testContent__header-text">${questions_list[testnumber].name}</div>
                <div class="testContent__header-info">
                    <div class="testContent__header-info-reset"> Сбросить все ответы </div>
                    <div class="testContent__header-info-answers">${getSelectedCount()}/${questions_list[testnumber].questions.length}</div>
                    <div class="testContent__header-info-timer"></div>
                </div>
            </div>
            <div class="testContent__content">
                ${questions_list[testnumber].questions.map((question, index) => `
                    <div class="testContent__content-question">
                        <div class="testContent__content-question-text">${question.question_number}. ${question.question}</div>
                        <div class="testContent__content-question-options">
                            <div class="${questions_list[testnumber].questions[index].is_long ? 'testContent__content-question-options-long' : 'testContent__content-question-options-short'}">
                            ${question.options.map((option, index) => `
                                <div>
                                    <label>
                                        <input type="radio" name="question${question.question_number}" value="${index}">
                                        ${option}
                                    </label>
                                </div>
                            `).join('')}
                            </div>
                        </div>  
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="testContent__button">
            <button class = "testContent__button-element"> Завершить </button>
        </div>
    </div>`;
};
