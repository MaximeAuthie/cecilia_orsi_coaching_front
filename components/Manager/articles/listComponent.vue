<template>
    <div class="articles_list_card">
        <div class="articles_list_card_header">
            Liste des catégories
        </div>
        <div class="articles_list_card_content">
            <ManagerCategoriesCategoryComponent v-for="category in categories" @update="updateCategory" :id="category.id" :name="category.name_category" :color="category.color_category"></ManagerCategoriesCategoryComponent>
        </div>
    </div>
</template>

<script>
import { useArticlesStore } from '@/store/article'

export default {
    emits:['update'],
    data() {
        return {
            articles: []
        }
    },
    methods: {
        getArticles() {
            const store = useArticlesStore();

            //? Vérifier si les catégories sont toujours présentes dans le store
            if (store.articles.length > 0) {
                this.articles         = store.categories;
            } else {

            //? Si les catégories ne sont pas déjà présents dans le store, effectuer l'appel API
            store.getAllArticles()
                .then(() => {
                    this.articles       = store.articles;
                })

                //? En cas d'erreur inattendue, capter l'erreur rencontrée
                .catch((error) => {
                    console.error('Erreur lors de la récupération des catégories :', error);
                });
            }
        },
        updateArticle(id, name, color) {
            this.$emit('update', id, name, color);
            console.log("niv 2 activé" + this.name + this.color);
        }
    },
    
    mounted() {
        this.getCategories();

        const store = useArticlesStore();
            store.$subscribe(state => {
                this.articles = store.articles;
                console.log("update store articles")
            })
    }
}
</script>

<style scoped>
    .articles_list_card {
        display: flex;
        flex-direction: column;
        width: 90%;
        border: 1px solid #E04F5F;
        border-radius: 1vh;
        background-color: #FFFFFF;
        margin: 5vh 0;
        overflow: hidden
    }

    .articles_list_card_header {
        position: relative;
        width: 100%;
        border: 1px solid #E04F5F;
        font-size: 1.8em;
        color: #FFFFFF;
        background-color: #E04F5F;
        text-align: center;
        padding: 1vh 0;
    }
    .articles_list_card_content {

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 3em;
    }

</style>