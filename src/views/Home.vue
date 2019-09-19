<template>
    <div class="flex">
        <div class="container mx-auto flex flex-col justify-center items-center text-center">
            <h1 class="text-2xl md:text-5xl mb-6 md:mb-0">Lorem ipsum dolor sit amet.</h1>
            <h2 class="text-lg md:text-2xl mb-12 max-w-5xl">
                Lorem ipsum dolor <strong>sit amet, consectetur adipisicing</strong>
                elit. Accusamus architecto atque excepturi iusto libero magni obcaecati sequi similique! Cumque debitis ex nostrum <strong>quae quidem quod recusandae</strong>
                rem repellendus sed vitae. Lorem ipsum dolor sit amet.</h2>
            <router-link class="btn btn--gradient" to="calc" tag="button">Lorem ipsum dolor!</router-link>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'home',
  };
</script>
