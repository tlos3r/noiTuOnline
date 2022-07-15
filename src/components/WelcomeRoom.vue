<template>
   <div id="welcome-room">
      <div id="welcome-text">
         <h2>Nối từ online</h2>
         <button @click="showgameID"></button>
         <span
            >Developed by
            <a href="https://www.facebook.com/tlos3r" target="_blank" rel="link to facebook">Fu</a>
            ☃️</span
         >
      </div>
      <div id="create-or-join">
         <button class="btn" @click="gameId = Math.random().toString(36).slice(2, 7)">Tạo phòng</button>
         <button class="btn" @click="invitedCode = !invitedCode">Tham gia với mã mời</button>
         <div v-show="invitedCode">
            <input type="text" />
            <button class="btn" @click="$emit('join-game', gameId)">Tham gia</button>
         </div>
      </div>
   </div>
</template>
<script>
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
export default {
   data() {
      return {
         gameId: "",
         invitedCode: false,
      };
   },
   methods: {
      showgameID() {
         console.log(this.gameId);
      },
   },
   // vue hook để lấy người đã vào website
   mounted() {
      const fullName = [
         "Gia Linh",
         "Thanh Mai",
         "Trúc",
         "Ngọc",
         "Thành",
         "Phong",
         "Thu",
         "Tiến",
         "Trường",
         "Quân",
         "Tùng",
      ];
      const name = fullName[Math.floor(Math.random() * fullName.length)];
      const auth = getAuth();
      signInAnonymously(auth)
         .then(() => {
            // you're log in
         })
         .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
         });
      onAuthStateChanged(auth, (user) => {
         if (user) {
            const playerId = user.uid;
            const db = getDatabase();
            set(ref(db, `players/${playerId}`), {
               id: playerId,
               name,
            });
         } else {
            // User is signed out
            // ...
         }
      });
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
      margin-top: 100px;
      .btn {
         background-color: #a09795;
         color: white;
         font-weight: bold;
         margin: 0px 15px;
      }
      .btn:hover {
         background-color: #cec6c4;
      }
   }
}
</style>
