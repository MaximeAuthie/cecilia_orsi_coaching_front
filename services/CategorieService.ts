import { log } from "console";

class CategoryService {
    
    async getAllCategories() {

        let response = await fetch('https://127.0.0.1:8000/api/category/all', {
            method:'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        });
        
        let data = await response.json();
        
        return data;
        
    
    }
        
}

export default new CategoryService;