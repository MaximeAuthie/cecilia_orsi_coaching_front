import { defineStore } from 'pinia';

export const usePagesStore = defineStore('pages', {
  state: () => ({
    pages: [],
  }),
  actions: {
    async getAllPages() {
        try {
            let response = await fetch('https://127.0.0.1:8000/api/page/all', {
                method:'GET',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                }
            });
            
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des pages');
            }
    
            const pagesList = await response.json();
            this.pages = pagesList;
            
        } catch (error) {
            console.error(error.message);
        }
        
    }
  },
});