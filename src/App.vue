<template>
   <div>
      <WaitingRoom />
   </div>
</template>

<script>
//import WelcomeRoom from "./components/WelcomeRoom.vue";
// import StartingRoom from "./components/StartingRoom.vue";
import WaitingRoom from "./components/WaitingRoom.vue";
// StartingRoom, WaitingRoom,

export default {
   components: { WaitingRoom },
   data() {
      return {
         allPlayer: [],
      };
   },
   methods: {},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap");
html {
   width: 100%;
   height: 100%;
   background-color: #f7f4f2;
}
#app {
   font-family: "Source Sans 3", "Segoe UI", Cantarell, sans-serif;
   background-color: #f7f4f2;
}
</style>
