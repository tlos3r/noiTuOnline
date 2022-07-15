<template>
   <section id="waiting-room">
      <div class="container-fluid">
         <div class="row">
            <div id="list-player" class="col-12 mt-5 text-center justify-content-between align-items-center">
               <p class="font-weight-bold">Đây là mã phòng để mời người khác tham gia cùng mình :{{ gameId }}</p>
               <h3>Người chơi</h3>
               <div class="mt-4 player">
                  <div class="player-list"></div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script>
export default {
   props: ["gameId", "user"],
   data() {
      return {
         playerName: "",
      };
   },
   methods: {},
};
</script>

<style lang="scss"></style>
