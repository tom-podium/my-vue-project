import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import moment from "moment";
import Router from '../router/index';

Vue.use(Vuex)

axios.defaults.baseURL = "https://x8ki-letl-twmt.n7.xano.io/api:e7YHNPxg"

/* console.log(process.env.VUE_APP_ROOT_API + 'here') */

export default new Vuex.Store({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: JSON.parse(localStorage.getItem('token')) || null,
    users: null,
    teams: null,
    fixtures: null,
    groupAteams: [],
    groupBteams: [],
    groupCteams: [],
    groupDteams: [],
    groupEteams: [],
    groupFteams: [],
    groupGteams: [],
    groupHteams: [],
    upcomingFixtures: [],
    recentResults: [],
    players: [],
    groups: ["Group A", "Group B", "Group C", "Group D", "Group E", "Group F"],
    groupPredictions: {},
    groupOutrights: {},
    tournamentOutrights: {},
    deadline: "2024-06-13 00:00:00"
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      localStorage.setItem('token', JSON.stringify(token))
      // all requests now have this header
      axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },

    setUserData (state, userData) {
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
    },

    setTeams (state, teams) {
      state.teams = teams
      state.groupAteams = state.teams.filter(team => team.Group === 'Group A');
      state.groupBteams = state.teams.filter(team => team.Group === 'Group B');
      state.groupCteams = state.teams.filter(team => team.Group === 'Group C');
      state.groupDteams = state.teams.filter(team => team.Group === 'Group D');
      state.groupEteams = state.teams.filter(team => team.Group === 'Group E');
      state.groupFteams = state.teams.filter(team => team.Group === 'Group F');
      state.groupGteams = state.teams.filter(team => team.Group === 'Group G');
      state.groupHteams = state.teams.filter(team => team.Group === 'Group H');
    },

    setFixtures(state, fixtures) {
      state.fixtures = fixtures;
      console.log(fixtures)
    
      const today = moment().startOf('day'); // This ensures the comparison starts from the beginning of today.
    
      // Filter and sort upcoming fixtures
      state.upcomingFixtures = state.fixtures.filter(fixture => {
        // Convert the fixture time to a moment object for comparison
        const fixtureMoment = moment(fixture.FixtureTime);
        return fixtureMoment.isSameOrAfter(today);
      }).sort((a, b) => {
        // Compare two moments directly
        return moment(a.FixtureTime).diff(moment(b.FixtureTime));
      }).slice(0, 3); // Get the first 3 upcoming fixtures

      // Filter past fixtures with valid scores and sort them
      state.recentResults = state.fixtures.filter(fixture => {
        const fixtureMoment = moment(fixture.FixtureTime);
        // Check if the fixture date is before today and scores are not null
        return fixtureMoment.isBefore(today) && 
              fixture.HomeTeamScore !== null && 
              fixture.AwayTeamScore !== null;
      }).sort((a, b) => {
        // Sort by date in descending order to get the most recent first
        return moment(b.FixtureTime).diff(moment(a.FixtureTime));
      }).slice(0, 3); // Get only the last 3 fixtures

      // If groupPredictions doesn't exist or is an empty object, initialize it
      if (!state.groupPredictions || Object.keys(state.groupPredictions).length == 0) {
        // Build the new groupPredictions object
        const newGroupPredictions = {};
        state.fixtures.forEach((fixture) => {
          newGroupPredictions[fixture.id] = {
            homeTeamScore: 0,
            awayTeamScore: 0,
            goalscorer: null,
          };
        });
        console.log(state.user)
        // Directly assign the new object to state.groupPredictions
        state.user.GroupPredictions = newGroupPredictions;
      }

      if (!state.groupOutrights || Object.keys(state.groupOutrights).length === 0) {
        // Build the new groupOutrights object
        const newGroupOutrights = {};
        state.groups.forEach((group) => {
          newGroupOutrights[group] = {
            position1: null,
            position2: null,
            position3: null,
            position4: null,
            groupGoals: 0,
            groupCards: 0,
            topScoringTeam: null,
          };
        });

        // Directly assign the new object to state.groupPredictions
        state.user.GroupOutrights = newGroupOutrights;
      }

      if (!state.tournamentOutrights || Object.keys(state.tournamentOutrights).length === 0) {
        // Build the new groupOutrights object
          var newTournamentOutrights = {
            winner: null,
            runnerUp: null,
            highestScoringTeam: null,
            lowestScoringTeam: null,
            totalGoals: 0,
            goldenBall: null,
            goldenBoot: null,
            goldenGlove: null,
            youngPlayer: null,
            englandProgress: null,
          };

        // Directly assign the new object to state.groupPredictions
        state.user.TournamentOutrights = newTournamentOutrights;
      }


    },

    setPredictions(state, players) {
      state.players = players;
    },

    setPlayers(state, players) {
      state.players = players;
    },

    clearUserData (state) {
      state.user = null;
      state.token = null;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      delete axios.defaults.headers.common.Authorization;
      Router.push("/login");
    },

    groupPredictionsUpdated () {
      console.log('predictions updated ')
      Router.push("/group-outrights");
    },

    groupOutrightsUpdated () {
      console.log('predictions updated')
      Router.push("/tournament-outrights");
    },

    tournamentOutrightsUpdated () {
      console.log('predictions updated')
      Router.push("/dashboard");
    },
  },
  actions: {
    login ({ commit, dispatch }, credentials) {
      return axios
        .post('/auth/login', credentials)
        .then(data => {
          commit('setToken', data.data.authToken)
          dispatch('getCurrentUser')
        })
    },
    register ({ commit, dispatch }, userData) {
      return axios
        .post('/user', userData)
        .then(data => {
          commit('setToken', data.data._authToken)
          dispatch('getCurrentUser')
        })
    },
    getCurrentUser ({ commit }) {
      return axios
        .get('/auth/me')
        .then(({ data }) => {
          commit('setUserData', data)
        })
    },
    getTeams ({ commit }) {
      return axios
        .get('/teams')
        .then(data => {
          commit('setTeams', data.data)
        })
    },
    getFixtures ({ commit }) {
      return axios
        .get('/fixtures')
        .then(data => {
          commit('setFixtures', data.data)
        })
    },
    getPlayers ({ commit }) {
      return axios
        .get('/players')
        .then(data => {
          commit('setPlayers', data.data)
        })
    },
    logout ({ commit }) {
      commit('clearUserData')
    },
    updateUser ({ commit }, {route, userId, user}) {
      console.log(user)
      axios.post(`/user/${userId}`, user)
        .then(response => {
          if(route == "groupPredictions"){
            commit('groupPredictionsUpdated', response.data);
          }else if(route == "groupOutrights"){
            commit('groupOutrightsUpdated', response.data);
          }else if(route == "tournamentOutrights"){
            commit('tournamentOutrightsUpdated', response.data);
          }
          
        })
        .catch(error => {
          // Handle any errors
          console.error('There was an error updating the user:', error);
        });
    },
    scoreUsers ({ state, commit }) {
      console.log('scoring users')
      return axios
        .get('/user')
        .then(data => {
          state.users = data.data

          // Scoring logic
          data.data.forEach(user => {
            let userScore = {
              id: user.id,
              GroupPredictionScore: 0,
              GroupOutrightScore: 0,
              TournamentOutrightScore: 0,
              TotalScore: 0
            };

            if(user.GroupPredictions != null){              
              Object.keys(user.GroupPredictions).forEach(fixtureId => {
                var prediction = user.GroupPredictions[fixtureId];
                var fixture = state.fixtures.find(f => f.id.toString() == fixtureId);
                if (fixture) {
                  // Scoring based on exact match of predictions
                  if (fixture.homeTeamScore === prediction.homeTeamScore && fixture.awayTeamScore === prediction.awayTeamScore) {
                    userScore.GroupPredictionScore += 8; // Correct score prediction
                  } else if ((fixture.homeTeamScore > fixture.awayTeamScore && prediction.homeTeamScore > prediction.awayTeamScore) ||
                            (fixture.homeTeamScore < fixture.awayTeamScore && prediction.homeTeamScore < prediction.awayTeamScore) ||
                            (fixture.homeTeamScore === fixture.awayTeamScore && prediction.homeTeamScore === prediction.awayTeamScore)) {
                    userScore.GroupPredictionScore += 3; // Correct result prediction
                  }
                }
              });
            }

            userScore.TotalScore = userScore.GroupPredictionScore + userScore.GroupOutrightScore + userScore.TournamentOutrightScore;

            axios.put(`/updateScore/${user.id}`, userScore)
            .then(response => {
              console.log(response)
              return axios
              .get('/auth/me')
              .then(({ data }) => {
                commit('setUserData', data)
              })
            })
            .catch(error => {
              // Handle any errors
              console.error('There was an error updating the user:', error);
            });

          });
        })


      
    },

  },
  getters: {
    isLogged: state => !!state.token,
    user: state => state.user
  },

  modules: {}
})
