<template>
    <BannerComponent :imgUrl="page.bannerUrl" :messages="bannerMessages" :isMainButtonActive="page.isMainButtonActive" :isSecondButtonActive="page.isSecondaryButtonActive" ></BannerComponent>
    <div class="content">
        <section class="content_description">
            <div class="content_description_quote">
                <div class="content_description_quote_bar"></div>
                <h3>Le meilleur investissement que vous puissiez faire, c'est d'investir en vous-même.</h3>
                <br>
                <h3>Warren Buffet</h3>
            </div>
            <div class="content_description_quote_bar"></div>
            <div class="content_description_image" :style="{backgroundImage: page.img1Url}"></div>
            <p>
                Les rendez-vous se déroulent en visio via zoom ou sur Toulouse à la Villa santé :
            </p>
            <p class="center"><strong>19 rue de fenouillet <br> 31200 Toulouse</strong></p>
            
            <p>    
                <strong>ATTENTION :</strong> Toute séance non annulée le jour même est due.<br>
            </p>
            <h3>Coaching de base (60 minutes)</h3>
            <p>
                1 séance de coaching pour faire le point sur votre problématique, vous aider à éclaircir la situation et trouver des pistes d’amélioration en fonction de vos besoins. <br>
                Vous pouvez choisir de prendre plusieurs séances ou de vous contenter d’une séance unique.
            </p>
            <p class="center"><strong>55€ tarif plein</strong><br>25€ pour les personnes pour les étudiants et personnes au RSA</p>
            <h3>Coaching de suivi</h3>
            <p>
                5 séances d’une heure pour vous aider à atteindre un objectif, à dépasser vos blocages, prendre confiance en vous et connaître vos besoins et vos ressources.
            </p>
            <p class="center"><strong>260€ tarif plein</strong><br>115€ pour les personnes pour les étudiants et personnes au RSA</p>
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
                    title:                      'Tarifs',
                    bannerUrl:                  'url(https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg)',
                    img1Url:                    "url(./assets/images/villa_sante.png)",
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
                        title: "Qui suis-je?",
                        path: "/owner",
                        imgUrl: "url(./assets/images/cecilia-orsi.png)",
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
                    'Tarifs'
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

    h3 {
        margin-top: 13vh;
    }
    .content_description_quote {
        margin-top: 3vh;
    }
    .content_description_quote h3 {
        margin: 1vh 0;
    }
    .content_description_quote_bar {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 2px;
        background-color: #8EBBA7;
        cursor: pointer;
    }
    

    
</style>