<template>
    <BannerComponent :imgUrl="pageData.bannerUrl" :messages="pageData.bannerMessages" :isMainButtonActive="pageData.isMainButtonActive" :isSecondButtonActive="pageData.isSecondaryButtonActive" ></BannerComponent>
    <div class="content">
        <section class="content_description">
            <div class="content_description_avatar" :style="{backgroundImage: pageData.img1Url}"></div>
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
                PageService.getPageById(2)
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
                title: 'Cécilia Orsi Coaching - Qui je suis?',
                meta: [
                    {name: 'description', content: 'Présentation de Cécilia Orsi, coach de vie certifiée à Toulouse.'},
                    {name:'robots', content:'index, follow'},
                    {"http-equiv": 'Content-Language', content: 'fr'},
                    {name: 'keywords', content: 'coach, coaching, coaching de vie, toulouse, haute-garonne, présentation'},
                    {property: 'og:title', content: 'Cécilia Orsi Coaching - Qui je suis?'},
                    {property: 'og:type', content: 'website'},
                    {property: 'og:url', content:'https://www.cecilia-orsi.fr/owner'},
                    {property: 'og:image', content: './assets/images/logo_header.png'},
                    {property: 'og:description', content: 'Présentation de Cécilia Orsi, coach de vie certifiée à Toulouse.'},
                    {name: 'twitter:card', content: 'summary_large_image'},
                    {name: 'twitter: title', content: 'Cécilia Orsi Coaching - Qui je suis?'},
                    {name: 'twitter:description', content: 'Présentation de Cécilia Orsi, coach de vie certifiée à Toulouse.'},
                    {name: 'twitter:image', content: './assets/images/logo_header.png'}
                ],
                link: [{rel: 'icon', href: './assets/images/icone_tree.png'}]
            })
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