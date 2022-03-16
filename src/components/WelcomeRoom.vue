<template>
    <div id="welcome-room">
     <div id="welcome-text">
         <h2>Ai hiểu bạn nhất ?</h2>
         <span>Developed by <a href="https://www.facebook.com/Loserr.F" target="_blank" rel="noopener noreferrer">Fu</a> ☃️</span>
     </div>
     <div id="create-or-join">
        <button class="btn">Tạo phòng</button>
        <button class="btn">Tham gia với mã mời</button>
     </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">
#welcome-room {
   margin-top: 200px;
   #welcome-text {
      text-align: center;
      h2 {
         font-weight: bold;
      }
   }
   #create-or-join {
      display: flex;
      align-items: center;
      justify-content: center;
      .btn {
         margin : 100px 15px 15px 15px;
         background-color: #a09795;
         color: white;
         font-weight: bold;
      }
      .btn:hover {
         background-color: #cec6c4;
      }
   }
}
</style>