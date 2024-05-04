<template>
    <div>    
        <stripe-checkout
            ref="checkoutRef"
            mode="payment"
            :pk="publishableKey"
            :line-items="lineItems"
            :success-url="successURL"
            :cancel-url="cancelURL"
            @loading="v => loading = v"
        />
        <button @click="submit">Pay now!</button>
    </div>
  </template>
  
  <script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';

  export default {
    name: 'Project-Payment',
    components: {
    StripeCheckout,
  },
  data () {
    this.publishableKey = "pk_test_51PAznLP2XpuBoh3wICPBzNGl26e25szRWB0ubOsISMflsQyDn7yH0qgNF88AQ5m1RFCkHpFs5J6TK6BPpfNPu45y00MjvwmlIQ";
    return {
      loading: false,
      lineItems: [
        {
          price: 'price_1PB0VQP2XpuBoh3wKAHNdAqQ', // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
        },
      ],
      successURL: 'https://example.com/success',
      cancelURL: 'https://example.com/cancel',
    };
  },
  methods: {
    submit () {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
  }
  </script>
  