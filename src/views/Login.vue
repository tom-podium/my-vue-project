<template>
    <v-card class="mx-md-auto px-5 py-10" width="100%" flat outlined>
        <v-container>
            <h1 class="text-center">Log In</h1>
            <form v-on:submit.prevent action="#" method="POST">
                <div>
                    <label for="email">Email</label>
                    <v-text-field
                        v-model="email"
                        id="email"
                        type="email" 
                        required
                        outlined
                        label="Email   "
                    ></v-text-field>
                    <label for="password">Password</label>
                    <v-text-field
                        v-model="password"
                        id="password"
                        type="password" 
                        required
                        outlined
                        label="Password   "
                    ></v-text-field>
                    <v-btn 
                    block
                    @click="login()"
                    type="submit"
                    >
                        Log In
                    </v-btn>
                </div>
                <div v-if="error" class="bg-red-100">
                    {{ error }}
                </div>
                <p style="margin-top: 1%;">Don't have an account? <router-link to="/register" style="color: #333; margin-left: 0" href=""><strong>Join Now</strong></router-link>
                </p>
            </form>
        </v-container>
        
    </v-card>
        
</template>
<script>
    export default {
        name: 'Project-Login',
        data() {
            return {
                email: '',
                password: '',
                error: ''
            }
        },
        methods: {
            login() {
                this.$store
                    .dispatch('login', {
                        email: this.email,
                        password: this.password
                    })
                    .then(() => {
                        
                        this.$router.push({
                            path: '/dashboard'
                        })
                    })
                    .catch(err => {
                        this.error = err.message
                        console.log(err.message)
                    })
            }
        }
    }
</script>

<style>
h1{
    font-size: 2rem !important;
}
</style>