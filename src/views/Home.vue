<template>
  <div>    
    <!--TO DO: Add countdown to entry deadline-->
    <HeroSection />
    <div class="relative overflow-hidden" style="background: #143cdb">
      <div class="max-w-screen-xl mx-auto ">
          <div class="my-12">
              
              <div  >
                  <div class="sm:text-center lg:text-left">
                      <v-row>
                          <v-col>
                            <v-card flat dark outlined style="background: #002c92">
                              <v-app-bar flat style="background: #002c92; border-bottom: 1px solid #fff">
                                <strong>How It Works</strong>  
                              </v-app-bar>
                              <v-card-text style="color: #fff">
                                
                                    <strong>Step 1:</strong> Predict the correct score of each of the group fixtures as well as an ANYTIME goalscorer for each game.
                                    <br/><br/>
                                    <strong>Step 2:</strong> Predict where each team will finish in their group. Then answer some group outright predictions such as the amount of goals and red cards.
                                    <br/><br/>
                                    <strong>Step 3:</strong> Finally predict the tournament outrights such as the winner, runner up, the team who scored the most goals and most importantly how far will England progress.
                                    <br/><br/><br/>

                                    <h3>Points are awared as follows:</h3>
                                    <v-list style="background: #002c92">
                                      <v-list-item>
                                        <v-list-item-content>
                                          <v-list-item-title>Correct Score:<v-avatar style="background: #F4D03F; color: #333" size="30" class="ml-5 mb-1">8</v-avatar> Points </v-list-item-title>
                                        </v-list-item-content>
                                      </v-list-item>
                                      <v-list-item>
                                        <v-list-item-content>
                                          <v-list-item-title>Correct Result:<v-avatar style="background: #F4D03F; color: #333" size="30" class="ml-5 mb-1">3</v-avatar> Points </v-list-item-title>
                                        </v-list-item-content>
                                      </v-list-item>
                                      <v-list-item>
                                        <v-list-item-content>
                                          <v-list-item-title>Correct Goalscorer:<v-avatar style="background: #F4D03F; color: #333" size="30" class="ml-5 mb-1">5</v-avatar> Points </v-list-item-title>
                                        </v-list-item-content>
                                      </v-list-item>
                                      <v-list-item>
                                        <v-list-item-content>
                                          <v-list-item-title>Correct Group Position:<v-avatar style="background: #F4D03F; color: #333" size="30" class="ml-5 mb-1">5</v-avatar> Points </v-list-item-title>
                                        </v-list-item-content>
                                      </v-list-item>
                                      <v-list-item>
                                        <v-list-item-content>
                                          <v-list-item-title>Outright Predictions:<v-avatar style="background: #F4D03F; color: #333" size="30" class="ml-5 mb-1">10</v-avatar> Points </v-list-item-title>
                                        </v-list-item-content>
                                      </v-list-item>
                                    </v-list>
                                    Submit your predictions before the deadline of midnight on June 13th to enter the leaderboard and compete against others. Prizes are available for the top 3 and prize totals will be shown after entry has closed. 

                              </v-card-text>
                            </v-card>
                              
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

// @ is an alias to /src
import HeroSection from '@/components/HeroSection.vue'

export default {
  name: 'Project-Home',
  components: {
    HeroSection,
  },
  
  
}
</script>
