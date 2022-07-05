<template>
   <div id="welcome-room">
      <div id="welcome-text">
         <h2>Nối từ online</h2>
         <span
            >Developed by
            <a href="https://www.facebook.com/tlos3r" target="_blank" rel="link to facebook">Fu</a>
            ☃️</span
         >
      </div>
      <form action="">
         <div id="create-or-join">
            <button class="btn">Tạo phòng</button>
            <button class="btn">Tham gia với mã mời</button>
         </div>
      </form>
   </div>
</template>

<script>
export default {
   data() {
      return {};
   },
};
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
         margin: 100px 15px 15px 15px;
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
