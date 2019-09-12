<template>
    <div id="app" class="flex min-h-screen flex-col overflow-x-hidden bg-cover bg-center bg-no-repeat text-white"
         :style="{backgroundImage: `url(${require('@/assets/images/bg.jpg')})`}">
        <div class="gradient"></div>
        <router-view class="flex-1 z-10"/>
    </div>
</template>
