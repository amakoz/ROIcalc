<template>
    <div class="flex flex-col justify-center items-center">
        <WizardForm></WizardForm>
    </div>
</template>

<script>
  import WizardForm from '@/components/WizardForm.vue';
  export default {
    name: 'calc',

    components: {
      WizardForm,
    }
  };
</script>
