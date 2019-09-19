<template>
    <div class="flex items-center justify-center mt-6">
        <span v-for="(item, index) in total" class="h-1 w-16 md:w-24 mx-4" :class="[(index + 1) <= step ? 'bg-green-400' : 'bg-black opacity-50']"></span>
    </div>
</template>

<script>
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
  };
</script>