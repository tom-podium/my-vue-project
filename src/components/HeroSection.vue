<template>
    <div>
        <v-row>
            <v-col 
            style="background-image: url('https://img.uefa.com/imgml/uefacom/euro2024/rebrand/backgroundLight02L.png');
             background-size: cover;
             background-clip: content-box;
             padding-top: 0"
            >
                <flip-countdown deadline="2024-06-13 00:00:00" style="margin-top: 50px; margin-bottom: 50px"></flip-countdown>
            </v-col>
        </v-row>
        <v-row class="hero-left" style="background: #143cdb; color: #fff; max-height: 500px; margin-top: 0; margin-bottom: 0px">
            <v-col>
                <v-row style="margin-top: 15%">
                    <v-col cols="1"></v-col>
                    <v-col cols="10"><p style="font-size: 3rem">Know your football?</p></v-col>
                    <v-col cols="1"></v-col>
                    <v-col cols="1"></v-col>
                    <v-col cols="10"><p style="font-size: 1.5rem">Join the ultimate EURO 2024 prediction game</p></v-col>
                    <v-col cols="1"></v-col>
                    <v-col cols="1"></v-col>
                    <v-col cols="10">
                        <v-btn color="#F4D03F" x-large>
                            <router-link to="/register" style="color: #333;">Get Started</router-link>
                        </v-btn>
                    </v-col>
                    <v-col cols="1"></v-col>
                </v-row>
            </v-col>
            
            
            <v-col class="hero" md="6" style="padding: 0; overflow: hidden;">
                <img
                src="../assets/images/hero.png"
                gradient="to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.5)"
                height="500px"
                width="100%"
                style="clip-path: polygon(15% 0%, 100% 0, 100% 100%, 0% 100%);"
                />
            </v-col>
        </v-row>        

        <div class="relative overflow-hidden" 
        style="background-image: url('https://img.uefa.com/imgml/uefacom/euro2024/rebrand/backgroundLight02L.png'); 
        background-size: cover;
        padding-top: 50px;
        padding-bottom: 50px
        ">
            <v-container>
                <div class="max-w-screen-xl" style="margin: auto">
                    <div class="my-12" style="background: none">
                        <v-row>
                            <v-col style="text-align: center" cols="6" md="3">
                                <svg xmlns="http://www.w3.org/2000/svg" style="width: 100px; fill: #1a313c" viewBox="0 0 24 24"><title>scoreboard</title><path d="M6 9H8V15H6V9M16 9H18V15H16V9M21 3C22.1 3 23 3.9 23 5V19C23 20.1 22.1 21 21 21H3C1.9 21 1 20.1 1 19V5C1 3.9 1.9 3 3 3H21M5 7C4.4 7 4 7.4 4 8V16C4 16.6 4.4 17 5 17H9C9.6 17 10 16.6 10 16V8C10 7.4 9.6 7 9 7H5M15 7C14.4 7 14 7.4 14 8V16C14 16.6 14.4 17 15 17H19C19.6 17 20 16.6 20 16V8C20 7.4 19.6 7 19 7H15M12 11C12.6 11 13 10.6 13 10C13 9.4 12.6 9 12 9C11.4 9 11 9.4 11 10C11 10.6 11.4 11 12 11M12 15C12.6 15 13 14.6 13 14C13 13.4 12.6 13 12 13C11.4 13 11 13.4 11 14C11 14.6 11.4 15 12 15Z" /></svg>
                                <br/>
                                    <h1 style="color: #1a313c">Predict</h1>
                                    <p style="margin-bottom: 10px; margin-top: 5px"><strong>Predict the outcomes of the Euro 2024 tournament</strong></p>
                                    <small>Predictions including all of the group games and anytime goalscorers as well as some tournament outrights such as the winner and runner-up</small>
                            </v-col>
                            <v-col style="text-align: center" cols="6" md="3">
                                <svg xmlns="http://www.w3.org/2000/svg" style="width: 100px; fill: #1a313c" viewBox="0 0 24 24"><title>counter</title><path d="M4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M4,6V18H11V6H4M20,18V6H18.76C19,6.54 18.95,7.07 18.95,7.13C18.88,7.8 18.41,8.5 18.24,8.75L15.91,11.3L19.23,11.28L19.24,12.5L14.04,12.47L14,11.47C14,11.47 17.05,8.24 17.2,7.95C17.34,7.67 17.91,6 16.5,6C15.27,6.05 15.41,7.3 15.41,7.3L13.87,7.31C13.87,7.31 13.88,6.65 14.25,6H13V18H15.58L15.57,17.14L16.54,17.13C16.54,17.13 17.45,16.97 17.46,16.08C17.5,15.08 16.65,15.08 16.5,15.08C16.37,15.08 15.43,15.13 15.43,15.95H13.91C13.91,15.95 13.95,13.89 16.5,13.89C19.1,13.89 18.96,15.91 18.96,15.91C18.96,15.91 19,17.16 17.85,17.63L18.37,18H20M8.92,16H7.42V10.2L5.62,10.76V9.53L8.76,8.41H8.92V16Z" /></svg>
                                <br/>
                                    <h1 style="color: #1a313c">Score Points</h1>
                                    <p style="margin-bottom: 10px; margin-top: 5px"><strong>Score points for getting predictions correct</strong></p>
                                    <small>Various points will be given throughout the tournament for making correct predictions. Even if the score is incorrect points can still be awarded</small>
                            </v-col>
                            <v-col style="text-align: center" cols="6" md="3">
                                <svg xmlns="http://www.w3.org/2000/svg" style="width: 100px; fill: #1a313c" viewBox="0 0 24 24"><title>clipboard-list</title><path d="M19 3H14.82C14.4 1.84 13.3 1 12 1S9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M7 8H9V12H8V9H7V8M10 17V18H7V17.08L9 15H7V14H9.25C9.66 14 10 14.34 10 14.75C10 14.95 9.92 15.14 9.79 15.27L8.12 17H10M11 4C11 3.45 11.45 3 12 3S13 3.45 13 4 12.55 5 12 5 11 4.55 11 4M17 17H12V15H17V17M17 11H12V9H17V11Z" /></svg>
                                <br/>
                                    <h1 style="color: #1a313c">Compete</h1>
                                    <p style="margin-bottom: 10px; margin-top: 5px"><strong>Compete with others on the leaderboard</strong></p>
                                    <small>Monitor the leaderboard to see where you rank against other competitors in a league table format</small>
                            </v-col>
                            <v-col style="text-align: center" cols="6" md="3">
                                <svg xmlns="http://www.w3.org/2000/svg" style="width: 100px; fill: #1a313c" viewBox="0 0 24 24"><title>trophy</title><path d="M18 2C17.1 2 16 3 16 4H8C8 3 6.9 2 6 2H2V11C2 12 3 13 4 13H6.2C6.6 15 7.9 16.7 11 17V19.08C8 19.54 8 22 8 22H16C16 22 16 19.54 13 19.08V17C16.1 16.7 17.4 15 17.8 13H20C21 13 22 12 22 11V2H18M6 11H4V4H6V11M20 11H18V4H20V11Z" /></svg>
                                <br/>
                                    <h1 style="color: #1a313c">Win Prizes</h1>
                                    <p style="margin-bottom: 10px; margin-top: 5px"><strong>Win prizes based on your position in the leaderboard</strong></p>
                                    <small>Climb the leaderboard throughout the tournament to finish in the top 3 spaces to win a cash prize</small>
                            </v-col>
                        </v-row>
                        <!-- <v-row>
                            <v-col style="text-align: center;">
                                <v-btn color="#F4D03F" x-large style="margin-top: 20px">
                                    <router-link to="/register" style="color: #333;">Play Now</router-link>
                                </v-btn>
                                
                            </v-col>
                        </v-row> -->
                    </div>
                </div>
            </v-container>
            
        </div>
    </div>
    
</template>

<script>
    import FlipCountdown from 'vue2-flip-countdown'

    export default {
        components: {FlipCountdown},
    }
</script>

<style scoped>
.v-img {
  height: 100vh; /* Adjust the height as needed */
}

/* Smartphones (portrait and landscape) ----------- */
 
@media screen and (min-device-width : 320px)
 
and (max-device-width : 480px) {
 
.hero{
    display: none !important;
}

.hero-left{
    padding-bottom: 90px;
}
 
}
</style>