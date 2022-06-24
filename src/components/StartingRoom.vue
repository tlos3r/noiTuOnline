<template>
  <input type="text" placeholder="Answer here" v-model="answer" />
  <button @click="checkWordsCorrect()">Submit</button>
  <p>Từ đã nối trước đó : {{ answerPrev }}</p>
  <p ref="result"></p>
</template>

<script>
import dictionaryData from 'raw-loader!../assets/words.txt';
export default {
  data() {
    return {
      answer: '',
      answerPrev: '',
    };
  },
  methods: {
    checkWordsCorrect() {
      const checkWord = dictionaryData;
      var listAnswer = [' ', '  ', '   '];
      if (checkWord.includes(this.answer)) {
        this.$refs.result.innerText = 'chuc mung tu nay co trong tu dien';
        this.answerPrev = this.answer;
        for (let i = 0; i < listAnswer.length ; i++) {
          if (this.answerPrev != listAnswer[i]) {
            listAnswer.push(this.answer);
            console.log(listAnswer);
          } else this.$refs.result.innerText = "Tu nay da duoc noi roi"
        }
      } else {
        this.$refs.result.innerText = 'Lam deo co tu nay ?';
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
