<template>
<section id="waiting-room">
 <div class="container-fluid">
   <div class="row">
     <div id="list-player" class="col-12 col-md-5 mt-5 text-center justify-content-between align-items-center">
       <h3>Người chơi</h3>
       <div class="d-flex justify-content-center mt-4 player">
         <div class="player-avater">
           <img src="../assets/delivery-boy.png" class="mr-5" alt="avatar">
         </div>
          <div class="player-name">
            <h5>Kiira</h5>
            <p>Chủ phòng</p>
          </div>
       </div>
     </div>
     <div class="col-12 col-md-7 mt-5 text-center justify-content-between align-items-center">
       <div class="setting">
         <h3>Cai dat</h3>
         <div id="setting-option">
           <form>
             <div class="form-group">
               <label class="mr-4" for="max-people">Số lượng : </label>
               <select name="" id="max-people" class="">
                 <option value="5">5</option>
                 <option selected value="10">10</option>
                 <option value="15">15</option>
                 <option value="20">20</option>
               </select>
             </div>
             <div class="form-group">
               <label class="mr-4" for="game-mode">Chế độ : </label>
               <select name="" id="game-mode">
                 <option value="normal-mode">Cổ điển</option>
                 <option value="spacial-mode">Đặc biệt</option>
               </select>
             </div>
           </form>
         </div>
       </div>
     </div>
   </div>
 </div>
</section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
select {
  border-radius: 5px;
  width: 10%;
  text-align: center;
}
</style>