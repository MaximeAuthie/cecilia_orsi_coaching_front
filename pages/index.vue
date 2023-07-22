<template>
    <BannerComponent :imgUrl="pageData.bannerUrl" :messages="pageData.bannerMessages" :isMainButtonActive="pageData.isMainButtonActive" :isSecondButtonActive="pageData.isSecondaryButtonActive" ></BannerComponent>
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
            <TileComponent v-for="tile in pageData.tilesList" :pageTitle="tile.title_tile" :pagePath="tile.link_tile" :pageImgUrm="tile.img_url_tile" :full-width="tile.fullWidth" ></TileComponent>
        </section>
    </div>
</template>

<script>
    import PageService from '@/services/PageService';

    export default {
        data() {
            return {
                pageData: {
                    title:                      '',
                    bannerUrl:                  '',
                    img1Url:                    '',
                    img2Url:                    '',
                    text1:                      '',
                    text2:                      '',
                    isMainButtonActive:         false,
                    isSecondaryButtonActive :   false,
                    tilesList: [],
                    tilesNumber: 0,
                    bannerMessages:[],
                }
            }
        },
        methods: {
            getPageData() {

                //? Appeler la méthode getPageById du service PageService
                PageService.getPageById(1)
                .then(response => {
                    console.log("response chargée");

                    //? A réception de la réponse du service, renseigner l'objet pageData avec les donnée de la réponse
                    this.pageData.title =                       response.title_page;
                    this.pageData.bannerUrl =                   response.banner_url_page;
                    this.pageData.img1Url =                     response.img1_url_page;
                    this.pageData.img2Url =                     response.img2_url_page;
                    this.pageData.text1 =                       response.text1_page;
                    this.pageData.text2 =                       response.text2_page;
                    this.pageData.isMainButtonActive =          response.isMainButtonActive_page;
                    this.pageData.isSecondaryButtonActive =     response.isSecondaryButtonActive_page;
                    this.pageData.tilesList =                   response.tiles_list;
                    this.pageData.tilesNumber =                 response.tiles_list.length;

                    for (let i=0 ; i<response.BannerTextsList.length; i++) {
                        this.pageData.bannerMessages.push(response.BannerTextsList[i].content_banner_text);
                    }

                    //? On ajoute un proprité fullWitdh à chaque objet de this.data.tilesList (pour gérer la largueur des tuiles via une props)
                    for (let i=0 ; i<this.pageData.tilesList.length; i++) {
                        this.pageData.tilesList[i].fullWidth = false;
                    }
                })
                .then(() => {

                    //? Si le nombre de tuile est impair, la valeur de la propriété fullWidth passe à true pour la dernière tuile
                    if (this.pageData.tilesNumber%2 != 0) {
                        console.log("prout");
                        this.pageData.tilesList[this.pageData.tilesNumber-1].fullWidth = true;
                    }
                    console.log('bé');
                })
                },
        },
        mounted() {
            //? Exécution de la méthode récupérant les données de la page dans la BDD et qui les place dans l'objet this.pageData
            this.getPageData();

            //? Renseigner les balises HTML de <head> pour le SEO
            useHead({
                title: 'Cécilia Orsi Coaching',
                meta: [
                    {name: 'description', content: 'Cécilia Orsi, coach de vie certifiée à Toulouse'},
                    {name:'robots', content:'index, follow'},
                    {"http-equiv": 'Content-Language', content: 'fr'},
                    {name: 'keywords', content: 'coach, coaching, coaching de vie, toulouse, haute-garonne'},
                    {property: 'og:title', content: 'Cécilia Orsi, coach de vie certifiée à Toulouse'},
                    {property: 'og:type', content: 'website'},
                    {property: 'og:url', content:'https://www.cecilia-orsi.fr/'},
                    {property: 'og:image', content: './assets/images/logo_header.png'},
                    {property: 'og:description', content: 'Coach de vie certifiée intervenant en région Toulousaine. Accompagnement personnalisé pour atteindre un mieux-être et/ou réaliser ses objectifs.'},
                    {name: 'twitter:card', content: 'summary_large_image'},
                    {name: 'twitter: title', content: 'Cécilia Orsi, coach de vie certifiée à Toulouse'},
                    {name: 'twitter:description', content: 'Coach de vie certifiée intervenant en région Toulousaine. Accompagnement personnalisé pour atteindre un mieux-être et/ou réaliser ses objectifs.'},
                    {name: 'twitter:image', content: './assets/images/logo_header.png'}
                ],
                link: [{rel: 'icon', href: './assets/images/icone_tree.png'}]
            })
        },

        
    };
</script>

<style scoped>

</style>