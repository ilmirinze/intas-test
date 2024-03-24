interface questions_list {
    id: number,
    name: string,
    description: string,
    questions: questions[],
}

interface questions {
    question_number: number,
    question: string,
    options: string[],
    correct_option_index: number
    is_long: boolean
}

export const questions_list:questions_list[] = [
    {
        id: 0,
        name: 'test 1',
        description: "0 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        questions: [
            {
                question_number: 1,
                question: "What is the capital of France?",
                options: ["London", "Paris", "Berlin", "Rome", "Madrid"],
                correct_option_index: 1,
                is_long: false
            },
            {
                question_number: 2,
                question: "Which planet is known as the Red Planet?",
                options: ["Mars", "Venus", "Jupiter", "Saturn", "Mercury"],
                correct_option_index: 0,
                is_long: false
            },
            {
                question_number: 3,
                question: "Lorem ipsum",
                options: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit,", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"],
                correct_option_index: 0,
                is_long: true
            },
            {
                question_number: 4,
                question: "Who wrote 'To Kill a Mockingbird'?",
                options: ["J.K. Rowling", "Ernest Hemingway", "Harper Lee", "J.R.R. Tolkien", "George Orwell"],
                correct_option_index: 2,
                is_long: false
            },
            {
                question_number: 5,
                question: "What is the chemical symbol for water?",
                options: ["H2O", "CO2", "NaCl", "O2", "CaCl2"],
                correct_option_index: 0,
                is_long: false
            }
        ]
    },

    {
        id: 1,
        name: 'test 2',
        description: "1 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        questions: [
            {
                question_number: 1,
                question: "Who painted the Mona Lisa?",
                options: ["Pablo Picasso", "Leonardo da Vinci", "Vincent van Gogh", "Michelangelo", "Rembrandt"],
                correct_option_index: 1,
                is_long: false
            },
            {
                question_number: 2,
                question: "What is the largest mammal in the world?",
                options: ["Elephant", "Giraffe", "Blue whale", "Hippopotamus", "Rhinoceros"],
                correct_option_index: 2,
                is_long: false
            },
            {
                question_number: 3,
                question: "Which gas is most abundant in Earth's atmosphere?",
                options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon", "Helium"],
                correct_option_index: 1,
                is_long: false
            },
            {
                question_number: 4,
                question: "Lorem ipsum",
                options: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit,", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"],
                correct_option_index: 0,
                is_long: true
            },
            {
                question_number: 5,
                question: "What is the closest planet to the Sun?",
                options: ["Earth", "Mars", "Venus", "Mercury", "Saturn"],
                correct_option_index: 3,
                is_long: false
            }
        ]
    },

    {
        id: 2,
        name: 'test 3',
        description: "2 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        questions: [
            {
                question_number: 1,
                question: "Lorem ipsum",
                options: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit,", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"],
                correct_option_index: 0,
                is_long: true
            },
            {
                question_number: 2,
                question: "Who is the author of 'The Great Gatsby'?",
                options: ["F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck", "Mark Twain", "Virginia Woolf"],
                correct_option_index: 0,
                is_long: false
            },
            {
                question_number: 3,
                question: "What is the largest planet in our solar system?",
                options: ["Mars", "Venus", "Jupiter", "Saturn", "Neptune"],
                correct_option_index: 2,
                is_long: false
            },
            {
                question_number: 4,
                question: "What is the main ingredient in guacamole?",
                options: ["Tomato", "Avocado", "Onion", "Lime", "Cilantro"],
                correct_option_index: 1,
                is_long: false
            },
            {
                question_number: 5,
                question: "Who discovered penicillin?",
                options: ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Albert Einstein", "Isaac Newton"],
                correct_option_index: 0,
                is_long: false
            }
        ]
    },

    {
        id: 3,
        name: 'test 4',
        description: "3 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        questions: [
            {
                question_number: 1,
                question: "What is the tallest mountain in the world?",
                options: ["K2", "Mount Everest", "Kangchenjunga", "Makalu", "Lhotse"],
                correct_option_index: 1,
                is_long: false
            },
            {
                question_number: 2,
                question: "What is the chemical symbol for oxygen?",
                options: ["O", "O2", "CO2", "H2O", "N2"],
                correct_option_index: 0,
                is_long: false
            },
            {
                question_number: 3,
                question: "Who was the first person to step on the Moon?",
                options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "John Glenn", "Alan Shepard"],
                correct_option_index: 1,
                is_long: false
            },
            {
                question_number: 4,
                question: "What is the capital of Japan?",
                options: ["Beijing", "Seoul", "Tokyo", "Shanghai", "Osaka"],
                correct_option_index: 2,
                is_long: false
            },
            {
                question_number: 5,
                question: "Lorem ipsum",
                options: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit,", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"],
                correct_option_index: 0,
                is_long: true
            },
        ]
    }]