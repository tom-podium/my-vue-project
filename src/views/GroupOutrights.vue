<template>
  <div>
    <v-card
      class="mx-auto"
      max-width="400"
    >
      <v-card-title class="white--text orange darken-4">
        Group Stage Outrights
        <v-spacer></v-spacer>
        
      </v-card-title>

      <v-card-text class="pt-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi nobis a at voluptates culpa optio amet! Inventore deserunt voluptatem maxime a veniam placeat, eos impedit nulla quos? Officiis, aperiam ducimus.
      </v-card-text>    
    </v-card>

    <v-card 
    outlined
    class="my-5 mx-4"
    v-for="group in groups"
    :key="group"
    >
      <v-app-bar color="#1f2369" dark dense flat style="font-size: 0.8rem;">
        {{ group }}
      </v-app-bar>
      <v-card-text>
        <v-row class="mb-6">
          <v-col>
              <v-simple-table>
                  <template v-slot:default>                    
                      <tbody>
                          <tr>
                          <td>1</td>
                            <td class="text-center">
                              <v-select
                              v-model="groupOutrights[group].position1"
                              :items="groupTeams(group)"
                              item-text="Team_Name"
                              item-value="id"
                              ></v-select>
                            </td>
                          </tr>
                          <tr>
                          <td>2</td>
                            <td class="text-center">
                              <v-select
                              v-model="groupOutrights[group].position2"
                              :items="groupTeams(group)"
                              item-text="Team_Name"
                              item-value="id"
                              ></v-select>
                            </td>
                          </tr>
                          <tr>
                          <td>3</td>
                            <td class="text-center">
                              <v-select
                              v-model="groupOutrights[group].position3"
                              :items="groupTeams(group)"
                              item-text="Team_Name"
                              item-value="id"
                              ></v-select>
                            </td>
                          </tr>
                          <tr>
                          <td>4</td>
                            <td class="text-center">
                              <v-select
                              v-model="groupOutrights[group].position4"
                              :items="groupTeams(group)"
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

        <v-row>
          <v-col>
            <v-simple-table>
                  <template v-slot:default>                    
                      <tbody>
                          <tr>
                          <td>Total Group Goals</td>
                            <td class="text-center">
                              <input 
                              type="number"
                              v-model="groupOutrights[group].groupGoals"
                              >
                            </td>
                          </tr>
                          <tr>
                          <td>Top Scoring Team</td>
                            <td class="text-center">
                              <v-select
                              v-model="groupOutrights[group].topScoringTeam"
                              :items="groupTeams(group)"
                              item-text="Team_Name"
                              item-value="id"
                              ></v-select>
                            </td>
                          </tr>
                          <tr>
                          <td>Total Group Red Cards</td>
                            <td class="text-center">
                              <input 
                              type="number"
                              v-model="groupOutrights[group].groupCards"
                              >
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
      value: 1,
    }),

    computed: {
      ...mapState(["user", "fixtures", "teams", "groupAteams", "groupOutrights", "groups"])
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
          route: "groupOutrights",
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