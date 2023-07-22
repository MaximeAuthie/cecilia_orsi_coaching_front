<template>
    <BannerComponent :imgUrl="pageData.bannerUrl" :messages="pageData.bannerMessages" :isMainButtonActive="pageData.isMainButtonActive" :isSecondButtonActive="pageData.isSecondaryButtonActive" ></BannerComponent>
    <div class="content">
        <section class="content_categories">
            <div @click="showCategories" class="content_categories_title">
                <div class="content_categories_title_content">
                    <h5>Catégories</h5>
                    <svg v-if="isCategoriesVisible" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    <svg v-if="!isCategoriesVisible" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                </div>
            </div>
            <div v-if="isCategoriesVisible" class="content_categories_list">
                <CategoryTagComponent v-for="category in categories"
                    :name="category.name"
                    :color="category.color">
                </CategoryTagComponent>
            </div>
        </section>
        <section class="content_articles">
            <div class="content_article_title">
                <h5>A la une</h5>
            </div>
            <ArticlesFrontPageComponent
                :id="frontPageArticle.id"
                :title="frontPageArticle.title"
                :bannerUrl="frontPageArticle.bannerUrl"
                :categories="frontPageArticle.categories">
            </ArticlesFrontPageComponent>
            <div class="content_articles_list">
                <ArticlesTileComponent v-for="article in articles"
                    :id="article.id"
                    :title="article.title"
                    :bannerUrl="article.bannerUrl"
                    :summary="article.summary"
                    :date="article.date"
                    :user="article.user"
                    :categories="article.categories"
                ></ArticlesTileComponent>
            </div>
            <div v-if="isMoreThenNineArticles" class="content_articles_more">
                <div class="content_categories_title_content">
                    <h5>Voir plus</h5>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>
        </section>
        <br>
        <br>
        <br>
        <section class="content_tiles">
            <TileComponent v-for="tile in pageData.tilesList" :pageTitle="tile.title_tile" :pagePath="tile.link_tile" :pageImgUrm="tile.img_url_tile" :full-width="tile.fullWidth" ></TileComponent>
        </section>
    </div>
</template>

<script>
import PageService from '@/services/PageService';
import ArticleService from '@/services/ArticleService';
import CategoryService from '@/services/CategorieService';

    export default {
        data() {
            return {
                isMoreThenNineArticles: false,
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
                },
                categories : [],
                isCategoriesVisible: true,
                frontPageArticle: {},
                articles: []
            }
        },
        methods: {
            getArticles() {
                const dateOptions = {year: "numeric", month: "2-digit", day: "2-digit"};
                //? Appeler la méthode getAllArtivles du service ArticleService
                ArticleService.getAllArticles()
                .then(response => {
                    console.log(response);
                    for (let i=0 ; i<response.length ; i++) {
                        const articleCategories = [];
                        const articleDate = new Date(response[i].date_article);
                        for (let j=0 ; j<response[i].categories_list.length; j++) {
                            articleCategories.push(response[i].categories_list[j]);
                        }

                        const article = {
                            id:             response[i].id,
                            title:          response[i].title_article,
                            bannerUrl:      response[i].banner_url_article,
                            summary:        response[i].summary_article,
                            date:           articleDate.toLocaleDateString("fr-FR", dateOptions),
                            user: {
                                firstName:  response[i].user.first_name_user,
                                lastName:   response[i].user.last_name_user,
                            },
                            categories:     articleCategories
                        }
                        if (i==response.length - 1) {
                            this.frontPageArticle = article;
                            continue;
                        }

                        this.articles.push(article);
                    }
                });
            },
            getCategories() {
                CategoryService.getAllCategories()
                .then(response => {
                    for (let i=0 ; i<response.length ; i++) {
                        const category = {
                            name:   response[i].name_category,
                            color:  response[i].color_category
                        }

                        this.categories.push(category);
                    }
                })
            },
            showCategories() {
                this.isCategoriesVisible = !this.isCategoriesVisible;
            },
            showMoreArticles() {

            },
            getPageData() {

                //? Appeler la méthode getPageById du service PageService
                PageService.getPageById(4)
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
            this.getArticles();
            this.getCategories();

            //?Vérifier le nombre d'articles pour afficher la barre "voir plus"
            if (this.articles.length > 9) {
                this.isMoreThenNineArticles = true;
            }

            //? Renseigner les balises HTML de <head> pour le SEO
            useHead({
                title: 'Cécilia Orsi Coaching - Blog',
                meta: [
                    {name: 'description', content: 'Retrouvez ici tous mes articles et venez commenter et échanger avec la communauté.'},
                    {name:'robots', content:'index, follow'},
                    {"http-equiv": 'Content-Language', content: 'fr'},
                    {name: 'keywords', content: 'coach, coaching, coaching de vie, toulouse, haute-garonne, tarif, prestations'},
                    {property: 'og:title', content: 'Cécilia Orsi Coaching - Blog'},
                    {property: 'og:type', content: 'website'},
                    {property: 'og:url', content:'https://www.cecilia-orsi.fr/blog'},
                    {property: 'og:image', content: './assets/images/logo_header.png'},
                    {property: 'og:description', content: 'Retrouvez ici tous mes articles et venez commenter et échanger avec la communauté.'},
                    {name: 'twitter:card', content: 'summary_large_image'},
                    {name: 'twitter: title', content: 'Cécilia Orsi Coaching - Blog'},
                    {name: 'twitter:description', content: 'Retrouvez ici tous mes articles et venez commenter et échanger avec la communauté.'},
                    {name: 'twitter:image', content: './assets/images/logo_header.png'}
                ],
                link: [{rel: 'icon', href: './assets/images/icone_tree.png'}]
            })
        },
    };
</script>

<style scoped>
    .content_categories {
        margin-top: 5vh;
        /* background-color: aqua; */
    }
    
    .content_categories_list {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .content_categories_title {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 2px;
        background-color: #E28250;
        margin-bottom: 3vh;
        cursor: pointer;
    }

    .content_categories_title svg {
        stroke: #E28250;
        width: 25px;
        height: 25px;
    }
    .content_categories_title_content {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 5vh;
        padding-left: 1vh;
        padding-right: 1vh;
        background-color: #FFFFFF;
    }

    h5 {
        color: #E28250;
        font-size: 2.5em;
    }

    .content_article_title {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 2px;
        background-color: #E28250;
        margin-top: 7vh;
        margin-bottom: 3vh;
    }

    .content_article_title h5 {
        background-color: #FFFFFF;
        height: 5vh;
        padding-left: 1vh;
        padding-right: 1vh;
    }

    .content_articles_list {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .content_article_more_content {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 5vh;
        padding-left: 1vh;
        padding-right: 1vh;
        background-color: #FFFFFF;
    }

    .content_articles_more {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 2px;
        background-color: #E28250;
        margin-top: 7vh ;
        cursor: pointer;
    }
    .content_articles_more svg {
        stroke: #E28250;
        width: 25px;
        height: 25px;
    }

    @media screen and (min-width: 1210px) {
        .content_categories_list {
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
            align-items: center;
            margin-top: 5vh;
            /* background-color: blueviolet; */
        }
        h5 {
            color: #E28250;
            font-size: 3em;
        }
    }
</style>