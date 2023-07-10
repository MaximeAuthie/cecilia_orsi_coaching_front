<template>
    <div class="front_page_article_div" :style="{backgroundImage: articleImgUrm}">
        <CategoryTagComponent :name="category.name" :color="category.color"></CategoryTagComponent>
        <div class="front_page_article_title">
            <h5>{{ articleTitle }}</h5>
        </div>
        <NuxtLink class="front_page_article_link" to="/"><input class="button button_secondary" type="button" value="Lire l'article"></NuxtLink>
    </div>
</template>

<script lang="ts">
    export default {
        props: {
            articleId: {
                type:       Number,
                required:   true
            },
            articleTitle: {
                type:       String,
                required:   true
            },
            articleImgUrm: {
                type:       String,
                required:   true
            },
            categoryId: {
                type:       Number,
                required:   true
            }
        },
        data() {
            return {
                category: {
                    name: "Bien-être",
                    color: "#B05447"
                }
            }
        },
    }
</script>

<style scoped>

    .front_page_article_link {
        text-decoration: none;
        z-index: 3;
    }
    .front_page_article_div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: calc(90vw * 0.65);
        border-radius: 20px;
        margin-top: 5vh;
        padding: 4vh 0;
        background-size: cover; 
        background-position: center;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        position: relative;
        z-index: 1;
    }
    .front_page_article_div::after {
        position: absolute;
        content: '';
        display: block;
        background-color: #000000;
        opacity: 0.2;
        height: 100%;
        width: 100%;border-radius: 20px;
        z-index: 0;
    }
    .front_page_article_title {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        z-index: 3;
        margin-left: 5%;
        margin-right: 5%;
    }
 
    @media screen and (min-width: 1210px) {
        .front_page_article_div {
            width: 100%;
            height: 50vh;
        } 
    }

</style>