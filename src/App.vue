<template>
  <div id="app">
    <v-app-bar color="#143cdb" height="100px" dark>
        <router-link to="/">
            <img src="@/assets/images/logo.svg" style="width: 150px"/>
        </router-link>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <div v-if="user" class="flex items-center">
            <router-link to="/dashboard" class="menu-item ml-6">Home</router-link>
            <router-link to="/group-predictions" class="menu-item ml-6">Predictions</router-link>
            <router-link to="/leaderboard" class="menu-item ml-6">Leaderboard</router-link>
        </div>
        

        <v-spacer></v-spacer>

        <div>
            <div v-if="user" class="flex items-center">
                <p>Hi, {{ user.name }}</p>
                <div class="btn ml-6" style="cursor: pointer; background: #F4D03F; color: #333; width: 100px;" @click="logout()" v-if="isLogged">Logout</div>
            </div>
            <div v-else class="flex items-center">
                <router-link to="/login">Login</router-link>
                <router-link to="/register" class="btn ml-4" style="background: #F4D03F; color: #333" v-if="!isLogged">Register</router-link>
            </div>
        </div>
    </v-app-bar>
    <v-app-bar flat color="#fff">
        <v-spacer></v-spacer>      
      <div
      v-for="team in teams"
      :key="team.id"
      >
        <v-img :src="getImagePath(team.Image)" width="30" style="margin: 10px"></v-img>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main style="height: 100%; background-color: #f5f5f5">
        <router-view/>
    </v-main>
    

    <v-footer class="footer" color="#143cdb">        
        <img src="@/assets/images/footer-image.png"/>
    </v-footer>
  </div>
</template>
<script>
  import { mapState } from "vuex";
  import {mapGetters} from 'vuex';
  export default {
    computed: {
        ...mapGetters([
            'isLogged',
            'user'
        ]),
        ...mapState(["teams", "fixtures"])
    },
    methods: {
        logout() {
            this.$store.dispatch('logout')
        },
        getImagePath(imageName) {
            return require('@/assets/images/' + imageName);
        },
        scoreUsers() {
            this.$store.dispatch('scoreUsers')
        }
    },

    created() {
        this.$store.dispatch('getTeams')
        this.$store.dispatch('getFixtures')
        this.$store.dispatch('getPlayers')
    },

    mounted: function() {
        this.scoreUsers();
    }
  }
</script>

<style lang="scss">
.v-footer{
    padding: 0 !important;
}

.menu-item{
    &:hover{
        color: #F4D03F;
        border-bottom: 1px solid #fff;
    }
}
</style>