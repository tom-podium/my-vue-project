<template>
    <v-container>
        <div class="px-2 pb-5" v-if="user">
            <v-row>
                <v-col>
                    <flip-countdown deadline="2024-06-13 00:00:00"></flip-countdown>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <h2>Your Results</h2>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="6" md="3">
                    <v-card outlined>
                        <v-app-bar flat dense>
                            <p>Overall Score</p>
                            <v-spacer></v-spacer>
                            <v-btn icon><v-icon small>mdi-pencil</v-icon></v-btn>
                        </v-app-bar>                            
                        <v-card-title>{{ user.TotalScore }}</v-card-title>
                    </v-card>
                </v-col>
                <v-col cols="6" md="3">
                    <v-card outlined>
                        <v-app-bar flat dense>
                            <p>Group Predictions</p>
                            <v-spacer></v-spacer>
                            <v-btn icon><v-icon small>mdi-pencil</v-icon></v-btn>
                        </v-app-bar>
                        <v-card-title>{{ user.GroupPredictionScore }}</v-card-title>
                    </v-card>
                </v-col>
                <v-col cols="6" md="3">
                    <v-card outlined>
                        <v-app-bar flat dense>
                            <p>Group Outrights</p>
                            <v-spacer></v-spacer>
                            <v-btn icon><v-icon small>mdi-pencil</v-icon></v-btn>
                        </v-app-bar>
                        <v-card-title>{{ user.GroupOutrightScore }}</v-card-title>
                    </v-card>
                </v-col>
                <v-col cols="6" md="3">
                    <v-card outlined>
                        <v-app-bar flat dense>
                            <p>Tournament Outrights</p>
                            <v-spacer></v-spacer>
                            <v-btn icon><v-icon small>mdi-pencil</v-icon></v-btn>
                        </v-app-bar>
                        <v-card-title>{{ user.TournamentOutrightScore }}</v-card-title>
                    </v-card>
                </v-col>
            </v-row> 
            
            
            <v-row>
                <v-col>
                    <h2>Upcoming Fixtures</h2>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="4">
                    <v-card outlined style="padding-bottom: 3%">
                        <v-card-title>{{ formatDateTimeDisplay(upcomingFixtures[0].FixtureTime) }}</v-card-title>
                        <v-card-subtitle><strong>{{ upcomingFixtures[0].Location }}</strong></v-card-subtitle>
                        <v-card-subtitle>{{ teams.find(team => team.id == upcomingFixtures[0].HomeTeam).Group }}</v-card-subtitle>
                        <v-row>
                            <v-col cols="1" class="text-right">
                                <v-img :src="getImagePath(teams.find(team => team.id == upcomingFixtures[0].HomeTeam).Image)" width="30" style="margin-left: 15px; margin-top: -3px"></v-img>
                            </v-col>
                            <v-col style="padding-top: 2%">
                                <strong>{{teams.find(team => team.id == upcomingFixtures[0].HomeTeam).Team_Name}}</strong>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="1" class="text-right">
                                <v-img :src="getImagePath(teams.find(team => team.id == upcomingFixtures[0].AwayTeam).Image)" width="30" style="margin-left: 15px; margin-top: -3px"></v-img>
                            </v-col>
                            <v-col style="padding-top: 2%">
                                <strong>{{teams.find(team => team.id == upcomingFixtures[0].AwayTeam).Team_Name}}</strong>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card outlined style="padding-bottom: 3%">
                        <v-card-title>{{ formatDateTimeDisplay(upcomingFixtures[1].FixtureTime) }}</v-card-title>
                        <v-card-subtitle><strong>{{ upcomingFixtures[1].Location }}</strong></v-card-subtitle>
                        <v-card-subtitle>{{ teams.find(team => team.id == upcomingFixtures[1].HomeTeam).Group }}</v-card-subtitle>
                        <v-row>
                            <v-col cols="1" class="text-right">
                                <v-img :src="getImagePath(teams.find(team => team.id == upcomingFixtures[1].HomeTeam).Image)" width="30" style="margin-left: 15px; margin-top: -3px"></v-img>
                            </v-col>
                            <v-col style="padding-top: 2%">
                                <strong>{{teams.find(team => team.id == upcomingFixtures[1].HomeTeam).Team_Name}}</strong>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="1" class="text-right">
                                <v-img :src="getImagePath(teams.find(team => team.id == upcomingFixtures[1].AwayTeam).Image)" width="30" style="margin-left: 15px; margin-top: -3px"></v-img>
                            </v-col>
                            <v-col style="padding-top: 2%">
                                <strong>{{teams.find(team => team.id == upcomingFixtures[1].AwayTeam).Team_Name}}</strong>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card outlined style="padding-bottom: 3%">
                        <v-card-title>{{ formatDateTimeDisplay(upcomingFixtures[2].FixtureTime) }}</v-card-title>
                        <v-card-subtitle><strong>{{ upcomingFixtures[2].Location }}</strong></v-card-subtitle>
                        <v-card-subtitle>{{ teams.find(team => team.id == upcomingFixtures[2].HomeTeam).Group }}</v-card-subtitle>
                        <v-row>
                            <v-col cols="1" class="text-right">
                                <v-img :src="getImagePath(teams.find(team => team.id == upcomingFixtures[2].HomeTeam).Image)" width="30" style="margin-left: 15px; margin-top: -3px"></v-img>
                            </v-col>
                            <v-col style="padding-top: 2%">
                                <strong>{{teams.find(team => team.id == upcomingFixtures[2].HomeTeam).Team_Name}}</strong>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="1" class="text-right">
                                <v-img :src="getImagePath(teams.find(team => team.id == upcomingFixtures[2].AwayTeam).Image)" width="30" style="margin-left: 15px; margin-top: -3px"></v-img>
                            </v-col>
                            <v-col style="padding-top: 2%">
                                <strong>{{teams.find(team => team.id == upcomingFixtures[2].AwayTeam).Team_Name}}</strong>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>

            <v-row v-if="recentResults.length > 0">
                <v-col>
                    <h2>Recent Results</h2>
                </v-col>
            </v-row>
            <v-row v-if="recentResults.length > 0">
                <v-col cols="12" md="4">
                    <v-card outlined style="padding-bottom: 3%">
                        <v-card-title>{{ formatDateTimeDisplay(recentResults[0].FixtureTime) }}</v-card-title>
                        <v-card-subtitle><strong>{{ recentResults[0].Location }}</strong></v-card-subtitle>
                        <v-card-subtitle>{{ teams.find(team => team.id == recentResults[0].HomeTeam).Group }}</v-card-subtitle>
                        <v-row>
                            <v-col cols="1" class="text-right">
                                <v-img :src="getImagePath(teams.find(team => team.id == recentResults[0].HomeTeam).Image)" width="30" style="margin-left: 15px; margin-top: -3px"></v-img>
                            </v-col>
                            <v-col style="padding-top: 2%">
                                <strong>{{teams.find(team => team.id == recentResults[0].HomeTeam).Team_Name}}</strong>
                            </v-col>
                            <v-col style="padding-top: 2%">
                                {{recentResults[0].HomeTeamScore}}
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="1" class="text-right">
                                <v-img :src="getImagePath(teams.find(team => team.id == recentResults[0].AwayTeam).Image)" width="30" style="margin-left: 15px; margin-top: -3px"></v-img>
                            </v-col>
                            <v-col style="padding-top: 2%">
                                <strong>{{teams.find(team => team.id == recentResults[0].AwayTeam).Team_Name}}</strong>
                            </v-col>
                            <v-col style="padding-top: 2%">
                                {{recentResults[0].AwayTeamScore}}
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card outlined style="padding-bottom: 3%">
                        <v-card-title>{{ formatDateTimeDisplay(recentResults[1].FixtureTime) }}</v-card-title>
                        <v-card-subtitle><strong>{{ recentResults[1].Location }}</strong></v-card-subtitle>
                        <v-card-subtitle>{{ teams.find(team => team.id == recentResults[1].HomeTeam).Group }}</v-card-subtitle>
                        <v-row>
                            <v-col cols="1" class="text-right">
                                <v-img :src="getImagePath(teams.find(team => team.id == recentResults[1].HomeTeam).Image)" width="30" style="margin-left: 15px; margin-top: -3px"></v-img>
                            </v-col>
                            <v-col style="padding-top: 2%">
                                <strong>{{teams.find(team => team.id == recentResults[1].HomeTeam).Team_Name}}</strong>
                            </v-col>
                            <v-col style="padding-top: 2%">
                                {{recentResults[1].HomeTeamScore}}
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="1" class="text-right">
                                <v-img :src="getImagePath(teams.find(team => team.id == recentResults[1].AwayTeam).Image)" width="30" style="margin-left: 15px; margin-top: -3px"></v-img>
                            </v-col>
                            <v-col style="padding-top: 2%">
                                <strong>{{teams.find(team => team.id == recentResults[1].AwayTeam).Team_Name}}</strong>
                            </v-col>
                            <v-col style="padding-top: 2%">
                                {{recentResults[1].AwayTeamScore}}
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card outlined style="padding-bottom: 3%">
                        <v-card-title>{{ formatDateTimeDisplay(recentResults[2].FixtureTime) }}</v-card-title>
                        <v-card-subtitle><strong>{{ recentResults[2].Location }}</strong></v-card-subtitle>
                        <v-card-subtitle>{{ teams.find(team => team.id == recentResults[2].HomeTeam).Group }}</v-card-subtitle>
                        <v-row>
                            <v-col cols="1" class="text-right">
                                <v-img :src="getImagePath(teams.find(team => team.id == recentResults[2].HomeTeam).Image)" width="30" style="margin-left: 15px; margin-top: -3px"></v-img>
                            </v-col>
                            <v-col style="padding-top: 2%">
                                <strong>{{teams.find(team => team.id == recentResults[2].HomeTeam).Team_Name}}</strong>
                            </v-col>
                            <v-col style="padding-top: 2%">
                                {{recentResults[2].HomeTeamScore}}
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="1" class="text-right">
                                <v-img :src="getImagePath(teams.find(team => team.id == recentResults[2].AwayTeam).Image)" width="30" style="margin-left: 15px; margin-top: -3px"></v-img>
                            </v-col>
                            <v-col style="padding-top: 2%">
                                <strong>{{teams.find(team => team.id == recentResults[2].AwayTeam).Team_Name}}</strong>
                            </v-col>
                            <v-col style="padding-top: 2%">
                                {{recentResults[2].AwayTeamScore}}
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <h2>Group Standings</h2>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="4">
                    <v-card outlined>
                        <v-card-title>Group A</v-card-title>
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                    <th class="text-center"></th>
                                    <th class="text-center">
                                        Played
                                    </th>
                                    <th class="text-center">
                                        Won
                                    </th>
                                    <th class="text-center">
                                        Drawn
                                    </th>
                                    <th class="text-center">
                                        Lost
                                    </th>
                                    <th class="text-center">
                                        Goal Difference
                                    </th>
                                    <th class="text-center">
                                        <strong>Points</strong>
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                    v-for="team in groupAteams"
                                    :key="team.name"
                                    >
                                    <td>{{ team.Team_Name }}</td>
                                    <td style="text-align:center">{{ team.Played }}</td>
                                    <td style="text-align:center">{{ team.Won }}</td>
                                    <td style="text-align:center">{{ team.Drawn }}</td>
                                    <td style="text-align:center">{{ team.Lost }}</td>
                                    <td style="text-align:center">{{ team.GoalDifference }}</td>
                                    <td style="text-align:center"><strong>{{ team.Points }}</strong></td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card outlined>
                        <v-card-title>Group B</v-card-title>
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                    <th class="text-center"></th>
                                    <th class="text-center">
                                        Played
                                    </th>
                                    <th class="text-center">
                                        Won
                                    </th>
                                    <th class="text-center">
                                        Drawn
                                    </th>
                                    <th class="text-center">
                                        Lost
                                    </th>
                                    <th class="text-center">
                                        Goal Difference
                                    </th>
                                    <th class="text-center">
                                        <strong>Points</strong>
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                    v-for="team in groupBteams"
                                    :key="team.name"
                                    >
                                    <td>{{ team.Team_Name }}</td>
                                    <td style="text-align:center">{{ team.Played }}</td>
                                    <td style="text-align:center">{{ team.Won }}</td>
                                    <td style="text-align:center">{{ team.Drawn }}</td>
                                    <td style="text-align:center">{{ team.Lost }}</td>
                                    <td style="text-align:center">{{ team.GoalDifference }}</td>
                                    <td style="text-align:center"><strong>{{ team.Points }}</strong></td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card outlined>
                        <v-card-title>Group C</v-card-title>
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                    <th class="text-center"></th>
                                    <th class="text-center">
                                        Played
                                    </th>
                                    <th class="text-center">
                                        Won
                                    </th>
                                    <th class="text-center">
                                        Drawn
                                    </th>
                                    <th class="text-center">
                                        Lost
                                    </th>
                                    <th class="text-center">
                                        Goal Difference
                                    </th>
                                    <th class="text-center">
                                        <strong>Points</strong>
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                    v-for="team in groupCteams"
                                    :key="team.name"
                                    >
                                    <td>{{ team.Team_Name }}</td>
                                    <td style="text-align:center">{{ team.Played }}</td>
                                    <td style="text-align:center">{{ team.Won }}</td>
                                    <td style="text-align:center">{{ team.Drawn }}</td>
                                    <td style="text-align:center">{{ team.Lost }}</td>
                                    <td style="text-align:center">{{ team.GoalDifference }}</td>
                                    <td style="text-align:center"><strong>{{ team.Points }}</strong></td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card outlined>
                        <v-card-title>Group D</v-card-title>
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                    <th class="text-center"></th>
                                    <th class="text-center">
                                        Played
                                    </th>
                                    <th class="text-center">
                                        Won
                                    </th>
                                    <th class="text-center">
                                        Drawn
                                    </th>
                                    <th class="text-center">
                                        Lost
                                    </th>
                                    <th class="text-center">
                                        Goal Difference
                                    </th>
                                    <th class="text-center">
                                        <strong>Points</strong>
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                    v-for="team in groupDteams"
                                    :key="team.name"
                                    >
                                    <td>{{ team.Team_Name }}</td>
                                    <td style="text-align:center">{{ team.Played }}</td>
                                    <td style="text-align:center">{{ team.Won }}</td>
                                    <td style="text-align:center">{{ team.Drawn }}</td>
                                    <td style="text-align:center">{{ team.Lost }}</td>
                                    <td style="text-align:center">{{ team.GoalDifference }}</td>
                                    <td style="text-align:center"><strong>{{ team.Points }}</strong></td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card outlined>
                        <v-card-title>Group E</v-card-title>
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                    <th class="text-center"></th>
                                    <th class="text-center">
                                        Played
                                    </th>
                                    <th class="text-center">
                                        Won
                                    </th>
                                    <th class="text-center">
                                        Drawn
                                    </th>
                                    <th class="text-center">
                                        Lost
                                    </th>
                                    <th class="text-center">
                                        Goal Difference
                                    </th>
                                    <th class="text-center">
                                        <strong>Points</strong>
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                    v-for="team in groupEteams"
                                    :key="team.name"
                                    >
                                    <td>{{ team.Team_Name }}</td>
                                    <td style="text-align:center">{{ team.Played }}</td>
                                    <td style="text-align:center">{{ team.Won }}</td>
                                    <td style="text-align:center">{{ team.Drawn }}</td>
                                    <td style="text-align:center">{{ team.Lost }}</td>
                                    <td style="text-align:center">{{ team.GoalDifference }}</td>
                                    <td style="text-align:center"><strong>{{ team.Points }}</strong></td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card outlined>
                        <v-card-title>Group F</v-card-title>
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                    <th class="text-center"></th>
                                    <th class="text-center">
                                        Played
                                    </th>
                                    <th class="text-center">
                                        Won
                                    </th>
                                    <th class="text-center">
                                        Drawn
                                    </th>
                                    <th class="text-center">
                                        Lost
                                    </th>
                                    <th class="text-center">
                                        Goal Difference
                                    </th>
                                    <th class="text-center">
                                        <strong>Points</strong>
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                    v-for="team in groupFteams"
                                    :key="team.name"
                                    >
                                    <td>{{ team.Team_Name }}</td>
                                    <td style="text-align:center">{{ team.Played }}</td>
                                    <td style="text-align:center">{{ team.Won }}</td>
                                    <td style="text-align:center">{{ team.Drawn }}</td>
                                    <td style="text-align:center">{{ team.Lost }}</td>
                                    <td style="text-align:center">{{ team.GoalDifference }}</td>
                                    <td style="text-align:center"><strong>{{ team.Points }}</strong></td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </v-container>
   
