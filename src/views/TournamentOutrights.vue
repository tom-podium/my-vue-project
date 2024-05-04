<template>
  <div>
    <v-card
      class="mx-auto"
      max-width="400"
    >
      <v-card-title class="white--text orange darken-4">
        Tournament Outrights
        <v-spacer></v-spacer>
        
      </v-card-title>

      <v-card-text class="pt-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi nobis a at voluptates culpa optio amet! Inventore deserunt voluptatem maxime a veniam placeat, eos impedit nulla quos? Officiis, aperiam ducimus.
      </v-card-text>    
    </v-card>

    <v-card 
    outlined
    class="my-5 mx-4"
    >
      <v-app-bar color="#1f2369" dark dense flat style="font-size: 0.8rem;">
        Tournament Outright Predictions
      </v-app-bar>
      <v-card-text>
        <v-row>
          <v-col>
            <v-simple-table>
                  <template v-slot:default>                    
                      <tbody>
                          <tr>
                          <td>Tournament Winner</td>
                            <td class="text-center">
                              <v-select
                              v-model="tournamentOutrights.winner"
                              :items="teams"
                              item-text="Team_Name"
                              item-value="id"
                              ></v-select>
                            </td>
                          </tr>
                          <tr>
                          <td>Tournament Runner Up</td>
                            <td class="text-center">
                              <v-select
                              v-model="tournamentOutrights.runnerUp"
                              :items="teams"
                              item-text="Team_Name"
                              item-value="id"
                              ></v-select>
                            </td>
                          </tr>
                          <tr>
                          <td>Highest Scoring Nation</td>
                            <td class="text-center">
                              <v-select
                              v-model="tournamentOutrights.highestScoringTeam"
                              :items="teams"
                              item-text="Team_Name"
                              item-value="id"
                              ></v-select>
                            </td>
                          </tr>
                          <tr>
                          <td>Lowest Scoring Nation</td>
                            <td class="text-center">
                              <v-select
                              v-model="tournamentOutrights.lowestScoringTeam"
                              :items="teams"
                              item-text="Team_Name"
                              item-value="id"
                              ></v-select>
                            </td>
                          </tr>
                          <tr>
                          <td>Total Tournament Goals<br/><small>*10 points if within 5 goals</small></td>
                            <td class="text-center">
                              <v-select
                              v-model="tournamentOutrights.lowestScoringTeam"
                              :items="teams"
                              item-text="Team_Name"
                              item-value="id"
                              ></v-select>
                            </td>
                          </tr>
                          <tr>
                          <td>Golden Ball Winner (Player Of The Tournament)</td>
                            <td class="text-center">
                              <v-select
                              v-model="tournamentOutrights.lowestScoringTeam"
                              :items="teams"
                              item-text="Team_Name"
                              item-value="id"
                              ></v-select>
                            </td>
                          </tr>
                          <tr>
                          <td>Golden Boot Winner (Top Goalscorer)</td>
                            <td class="text-center">
                              <v-select
                              v-model="tournamentOutrights.lowestScoringTeam"
                              :items="teams"
                              item-text="Team_Name"
                              item-value="id"
                              ></v-select>
                            </td>
                          </tr>
                          <tr>
                          <td>Golden Glove Winner (Most Clean Sheets)</td>
                            <td class="text-center">
                              <v-select
                              v-model="tournamentOutrights.lowestScoringTeam"
                              :items="teams"
                              item-text="Team_Name"
                              item-value="id"
                              ></v-select>
                            </td>
                          </tr>
                          <tr>
                          <td>Best Young Player Award (22 Or Younger )</td>
                            <td class="text-center">
                              <v-select
                              v-model="tournamentOutrights.lowestScoringTeam"
                              :items="teams"
                              item-text="Team_Name"
                              item-value="id"
                              ></v-select>
                            </td>
                          </tr>
                          <tr>
                          <td>How Far Will England Progress? </td>
                            <td class="text-center">
                              <v-select
                              v-model="tournamentOutrights.englandProgress"
                              :items="progress"
                              item-text="Team_Name"
                              item-value="id"
                              ></v-select>
                            </td>
                          </tr>

                      </tbody>
                  </template>
              </v-simple-table>
          </v-col>
        </v-row>

        
      </v-card-text>
    </v-card>

    <v-card-actions class="mt-10">
        <v-btn 
        block 
        dark 
        style="background: #1f2369"
        @click="submitPredictions()"
        >
          Submit Predictions
        </v-btn>
      </v-card-actions>
  </div>
</template>

<script>
  import { mapState } from "vuex";

  export default {
    data: () => ({
      e6: 1,
      stepper: true,
      progress: ["Group Stage", "Round of 16", "Quarter Finals", "Semi Finals", "Final", "Winners"]
    }),

    computed: {
      ...mapState(["user", "fixtures", "teams", "groupAteams", "tournamentOutrights"])
    },

    methods: {
      getImagePath(imageName) {
          return require('@/assets/images/' + imageName);
      },
      getTeamName(teamId) {
          return this.teams.find(team => team.id == teamId).Team_Name;
      },
      groupTeams(group) {
        return this.teams.filter(team => team.Group === group);
      },
      submitPredictions() {
        this.$store.dispatch('updateUser', {
          route: "tournamentOutrights",
          userId: this.user.id,
          user: this.user
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 40px;
  height: 75px;

  .number-input {
    -moz-appearance: textfield;
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    width: 100%;
    height: 60%;
    border: none;
    outline: none;
    text-align: center;
    background: #143cdb;
    color: #fff;
    font-size: 2em;
    border-radius: 10px;
    
    &::placeholder {
      color: #eee;
    }
  }

  .arrow-up,
  .arrow-down {
    cursor: pointer;
    width: 30px;
    height: 15px;
    background: #1f2369;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .arrow-up {
    top: -5px;
    &:hover {
      background: darken(#1f2369, 10%);
    }
  }

  .arrow-down {
    bottom: -5px;
    transform: translateX(-50%) rotate(180deg);
    &:hover {
      background: darken(#1f2369, 10%);
    }
  }
}

select{
  height: 40px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
}
</style>