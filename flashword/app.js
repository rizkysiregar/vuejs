const FlashWord = {
    data() {
        return {
            wordA: 'hola',
            wordB: 'hello',
            answer: '',
            correct: null,
            showFeedback: false,
            image: null,
            imageAlt: null,
            hasError: false,

        // Array example
        spanishWords: ['hola', 'adios', 'uno', 'dos'],

        // Object example
        word: { a: 'hola', b: 'hello' },

        // Array of objects example
        words: [
            { wordA: 'hola', wordB: 'hello' },
            { wordA: 'adios', wordB: 'goodbye' },
            { wordA: 'uno', wordB: 'one' },
            { wordA: 'dos', wordB: 'two' },
        ],
        }
    },
    methods: {
        checkAnswer() {
            if(this.answer == '') {
                this.hasError = true;
                return;
            }

            this.hasError = false;
            this.correct = this.wordB == this.answer;
            if(this.correct) {
                this.image = "correct";
                this.imageAlt = "Green check mark";
            } else {
                this.image = "incorrect";
                this.imageAlt = "Red X";
            }
            this.showFeedback = true;
        },
        resetAnswer() {
            this.showFeedback = false;
            this.answer = '';
        }
    }
}

// create vue instance
const app = Vue.createApp(FlashWord).mount('#app');


