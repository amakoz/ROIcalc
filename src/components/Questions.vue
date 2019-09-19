<template>
    <div class="md:h-48 text-center relative">
        <template v-for="(question, index) in questions" v-if="index + 1 === step">

            <h2 class="text-2xl mb-6 max-w-lg">{{ question.title }}</h2>

            <div v-if="question.type === 'radio'"
                 class="flex flex-col items-start justify-center text-xl mb-6 w-20 mx-auto">
                <label v-for="(item, index) in question.data"
                       :for="item">
                    <input type="radio"
                           :name="question.name"
                           :id="item"
                           v-validate="'required'"
                           :value="item"
                           class="mr-2"
                           v-model="answers[question.name]">
                    {{ item }}
                </label>
            </div>

            <div v-else-if="question.type === 'number'">
                <label :for="question.name"
                       :class="{'currency': question.currency}">
                    <input type="number"
                           :name="question.name"
                           :id="question.name"
                           placeholder="..."
                           v-validate="'required|min_value:1'"
                           :class="[question.currency ? 'text-right px-8' : 'text-center']"
                           v-model.number="answers[question.name]"
                           autofocus>
                </label>
            </div>

        </template>
    </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: 'Questions',

    model: {
      prop: 'form',
      event: 'answered',
    },

    props: {
      form: {
        type: Object,
        required: true,
      }
    },

    data() {
      return {
        answers: {
          quality: 'High',
          tickets: null,
          charge: null,
        },
      }
    },

    computed: {
      ...mapState([
        'questions',
        'step'
      ]),
    },

    watch: {
      answers: {
        handler(value){
          this.$emit('answered', value)
        },
        deep: true
      }
    },

    mounted() {
      if (localStorage.hasOwnProperty('roicalc')) {
        this.answers = JSON.parse(localStorage.getItem('roicalc'));
      }
    }
  };
</script>