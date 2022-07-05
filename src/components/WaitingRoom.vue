<template>
   <section id="waiting-room">
      <div class="container-fluid">
         <div class="row">
            <div id="list-player" class="col-12 mt-5 text-center justify-content-between align-items-center">
               <h3>Người chơi</h3>
               <div class="mt-4 player">
                  <div class="player-name">
                     {{ playerName }}
                     <input type="text" v-model="playerName" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script>
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
export default {
   data() {
      return {
         playerName: "",
      };
   },
   methods: {},
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

<style lang="scss"></style>
