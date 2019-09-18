<template>
    <table class="roi-table" v-if="Object.keys(data).length">
        <tr>
            <th></th>
            <th>Home Grown</th>
            <th>Company</th>
        </tr>
        <template v-for="row in data">
            <tr :class="[row.title === 'Total fixed costs' ? 'font-bold' : '']">
                <td class="flex items-center justify-start font-normal">{{ row.title }} <span v-if="row.desc" class="tippy" v-tippy :content="row.desc">?</span></td>
                <template v-if="!row.type">
                    <td>{{ row.first | formatNumber }}</td>
                    <td>{{ row.second | formatNumber }}</td>
                </template>
                <template v-else-if="row.type === 'percent'">
                    <td>{{ row.first }}%</td>
                    <td>{{ row.second }}%</td>
                </template>
                <template v-else>
                    <td>{{ row.first }}</td>
                    <td>{{ row.second }}</td>
                </template>
            </tr>
            <tr v-if="row.title === 'Total fixed costs'">
                <td class="h-12"></td>
                <td></td>
                <td></td>
            </tr>
        </template>
    </table>
</template>

<script>

  export default {
    name: 'ResultsTable',

    props: {
      data: {
        type: Object,
        required: true,
      }
    },

    filters: {
      formatNumber: function (value) {
        return !value ? '€ ' + 0 : '€ ' + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
      }
    },
  };
</script>