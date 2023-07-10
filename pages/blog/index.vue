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
            <FrontPageArticle :articleId="frontPageArticle.id" :articleTitle="frontPageArticle.title" :articleImgUrm="frontPageArticle.imgUrl" :categoryId="frontPageArticle.categoryId"></FrontPageArticle>
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
                        imgUrl: "url(/cecilia-orsi.png)"
                    },
                    {
                        title:  "Tarifs",
                        path:   "/appointment",
                        imgUrl: "url(https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg)"
                    },
                    {
                        title:  "Blog",
                        path:   "/blog",
                        imgUrl: "url(https://images.pexels.com/photos/4099355/pexels-photo-4099355.jpeg)"
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
                    imgUrl:         "url(https://images.pexels.com/photos/2538225/pexels-photo-2538225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                    categoryId :    5
                }
            }
        },
        methods: {
            showCategories() {
                this.isCategoriesVisible = !this.isCategoriesVisible;
            }
        },
    };
</script>

<style scoped>
    .content_categories {
        margin-top: 5vh;
        background-color: aqua;
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

    @media screen and (min-width: 1210px) {
        .content_categories_list {
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
            align-items: center;
            margin-top: 5vh;
            background-color: blueviolet;
        }
        h5 {
        color: #E28250;
        font-size: 3em;
    }
    }
</style>