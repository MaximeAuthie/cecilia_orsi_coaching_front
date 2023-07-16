<template>
    <BannerComponent :imgUrl="page.bannerUrl" :messages="bannerMessages" :isMainButtonActive="page.isMainButtonActive" :isSecondButtonActive="page.isSecondaryButtonActive" ></BannerComponent>
    <div class="content">
        <section class="content_description">
            <h2>Pourquoi venir en séance?</h2>
            <p>Chacun d’entre nous peut à un moment donné, se retrouver dans une période compliquée. Il est donc normal de se sentir démuni face à certaines situations, à certains changements, à nos manques de décisions, à nos émotions débordantes ou au contraire refoulées, à notre stress… Ce qui devient problématique, c’est lorsque ces situations et ces émotions nous freinent, nous font souffrir et perdurent dans le temps.</p>
            <h3>Comment prendre le recul nécessaire? Par où commencer?</h3>
            <p>C’est précisément dans ces moments-là qu’une personne extérieure, permet de vous aider à débloquer la situation et d’aller de l’avant avec la bonne écoute, les bons outils et des questionnements adéquats pour vous permettre une réflexion appropriée.</p>
            <h3>Ce que vous pouvez faire</h3>
            <p>Accepter de vous livrer, être dans une véritable optique de changement.Si vous vous sentez concernés, si vous souhaitez prendre les choses en main, je vous invite à m’écrire via le formulaire de contact ou à prendre rendez-vous dans la section « Rendez-vous ».</p>
            <NuxtLink to="/appointment"><input class="button button_content" type="button" value="Prendre rendez-vous"></NuxtLink>
        </section>
        <section class="content_tiles">
            <TileComponent v-for="tile in tilesList" :pageTitle="tile.title" :pagePath="tile.path" :pageImgUrm="tile.imgUrl" ></TileComponent>
        </section>
    </div>
</template>

<script lang="ts">

    export default {
       
        data() {
            return {
                page: {
                    title:                      'Accueil',
                    bannerUrl:                  'url(https://images.pexels.com/photos/1123256/pexels-photo-1123256.jpeg)',
                    img1Url:                    '',
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
                        imgUrl: "url(./assets/images/cecilia-orsi.png)"
                    },
                    {
                        title: "Tarifs",
                        path: "/appointment",
                        imgUrl: "url(https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg)"
                    },
                    {
                        title: "Blog",
                        path: "/blog",
                        imgUrl: "url(https://images.pexels.com/photos/4099355/pexels-photo-4099355.jpeg)"
                    },
                    {
                        title: "Prendre rendez-vous",
                        path: "/appointment",
                        imgUrl: "url(https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg)"
                    },
                    {
                        title: "Contact",
                        path: "/contact",
                        imgUrl: "url(https://images.pexels.com/photos/261599/pexels-photo-261599.jpeg)"
                    },
                    {
                        title: "Mon instagram",
                        path: "https://www.instagram.com/cecilia_orsi_coaching/",
                        imgUrl: "url(https://images.pexels.com/photos/13288521/pexels-photo-13288521.jpeg)"
                    }
                ],
                bannerMessages: [
                    'Définir un projet',
                    'Prendre du recul',
                    'Lever un blocage',
                    'Confiance en soi',
                    'Gérer des conflits',
                    'Comprendre ses émotions',
                    'Mettre de la conscience sur une situation'
                ],
            }
        },
    };
</script>

<style scoped>

</style>