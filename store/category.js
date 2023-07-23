import { defineStore } from 'pinia';

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    categories: [],
  }),
  actions: {
    async getAllCategories() {
        try {
            let response = await fetch('https://127.0.0.1:8000/api/category/all', {
                method:'GET',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                }
            });
            
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des catégories');
            }
    
            const categoryList = await response.json();
            this.categories = categoryList;
            
        } catch (error) {
            console.error(error.message);
        }
        
    }
  },
});