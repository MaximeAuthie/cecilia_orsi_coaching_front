<template>
    <div class="admin_content">
        <h1>Modération des commentaires</h1>
        <select name="cars" id="cars">
            <option value="to-validate">A valider</option>
            <option value="already-validate">Déjà validés</option>
        </select>
    
        <ManagerCommentComposant></ManagerCommentComposant>
    </div>
</template>

<script>

    definePageMeta({
        layout: "admin"
    });
    
</script>

<style scoped>

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 2.2em;
        color: #4B453F;
        text-shadow: none;
    }
</style>