<template>
    <BannerComponent :imgUrl="page.bannerUrl" :messages="bannerMessages" :isMainButtonActive="page.isMainButtonActive" :isSecondButtonActive="page.isSecondaryButtonActive" ></BannerComponent>
    <div class="content">
        <section class="content_description">
            <div class="content_description_avatar" :style="{backgroundImage: page.img1Url}"></div>
            <p>
                Je m’appelle Cécilia Orsi, j’ai 31 ans je vis à Toulouse.<br>
                <br>
                Ayant été anxieuse sociale pendant des années, je sais l’importance d’un accompagnement adéquat.
                Suite à de nombreuses expériences professionnelles (la plupart dans le social et la petite enfance), passionnée de psychologie et de compréhension des comportements humains je décide d’aller plus loin dans mes envies et mes convictions. <br>
                J’entreprends un travail sur moi qui m’as permis de comprendre mon fonctionnement et de m’ouvrir à ce que j’aime le plus : comprendre et aider les autres.<br>
                <br>
                Ma première formation fût en psychologie et plus particulièrement en thérapies brèves (Thérapie cognitivo comportementale).<br>     
                Une fois obtenue, j’ai par la suite entrepris une formation certifiante en coaching de vie.<br>
                Aujourd’hui entrepreneuse, j’accompagne des femmes et des hommes dans de multiples problématiques, pour leur permettre d’être en accord avec leurs besoins et leurs envies.<br>
                <br>
                Mon but sera de vous accompagner en toute neutralité, de vous aider à cheminer vers un mieux-être ou un objectif définit ensemble. Dans ma pratique il y a bien sur de l’écoute active, des questionnements mais aussi des outils qui vous serons utiles lors de vos réflexions et qui vous permettront d’y voir plus clair.<br>
                <br>
                Mon approche est humaniste et j’utilise principalement l’analyse transactionnelle comme méthodologie de travail, cependant je m’adapte à vous et nous voyons ensemble ce qui vous convient le plus.<br>
                <br>
                A bientôt!
            </p>
            <NuxtLink to="/appointment"><input class="button button_content" type="button" value="Prendre rendez-vous"></NuxtLink>
        </section>
        <section class="content_tiles">
            <TileComponent v-for="tile in tilesList" :pageTitle="tile.title" :pagePath="tile.path" :pageImgUrm="tile.imgUrl" :fullWidth="tile.fullWidth"></TileComponent>
        </section>
    </div>
</template>

<script lang="ts">

    export default {
        data() {
            return {
                page: {
                    title:                      'Qui suis-je?',
                    bannerUrl:                  'url(https://images.pexels.com/photos/2832032/pexels-photo-2832032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
                    img1Url:                    'url(./assets/images/cecilia-orsi.png)',
                    img1Alt:                    '',
                    img2Url:                    '',
                    img2Alt:                    '',
                    text1:                      '',
                    text2:                      '',
                    isMainButtonActive:         true,
                    isSecondaryButtonActive :   true
                },
                tilesList: [
                    {
                        title: "Tarifs",
                        path: "/appointment",
                        imgUrl: "url(https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg)",
                        fullWidth: false
                    },
                    {
                        title: "Blog",
                        path: "/blog",
                        imgUrl: "url(https://images.pexels.com/photos/4099355/pexels-photo-4099355.jpeg)",
                        fullWidth: false
                    },
                    {
                        title: "Prendre rendez-vous",
                        path: "/appointment",
                        imgUrl: "url(https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg)",
                        fullWidth: false
                    },
                    {
                        title: "Contact",
                        path: "/contact",
                        imgUrl: "url(https://images.pexels.com/photos/261599/pexels-photo-261599.jpeg)",
                        fullWidth: false
                    },
                    {
                        title: "Mon instagram",
                        path: "https://www.instagram.com/cecilia_orsi_coaching/",
                        imgUrl: "url(https://images.pexels.com/photos/13288521/pexels-photo-13288521.jpeg)",
                        fullWidth: false
                    }
                ],
                bannerMessages: [
                    'Qui suis-je?'
                ],
            }
        },
        mounted() {
            const numberOfTiles = this.tilesList.length;
            if (numberOfTiles %2 != 0) {
                this.tilesList[numberOfTiles-1].fullWidth = true;
            }
        },
    };
</script>

<style scoped>
.content_description_avatar {
    width: 30vh;
    height: 30vh;
    border-radius: 20vh;
    background-size: cover; 
    background-position: center;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    margin: 10vh 0;
}
</style>