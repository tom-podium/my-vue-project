<template>
  <div>
    <v-card
      class="mx-auto"
      max-width="400"
    >
      <v-card flat outlined dark color="#143cdb" v-if="stepper">
        <v-card-title>How to Play</v-card-title>
        <v-card-text>
          <v-stepper
            v-model="e6"
            vertical
            flat
            style="background: none"
          >
            <v-stepper-step
              :complete="e6 > 1"
              step="1"
              @click="e6 = 1"
            >
              <p class="ml-2">Group Fixtures</p>
              <small class="ml-2">Predict the score of each of the group fixtures along with an anytime goalscorer</small>
            </v-stepper-step>

            <v-stepper-content step="1">
              <v-card
                color="grey lighten-1"
                class="mb-12"
                height="200px"
              ></v-card>
              <v-btn
                color="primary"
                @click="e6 = 2"
              >
                Continue
              </v-btn>
            </v-stepper-content>

            <v-stepper-step
              :complete="e6 > 2"
              step="2"
              @click="e6 = 2"
            >
              <p class="ml-2">Group Outrights</p>
              <small class="ml-2">Predict where each team will finish in the group as well as some group statistics such as number of goals and red cards</small>
            </v-stepper-step>

            <v-stepper-content step="2">
              <v-card
                color="grey lighten-1"
                class="mb-12"
                height="200px"
              ></v-card>
              <v-btn
                color="primary"
                @click="e6 = 3"
              >
                Continue
              </v-btn>
            </v-stepper-content>

            <v-stepper-step
              :complete="e6 > 3"
              step="3"
              @click="e6 = 3"
            >
              <p class="ml-2">Tournament Outrights</p>
              <small class="ml-2">Select the tournament outright predictions such as winner, runner up and golden boot</small>
            </v-stepper-step>

            <v-stepper-content step="3">
              <v-card
                color="grey lighten-1"
                class="mb-12"
                height="200px"
              ></v-card>
              <v-btn
                color="primary"
                @click="e6 = 4"
              >
                Continue
              </v-btn>
            </v-stepper-content>

            <v-stepper-step step="4" @click="e6 = 4">
              <p class="ml-2">Scoring</p>
              <small class="ml-2">Find out how the scoring works</small>
            </v-stepper-step>
            <v-stepper-content step="4">
              <v-card
                color="grey lighten-1"
                class="mb-12"
                height="200px"
              ></v-card>
              <v-btn
                color="primary"
                @click="stepper = false"
              >
                Finished
              </v-btn>
            </v-stepper-content>
          </v-stepper>
        </v-card-text>
      </v-card>
      <v-card-title class="white--text orange darken-4">
        Group Stage Fixtures
        <v-spacer></v-spacer>
        <v-btn v-if="!stepper" @click="stepper = true; e6 = 1" icon>
          <v-icon>mdi-help-circle-outline</v-icon>
        </v-btn>
        
      </v-card-title>

      <v-card-text class="pt-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi nobis a at voluptates culpa optio amet! Inventore deserunt voluptatem maxime a veniam placeat, eos impedit nulla quos? Officiis, aperiam ducimus.
      </v-card-text>    
    </v-card>

    <!-- Responsive Fixture Cards Grid -->
    <v-row>
      <v-col 
        v-for="item in fixtures"
        :key="item.itemId"
        cols="12"
        md="6"
        lg="4"
        class="my-5 px-2"
      >
        <v-card outlined>
          <v-app-bar color="#1f2369" dark dense flat>
            {{ item.Location }}
            <v-spacer></v-spacer>
            {{ formatDateTimeDisplay(item.FixtureTime) }}
          </v-app-bar>
          <v-card-text>
            <v-row class="mb-6">
              <v-col cols="4" class="text-right">
                <v-row justify="end">
                  <v-col cols="auto">
                    <v-img :src="getImagePath(teams.find(team => team.id == item.HomeTeam).Image)" width="40" class="mb-2 mt-4"></v-img>
                  </v-col>
                </v-row>                
                <span><strong>{{ getTeamName(item.HomeTeam) }}</strong></span>
              </v-col>
              <v-col cols="2" class="pt-5">
                <div class="input-container mx-auto">
                  <div class="arrow-up" @click="increment(item.id)"></div>
                  <input type="number" class="number-input" v-model.number="user.GroupPredictions[item.id].homeTeamScore" />
                  <div class="arrow-down" @click="decrement(item.id)"></div>
                </div>
              </v-col>
              <v-col cols="2" class="pt-5">
                <div class="input-container mx-auto">
                  <div class="arrow-up" @click="incrementAway(item.id)"></div>
                  <input type="number" class="number-input" v-model.number="user.GroupPredictions[item.id].awayTeamScore" />
                  <div class="arrow-down" @click="decrementAway(item.id)"></div>
                </div>
              </v-col>
              <v-col cols="4" class="text-left">
                <v-row justify="start">
                  <v-col cols="auto">
                    <v-img :src="getImagePath(teams.find(team => team.id == item.AwayTeam).Image)" width="40" class="mb-2 mt-4"></v-img>
                  </v-col>
                </v-row>
                <span><strong>{{ getTeamName(item.AwayTeam) }}</strong></span>
              </v-col>
            </v-row>

            <hr>
            <v-row class="my-4 mx-1">
              <label for="goalscore">Anytime Goalscorer</label>
              <select 
                name="goalscorer" 
                id="goalscorer"
                v-model="user.GroupPredictions[item.id].goalscorer"
                class="pl-2"
              >
                <option
                  v-for="player in players"
                  :key="player.id"
                >
                  {{ player.Name }}
                </option>
              </select>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

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
  import moment from 'moment';

  export default {
    data: () => ({
      e6: 1,
      stepper: true,
    }),

    computed: {
      ...mapState(["user", "fixtures", "teams", "players"])
    },

    methods: {
      formatDateTimeDisplay(timestamp) {
        return `${moment(timestamp).format('ddd, MMMM DD')} | ${moment(timestamp).format('HH:mm')}`;
      },
      getImagePath(imageName) {
        return require(`@/assets/images/${imageName}`);
      },
      getTeamName(teamId) {
        return this.teams.find(team => team.id === teamId).Team_Name;
      },
      increment(itemId) {
        this.user.GroupPredictions[itemId].homeTeamScore++; // Direct mutation, consider using Vuex mutation if this causes reactivity issues
      },
      decrement(itemId) {
        if (this.user.GroupPredictions[itemId].homeTeamScore > 0) {
          this.user.GroupPredictions[itemId].homeTeamScore--;
        }
      },
      incrementAway(itemId) {
        this.user.GroupPredictions[itemId].awayTeamScore++; // Direct mutation, consider using Vuex mutation if this causes reactivity issues
      },
      decrementAway(itemId) {
        if (this.user.GroupPredictions[itemId].awayTeamScore > 0) {
          this.user.GroupPredictions[itemId].awayTeamScore--;
        }
      },
      submitPredictions() {
        this.$store.dispatch('updateUser', {
          route: "groupPredictions",
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

select {
  height: 40px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
}
</style>
