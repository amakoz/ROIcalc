<template>
    <div class="flex items-center justify-center mt-6">
        <span v-for="(item, index) in total" class="h-1 w-16 md:w-24 mx-4"
              :class="[(index + 1) <= step ? 'bg-green-400 cursor-pointer' : 'bg-black opacity-50 pointer-events-none']"
              @click="goToStep(index+1)"></span>
    </div>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    name: 'Stepper',

    props: {
      step: {
        type: Number,
        default: 1,
      },
      total: {
        type: Number,
        default: 1,
      },
    },

    methods: {
      ...mapActions(['setStep']),

      goToStep(value) {
        this.setStep(value);
      }
    }
  };
</script>