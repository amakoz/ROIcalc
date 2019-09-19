<template>
    <div class="flex flex-col justify-center items-center container py-8">
        <div v-if="loading" class="spinner"></div>
        <div v-else-if="formData === null">
            <router-link class="btn btn--gradient" to="calc" tag="button">Fill the form</router-link>
        </div>
        <div class="w-full max-w-3xl mx-auto" v-else>
            <p v-if="extended" class="text-2xl mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis distinctio dolor facilis minima quasi quibusdam quos sunt unde, vero voluptas!</p>
            <ResultTable :data="result"></ResultTable>
            <p class="my-6 text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque cupiditate dolor eaque, esse eum laborum minus nulla, qui quibusdam sapiente sint ut, veritatis? Dignissimos earum error id nemo nesciunt odit reprehenderit sequi sint totam veniam! Aspernatur dolores enim saepe?</p>
            <div class="flex flex-col justify-center items-center">
                <router-link v-if="!extended" class="btn btn--green my-3" to="/results/extended" tag="button">
                    Find out now <span class="arrow">></span></router-link>
                <router-link class="btn btn--green-light" to="/home" tag="button">< Start Again</router-link>
                <button class="btn btn--red" @click="($router.go(-1))">< Back</button>
            </div>
        </div>
    </div>
</template>

<script>
  import {mapActions, mapState} from 'vuex';
  import ResultTable from '@/components/ResultTable.vue';

  export default {
    name: 'Results',

    data() {
      return {
        loading: true,
        formData: {},
        extended: null,
      }
    },

    components: {
      ResultTable,
    },

    methods: {
      ...mapActions([
        'getResult',
        'getExtendedResult',
      ]),

      async getData() {
        if (!this.extended) {
          await this.getResult(this.formData);
        }
        else {
          await this.getExtendedResult(this.formData);
        }
      }
    },

    computed: {
      ...mapState(['result']),
    },

    async mounted() {
      this.extended = this.$route.params.extended;
      if (localStorage.hasOwnProperty('roicalc')) {
        this.formData = JSON.parse(localStorage.getItem('roicalc'));
        await this.getData();
      }
      this.loading = false;
    },

    watch: {
      async $route (to, from){
        this.extended = to.params.extended;
        this.loading = true;
        await this.getData();
        this.loading = false;
      }
    }
  };
</script>
