<template>
    <div class="flex items-center justify-center flex-col"
         tabindex="0"
         @keyup.left="prevPage"
         @keyup.right="nextPage">

        <div v-for="(question, index) in questions" v-if="index + 1 === step" class="h-48 text-center">

            <h2 class="text-2xl mb-6">{{ question.title }}</h2>

            <div v-if="question.type === 'radio'" class="flex flex-col items-start justify-center text-xl mb-6">
                <label v-for="(item, index) in question.data" :for="item">
                    <input type="radio"
                           :name="question.name"
                           :id="item"
                           :value="item"
                           class="mr-2"
                           v-model="form[question.name]">
                    {{ item }}
                </label>
            </div>

            <div v-else-if="question.type === 'number'">
                <label :for="question.name"
                       :class="{'currency': question.currency}">
                    <input :id="question.name"
                           :name="question.name"
                           placeholder="0"
                           :class="[question.currency ? 'text-right px-8' : 'text-center']"
                           v-model.number="form[question.name]"
                           type="number">
                </label>
            </div>

        </div>

        <div class="flex items-center justify-center">
            <button class="btn text-red-600 hover:text-red-500 transition uppercase mx-4" :disabled="step <= 1"
                    @click="prevPage">< Back
            </button>
            <button class="btn btn--green mx-4" @click="nextPage">
                {{ step === questions.length ? 'See the results' : 'Next question'}} >
            </button>
        </div>


        <Stepper :step="step" :total="questions.length"></Stepper>
    </div>
</template>

<script>
  import Stepper from '@/components/Stepper.vue';

  export default {
    name: 'WizardForm',

    components: {
      Stepper,
    },

    data() {
      return {
        step: 1,
        form: {
          quality: 'High',
          tickets: null,
          charge: null,
        },
        questions: [
          {
            name: 'quality',
            title: 'What level?',
            type: 'radio',
            data: ['High', 'Mid', 'Entry'],
          },
          {
            name: 'tickets',
            title: 'How many tickets?',
            type: 'number',
          },
          {
            name: 'charge',
            title: 'How much charge?',
            type: 'number',
            currency: true,
          },
        ],
      }
    },

    methods: {
      prevPage(){
        if (this.step > 1) this.step--;
      },
      nextPage(){
        if (this.step < this.questions.length) this.step++;
      }
    }
  };
</script>