const FlashWord = {
    data() {
        return {
            wordA: 'hola',
            wordB: 'hello',
            answer: '',
            correct: null,
            showFeedback: false,
            showReset: false,
        }
    },
    methods: {
        checkAnswer() {
            this.correct = this.wordB == this.answer;
            this.showFeedback = true;
            this.showReset = true;
        },
        resetAnswer() {
            this.showFeedback = false;
            this.answer = '';
            this.showReset = false;
        }
    }
}

// create vue instance
const app = Vue.createApp(FlashWord).mount('#app');


