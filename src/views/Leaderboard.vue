<template>
    <div class="px-2 pb-5" v-if="user">
        <v-row>
            <v-col>
                <h2 class="mt-5">Current Prize Pot</h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card outlined>
                    <v-card-subtitle><strong class="mr-5">1st:</strong>£100</v-card-subtitle>
                    <hr/>
                    <v-card-subtitle><strong class="mr-5">2nd:</strong>£50</v-card-subtitle> 
                    <hr/>
                    <v-card-subtitle><strong class="mr-5">3rd:</strong>£20</v-card-subtitle> 
                </v-card>
            </v-col>
        </v-row>
        <v-row>            
            <v-col >
                <v-card outlined>
                    <v-data-table
                    :headers="headers"
                    :items="users"
                    :items-per-page="25"
                    :sort-by="sortBy"
                    :sort-desc="sortDesc"
                    class="text-center"
                    >
                        <template v-slot:item="{ item, index }">
                            <tr :class="getRowClass(index)">
                                <td>{{ item.name }}</td>
                                <td>{{ item.GroupPredictionScore }}</td>
                                <td>{{ item.GroupOutrightScore }}</td>
                                <td>{{ item.TournamentOutrightScore }}</td>
                                <td>
                                    <v-chip dark>
                                        {{ item.TotalScore }}
                                    </v-chip>
                                </td>
                            </tr>
                        </template>
                    </v-data-table>

                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
<script>
    import { mapState } from "vuex";
    import { mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters([
                'isLogged',
                'user'
            ]),

            ...mapState(["user", "users"]),

        },
        name: 'Project-Leaderboard',
        components: {},
        data() {
            return {
                headers: [
                    { text: 'Name', value: 'name', sortable: false },
                    { text: 'Group Predictions', value: 'GroupPredictionScore', sortable: false },
                    { text: 'Group Outrights', value: 'GroupOutrightScore', sortable: false },
                    { text: 'Tournament Outrights', value: 'TournamentOutrightScore', sortable: false },
                    { text: 'Overall', value: 'TotalScore', sortable: true } // Only this column is sortable
                ],
                sortBy: 'TotalScore',
                sortDesc: true
            }
        },
        methods: {
            getRowClass(index) {
                if (index === 0) return 'first-place';
                if (index === 1) return 'second-place';
                if (index === 2) return 'third-place';
                return ''; // Default, no special styling
            }
        }
    }
</script>

<style scoped>
.first-place {
    background-color: gold;
}
.second-place {
    background-color: silver;
}
.third-place {
    background-color: #cd7f32; /* Bronze */
}
</style>