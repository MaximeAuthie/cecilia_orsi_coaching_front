<template>
    <BannerComponent :imgUrl="page.bannerUrl" :messages="bannerMessages" :isMainButtonActive="page.isMainButtonActive" :isSecondButtonActive="page.isSecondaryButtonActive" ></BannerComponent>
    <div class="content">
        <section class="content_description">
            <div class="content_description_images">
                <div class="content_description_image" :style="{backgroundImage: page.img1Url}">
                    <h5>A la Villa Santé</h5>
                </div>
                <div class="content_description_image" :style="{backgroundImage: page.img2Url}">
                    <h5>En visio</h5>
                </div>
            </div>
                <p>
                    Les rendez-vous se déroulent en visio via zoom ou sur Toulouse à la Villa santé :
                </p>
                <p class="center"><strong>19 rue de fenouillet <br> 31200 Toulouse</strong></p>
                <p>    
                    <strong>ATTENTION :</strong> Toute séance non annulée le jour même est due.<br>
                </p>
                <h3>Prise de rendez-vous en ligne</h3>
                <div class="content_description_appointment_module">
                    <iframe src="https://soins.calendoc.net/pro/4907/119973888727169/book/date/embedded"></iframe>
                </div>
                <h3>Prise de rendez-vous classique</h3>
                <p>
                    Vous avez des questions ou des demandes particulières concernant votre rendez-vous?<br>
                    <br>
                    N’hésitez pas à utiliser notre formulaire de contact ou à ma joindre par téléphone
                </p>
                <div class="content_description_image_buttons">
                    <NuxtLink to="/contact"><input class="button button_content" type="button" value="Formulaire de contact"></NuxtLink>
                    <NuxtLink to="tel:+33139380101"><input class="button button_content" type="button" value="Appel gratuit"></NuxtLink>
                </div>
                
            
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
                    title:                      'Prendre rendez-vous',
                    bannerUrl:                  'url(https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg)',
                    img1Url:                    "url(./assets/images/villa_sante.png)",
                    img1Alt:                    '',
                    img2Url:                    'url(https://images.pexels.com/photos/42408/pexels-photo-42408.jpeg)',
                    img2Alt:                    '',
                    text1:                      '',
                    text2:                      '', 
                    isMainButtonActive:         false,
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
                    'Prendre rendez-vous'
                ],
            }
        },
    };
</script>

<style scoped>
    .content_description_images {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    .content_description_image h5 {
        z-index: 5;
    }

    .button_content {
        margin: 1vh;
    }
    .content_description_image_buttons {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 5vh 0;
    }

    .content_description_appointment_module {
        width: 100%;
    }

    .content_description_appointment_module iframe {
        width: 100%;
        height: 800px;
    }


    @media screen and (min-width: 1210px) {
        .content_description_images {
            flex-direction: row;
            justify-content: space-around;
        }
        .content_description_appointment_module iframe {
            display: block;
            width: 80%;
            height: 1000px;
            margin: auto;
        }
    }
</style>