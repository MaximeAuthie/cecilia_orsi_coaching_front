<template>
    <BannerComponent :imgUrl="page.bannerUrl" :messages="bannerMessages" :isMainButtonActive="page.isMainButtonActive" :isSecondButtonActive="page.isSecondaryButtonActive" ></BannerComponent>
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
                <CategoryTagComponent v-for="category in categories" :name="category.name" :color="category.color"></CategoryTagComponent>
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
                :categories="frontPageArticle.categories"></ArticlesFrontPageComponent>
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
            <TileComponent v-for="tile in tilesList" :pageTitle="tile.title" :pagePath="tile.path" :pageImgUrm="tile.imgUrl" ></TileComponent>
        </section>
    </div>
</template>

<script lang="ts">
import { truncateSync } from 'fs';


    export default {
        data() {
            return {
                isMoreThenNineArticles: false,
                page: {
                    title:                      'Blog',
                    bannerUrl:                  'url(https://images.pexels.com/photos/4099355/pexels-photo-4099355.jpeg)',
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
                        title:  "Qui suis-je?",
                        path:   "/owner",
                        imgUrl: "url(./assets/images/cecilia-orsi.png)"
                    },
                    {
                        title:  "Tarifs",
                        path:   "/appointment",
                        imgUrl: "url(https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg)"
                    },
                    {
                        title:  "Prendre rendez-vous",
                        path:   "/appointment",
                        imgUrl: "url(https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg)"
                    },
                    {
                        title:  "Contact",
                        path:   "/contact",
                        imgUrl: "url(https://images.pexels.com/photos/261599/pexels-photo-261599.jpeg)"
                    },
                    {
                        title:  "Mon instagram",
                        path:   "https://www.instagram.com/cecilia_orsi_coaching/",
                        imgUrl: "url(https://images.pexels.com/photos/13288521/pexels-photo-13288521.jpeg)"
                    }
                ],
                bannerMessages: [
                    'Blog',
                ],
                categories : [
                    {
                        name:   "Santé",
                        color:  "#8EBBA7"
                    },
                    {
                        name:   "Sport",
                        color:  "#E27437"
                    },
                    {
                        name:   "Bien-être",
                        color:  "#B05447"
                    },
                    {
                        name:   "Famille",
                        color:  "#7A9491"
                    },
                    {
                        name:   "Travail",
                        color:  "#C6BDB4"
                    },
                    {
                        name:   "Vie sociale",
                        color:  "#DFA689"
                    },
                    {
                        name:   "Nature",
                        color:  "#398C7E"
                    },
                    {
                        name:   "Alimentation",
                        color:  "#6C89B4"
                    },
                ],
                isCategoriesVisible: true,
                frontPageArticle: {
                    id:             10,
                    title:          "Vacances d'été - s'assumer enfin",
                    bannerUrl:         "url(https://images.pexels.com/photos/2538225/pexels-photo-2538225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                    user: {
                            firstName: 'Cécilia',
                            lastName: 'Orsi'
                        },
                    categories: [
                        {
                            name:   "Bien-être",
                            color:  "#B05447"
                        },
                        {
                            name:   "Santé",
                            color:  "#8EBBA7"
                        },
                    ]
                },
                articles: [
                    {
                        id: 10,
                        title: 'Notre rapport à la nature',
                        bannerUrl: "url(https://images.pexels.com/photos/2832032/pexels-photo-2832032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, magni. Vel commodi ex placeat ratione voluptatem, dignissimos ullam qui quam nobis dolore temporibus iusto eligendi alias, sequi sint eius possimus cumque neque. Quasi numquam rerum aperiam expedita delectus. Rem facere officia tempora dolore enim aut quisquam illo facilis vel minus quasi, voluptates perspiciatis laudantium, sit ut labore sapiente. Alias quia ad modi neque. Numquam porro maxime cum doloremque ex illo eius explicabo a molestiae corporis, vero at dolorem recusandae soluta est minus dolore temporibus, sequi necessitatibus eveniet ea veniam quam, mollitia nulla. Impedit accusamus dolores consectetur soluta, ut suscipit maxime?",
                        date: '25/03/2023',
                        user: {
                            firstName: 'Cécilia',
                            lastName: 'Orsi'
                        },
                        categories: [
                            {
                                name:   "Bien-être",
                                color:  "#B05447"
                            },
                            {
                                name:   "Santé",
                                color:  "#8EBBA7"
                            },
                        ]
                    },
                    {
                        id: 9,
                        title: 'Télétravailler - bonne ou mauvaise idée?',
                        bannerUrl: "url(https://images.pexels.com/photos/15372903/pexels-photo-15372903/free-photo-of-bureau-technologie-ranger-clavier-mecanique.jpeg)",
                        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, magni. Vel commodi ex placeat ratione voluptatem, dignissimos ullam qui quam nobis dolore temporibus iusto eligendi alias, sequi sint eius possimus cumque neque. Quasi numquam rerum aperiam expedita delectus. Rem facere officia tempora dolore enim aut quisquam illo facilis vel minus quasi, voluptates perspiciatis laudantium, sit ut labore sapiente. Alias quia ad modi neque. Numquam porro maxime cum doloremque ex illo eius explicabo a molestiae corporis, vero at dolorem recusandae soluta est minus dolore temporibus, sequi necessitatibus eveniet ea veniam quam, mollitia nulla. Impedit accusamus dolores consectetur soluta, ut suscipit maxime?",
                        date: '25/03/2023',
                        user: {
                            firstName: 'Cécilia',
                            lastName: 'Orsi'
                        },
                        categories: [
                            {
                                name:   "Travail",
                                color:  "#C6BDB4"
                            },
                            {
                                name:   "Santé",
                                color:  "#8EBBA7"
                            },
                        ]
                    },
                    {
                        id: 8,
                        title: 'Maladies chroniques et errances médicales',
                        bannerUrl: "url(https://images.pexels.com/photos/4226769/pexels-photo-4226769.jpeg)",
                        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, magni. Vel commodi ex placeat ratione voluptatem, dignissimos ullam qui quam nobis dolore temporibus iusto eligendi alias, sequi sint eius possimus cumque neque. Quasi numquam rerum aperiam expedita delectus. Rem facere officia tempora dolore enim aut quisquam illo facilis vel minus quasi, voluptates perspiciatis laudantium, sit ut labore sapiente. Alias quia ad modi neque. Numquam porro maxime cum doloremque ex illo eius explicabo a molestiae corporis, vero at dolorem recusandae soluta est minus dolore temporibus, sequi necessitatibus eveniet ea veniam quam, mollitia nulla. Impedit accusamus dolores consectetur soluta, ut suscipit maxime?",
                        date: '25/03/2023',
                        user: {
                            firstName: 'Cécilia',
                            lastName: 'Orsi'
                        },
                        categories: [
                            {
                                name:   "Bien-être",
                                color:  "#B05447"
                            },
                                    {
                                name:   "Santé",
                                color:  "#8EBBA7"
                            },
                        ]
                    },
                    {
                        id: 7,
                        title: 'Stress et performance en entreprise',
                        bannerUrl: "url(https://images.pexels.com/photos/2128817/pexels-photo-2128817.jpeg)",
                        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, magni. Vel commodi ex placeat ratione voluptatem, dignissimos ullam qui quam nobis dolore temporibus iusto eligendi alias, sequi sint eius possimus cumque neque. Quasi numquam rerum aperiam expedita delectus. Rem facere officia tempora dolore enim aut quisquam illo facilis vel minus quasi, voluptates perspiciatis laudantium, sit ut labore sapiente. Alias quia ad modi neque. Numquam porro maxime cum doloremque ex illo eius explicabo a molestiae corporis, vero at dolorem recusandae soluta est minus dolore temporibus, sequi necessitatibus eveniet ea veniam quam, mollitia nulla. Impedit accusamus dolores consectetur soluta, ut suscipit maxime?",
                        date: '25/03/2023',
                        user: {
                            firstName: 'Cécilia',
                            lastName: 'Orsi'
                        },
                        categories: [
                            {
                                name:   "Travail",
                                color:  "#C6BDB4"
                            },
                            {
                                name:   "Santé",
                                color:  "#8EBBA7"
                            },
                        ]
                    },
                ]
            }
        },
        methods: {
            showCategories() {
                this.isCategoriesVisible = !this.isCategoriesVisible;
            },
            showMoreArticles() {

            }
        },
        mounted() {
            if (this.articles.length > 9) {
                this.isMoreThenNineArticles = true;
            }
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