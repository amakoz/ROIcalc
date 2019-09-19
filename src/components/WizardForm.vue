<template>
    <div class="flex items-center justify-center flex-col container"
         tabindex="0"
         @keyup.left.prevent="prevPage"
         @keyup.right.prevent="nextPage">

        <Questions v-model="form" ref="questions"></Questions>

        <div class="flex flex-col-reverse md:flex-row items-center justify-center py-6 md:py-0">
            <button class="btn btn--red"
                    @click="prevPage"
                    :disabled="step <= 1">
                < Back
            </button>
            <button class="btn btn--green mx-4"
                    @click="nextPage">
                {{ isNotLastStep ? 'Next question' : 'See the results'}} <span class="arrow">></span>
            </button>
        </div>

        <Stepper :step="step" :total="questions.length"></Stepper>
    </div>
</template>

<script>
  import Stepper from '@/components/Stepper.vue';
  import Questions from '@/components/Questions.vue';
  import {mapState, mapActions} from 'vuex';

  export default {
    name: 'WizardForm',

    components: {
      Stepper,
      Questions,
    },

    data() {
      return {
        form: {},
      }
    },

    computed: {
      ...mapState([
        'questions',
        'step',
      ]),

      isNotLastStep: function () {
        return this.step < this.questions.length;
      },
    },

    methods: {
      ...mapActions([
        'increaseStep',
        'decreaseStep',
        'setData',
      ]),

      prevPage(){
        if (this.step > 1) this.decreaseStep();
      },

      nextPage(){
        this.validateStep();
      },

      validateStep() {
        this.$refs.questions.$validator.validate().then(result => {
          if (!result) {
//            errors
            return null;
          }
          else {
//            success
            if (this.isNotLastStep) {
              this.increaseStep();
              return;
            }
            return this.submitUpdate();
          }
        });
      },

      submitUpdate() {
        localStorage.setItem('roicalc', JSON.stringify(this.form));
        this.$router.push({ path: 'results' });
      },
    },
  };
</script>