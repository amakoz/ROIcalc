import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

async function stall(stallTime = 3000) {
  await new Promise(resolve => setTimeout(resolve, stallTime));
}

function getRand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default new Vuex.Store({
  state: {
    step: 1,
    form: {
      quality: 'High',
      tickets: null,
      charge: null,
    },
    questions: [
      {
        name: 'quality',
        title: 'What level of streaming quality are you aiming for?',
        type: 'radio',
        data: ['High', 'Mid', 'Entry'],
      },
      {
        name: 'tickets',
        title: 'How many tickets do you estimate to sell?',
        type: 'number',
      },
      {
        name: 'charge',
        title: 'How much do you plan to charge per ticket for your Live PPV event?',
        type: 'number',
        icon: '',
        currency: true,
      },
    ],
    result: {},
  },
  mutations: {
    decreaseStep(state) {
      state.step -= 1;
    },
    increaseStep(state) {
      state.step += 1;
    },
    setStep(state, step) {
      state.step = step;
    },
    setResult(state, data) {
      state.result = data;
    },
    resetApp(state) {
      state.step = 1;
      state.form = {
        quality: 'High',
        tickets: null,
        charge: null,
      };
      localStorage.removeItem('roicalc');
    },
  },
  actions: {
    decreaseStep({commit}) {
      commit('decreaseStep');
    },

    increaseStep({commit}) {
      commit('increaseStep');
    },

    resetApp({commit}) {
      commit('resetApp');
    },

    setStep({commit}, step) {
      commit('setStep', step);
    },

    async getResult({commit}, payload) {
      // api call in real app
      await stall();

      const result = {
        siteDevelopment: {
          title: 'Revenues',
          first: getRand(10000000, 12000000),
          second: getRand(12000000, 14000000),
        },
        siteMaintance: {
          title: 'Costs',
          first: getRand(500000, 800000),
          second: getRand(800000, 1000000),
        },
        recording: {
          title: 'Profits',
          first: getRand(10000000, 12000000),
          second: getRand(12000000, 14000000),
        },
      };

      commit('setResult', result);
    },

    async getExtendedResult({commit}, payload) {
      // api call in real app
      await stall();

      const resultExtended = {
        siteDevelopment: {
          title: 'Site development',
          desc: 'Lorem ipsum...',
          first: getRand(1000, 14000),
          second: 0,
        },
        siteMaintance: {
          title: 'Site maintance',
          desc: 'Lorem ipsum...',
          first: getRand(1000, 14000),
          second: 0,
        },
        recording: {
          title: 'Recording & production costs',
          desc: 'Lorem ipsum...',
          first: getRand(9000, 14000),
          second: getRand(14000, 20000),
        },
        quality: {
          title: 'Expected quality',
          desc: 'Lorem ipsum...',
          type: 'string',
          first: 'Mid',
          second: 'High',
        },
        total: {
          title: 'Total fixed costs',
          desc: 'Lorem ipsum...',
          first: getRand(20000, 25000),
          second: getRand(25000, 40000),
        },
        conversion: {
          title: 'Conversion rate',
          desc: 'Lorem ipsum...',
          type: 'percent',
          first: getRand(1, 50),
          second: getRand(60, 100),
        },
      };

      commit('setResult', resultExtended);
    },
  },
});
