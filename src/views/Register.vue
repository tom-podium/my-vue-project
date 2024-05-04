<template>
    <v-card class="mx-md-auto px-5 py-10" width="100%" flat outlined>
        <h1 class="text-center">Register</h1>
        <form v-on:submit.prevent action="#" method="POST">
            <div>
                <label for="email">Name</label>
                <v-text-field
                    v-model="name"
                    id="name"
                    type="name" 
                    required
                    outlined
                    label="Name   "
                ></v-text-field>
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
                @click="register()"
                type="submit"
                >
                Register
                </v-btn>
            </div>
            <div v-if="error" class="bg-red-100">
                {{ error }}
            </div>
            <p class="mt-4 text-sm">Already have an account? <router-link to="/login" class="text-black font-bold">Login</router-link>
            </p>
        </form>
    </v-card>
    
</template>
<script>
    export default {
        name: 'Project-Register',
        data() {
            return {
                name: '',
                email: '',
                password: ''
            }
        },
        methods: {
            register() {
                this.$store
                    .dispatch('register', {
                        name: this.name,
                        email: this.email,
                        password: this.password
                    })
                    .then(() => {
                        this.$router.push({
                            path: '/features'
                        })
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        }
    }
</script>