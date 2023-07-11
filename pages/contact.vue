<template>
    <BannerComponent :imgUrl="page.bannerUrl" :messages="bannerMessages" :isMainButtonActive="page.isMainButtonActive" :isSecondButtonActive="page.isSecondaryButtonActive" ></BannerComponent>
    <div class="content">
        <section class="content_form">
            <h2>Envoyer un message</h2>
            <form @submit.prevent="">
                <label for="firstName">Votre prénom</label><br>
                <input  class="form_input" type="text" name="firstName" id="firstName"><br>
                <label for="lastName">Votre nom</label><br>
                <input  class="form_input" type="text" name="lastName" id="lastName"><br>
                <label for="email">Votre adresse mail</label><br>
                <input  class="form_input" type="mail" name="email" id="email"><br>
                <label for="subject">Sujet de votre message</label><br>
                <input  class="form_input" type="text" name="subject" id="subject"><br>
                <label for="content">Votre message</label><br>
                <textarea name="content" id="content">Saisir votre message ici</textarea>

                <input class="button button_form" type="button" value="Envoyer">
            </form>
           
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
                    title:                      'Contact',
                    bannerUrl:                  'url(https://images.pexels.com/photos/261599/pexels-photo-261599.jpeg)',
                    img1Url:                    '',
                    img1Alt:                    '',
                    img2Url:                    '',
                    img2Alt:                    '',
                    text1:                      '',
                    text2:                      '',
                    isMainButtonActive:         true,
                    isSecondaryButtonActive :   false
                },
                tilesList: [
                    {
                        title: "Qui suis-je?",
                        path: "/owner",
                        imgUrl: "url(/cecilia-orsi.png)"
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
                        title: "Mon instagram",
                        path: "https://www.instagram.com/cecilia_orsi_coaching/",
                        imgUrl: "url(https://images.pexels.com/photos/13288521/pexels-photo-13288521.jpeg)"
                    }
                ],
                bannerMessages: [
                    'Contact',
                ],
            }
        },
    };
</script>

<style scoped>

</style>