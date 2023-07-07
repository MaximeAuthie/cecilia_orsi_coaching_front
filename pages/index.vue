<template>
    <div class="banner" :style="{backgroundImage: page.bannerUrl}">
        <div class="banner_logo">
            <img src="/logo_nav_header.png" alt="">
        </div>
        <div class="banner_message">
            <h5>{{ bannerMessages[activeMessageIndex] }}</h5>
        </div> 
        
        <div class="banner_buttons">
            <NuxtLink to="/appointment"><input class="button button_main" type="button" value="Prendre rendez-vous"></NuxtLink>
            <NuxtLink to="/contact"><input class="button button_secondary" type="button" value="Me contacter"></NuxtLink>
        </div>
    </div>
    <div class="content"></div>
</template>

<script lang="ts">

    export default {
        data() {
            return {
                page: {
                    title:         'Accueil',
                    bannerUrl:     'url(https://images.pexels.com/photos/1123256/pexels-photo-1123256.jpeg)',
                    img1Url:       '',
                    img1Alt:       '',
                    img2Url:       '',
                    img2Alt:       '',
                    text1:         '',
                    text2:         ''
                },
                activeMessageIndex: 0,
                activeMessageText: '',
                bannerMessages: [
                    'Définir un projet',
                    'Prendre du recul',
                    'Lever un blocage',
                    'Confiance en soi',
                    'Gérer ds conflits',
                    'Comprendre ses émotions',
                    'Mettre de la conscience sur une situation'
                ],
                interval: {} as ReturnType<typeof setInterval>,
            }
        },
    
        mounted() {
          this.interval = setInterval(async () => {
                if (this.activeMessageIndex < this.bannerMessages.length - 1) {
                    this.activeMessageIndex ++;
                } else {
                    this.activeMessageIndex = 0;
                }
                console.log(this.activeMessageIndex +" - "+ this.bannerMessages.length);
                
                this.activeMessageText = this.bannerMessages[this.activeMessageIndex];
            }, 4000)  
        },
        beforeUnmount() {
            clearInterval(this.interval);
        },
    };
</script>

<style scoped>

</style>