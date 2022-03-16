<template>
 <div>
    <Waiting-Room />
 </div>
</template>

<script>
import WaitingRoom from './components/WaitingRoom.vue'

export default {
  components: { WaitingRoom },

}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
html {
    width: 100%;
    height: 100%;
    background-color: #f7f4f2;
}
#app {
    font-family: 'Source Sans 3', 'Segoe UI', Cantarell, sans-serif;
    background-color: #f7f4f2;
}
</style>
