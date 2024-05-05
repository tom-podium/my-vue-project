<template>
    <div>
        <v-row>
            <v-col 
            style="background-image: url('https://img.uefa.com/imgml/uefacom/euro2024/rebrand/backgroundLight02L.png');
             background-size: cover;
             background-clip: content-box"
            >
                <flip-countdown deadline="2024-06-13 00:00:00" style="margin-top: 25px; margin-bottom: 25px"></flip-countdown>
            </v-col>
        </v-row>
        <v-row style="background: #143cdb; color: #fff; max-height: 500px; margin-top: 0; margin-bottom: 12px">
            <v-col>
                <v-row style="margin-top: 15%">
                    <v-col cols="1"></v-col>
                    <v-col cols="10"><p style="font-size: 3rem">Know your football?</p></v-col>
                    <v-col cols="1"></v-col>
                    <v-col cols="1"></v-col>
                    <v-col cols="10"><p style="font-size: 1.5rem">Join the ultimate EURO 2024 prediction game</p></v-col>
                    <v-col cols="1"></v-col>
                    <v-col cols="1"></v-col>
                    <v-col cols="10"><v-btn color="#F4D03F" dark large style="color: #333">Get Started</v-btn></v-col>
                    <v-col cols="1"></v-col>
                </v-row>
            </v-col>
            
            
            <v-col cols="12" md="6" style="padding: 0; overflow: hidden;">
                <img
                src="../assets/images/hero.png"
                gradient="to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.5)"
                height="500px"
                width="100%"
                style="clip-path: polygon(15% 0%, 100% 0, 100% 100%, 0% 100%);"
                />
            </v-col>
        </v-row>        

        <div class="relative overflow-hidden" style="background-image: url('https://img.uefa.com/imgml/uefacom/euro2024/rebrand/backgroundLight02L.png'); background-size: cover">
            <div class="max-w-screen-xl mx-auto ">
                <div class="my-12" style="background: none">
                    <v-row>
                        <v-col class="text-center" cols="3">
                            <v-icon size="100" color="#1a313c">
                                mdi-scoreboard
                            </v-icon>
                            <br/>
                                <h1 style="color: #1a313c">Predict</h1>
                                <p>ewdhfjmbeyrdfjgm</p>
                        </v-col>
                        <v-col class="text-center" cols="3">
                            <v-icon size="100" color="#1a313c">
                                mdi-counter
                            </v-icon>
                            <br/>
                                <h1 style="color: #1a313c">Score Points</h1>
                                <p>ewdhfjmbeyrdfjgm</p>
                        </v-col>
                        <v-col class="text-center" cols="3">
                            <v-icon size="100" color="#1a313c">
                                mdi-clipboard-list
                            </v-icon>
                            <br/>
                                <h1 style="color: #1a313c">Compete</h1>
                                <p>ewdhfjmbeyrdfjgm</p>
                        </v-col>
                        <v-col class="text-center" cols="3">
                            <v-icon size="100" color="#1a313c">
                                mdi-trophy
                            </v-icon>
                            <br/>
                                <h1 style="color: #1a313c">Win Prizes</h1>
                                <p>ewdhfjmbeyrdfjgm</p>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="text-center my-10 mx-auto">
                                <v-btn color="#F4D03F" width="120px" style="margin-left: 45%">
                                    <router-link to="/register" style="color: #333;" v-if="!isLogged">Play Now</router-link>
                                </v-btn>
                            
                        </v-col>
                    </v-row>
                </div>
            </div>
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
</style>