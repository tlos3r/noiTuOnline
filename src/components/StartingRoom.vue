<template>
   <input type="text" placeholder="Answer here" v-model="answer" />
   <button @click="submitWord()">Submit</button>
   <p>Từ đã nối trước đó : {{ answerPrev }}</p>
   <p ref="result"></p>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import dictionaryData from "raw-loader!../assets/words.txt";
export default {
   data() {
      return {
         answer: "",
         answerPrev: "",
         listAnswer: [],
         showBtnImportWord: false,
      };
   },
   methods: {
      checkingWord(answer) {
         for (let playerAnswer of this.listAnswer) {
            if (answer == playerAnswer) {
               return 1;
            }
         }
         return 0;
      },
      linkWord(answer) {
         const prev = this.answerPrev.substring(this.answerPrev.indexOf(" "), this.answerPrev.length).trim();
         const next = answer.substring(0, answer.indexOf(" ")).trim();
         if (!(next === prev)) return 0;
         return 1;
      },
      submitWord() {
         // const checkWord = dictionaryData;
         //if (checkWord.includes(this.answer)) {
         this.$refs.result.innerText = "chuc mung tu nay co trong tu dien";

         if (this.checkingWord(this.answer)) return (this.$refs.result.textContent = "co tu nay roi");
         if (this.linkWord(this.answer)) this.listAnswer.push(this.answer);
         else this.$refs.result.innerText = "khong hop le";
         //} else this.$refs.result.textContent = "Lam deo co tu nay ?";
         this.answerPrev = this.answer;
      },
   },
};
</script>

<style lang="scss" scoped></style>
