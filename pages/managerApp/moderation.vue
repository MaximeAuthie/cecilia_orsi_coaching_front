<template>
    <div class="admin_content">
        <h1>Modération des commentaires</h1>
        <div class="admin_content_filters">
            <select v-model="commentStatus" name="cars" id="cars">
                <option value="to-validate">A valider</option>
                <option value="already-validate">Déjà validés</option>
            </select>
            <select v-model="article" name="cars" id="cars">
                <option v-for="article in articles" :value="article.id">{{article.title_article}}</option>
            </select>
            <button @click="getComments">Filtrer</button>

        </div>    
        <ManagerCommentComposant v-for="comment in comments" :id="comment.id" :title="comment.article.title_article" :author="comment.author_name_comment" :dateTime="comment.date_comment" :content="comment.content_comment"></ManagerCommentComposant>
    </div>
</template>

<script>
    import { useCommentsStore } from '@/store/comment';
    import { useArticlesStore } from '@/store/article';

    definePageMeta({
        layout: "admin"
    });

    export default {
        data() {
            return {
                commentStatus:  '',
                article:        0,
                articles:       [],
                comments:       []
            }
        },
        methods: {
            getComments() {
                const store = useCommentsStore();
                if (this.commentStatus === 'already-validate') {
                    console.log("already-validate");
                    this.comments = store.comments.filter( comment => comment.article.id == this.article);
                    console.log(this.comments);
                } else {
                    console.log("to-validate");
                    this.comments = store.commentsToValidate.filter( comment => comment.article.id == this.article);
                    console.log(this.comments);
                }
            },
            getValidatedComments() {
                const store = useCommentsStore();

               //? Vérifier si les articles validé sont toujours présents dans le store, récupérer les données de l'article
               if (store.comments.length > 0) {
                    this.comments                   = store.comments;
                    this.isArticleLoaded            = true;
                } else {

                //? Si les articles ne sont pas déjà présents dans le store, effectuer l'appel API et récupérer les données de l'article
                store.getValidatedComments()
                    .then(() => {
                    this.comments            = store.comments;
                    this.isArticleLoaded            = true;
                    })

                    //? En cas d'erreur inattendue, capter l'erreur rencontrée
                    .catch((error) => {
                    console.error('Erreur lors de la récupération des commentaires :', error);
                    this.loading            = false;
                    });
                }
            },
            getCommentsToValidate() {
                const store = useCommentsStore();

               //? Vérifier si les articles validé sont toujours présents dans le store, récupérer les données de l'article
               if (store.comments.length > 0) {
                    this.comments               = store.commentsToValidate;
                    this.isArticleLoaded        = true;
                } else {

                //? Si les articles ne sont pas déjà présents dans le store, effectuer l'appel API et récupérer les données de l'article
                store.getCommentsToValidate()
                    .then(() => {
                    this.comments            = store.commentsToValidate;
                    this.isArticleLoaded        = true;
                    })

                    //? En cas d'erreur inattendue, capter l'erreur rencontrée
                    .catch((error) => {
                    console.error('Erreur lors de la récupération des commentaires :', error);
                    this.loading                = false;
                    });
                }
            },
            getArticles() {
                const store = useArticlesStore();

                //? Vérifier si les articles sont toujours présents dans le store
                if (store.articles.length > 0) {
                    this.articles           = store.articles;
                    this.frontPageArticle   = store.frontPageArticle;
                    this.loading            = false;
                } else {

                //? Si les articles ne sont pas déjà présents dans le store, effectuer l'appel API
                store.getAllArticles()
                    .then(() => {
                        this.articles           = store.articles;
                        this.frontPageArticle   = store.frontPageArticle;
                        this.loading            = false;
                    })

                    //? En cas d'erreur inattendue, capter l'erreur rencontrée
                    .catch((error) => {
                        console.error('Erreur lors de la récupération des articles :', error);
                        this.loading            = false;
                    });
                }
            }
        },
            mounted() {
                this.getArticles();
                this.getValidatedComments();
                this.getCommentsToValidate();
                const store = useCommentsStore();
                store.$subscribe(state => {
                    
                    if (this.commentStatus === 'already-validate') {
                        console.log("changement store already-validate");
                        this.comments = store.comments;
                    } else if (this.commentStatus === "to-validate" ) {
                        console.log("changement store to-validate");
                        this.comments = store.commentsToValidate;
                    }
                })

                const articleStore = useArticlesStore();
                articleStore.$subscribe(state => {
                    console.log("changement store article");
                    this.articles = articleStore.articles;
                })
            }
    }
    
</script>

<style scoped>

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 2.2em;
        color: #4B453F;
        text-shadow: none;
    }
    .admin_content_filters {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 50%;
    }
</style>