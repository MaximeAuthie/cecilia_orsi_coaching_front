import { defineStore } from 'pinia';

export const useArticlesStore = defineStore('articles', {
  state: () => ({
    articles: [],
    frontPageArticle: []
  }),
  actions: {
    async getAllArticles() {
        try {
            let response = await fetch('https://127.0.0.1:8000/api/article/all', {
                method:'GET',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                }
            });
            
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des articles');
            }
    
            const articlesList = await response.json();
            this.articles = articlesList;
            this.frontPageArticle = this.articles[this.articles.length-1];
        } catch (error) {
            console.error(error.message);
        }
        
    }
  },
});