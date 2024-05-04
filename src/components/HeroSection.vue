<template>
    <div>
        <div class="relative overflow-hidden" style="background-image: url('https://img.uefa.com/imgml/uefacom/euro2024/rebrand/backgroundLight02L.png'); background-size: cover;">
            <div class="max-w-screen-xl mx-auto ">
                <div class="my-12" style="background: none">                    
                    <div>
                        <div class="sm:text-center lg:text-left">
                            <v-row>
                                <v-col>
                                    <flip-countdown deadline="2024-06-13 00:00:00"></flip-countdown>
                                </v-col>
                            </v-row>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <v-row>
            <v-col>
                <div class="mt-10 mx-auto max-w-screen-xl sm:mt-12 px-6 md:mt-16 lg:mt-20 xl:mt-28" >
                        <div class="sm:text-center lg:text-left">
                            <h1 class="sm:text-5xl sm:leading-none md:text-6xl">
                                Know your football?
                            </h1>
                            <p class="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Join the ultimate EURO 2024 prediction game
                            </p>
                            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div class="btn" style="background: #F4D03F; color: #333; width: 150px;">
                                    <router-link to="/register" >
                                        Get Started
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
            </v-col>
            <v-col>
                <div class="relative overflow-hidden" style="background: #143cdb">
                    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                        <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="../assets/images/hero.png" alt="" />
                    </div>
                </div>
            </v-col>
        </v-row>
        

        <div class="relative overflow-hidden" style="background-image: url('https://img.uefa.com/imgml/uefacom/euro2024/rebrand/backgroundLight02L.png'); background-size: cover">
            <div class="max-w-screen-xl mx-auto ">
                <div class="my-12" style="background: none">
                    
                    <div  >
                        <div class="sm:text-center lg:text-left">
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
                                <v-col class="text-center my-10">
                                    <div class="btn ml-4" style="background: #F4D03F; color: #333; margin-left: 45%; width: 150px;">
                                        <router-link to="/register" >
                                            Play Now
                                        </router-link>
                                    </div>
                                    
                                </v-col>
                            </v-row>
                        </div>
                    </div>
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