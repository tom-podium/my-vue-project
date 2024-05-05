<template>
  <div>    
    <!--TO DO: Add countdown to entry deadline-->
    <HeroSection />
    <v-container>
      <v-card color="#002c92" flat dark style="margin-top: 2%">
        <v-app-bar flat style="background: #002c92; border-bottom: 1px solid #fff">
          <strong>How It Works</strong>  
        </v-app-bar>
        <v-container>
          <v-card-text>
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
                  <v-list-item-title>Correct Score:<v-avatar size="30" style="background: #F4D03F; color: #333; margin-left: 0.8%; margin-bottom: 0.2%">8</v-avatar> Points </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Correct Result:<v-avatar size="30" style="background: #F4D03F; color: #333; margin-left: 0.8%; margin-bottom: 0.2%">3</v-avatar> Points </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Correct Goalscorer:<v-avatar size="30" style="background: #F4D03F; color: #333; margin-left: 0.8%; margin-bottom: 0.2%">5</v-avatar> Points </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Correct Group Position:<v-avatar size="30" style="background: #F4D03F; color: #333; margin-left: 0.8%; margin-bottom: 0.2%">5</v-avatar> Points </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Outright Predictions:<v-avatar size="30" style="background: #F4D03F; color: #333; margin-left: 0.8%; margin-bottom: 0.2%">10</v-avatar> Points </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            Submit your predictions before the deadline of midnight on June 13th to enter the leaderboard and compete against others. Prizes are available for the top 3 and prize totals will be shown after entry has closed. 


          </v-card-text>
        </v-container>
        
      </v-card>
    </v-container>
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