</template>
<script>
    import { mapState } from "vuex";
    import { mapGetters } from 'vuex';
    import moment from 'moment';
    import FlipCountdown from 'vue2-flip-countdown'

    export default {
        computed: {
            ...mapGetters([
                'isLogged',
                'user'
            ]),

            ...mapState(["user", "users", "fixtures", "teams", "groupAteams", "groupBteams", "groupCteams", "groupDteams", "groupEteams", "groupFteams", "upcomingFixtures", "recentResults", "deadline"]),

        },
        name: 'Project-Dashboard',
        components: {FlipCountdown},
        data() {
            return {
                headers: [
                    {
                        text: 'Name',
                        value: 'name',
                    },
                    { text: 'Group Predictions', value: 'GroupPredictionScore' },
                    { text: 'Group Outrights', value: 'GroupOutrightScore' },
                    { text: 'Tournament Outrights', value: 'TournamentOutrightScore' },
                    { text: 'Overall', value: 'TotalScore' }
                ]
            }
        },
        methods: {
            formatDateTimeDisplay(timestamp) {
                // Convert the timestamp to a moment object
                const formattedDate = moment(timestamp).format('dddd, MMMM Do YYYY');
                const formattedTime = moment(timestamp).format('HH:mm'); // 24-hour format

                // Construct the final string with date and time separated by "|"
                return `${formattedDate} | ${formattedTime}`;
            },
            getImagePath(imageName) {
                return require('@/assets/images/' + imageName);
            },
            /* scoreUsers() {
                this.$store.dispatch('scoreUsers')
            } */
        },
        created() {
            this.$store.dispatch('getFixtures')
        },
        /* mounted: function() {
            this.scoreUsers();
        } */
    }
</script>